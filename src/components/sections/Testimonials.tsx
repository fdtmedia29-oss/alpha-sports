"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="section-padding bg-bg-alt">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-text-secondary">
            Erfolgsgeschichten
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-5xl">
            Was unsere Kunden sagen.
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-border bg-white p-8"
            >
              {/* Quote icon */}
              <Quote className="absolute right-6 top-6 h-8 w-8 text-surface" />

              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-6 text-base leading-relaxed text-text-secondary">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 border-t border-border pt-6">
                <div className="font-semibold text-text">{t.name}</div>
                <div className="mt-1 text-sm font-medium text-text-secondary">
                  {t.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
