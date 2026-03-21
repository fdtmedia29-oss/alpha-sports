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

function AnalysisCard({ a, index }: { a: Analysis; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const image = a.images && a.images.length > 0 ? a.images[0] : null;

  return (
    <div
      id={a.id}
      className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-white transition-all hover:shadow-lg"
    >
      <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
        {/* Image side */}
        {image && (
          <div className={`relative aspect-[4/3] overflow-hidden bg-bg-alt lg:aspect-auto lg:min-h-[300px] ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
            <Image
              src={image}
              alt={a.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Text side */}
        <div className="flex flex-col p-8 md:p-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-light">
              {(() => { const Icon = iconMap[a.icon]; return Icon ? <Icon className="h-5 w-5 text-orange" /> : null; })()}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-text">{a.title}</h3>
              {a.price && (
                <span className="text-lg font-semibold text-orange">{a.price}</span>
              )}
            </div>
          </div>
          <p className="mt-1 text-sm font-medium text-orange">{a.subtitle}</p>
          <p className="mt-4 leading-relaxed text-text-secondary">
            {a.description}
          </p>

          {/* Expandable content */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              expanded ? "max-h-[2000px] opacity-100 mt-3" : "max-h-0 opacity-0"
            }`}
          >
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
            {a.includes.length > 0 && (
              <div className="mt-6">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-secondary">
                  Das erfährst du
                </h4>
                <ul className="space-y-2">
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
              </div>
            )}
            {a.note && (
              <p className="mt-4 rounded-lg bg-bg-alt p-3 text-xs text-muted">
                {a.note}
              </p>
            )}
          </div>

          {/* Toggle + CTA */}
          <div className="mt-auto pt-6 flex flex-wrap items-center gap-4">
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
    </div>
  );
}

export default function AnalysenCards({ analyses }: { analyses: Analysis[] }) {
  return (
    <div className="space-y-12">
      {analyses.map((a, index) => (
        <AnalysisCard key={a.id} a={a} index={index} />
      ))}
    </div>
  );
}
