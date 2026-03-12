"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    { q: "Who can join GoDealer?", a: "GoDealer is exclusively for verified mobile phone dealers — retail shops, wholesale traders, and distributors. Every account goes through manual admin verification before being approved." },
    { q: "How long does verification take?", a: "Our admin team reviews applications within 24–48 business hours. You'll receive an email and in-app notification once approved." },
    { q: "Is GoDealer free to use?", a: "Yes, free to download and join. Browsing and basic listings are free. Premium bulk-listing and analytics features are coming in a Pro plan." },
    { q: "What documents do I need?", a: "You'll need a GST registration number or trade license, a valid government ID, and basic shop details. Fully digital process." },
    { q: "Can I list used or refurbished phones?", a: "Yes — all conditions supported: Brand New, Open Box, Grade A/B, and For Parts. Each listing has a structured condition field." },
    { q: "How is GoDealer different from OLX?", a: "GoDealer is B2B only. Every user is a verified dealer, listed for bulk wholesale trade — not retail." },
    { q: "What if I have a dispute?", a: "We have dedicated support for dispute resolution. Every deal is logged and traceable in-app." },
    { q: "Is my business data safe?", a: "Yes. Data is encrypted. Contact info visible only to verified dealers, never sold to third parties." },
];

export default function FAQSection() {
    const [open, setOpen] = useState<number | null>(0);
    return (
        <section id="faqs" className="py-24 px-6 bg-surface-0" style={{ borderTop: `1px solid rgb(var(--border-muted))` }}>
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-start gap-16">
                    {/* Left */}
                    <div className="md:w-72 flex-shrink-0">
                        <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-widest"
                            style={{ color: `rgb(var(--violet))`, background: `rgba(var(--violet),0.07)`, border: `1px solid rgba(var(--violet),0.15)` }}
                        >
                            FAQ
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-text-primary leading-tight mb-4">
                            Your Questions<br />Answered
                        </h2>
                        <p className="text-sm leading-relaxed text-text-secondary">
                            Still stuck?{" "}
                            <a href="#" className="font-semibold" style={{ color: `rgb(var(--brand))` }}>Contact us →</a>
                        </p>
                        {/* Stats */}
                        <div className="mt-8 flex flex-col gap-3">
                            {[
                                { n: "2,400+", l: "Verified Dealers", colorVar: "--brand" },
                                { n: "24 hrs", l: "Avg. Approval Time", colorVar: "--accent-color" },
                                { n: "100%", l: "Admin Reviewed", colorVar: "--success" },
                            ].map(s => (
                                <div key={s.l} className="rounded-2xl px-4 py-3" style={{ background: `rgba(var(${s.colorVar}),0.06)`, border: `1px solid rgba(var(${s.colorVar}),0.12)` }}>
                                    <p className="text-2xl font-black text-text-primary">{s.n}</p>
                                    <p className="text-xs text-text-secondary">{s.l}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Accordion */}
                    <div className="flex-1 flex flex-col gap-2">
                        {faqs.map((faq, i) => (
                            <div key={i} className="rounded-2xl border overflow-hidden transition-all duration-200"
                                style={open === i
                                    ? { borderColor: `rgba(var(--brand),0.3)`, background: `rgba(var(--brand),0.03)` }
                                    : { borderColor: `rgb(var(--border-muted))`, background: `rgb(var(--surface-0))` }
                                }
                            >
                                <button className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                                    onClick={() => setOpen(open === i ? null : i)}
                                >
                                    <span className="text-sm font-semibold" style={{ color: open === i ? `rgb(var(--brand))` : `rgb(var(--text-primary))` }}>
                                        {faq.q}
                                    </span>
                                    <div className="w-6 h-6 rounded-lg flex-shrink-0 flex items-center justify-center transition-colors"
                                        style={{ background: open === i ? `rgb(var(--brand))` : `rgb(var(--surface-2))` }}
                                    >
                                        {open === i
                                            ? <Minus className="w-3 h-3 text-white" />
                                            : <Plus className="w-3 h-3" style={{ color: `rgb(var(--text-secondary))` }} />}
                                    </div>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                                    <p className="px-5 pb-5 text-sm leading-relaxed text-text-secondary">{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
