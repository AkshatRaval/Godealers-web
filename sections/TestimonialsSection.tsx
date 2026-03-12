"use client";

import React from "react";
import { Heart, MessageSquare, Repeat2 } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
    { name: "Rafiq Ansari", handle: "@rafiq_mobiles", avatar: "RA", colorVar: "--success", content: "Finally a platform for dealers! Sold 40 iPhones in 2 days — WhatsApp would've taken a week.", likes: 284, replies: 37, reposts: 62, time: "2h", verified: true, tag: "Shop Owner · Mumbai" },
    { name: "Suresh Mehta", handle: "@sureshmobileworld", avatar: "SM", colorVar: "--brand", content: "Bulk listing saved me 3 hours. Uploaded 120 devices with full specs in under 20 minutes.", likes: 511, replies: 89, reposts: 143, time: "5h", verified: true, tag: "Bulk Dealer · Delhi" },
    { name: "Pavan Reddy", handle: "@pavan_repair_hub", avatar: "PR", colorVar: "--accent-color", content: "Verified dealer network gives me peace of mind. No more scams from unknown WhatsApp numbers.", likes: 398, replies: 55, reposts: 97, time: "1d", verified: false, tag: "Repair Shop · Hyderabad" },
    { name: "Nikhil Traders", handle: "@nikhil_wholesale", avatar: "NT", colorVar: "--violet", content: "Found iPhone 13 Pro, 256GB, Grade A in 30 seconds. Closed ₹2.4L deal same day.", likes: 677, replies: 102, reposts: 218, time: "3d", verified: true, tag: "Wholesaler · Kolkata" },
    { name: "Kajal Shah", handle: "@kajal_phonezone", avatar: "KS", colorVar: "--rose", content: "Verification gave me instant credibility. Revenue doubled in month 1! 🚀", likes: 329, replies: 48, reposts: 84, time: "4d", verified: true, tag: "New Dealer · Ahmedabad" },
    { name: "Dhruv Telecom", handle: "@dhruv_telecom_", avatar: "DT", colorVar: "--teal", content: "Organized listings with photos, specs, and price all in one card. This is what our industry needed.", likes: 445, replies: 67, reposts: 119, time: "1w", verified: false, tag: "Multi-Brand · Pune" },
];

function TweetCard({ r }: { r: typeof reviews[0] }) {
    return (
        <div
            className="w-72 flex-shrink-0 rounded-2xl p-5 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: `rgb(var(--surface-dark-2))`, border: `1px solid rgb(var(--border-dark))` }}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 text-white"
                        style={{ background: `rgb(var(${r.colorVar}))` }}
                    >
                        {r.avatar}
                    </div>
                    <div>
                        <div className="flex items-center gap-1">
                            <span className="text-sm font-bold text-text-on-dark">{r.name}</span>
                            {r.verified && (
                                <svg className="w-3.5 h-3.5" style={{ color: `rgb(var(--brand-light))` }} viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5l-4-4 1.41-1.41L10 13.67l6.59-6.59L18 8.5l-8 8z" />
                                </svg>
                            )}
                        </div>
                        <p className="text-xs text-text-secondary">{r.handle}</p>
                    </div>
                </div>
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" style={{ color: `rgb(var(--border-dark))` }} fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.627 5.903-5.627zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            </div>

            <p className="text-sm leading-relaxed text-text-muted">{r.content}</p>

            <span
                className="inline-flex items-center text-[11px] font-medium border px-2.5 py-1 rounded-full w-fit"
                style={{ color: `rgb(var(${r.colorVar}))`, background: `rgba(var(${r.colorVar}),0.08)`, borderColor: `rgba(var(${r.colorVar}),0.2)` }}
            >
                {r.tag}
            </span>

            <div className="flex items-center gap-4 pt-2" style={{ borderTop: `1px solid rgb(var(--border-dark))` }}>
                <span className="flex items-center gap-1.5 text-xs text-text-secondary"><Heart className="w-3 h-3" /> {r.likes}</span>
                <span className="flex items-center gap-1.5 text-xs text-text-secondary"><MessageSquare className="w-3 h-3" /> {r.replies}</span>
                <span className="flex items-center gap-1.5 text-xs text-text-secondary"><Repeat2 className="w-3 h-3" /> {r.reposts}</span>
                <span className="ml-auto text-[11px] text-text-secondary">{r.time}</span>
            </div>
        </div>
    );
}

export default function TestimonialsSection() {
    return (
        <section id="reviews" className="py-24 bg-surface-dark overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, rgb(var(--brand)), rgb(var(--violet)), rgb(var(--rose)), rgb(var(--accent-color)))` }} />

            <div className="max-w-6xl mx-auto px-6 mb-14">
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-widest"
                    style={{ color: `rgb(var(--brand-light))`, background: `rgba(var(--brand),0.1)`, border: `1px solid rgba(var(--brand-light),0.2)` }}
                >
                    Customer Stories
                </span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-text-on-dark leading-tight">
                    Dealers Love<br />GoDealer
                </h2>
            </div>

            <Marquee pauseOnHover className="[--duration:38s] [--gap:1rem]">
                {reviews.slice(0, 3).map((r, i) => <TweetCard key={i} r={r} />)}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:44s] [--gap:1rem] mt-3">
                {reviews.slice(3).map((r, i) => <TweetCard key={i} r={r} />)}
            </Marquee>
        </section>
    );
}
