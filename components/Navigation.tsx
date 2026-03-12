"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Compare", href: "#compare" },
  { label: "Stories", href: "#reviews" },
  { label: "FAQ", href: "#faqs" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Smooth-scroll + active tracking */
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActive(href);
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        transition: "background 0.3s, box-shadow 0.3s, border-color 0.3s",
        background: scrolled ? `rgba(var(--surface-0), 0.96)` : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? `1px solid rgb(var(--border-muted))` : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 6px rgba(0,0,0,0.05)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-[62px] flex items-center justify-between">

        {/* Logo */}
        <a href="#" onClick={(e) => handleNav(e, "#hero")} className="flex items-center gap-2 group">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
            style={{ background: `rgb(var(--brand))` }}
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="white" strokeWidth="2">
              <rect x="5" y="2" width="14" height="20" rx="2" />
              <path d="M12 18h.01" />
            </svg>
          </div>
          <span
            className="text-[15px] font-bold tracking-tight transition-colors duration-300"
            style={{ color: scrolled ? "#09090b" : "#ffffff" }}
          >
            GoDealer
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => handleNav(e, l.href)}
                className="relative px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 group"
                style={{
                  color: isActive
                    ? `rgb(var(--brand))`
                    : scrolled
                      ? "#71717a"
                      : "rgba(255,255,255,0.85)",
                }}
              >
                {l.label}

                {/* Animated underline */}
                <span
                  className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 rounded-full transition-all duration-300"
                  style={{
                    background: `rgb(var(--brand))`,
                    transform: isActive ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left",
                    opacity: isActive ? 1 : 0,
                  }}
                />

                {/* Hover bg */}
                <span
                  className="absolute inset-0 rounded-lg transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                  style={{ background: scrolled ? `rgba(var(--brand), 0.06)` : `rgba(var(--surface-0), 0.08)` }}
                />
              </a>
            );
          })}
        </nav>

        {/* CTA button */}
        <div className="hidden md:block">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
            style={
              scrolled
                ? { background: `rgb(var(--brand))`, color: "#ffffff", boxShadow: `0 4px 12px rgba(var(--brand), 0.35)` }
                : { background: "rgba(255,255,255,0.12)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.2)" }
            }
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a1.5 1.5 0 01-.61-1.2V3.014c0-.5.247-.959.609-1.2zM14.208 12.414l2.57 2.57-9.903 5.7 7.333-8.27zM17.5 9.97L20.392 11.6a1.5 1.5 0 010 2.6L17.5 15.83l-2.86-2.858 2.86-3zM6.875 3.316l9.903 5.702-2.57 2.568-7.333-8.27z" />
            </svg>
            Download
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors duration-150"
          style={{ color: scrolled ? "#71717a" : "#ffffff" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div style={{ transition: "transform 0.2s", transform: open ? "rotate(90deg)" : "rotate(0)" }}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        style={{
          maxHeight: open ? "24rem" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s cubic-bezier(0.16,1,0.3,1)",
          background: `rgb(var(--surface-0))`,
          borderBottom: open ? `1px solid rgb(var(--border-muted))` : "none",
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => handleNav(e, l.href)}
              className="py-2.5 px-2 text-sm font-medium rounded-lg transition-colors duration-150"
              style={{
                color: active === l.href ? `rgb(var(--brand))` : `rgb(var(--text-secondary))`,
                background: active === l.href ? `rgba(var(--brand), 0.06)` : "transparent",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#"
            className="mt-3 py-2.5 px-4 text-sm font-semibold rounded-xl text-center"
            style={{ background: `rgb(var(--brand))`, color: `rgb(var(--brand-fg))` }}
          >
            Download App
          </a>
        </div>
      </div>
    </header>
  );
}
