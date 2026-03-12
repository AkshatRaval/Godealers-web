"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface DeepLinkHandlerProps {
  productId: string;
}

export default function DeepLinkHandler({ productId }: DeepLinkHandlerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const appScheme = `godealers://product/${productId}`;
    const playStoreUrl = "https://play.google.com/store/apps/details?id=com.godealers";

    // Try to open the app
    window.location.href = appScheme;

    // Fallback to Play Store after a short delay
    const timeout = setTimeout(() => {
      window.location.href = playStoreUrl;
    }, 1500);

    return () => clearTimeout(timeout);
  }, [productId]);

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <p className="text-sm text-zinc-500 font-medium">Opening product in Go Dealers...</p>
      
      <div className="flex gap-3">
        <Button 
          variant="default"
          onClick={() => { window.location.href = `godealers://product/${productId}`; }}
        >
          Open in Go Dealers App
        </Button>
      </div>

      <a 
        href="https://play.google.com/store/apps/details?id=com.godealers"
        className="text-sm text-blue-600 hover:underline mt-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get the full experience. Download App
      </a>
    </div>
  );
}
