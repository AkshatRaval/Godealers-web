import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal — GoDealer",
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: "rgb(var(--surface-1))" }}>
      {/* Top bar */}
      <header
        className="sticky top-0 z-40 border-b"
        style={{
          background: "rgba(var(--surface-0),0.95)",
          backdropFilter: "blur(12px)",
          borderColor: "rgb(var(--border-base))",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
              style={{ background: "rgb(var(--brand))" }}
            >
              <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="white" strokeWidth="2">
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <path d="M12 18h.01" />
              </svg>
            </div>
            <span className="text-sm font-bold tracking-tight" style={{ color: "rgb(var(--text-primary))" }}>
              GoDealer
            </span>
          </Link>

          <nav className="flex items-center gap-1 overflow-x-auto">
            {[
              { label: "Privacy", href: "/legal/privacy" },
              { label: "Terms", href: "/legal/terms" },
              { label: "Cookies", href: "/legal/cookies" },
              { label: "Dealer Agreement", href: "/legal/dealer-agreement" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors duration-150 hover:text-text-primary"
                style={{ color: "rgb(var(--text-secondary))" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Page content */}
      <main className="max-w-4xl mx-auto px-6 py-12 pb-20">{children}</main>

      {/* Footer bar */}
      <footer className="border-t py-6" style={{ borderColor: "rgb(var(--border-base))" }}>
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgb(var(--text-muted))" }}>
            © {new Date().getFullYear()} GoDealer. All rights reserved.
          </p>
          <Link
            href="/"
            className="text-xs font-medium transition-colors"
            style={{ color: "rgb(var(--brand))" }}
          >
            ← Back to GoDealer
          </Link>
        </div>
      </footer>
    </div>
  );
}
