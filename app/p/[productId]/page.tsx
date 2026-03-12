import { Metadata } from 'next';
import Image from 'next/image';
import DeepLinkHandler from './deep-link-handler';

// --- Type Definitions ---
interface ProductParams {
    productId: string;
}

// Ensure your actual backend API sends a matching interface
interface ProductData {
    id: string;
    name: string;
    description: string;
    price: number;
    image?: string;
    dealerName?: string;
    category?: string;
}

// --- Data Fetching Option ---
// Note: Depending on Next.js setup, we fetch on request
async function getProduct(productId: string): Promise<ProductData | null> {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://godealers.in";

    try {
        const res = await fetch(`${apiUrl}/api/products/${productId}`, {
            // In a production app you might cache or tag this request
            next: { revalidate: 60 } // Example: Cache for 60 seconds
        });

        if (!res.ok) {
            return null;
        }

        return res.json();
    } catch (err) {
        console.error("Failed to fetch product:", err);
        return null;
    }
}

// --- Metadata Generation (Server-Side) ---
export async function generateMetadata({ params }: { params: Promise<ProductParams> }): Promise<Metadata> {
    const resolvedParams = await params;
    const product = await getProduct(resolvedParams.productId);

    if (!product) {
        return {
            title: "Product Not Found | Go Dealers",
            description: "The product you are looking for does not exist or has been removed.",
        };
    }

    const title = `${product.name} | Go Dealers`;
    const description = product.description || `Buy ${product.name} wholesale on Go Dealers.`;
    // Fallback image if product image is missing
    const imageUrl = product.image || "https://godealers.in/og-image-default.png";
    const url = `https://godealers.in/p/${product.id}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url,
            siteName: "Go Dealers",
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: product.name,
                },
            ],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [imageUrl],
        },
    };
}

// --- Page Component ---
export default async function ProductSharePage({ params }: { params: Promise<ProductParams> }) {
    const resolvedParams = await params;
    const product = await getProduct(resolvedParams.productId);

    if (!product) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 p-4">
                <h1 className="text-2xl font-bold text-zinc-900 mb-2">Product Not Found</h1>
                <p className="text-zinc-500">The product you're looking for was not found or has been removed.</p>
            </div>
        );
    }

    const imageUrl = product.image || "/placeholder-image.png";

    // --- JSON-LD Structured Data ---
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        image: [imageUrl],
        description: product.description,
        brand: {
            "@type": "Brand",
            name: product.dealerName || "Go Dealers Seller",
        },
        offers: {
            "@type": "Offer",
            url: `https://godealers.in/p/${product.id}`,
            priceCurrency: "INR", // Adjust appropriately
            price: product.price,
            availability: "https://schema.org/InStock",
        },
    };

    return (
        <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
            {/* Inject JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden">
                {/* Minimal UI Card Presentation */}
                <div className="relative aspect-square w-full bg-zinc-100 flex items-center justify-center">
                    {product.image ? (
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            priority
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    ) : (
                        <div className="text-zinc-400">No Image Available</div>
                    )}
                </div>

                <div className="p-6 text-center">
                    <h1 className="text-xl font-bold text-zinc-900 line-clamp-2">{product.name}</h1>

                    <div className="mt-2 text-2xl font-black text-blue-600">
                        ₹{product.price?.toLocaleString("en-IN") || "Price on Request"}
                    </div>

                    {/* Deep link auto-trigger / manual button */}
                    <DeepLinkHandler productId={product.id} />
                </div>
            </div>
        </div>
    );
}
