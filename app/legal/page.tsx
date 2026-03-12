import type { Metadata } from "next";
import Link from "next/link";
import { Shield, FileText, Cookie, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal — GoDealer",
  description: "GoDealer's legal documents: Privacy Policy, Terms of Service, Cookie Policy, and Dealer Agreement.",
};

const pages = [
  {
    href: "/legal/privacy",
    icon: Shield,
    title: "Privacy Policy",
    description: "How we collect, use, and protect your personal data.",
    color: "brand",
  },
  {
    href: "/legal/terms",
    icon: FileText,
    title: "Terms of Service",
    description: "The rules and conditions governing use of GoDealer.",
    color: "violet",
  },
  {
    href: "/legal/cookies",
    icon: Cookie,
    title: "Cookie Policy",
    description: "Cookies and tracking technologies we use and why.",
    color: "teal",
  },
  {
    href: "/legal/dealer-agreement",
    icon: Handshake,
    title: "Dealer Agreement",
    description: "Rights and obligations for verified dealers on the platform.",
    color: "accent-color",
  },
];

export default function LegalIndexPage() {
  return (
    <div>
      <header className="mb-12">
        <h1
          className="text-3xl sm:text-4xl font-black tracking-tight mb-3"
          style={{ color: "rgb(var(--text-primary))" }}
        >
          Legal Documents
        </h1>
        <p className="text-base" style={{ color: "rgb(var(--text-secondary))" }}>
          GoDealer is committed to transparency. Review our policies below.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 gap-4">
        {pages.map(({ href, icon: Icon, title, description, color }) => (
          <Link
            key={href}
            href={href}
            className="group flex flex-col gap-4 p-6 rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "rgb(var(--surface-0))",
              border: "1px solid rgb(var(--border-base))",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 4px 16px rgba(0,0,0,0.08)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 1px 3px rgba(0,0,0,0.04)")
            }
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: `rgba(var(--${color}),0.1)` }}
            >
              <Icon className="w-5 h-5" style={{ color: `rgb(var(--${color}))` }} />
            </div>
            <div>
              <h2
                className="text-sm font-bold mb-1 transition-colors duration-150"
                style={{ color: "rgb(var(--text-primary))" }}
              >
                {title}
              </h2>
              <p className="text-xs leading-relaxed" style={{ color: "rgb(var(--text-secondary))" }}>
                {description}
              </p>
            </div>
            <span
              className="mt-auto text-xs font-semibold flex items-center gap-1 transition-colors duration-150"
              style={{ color: `rgb(var(--${color}))` }}
            >
              Read →
            </span>
          </Link>
        ))}
      </div>

      <div
        className="mt-10 p-5 rounded-2xl text-sm"
        style={{
          background: "rgb(var(--surface-0))",
          border: "1px solid rgb(var(--border-base))",
          color: "rgb(var(--text-secondary))",
        }}
      >
        Questions about our legal documents?{" "}
        <a
          href="mailto:legal@godealer.app"
          className="font-medium underline underline-offset-2"
          style={{ color: "rgb(var(--brand))" }}
        >
          legal@godealer.app
        </a>
      </div>
    </div>
  );
}
