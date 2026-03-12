"use client";

import React from "react";
import { Upload, Search, ShieldCheck } from "lucide-react";

const features = [
    {
        icon: Upload,
        number: "01",
        title: "Bulk Listings",
        description: "Upload and manage multiple devices quickly with complete specifications and pricing.",
        iconStyle: { background: `rgb(var(--accent-color))` },
        tintStyle: { background: `rgba(var(--accent-color), 0.06)` },
    },
    {
        icon: Search,
        number: "02",
        title: "Advanced Search Filters",
        description: "Find phones by model, condition, storage, and location in seconds.",
        iconStyle: { background: `rgb(var(--brand))` },
        tintStyle: { background: `rgba(var(--brand), 0.05)` },
    },
    {
        icon: ShieldCheck,
        number: "03",
        title: "Verified Dealer Network",
        description: "Admin-approved dealers only — safe and trusted wholesale trading.",
        iconStyle: { background: `rgb(var(--success))` },
        tintStyle: { background: `rgba(var(--success), 0.06)` },
    },
];

export default function FeaturesSection() {
    return (
        <section id="features" className="py-24 px-6 bg-surface-0" style={{ borderTop: `1px solid rgb(var(--border-muted))` }}>
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                    <div>
                        <span
                            className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-widest"
                            style={{
                                color: `rgb(var(--brand))`,
                                background: `rgba(var(--brand), 0.07)`,
                                border: `1px solid rgba(var(--brand), 0.15)`,
                            }}
                        >
                            Platform Features
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight text-text-primary">
                            Discover What<br />We Offer
                        </h2>
                    </div>
                    <p className="text-sm max-w-xs leading-relaxed text-text-secondary">
                        Everything you need to manage inventory and connect with serious buyers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {features.map((f) => {
                        const Icon = f.icon;
                        return (
                            <div
                                key={f.number}
                                className="rounded-3xl p-8 group transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                                style={{ border: `1px solid rgb(var(--border-muted))`, background: `rgb(var(--surface-0))` }}
                            >
                                {/* Corner tint */}
                                <div className="absolute top-0 right-0 w-28 h-28 rounded-bl-[3rem]" style={f.tintStyle} />

                                <p className="text-xs font-mono mb-5 relative z-10" style={{ color: `rgb(var(--border-base))` }}>{f.number}</p>
                                <div
                                    className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5 relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-md"
                                    style={f.iconStyle}
                                >
                                    <Icon className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-lg font-bold mb-2 tracking-tight relative z-10 text-text-primary">{f.title}</h3>
                                <p className="text-sm leading-relaxed relative z-10 text-text-secondary">{f.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
