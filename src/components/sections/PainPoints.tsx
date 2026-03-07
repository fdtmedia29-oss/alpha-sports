"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { painPoints, siteConfig } from "@/lib/content";

export default function PainPoints() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-12 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange">
            Erkennst du dich wieder?
          </span>
        </div>

        {/* Quote grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative rounded-2xl border border-border bg-bg-alt p-6"
            >
              <Quote className="absolute right-4 top-4 h-6 w-6 text-surface" />
              <p className="text-base font-medium leading-relaxed text-text">
                &laquo;{point}&raquo;
              </p>
            </motion.div>
          ))}
        </div>

        {/* Answer */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-xl font-bold text-text md:text-2xl">
            Ja? Dann bist du bei uns genau richtig!
          </p>
          <p className="mt-4 text-lg text-text-secondary">
            Wir bringen dich auf schnellstem Weg zu deinem Ziel mit:
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Personal Training in unserem privaten Studio",
              "Persönliche Gym-Coachings",
              "Massgeschneiderter Ernährung",
              "Unserem Hybrid-Modell",
              "Gruppenkursen",
              "Modernster Leistungsdiagnostik",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-bg-alt px-4 py-3"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-orange" />
                <span className="text-sm font-medium text-text">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href={siteConfig.bookingUrl}
              className="group inline-flex items-center gap-2 rounded-full bg-dark px-8 py-4 text-base font-semibold text-white transition-all hover:bg-dark-light hover:gap-3"
            >
              Kostenloses Beratungsgespräch buchen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
