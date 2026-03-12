"use client";
import React from "react";
import { Mail, PhoneCall, MapPin, ArrowUpRight, Twitter, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
    Product: [
        { label: "Features", href: "#features" }, { label: "How It Works", href: "#how-it-works" },
        { label: "Compare", href: "#compare" }, { label: "Download App", href: "#hero" },
    ],
    Company: [
        { label: "About Us", href: "#" }, { label: "Blog", href: "#" },
        { label: "Careers", href: "#" }, { label: "Press Kit", href: "#" },
    ],
    Support: [
        { label: "Help Center", href: "#" }, { label: "Contact Us", href: "#" },
        { label: "FAQs", href: "#faqs" }, { label: "Disputes", href: "#" },
    ],
    Legal: [
        { label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" }, { label: "Dealer Agreement", href: "#" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-surface-dark">
            {/* CTA card */}
            <div style={{ borderBottom: `1px solid rgb(var(--border-dark))` }}>
                <div className="max-w-6xl mx-auto px-6 py-14">
                    <div
                        className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden"
                        style={{ background: `rgb(var(--brand))` }}
                    >
                        {/* Decorative circles */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-30 pointer-events-none" style={{ background: `rgb(var(--brand-light))` }} />
                        <div className="absolute -bottom-16 left-1/3 w-40 h-40 rounded-full opacity-20 pointer-events-none" style={{ background: `rgb(var(--brand-dark))` }} />

                        <div className="relative z-10">
                            <p className="text-sm font-medium mb-2" style={{ color: `rgba(var(--brand-fg),0.7)` }}>Ready to grow?</p>
                            <h3 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-white">
                                Start trading smarter<br />with GoDealer.
                            </h3>
                            <p className="text-sm mt-3" style={{ color: `rgba(var(--brand-fg),0.6)` }}>Join 2,400+ verified dealers across India.</p>
                        </div>

                        <div className="relative z-10 flex flex-col sm:flex-row gap-3 flex-shrink-0">
                            <a href="#" className="inline-flex items-center gap-2.5 px-5 py-3 text-sm font-bold rounded-2xl shadow-lg transition-colors"
                                style={{ background: `rgb(var(--surface-0))`, color: `rgb(var(--brand))` }}
                            >
                                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                                    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.5 1.5 0 01-.61-1.2V3.014c0-.5.247-.959.609-1.2zM14.208 12.414l2.57 2.57-9.903 5.7 7.333-8.27zM17.5 9.97L20.392 11.6a1.5 1.5 0 010 2.6L17.5 15.83l-2.86-2.858 2.86-3zM6.875 3.316l9.903 5.702-2.57 2.568-7.333-8.27z" />
                                </svg>
                                Google Play
                            </a>
                            <a href="#" className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-2xl transition-colors"
                                style={{ background: `rgba(var(--brand-dark),0.5)`, color: `rgb(var(--brand-fg))`, border: `1px solid rgba(var(--brand-light),0.3)` }}
                            >
                                Apply as Dealer <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Links */}
            <div className="max-w-6xl mx-auto px-6 py-14">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <a href="#" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `rgb(var(--brand))` }}>
                                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="white" strokeWidth="2">
                                    <rect x="5" y="2" width="14" height="20" rx="2" />
                                    <path d="M12 18h.01" />
                                </svg>
                            </div>
                            <span className="text-base font-bold text-text-on-dark">GoDealer</span>
                        </a>
                        <p className="text-xs leading-relaxed mb-4 text-text-secondary">The #1 wholesale mobile marketplace for verified dealers in India.</p>
                        <div className="flex flex-col gap-2">
                            {[
                                { Icon: Mail, text: "support@godealer.app" },
                                { Icon: PhoneCall, text: "+91 98765 43210" },
                                { Icon: MapPin, text: "Mumbai, India" },
                            ].map(({ Icon, text }) => (
                                <div key={text} className="flex items-center gap-2 text-xs text-text-secondary">
                                    <Icon className="w-3 h-3 flex-shrink-0" style={{ color: `rgb(var(--brand-light))` }} />
                                    {text}
                                </div>
                            ))}
                        </div>
                    </div>

                    {Object.entries(footerLinks).map(([cat, links]) => (
                        <div key={cat}>
                            <p className="text-xs font-semibold mb-4 uppercase tracking-wider text-text-muted">{cat}</p>
                            <ul className="flex flex-col gap-2.5">
                                {links.map(l => (
                                    <li key={l.label}>
                                        <a href={l.href} className="text-xs text-text-secondary hover:text-text-on-dark transition-colors">{l.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: `1px solid rgb(var(--border-dark))` }}>
                    <p className="text-xs text-text-secondary">© 2025 GoDealer. All rights reserved.</p>
                    <div className="flex gap-2">
                        {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                            <a key={i} href="#" className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
                                style={{ background: `rgb(var(--surface-dark-2))` }}>
                                <Icon className="w-3.5 h-3.5 text-text-secondary" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
