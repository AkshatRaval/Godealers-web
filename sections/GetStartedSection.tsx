"use client";

import React from "react";
import { ClipboardList, BadgeCheck, ShoppingBag } from "lucide-react";

const steps = [
    { number: "01", icon: ClipboardList, title: "Apply as a Dealer", description: "Register your shop details and submit verification documents for admin approval.", dotVar: "--accent-color", iconVar: "--accent-color" },
    { number: "02", icon: BadgeCheck, title: "Get Verified", description: "Our team reviews your application to ensure a trusted dealer-only ecosystem.", dotVar: "--brand", iconVar: "--brand" },
    { number: "03", icon: ShoppingBag, title: "Start Trading", description: "List your inventory or browse available stock from other verified dealers.", dotVar: "--success", iconVar: "--success" },
];

export default function GetStartedSection() {
    return (
        <section id="how-it-works" className="py-24 px-6 bg-surface-dark relative overflow-hidden">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, rgb(var(--brand)), rgb(var(--violet)), rgb(var(--accent-color)))` }} />

            {/* Subtle grid */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
                    backgroundSize: "64px 64px",
                }}
            />

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                    <div>
                        <span
                            className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-widest"
                            style={{ color: `rgb(var(--brand-light))`, background: `rgba(var(--brand),0.1)`, border: `1px solid rgba(var(--brand-light),0.2)` }}
                        >
                            How It Works
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-text-on-dark leading-tight">
                            3 Steps to<br />Start Trading
                        </h2>
                    </div>
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl transition-colors duration-150 self-start md:self-end"
                        style={{ background: `rgb(var(--brand))`, color: `rgb(var(--brand-fg))` }}
                    >
                        Apply as Dealer →
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {steps.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <div
                                key={i}
                                className="rounded-3xl p-8 group transition-all duration-200 hover:-translate-y-1 relative overflow-hidden"
                                style={{ background: `rgb(var(--surface-dark-2))`, border: `1px solid rgb(var(--border-dark))` }}
                            >
                                {/* Top accent */}
                                <div className="absolute top-0 left-8 right-8 h-px rounded-full" style={{ background: `rgb(var(${s.iconVar}))`, opacity: 0.5 }} />

                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-xs font-mono" style={{ color: `rgb(var(--border-dark))` }}>{s.number}</span>
                                    <span className="w-2 h-2 rounded-full" style={{ background: `rgb(var(${s.dotVar}))` }} />
                                </div>
                                <div
                                    className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300"
                                    style={{ background: `rgb(var(${s.iconVar}))` }}
                                >
                                    <Icon className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-lg font-bold mb-2 tracking-tight text-text-on-dark">{s.title}</h3>
                                <p className="text-sm leading-relaxed text-text-secondary">{s.description}</p>
                            </div>
                        );
                    })}
                </div>

                <p className="text-center text-xs mt-10" style={{ color: `rgb(var(--border-dark))` }}>
                    Free to join · Admin-verified · Approval in 24–48 hrs
                </p>
            </div>
        </section>
    );
}
