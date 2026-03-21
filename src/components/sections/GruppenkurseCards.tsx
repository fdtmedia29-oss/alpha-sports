"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, ChevronDown, Zap, Flame, Heart, Dumbbell } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Zap, Flame, Heart, Dumbbell };

interface DetailedClass {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  image: string;
  intro: string;
  description: string;
  highlights: string[];
  closing: string;
  href?: string;
}

function ClassCard({ cls, index }: { cls: DetailedClass; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      id={cls.id}
      className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-white transition-all hover:shadow-lg"
    >
      <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
        <div className={`relative aspect-[4/3] overflow-hidden bg-surface lg:aspect-auto lg:min-h-[300px] ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
          <Image
            src={cls.image}
            alt={cls.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col p-8 md:p-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-light">
              {(() => { const Icon = iconMap[cls.icon]; return Icon ? <Icon className="h-5 w-5 text-orange" /> : null; })()}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-text">{cls.name}</h3>
              {cls.subtitle && (
                <p className="mt-0.5 text-sm font-medium text-orange">{cls.subtitle}</p>
              )}
            </div>
          </div>
          <p className="mt-4 leading-relaxed text-text-secondary">
            {cls.intro}
          </p>

          {/* Expandable content */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              expanded ? "max-h-[2000px] opacity-100 mt-3" : "max-h-0 opacity-0"
            }`}
          >
            <p className="leading-relaxed text-text-secondary">
              {cls.description}
            </p>
            {cls.highlights.length > 0 && (
              <div className="mt-6 space-y-2">
                {cls.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-sm text-text-secondary">
                    <Check className="h-3.5 w-3.5 shrink-0 text-orange" />
                    {h}
                  </div>
                ))}
              </div>
            )}
            {cls.closing && (
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {cls.closing}
              </p>
            )}
          </div>

          {/* Toggle + CTA */}
          <div className="mt-auto pt-6 flex flex-wrap items-center gap-4">
            <Link
              href={cls.href ? cls.href : "#buchen"}
              className="group inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange/90 hover:gap-3"
            >
              {cls.href ? "Mehr erfahren" : "Jetzt Buchen"}
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

export default function GruppenkurseCards({ classes }: { classes: DetailedClass[] }) {
  return (
    <div className="space-y-12">
      {classes.map((cls, index) => (
        <ClassCard key={cls.id} cls={cls} index={index} />
      ))}
    </div>
  );
}
