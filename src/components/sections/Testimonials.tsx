"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { googleReviews } from "@/lib/content";

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
          className="mt-8 flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {googleReviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="w-[300px] shrink-0 snap-start rounded-2xl border border-border bg-white p-6 md:w-[340px]"
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
          <div className="flex w-[300px] shrink-0 snap-start items-center justify-center rounded-2xl border border-dashed border-border bg-bg-alt p-6 md:w-[340px]">
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
