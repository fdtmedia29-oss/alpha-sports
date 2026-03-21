"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Activity, Flame, Zap, ArrowRight, ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Activity, Flame, Zap };

interface Analysis {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  price: string;
  images?: string[];
  description: string;
  detailedDescription: string;
  measures: string[];
  includes: string[];
  note: string;
}

function AnalysisCard({ a }: { a: Analysis }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      id={a.id}
      className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-white transition-all hover:shadow-lg"
    >
      {/* Image header */}
      {a.images && a.images.length > 0 && (
        <div className={`${a.images.length > 1 ? "grid grid-cols-2 gap-px bg-border/50" : ""}`}>
          {a.images.map((img, i) => (
            <div key={i} className="relative aspect-[16/9] overflow-hidden bg-bg-alt">
              <Image
                src={img}
                alt={`${a.title} ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}

      <div className="p-8 md:p-12">
        {/* Header - always visible */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-light">
            {(() => { const Icon = iconMap[a.icon]; return Icon ? <Icon className="h-5 w-5 text-orange" /> : null; })()}
          </div>
          <div>
            <h3 className="text-xl font-bold text-text">
              {a.title}
            </h3>
            {a.price && (
              <span className="text-lg font-semibold text-orange">
                {a.price}
              </span>
            )}
          </div>
        </div>
        <p className="mt-2 text-sm font-medium text-text-secondary italic">
          {a.subtitle}
        </p>
        <p className="mt-6 leading-relaxed text-text-secondary">
          {a.description}
        </p>

        {/* Expandable content */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            expanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="grid gap-8 lg:grid-cols-3 mt-4">
            <div className="lg:col-span-2">
              <p className="leading-relaxed text-text-secondary">
                {a.detailedDescription}
              </p>
              {a.measures.length > 0 && (
                <div className="mt-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-secondary">
                    Was gemessen wird
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {a.measures.map((m) => (
                      <span
                        key={m}
                        className="rounded-full bg-bg-alt px-3 py-1.5 text-xs font-medium text-text-secondary"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-secondary">
                Das erfährst du
              </h4>
              <ul className="space-y-3">
                {a.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-text-secondary"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                    {item}
                  </li>
                ))}
              </ul>
              {a.note && (
                <p className="mt-4 rounded-lg bg-bg-alt p-3 text-xs text-muted">
                  {a.note}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Toggle + CTA */}
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            href="#buchen"
            className="group inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange/90 hover:gap-3"
          >
            Jetzt Buchen
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-secondary transition-colors hover:text-text"
          >
            {expanded ? "Weniger" : "Details"}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AnalysenCards({ analyses }: { analyses: Analysis[] }) {
  return (
    <div className="space-y-12">
      {analyses.map((a) => (
        <AnalysisCard key={a.id} a={a} />
      ))}
    </div>
  );
}
