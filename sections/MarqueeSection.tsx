"use client";
import React from "react";
import { Marquee } from "@/components/ui/marquee";

const items = [
    { label: "Bulk Listings", colorVar: "--accent-color" },
    { label: "Instant Search", colorVar: "--brand" },
    { label: "Verified Dealers", colorVar: "--success" },
    { label: "Wholesale Pricing", colorVar: "--violet" },
    { label: "Secure Trades", colorVar: "--rose" },
    { label: "All Brands", colorVar: "--sky" },
    { label: "Admin Verified", colorVar: "--accent-color" },
    { label: "Advanced Filters", colorVar: "--brand" },
    { label: "Fast Deals", colorVar: "--success" },
    { label: "Trusted Network", colorVar: "--violet" },
    { label: "Pan India", colorVar: "--rose" },
    { label: "Organized Inventory", colorVar: "--teal" },
];

export default function MarqueeSection() {
    return (
        <div className="bg-surface-dark overflow-hidden py-5" style={{ borderTop: `1px solid rgb(var(--border-dark))`, borderBottom: `1px solid rgb(var(--border-dark))` }}>
            <Marquee className="[--duration:28s] [--gap:0rem]" pauseOnHover>
                {items.map((item, i) => (
                    <span key={i} className="inline-flex items-center gap-3 px-5 text-sm font-semibold text-text-on-dark">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: `rgb(var(${item.colorVar}))` }} />
                        {item.label}
                    </span>
                ))}
            </Marquee>
        </div>
    );
}
