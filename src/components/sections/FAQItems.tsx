"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

export default function FAQItems({
  items,
  idPrefix = "faq",
}: {
  items: readonly FAQItem[];
  idPrefix?: string;
}) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const key = `${idPrefix}-${i}`;
        const isOpen = open === key;
        return (
          <div
            key={key}
            className="overflow-hidden rounded-2xl border border-border bg-white"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : key)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-bg-alt"
            >
              <span className="text-base font-semibold text-text md:text-lg">
                {item.q}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="px-6 pb-6 text-base leading-relaxed text-text-secondary">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
