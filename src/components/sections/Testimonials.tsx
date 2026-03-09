"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Info, ShieldCheck } from "lucide-react";
import { googleReviews } from "@/lib/content";

function TrustindexBadge() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative mt-4 inline-block">
      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => setShowTooltip(!showTooltip)}
        className="inline-flex items-center gap-2 rounded-full bg-[#2b6a4f] px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
      >
        <ShieldCheck className="h-4 w-4" />
        Verifiziert von: Trustindex
        <Info className="h-3.5 w-3.5 opacity-80" />
      </button>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-0 z-50 mb-3 w-72 rounded-xl border border-border bg-white p-4 shadow-xl"
          >
            <p className="text-sm leading-relaxed text-text-secondary">
              <span className="font-bold text-text">
                Das verifizierte Trustindex-Abzeichen ist das universelle Symbol
                des Vertrauens.
              </span>{" "}
              Nur die besten Unternehmen können das verifizierte Abzeichen
              erhalten, die eine Bewertungsnote über 4.5 haben, basierend auf
              Kundenbewertungen der letzten 12 Monate.
            </p>
            <div className="absolute -bottom-2 left-6 h-4 w-4 rotate-45 border-b border-r border-border bg-white" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-text-secondary">
                5.0 auf Google
              </span>
            </div>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-text md:text-4xl">
              68 zufriedene Kunden sprechen für sich.
            </h2>
            <TrustindexBadge />
          </div>

          {/* Desktop arrows */}
          <div className="hidden gap-2 md:flex">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white transition-colors hover:bg-bg-alt"
              aria-label="Zurück"
            >
              <ChevronLeft className="h-5 w-5 text-text" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white transition-colors hover:bg-bg-alt"
              aria-label="Weiter"
            >
              <ChevronRight className="h-5 w-5 text-text" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="mt-8 flex gap-5 overflow-x-auto overflow-y-hidden pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            overscrollBehaviorX: "none",
          }}
        >
          {googleReviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="w-[300px] shrink-0 snap-start rounded-3xl border border-border bg-white p-6 md:w-[340px]"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-4 text-sm leading-relaxed text-text-secondary line-clamp-5">
                {review.quote}
              </p>

              {/* Author */}
              <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-dark text-xs font-bold text-white">
                  {review.name.charAt(0)}
                </div>
                <span className="text-sm font-semibold text-text">
                  {review.name}
                </span>
              </div>
            </motion.div>
          ))}

          {/* CTA card at end */}
          <div className="flex w-[300px] shrink-0 snap-start items-center justify-center rounded-3xl border border-dashed border-border bg-bg-alt p-6 md:w-[340px]">
            <div className="text-center">
              <div className="flex justify-center gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="mt-3 text-sm font-medium text-text-secondary">
                Alle 68 Bewertungen lesen
              </p>
              <a
                href="https://www.google.com/maps/place/Alpha+Sports"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block rounded-full bg-dark px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-dark-surface"
              >
                Auf Google ansehen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
