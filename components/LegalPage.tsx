"use client";

import React from "react";

interface Section {
  title: string;
  content: string;
}

interface LegalPageProps {
  badge: string;
  title: string;
  subtitle: string;
  effectiveDate: string;
  sections: Section[];
  highlight?: boolean;
}

export default function LegalPage({
  badge,
  title,
  subtitle,
  effectiveDate,
  sections,
  highlight = false,
}: LegalPageProps) {
  return (
    <article>
      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
            style={{
              background: highlight ? `rgba(var(--accent-color),0.12)` : `rgba(var(--brand),0.1)`,
              color: highlight ? `rgb(var(--accent-color))` : `rgb(var(--brand))`,
            }}
          >
            {badge}
          </span>
          <span className="text-xs" style={{ color: "rgb(var(--text-muted))" }}>
            Effective {effectiveDate}
          </span>
        </div>

        <h1
          className="text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-3"
          style={{ color: "rgb(var(--text-primary))" }}
        >
          {title}
        </h1>
        <p className="text-base leading-relaxed max-w-2xl" style={{ color: "rgb(var(--text-secondary))" }}>
          {subtitle}
        </p>

        <div
          className="mt-6 p-4 rounded-xl text-sm"
          style={{
            background: highlight ? `rgba(var(--accent-color),0.07)` : `rgba(var(--brand),0.06)`,
            border: `1px solid`,
            borderColor: highlight ? `rgba(var(--accent-color),0.2)` : `rgba(var(--brand),0.15)`,
            color: "rgb(var(--text-secondary))",
          }}
        >
          This document was last updated on <strong>{effectiveDate}</strong>. For questions, contact{" "}
          <a
            href="mailto:legal@godealer.app"
            className="font-medium underline underline-offset-2"
            style={{ color: highlight ? `rgb(var(--accent-color))` : `rgb(var(--brand))` }}
          >
            legal@godealer.app
          </a>
          .
        </div>
      </header>

      {/* Table of Contents */}
      <nav
        className="mb-12 p-5 rounded-2xl"
        style={{
          background: "rgb(var(--surface-0))",
          border: "1px solid rgb(var(--border-base))",
        }}
      >
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "rgb(var(--text-muted))" }}>
          Contents
        </p>
        <ol className="flex flex-col gap-1.5">
          {sections.map((s) => (
            <li key={s.title}>
              <a
                href={`#${s.title.replace(/\s+/g, "-").toLowerCase()}`}
                className="text-sm transition-colors"
                style={{ color: "rgb(var(--text-secondary))" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = `rgb(var(--brand))`)
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = `rgb(var(--text-secondary))`)
                }
              >
                {s.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Sections */}
      <div className="flex flex-col gap-10">
        {sections.map((s) => (
          <section
            key={s.title}
            id={s.title.replace(/\s+/g, "-").toLowerCase()}
            className="scroll-mt-20 p-6 rounded-2xl"
            style={{
              background: "rgb(var(--surface-0))",
              border: "1px solid rgb(var(--border-base))",
            }}
          >
            <h2
              className="text-base font-bold mb-4 pb-3"
              style={{
                color: "rgb(var(--text-primary))",
                borderBottom: "1px solid rgb(var(--border-muted))",
              }}
            >
              {s.title}
            </h2>
            <div
              className="text-sm leading-relaxed prose prose-sm max-w-none"
              style={{ color: "rgb(var(--text-secondary))" }}
            >
              <ReactMarkdownFallback content={s.content} />
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}

/**
 * Simple markdown-like renderer without external deps.
 * Supports **bold**, line breaks, tables, and basic formatting.
 */
function ReactMarkdownFallback({ content }: { content: string }) {
  // Split into lines and render
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Table detection
    if (line.includes("|") && lines[i + 1]?.includes("|---")) {
      const headers = line
        .split("|")
        .filter(Boolean)
        .map((h) => h.trim());
      i += 2; // skip separator
      const rows: string[][] = [];
      while (i < lines.length && lines[i].includes("|")) {
        rows.push(
          lines[i]
            .split("|")
            .filter(Boolean)
            .map((c) => c.trim())
        );
        i++;
      }
      elements.push(
        <div key={i} className="overflow-x-auto my-3">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr>
                {headers.map((h) => (
                  <th
                    key={h}
                    className="px-3 py-2 text-left font-semibold"
                    style={{
                      background: "rgb(var(--surface-2))",
                      border: "1px solid rgb(var(--border-base))",
                      color: "rgb(var(--text-primary))",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="px-3 py-2"
                      style={{ border: "1px solid rgb(var(--border-base))" }}
                    >
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Render paragraph
    elements.push(
      <p key={i} className="mb-2">
        {renderInline(line)}
      </p>
    );
    i++;
  }

  return <>{elements}</>;
}

function renderInline(text: string): React.ReactNode {
  // Split on **bold** markers
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} style={{ color: "rgb(var(--text-primary))", fontWeight: 600 }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}
