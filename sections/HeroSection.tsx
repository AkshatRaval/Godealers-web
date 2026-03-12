"use client";

import React from "react";
import { ArrowRight, Check, Search, Star } from "lucide-react";

const features = [
    "Admin-verified dealers only",
    "Bulk listings in minutes",
    "Search by model, city, storage",
];

/* ─── Inline app UI illustration ─── */
function AppMockup() {
    const listings = [
        { model: "iPhone 15 Pro", storage: "256GB", grade: "Grade A", price: "₹71,500", qty: "12 pcs", dot: "--success" },
        { model: "Samsung S24", storage: "128GB", grade: "Open Box", price: "₹42,000", qty: "8 pcs", dot: "--brand" },
        { model: "OnePlus 12", storage: "256GB", grade: "Brand New", price: "₹38,500", qty: "20 pcs", dot: "--accent-color" },
    ];

    return (
        <div
            className="w-full max-w-[360px] rounded-3xl overflow-hidden shadow-2xl"
            style={{ background: `rgb(var(--surface-dark-2))`, border: `1px solid rgb(var(--border-dark))` }}
        >
            {/* App status bar */}
            <div
                className="px-5 pt-5 pb-4"
                style={{ background: `rgb(var(--brand))` }}
            >
                {/* Top bar */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center">
                            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="white" strokeWidth="2">
                                <rect x="5" y="2" width="14" height="20" rx="2" />
                                <path d="M12 18h.01" />
                            </svg>
                        </div>
                        <span className="text-white text-[13px] font-bold">GoDealer</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-white/70 font-medium">Delhi, India</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    </div>
                </div>

                {/* Search bar */}
                <div className="flex items-center gap-2 bg-white/15 rounded-xl px-3 py-2.5">
                    <Search className="w-3.5 h-3.5 text-white/60 flex-shrink-0" />
                    <span className="text-[12px] text-white/60">Search model, brand, condition…</span>
                </div>

                {/* Filter pills */}
                <div className="flex gap-2 mt-3 overflow-hidden">
                    {["All", "iPhone", "Samsung", "OnePlus"].map((f, i) => (
                        <span key={f} className="text-[10px] font-semibold px-2.5 py-1 rounded-full flex-shrink-0 transition-colors"
                            style={{
                                background: i === 0 ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.08)",
                                color: "white",
                            }}
                        >
                            {f}
                        </span>
                    ))}
                </div>
            </div>

            {/* Listings */}
            <div className="px-4 py-4 flex flex-col gap-3">
                <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">Live Listings</span>
                    <span className="text-[10px] font-medium" style={{ color: `rgb(var(--brand-light))` }}>248 available →</span>
                </div>

                {listings.map((item, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-between rounded-2xl px-3.5 py-3"
                        style={{ background: `rgb(var(--surface-dark-3))`, border: `1px solid rgb(var(--border-dark))` }}
                    >
                        <div className="flex items-center gap-3">
                            {/* Color dot */}
                            <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                                style={{ background: `rgba(var(${item.dot}), 0.15)`, border: `1px solid rgba(var(${item.dot}), 0.3)` }}
                            >
                                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"
                                    style={{ color: `rgb(var(${item.dot}))` }}>
                                    <rect x="5" y="2" width="14" height="20" rx="2" />
                                    <path d="M12 18h.01" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-[12px] font-bold text-text-on-dark leading-tight">{item.model}</p>
                                <p className="text-[10px] text-text-secondary mt-0.5">{item.storage} · {item.grade}</p>
                            </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                            <p className="text-[12px] font-black text-text-on-dark">{item.price}</p>
                            <p className="text-[10px] text-text-secondary">{item.qty}</p>
                        </div>
                    </div>
                ))}

                {/* Verified badge */}
                <div
                    className="flex items-center gap-2 rounded-xl px-3.5 py-2.5 mt-1"
                    style={{ background: `rgba(var(--success), 0.08)`, border: `1px solid rgba(var(--success), 0.2)` }}
                >
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: `rgba(var(--success), 0.15)` }}>
                        <Check className="w-3 h-3" style={{ color: `rgb(var(--success))` }} />
                    </div>
                    <p className="text-[11px] font-semibold" style={{ color: `rgb(var(--success))` }}>
                        All dealers admin-verified ·{" "}
                        <span className="font-normal opacity-80">Safe to trade</span>
                    </p>
                </div>
            </div>

            {/* Bottom nav bar */}
            <div
                className="flex items-center justify-around px-4 py-3"
                style={{ borderTop: `1px solid rgb(var(--border-dark))` }}
            >
                {[
                    { icon: "🏠", label: "Home", active: true },
                    { icon: "🔍", label: "Search", active: false },
                    { icon: "📦", label: "Listings", active: false },
                    { icon: "👤", label: "Profile", active: false },
                ].map((n) => (
                    <div key={n.label} className="flex flex-col items-center gap-0.5">
                        <span className="text-base">{n.icon}</span>
                        <span className="text-[9px] font-medium"
                            style={{ color: n.active ? `rgb(var(--brand-light))` : `rgb(var(--text-secondary))` }}
                        >
                            {n.label}
                        </span>
                        {n.active && (
                            <div className="w-1 h-1 rounded-full" style={{ background: `rgb(var(--brand-light))` }} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ─── Hero ─── */
export default function HeroSection() {
    return (
        <section id="hero" className="min-h-screen bg-surface-dark flex flex-col">
            <div className="flex-1 max-w-6xl mx-auto w-full px-6 pt-24 pb-10 flex flex-col md:flex-row items-center gap-14 md:gap-16">

                {/* Text */}
                <div className="flex-1 flex flex-col gap-6 items-center md:items-start text-center md:text-left">
                    <span
                        className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full border"
                        style={{
                            color: `rgb(var(--brand-light))`,
                            background: `rgba(var(--brand), 0.08)`,
                            borderColor: `rgba(var(--brand-light), 0.2)`,
                        }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: `rgb(var(--brand-light))` }} />
                        India&apos;s Verified Mobile Wholesale Platform
                    </span>

                    <h1
                        className="font-black tracking-tighter leading-[0.92]"
                        style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.25rem)" }}
                    >
                        <span className="text-text-on-dark block">The Wholesale</span>
                        <span
                            className="block"
                            style={{
                                background: `linear-gradient(90deg, rgb(var(--brand-light)), rgb(var(--violet)), rgb(var(--accent-color)))`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Mobile Market
                        </span>
                        <span className="text-text-on-dark block">for Dealers.</span>
                    </h1>

                    <p className="text-sm md:text-base leading-relaxed max-w-sm" style={{ color: `rgb(var(--text-muted))` }}>
                        GoDealer connects admin-verified mobile phone dealers on one
                        platform. Structured listings, instant search — no WhatsApp mess.
                    </p>

                    <ul className="flex flex-col gap-2 items-center md:items-start">
                        {features.map((f) => (
                            <li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: `rgb(var(--text-muted))` }}>
                                <span
                                    className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                                    style={{ background: `rgba(var(--brand), 0.15)`, border: `1px solid rgba(var(--brand-light), 0.3)` }}
                                >
                                    <Check className="w-2.5 h-2.5" style={{ color: `rgb(var(--brand-light))` }} />
                                </span>
                                {f}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                        <a
                            href="#"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-150 hover:opacity-90"
                            style={{ background: `rgb(var(--brand))`, color: `rgb(var(--brand-fg))`, boxShadow: `0 4px 16px rgba(var(--brand),0.4)` }}
                        >
                            <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="currentColor">
                                <path d="M3.609 1.814L13.792 12 3.61 22.186a1.5 1.5 0 01-.61-1.2V3.014c0-.5.247-.959.609-1.2zM14.208 12.414l2.57 2.57-9.903 5.7 7.333-8.27zM17.5 9.97L20.392 11.6a1.5 1.5 0 010 2.6L17.5 15.83l-2.86-2.858 2.86-3zM6.875 3.316l9.903 5.702-2.57 2.568-7.333-8.27z" />
                            </svg>
                            Download on Google Play
                        </a>
                        <a
                            href="#features"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-colors duration-150 border"
                            style={{ color: `rgb(var(--text-muted))`, borderColor: `rgb(var(--border-dark))` }}
                            onClick={(e) => { e.preventDefault(); document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" }); }}
                        >
                            How it works <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                    </div>

                    {/* Star rating */}
                    <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                            {Array(5).fill(0).map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                        </div>
                        <p className="text-xs text-text-secondary">
                            <span className="text-text-on-dark font-semibold">4.9/5</span> · 2,400+ verified dealers
                        </p>
                    </div>
                </div>

                {/* App illustration */}
                <div className="flex-shrink-0 flex justify-center w-full md:w-auto md:flex-1 md:max-w-[400px]">
                    <AppMockup />
                </div>
            </div>

            {/* Stats strip */}
            <div style={{ borderTop: `1px solid rgba(var(--border-dark), 0.6)` }}>
                <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-2 sm:grid-cols-4">
                    {[
                        { v: "2,400+", l: "Verified Dealers" },
                        { v: "₹50 Cr+", l: "Deals Closed" },
                        { v: "4.9 / 5", l: "App Rating" },
                        { v: "<48 hrs", l: "Dealer Approval" },
                    ].map((s, i) => (
                        <div
                            key={s.l}
                            className="text-center px-4 py-1"
                            style={{ borderRight: i < 3 ? `1px solid rgba(var(--border-dark), 0.5)` : "none" }}
                        >
                            <p className="text-base font-black text-text-on-dark">{s.v}</p>
                            <p className="text-xs mt-0.5 text-text-secondary">{s.l}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
