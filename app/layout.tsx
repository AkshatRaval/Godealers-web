import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GoDealer — Mobile Wholesale Marketplace for Verified Dealers",
  description:
    "The #1 B2B mobile phone wholesale platform for verified dealers in India. List inventory, find stock, and close wholesale deals — fast.",
  keywords: ["mobile marketplace", "phone wholesale", "dealer network", "bulk listings", "android phones"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-[family-name:var(--font-inter)] antialiased bg-white text-zinc-900`}>
        {children}
      </body>
    </html>
  );
}
