"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { googleReviews } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="section-padding bg-bg-alt">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl font-bold text-text">
              Alpha Sports Personal Training
            </span>
          </div>
          <div className="mt-3 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, j) => (
              <Star
                key={j}
                className="h-5 w-5 fill-amber-400 text-amber-400"
              />
            ))}
          </div>
          <p className="mt-2 text-sm text-text-secondary">
            60 Google Bewertungen
          </p>
        </div>

        {/* Review cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {googleReviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-white p-6"
            >
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
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {review.quote}
              </p>

              {/* Author */}
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-dark text-xs font-bold text-white">
                  {review.name.charAt(0)}
                </div>
                <span className="text-sm font-semibold text-text">
                  {review.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google link */}
        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/maps/place/Alpha+Sports"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-text transition-colors hover:bg-white hover:shadow-sm"
          >
            Alle Bewertungen auf Google lesen
          </a>
        </div>
      </div>
    </section>
  );
}
