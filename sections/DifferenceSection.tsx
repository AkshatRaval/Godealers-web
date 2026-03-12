"use client";

import React, { useState } from "react";
import { Check, X } from "lucide-react";

const tabs = [
    {
        id: "search", emoji: "⚡", label: "Search",
        title: "Fast & Structured Search", tagline: "Find Stock in Seconds — Not in 500 Messages.",
        colorVar: "--accent-color",
        godealer: ["Filter by model, storage, condition, price, and city instantly", "Real-time results from verified dealers only", "Structured database — never miss a listing again"],
        whatsapp: ["Scroll through hundreds of messages to find one phone", "Zero filtering — pure text chaos", "Miss deals buried in message overload"],
    },
    {
        id: "safety", emoji: "🛡", label: "Safety",
        title: "Secure & Verified Deals", tagline: "Trade Only With Approved Dealers.",
        colorVar: "--brand",
        godealer: ["Every dealer is admin-verified before joining", "Transparent profiles with history and ratings", "Structured deal records for accountability"],
        whatsapp: ["Unknown numbers and fake profiles everywhere", "No verification — anyone can flood the group", "Zero accountability after payment is sent"],
    },
    {
        id: "listings", emoji: "📦", label: "Listings",
        title: "Organized Listings", tagline: "Professional Inventory, Not Message Spam.",
        colorVar: "--success",
        godealer: ["Clear device details, pricing, and availability", "Photos, specs, and condition — all in one card", "Side-by-side comparison across multiple listings"],
        whatsapp: ["Random forwards with missing or wrong info", "No structure — scattered text and images", "Impossible to compare two listings at once"],
    },
];

export default function DifferenceSection() {
    const [active, setActive] = useState(0);
    const tab = tabs[active];

    return (
        <section id="compare" className="py-24 px-6" style={{ background: `rgb(var(--surface-1))`, borderTop: `1px solid rgb(var(--border-muted))` }}>
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <span
                        className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-widest"
                        style={{ color: `rgb(var(--violet))`, background: `rgba(var(--violet),0.07)`, border: `1px solid rgba(var(--violet),0.15)` }}
                    >
                        GoDealer vs WhatsApp
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-text-primary leading-tight">
                        The GoDealer<br />Difference
                    </h2>
                </div>

                <div className="flex gap-2 mb-8 flex-wrap">
                    {tabs.map((t, i) => (
                        <button
                            key={t.id}
                            onClick={() => setActive(i)}
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 border"
                            style={
                                active === i
                                    ? { background: `rgb(var(${t.colorVar}))`, color: "#fff", borderColor: "transparent" }
                                    : { background: `rgb(var(--surface-0))`, color: `rgb(var(--text-secondary))`, borderColor: `rgb(var(--border-base))` }
                            }
                        >
                            <span>{t.emoji}</span>{t.label}
                        </button>
                    ))}
                </div>

                <div className="rounded-3xl border overflow-hidden shadow-lg" style={{ borderColor: `rgb(var(--border-base))` }}>
                    <div className="px-8 py-6" style={{ background: `rgb(var(${tab.colorVar}))` }}>
                        <p className="text-white font-bold text-xl">{tab.title}</p>
                        <p className="text-white/70 text-sm mt-1">{tab.tagline}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x" style={{ borderColor: `rgb(var(--border-muted))` }}>
                        <div className="p-8" style={{ background: `rgb(var(--surface-0))` }}>
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: `rgb(var(${tab.colorVar}))` }}>
                                    <span className="text-white text-[10px] font-black">G</span>
                                </div>
                                <span className="font-bold text-text-primary text-sm">GoDealer</span>
                                <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide" style={{ background: `rgba(var(--success),0.1)`, color: `rgb(var(--success))`, border: `1px solid rgba(var(--success),0.2)` }}>
                                    ✓ Recommended
                                </span>
                            </div>
                            <ul className="space-y-3.5">
                                {tab.godealer.map((p, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `rgba(var(--success),0.1)`, border: `1px solid rgba(var(--success),0.2)` }}>
                                            <Check className="w-3 h-3" style={{ color: `rgb(var(--success))` }} />
                                        </div>
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-8" style={{ background: `rgb(var(--surface-1))` }}>
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: `rgb(var(--surface-2))` }}>
                                    <span className="text-[10px] font-black" style={{ color: `rgb(var(--text-muted))` }}>W</span>
                                </div>
                                <span className="font-bold text-sm" style={{ color: `rgb(var(--text-muted))` }}>WhatsApp Groups</span>
                            </div>
                            <ul className="space-y-3.5">
                                {tab.whatsapp.map((p, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: `rgb(var(--text-muted))` }}>
                                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `rgba(var(--danger),0.08)`, border: `1px solid rgba(var(--danger),0.15)` }}>
                                            <X className="w-3 h-3" style={{ color: `rgb(var(--danger))` }} />
                                        </div>
                                        <span className="line-through" style={{ textDecorationColor: `rgba(var(--danger),0.4)` }}>{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
