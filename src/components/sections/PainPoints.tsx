"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, X, Check, Quote } from "lucide-react";
import { painPointQuotes, painPointCards, siteConfig } from "@/lib/content";

export default function PainPoints() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Erkennst du dich wieder? */}
        <div className="mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange">
            Erkennst du dich wieder?
          </span>
        </div>

        {/* Quote pills */}
        <div className="mb-16 flex flex-wrap gap-3">
          {painPointQuotes.map((quote, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="flex items-center gap-2 rounded-full border border-border bg-bg-alt px-5 py-3"
            >
              <Quote className="h-3.5 w-3.5 shrink-0 text-orange" />
              <span className="text-sm font-medium text-text">{quote}</span>
            </motion.div>
          ))}
        </div>

        {/* Answer */}
        <motion.p
          className="mb-10 text-xl font-bold text-text md:text-2xl"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Ja? Dann bist du bei uns genau richtig.
        </motion.p>

        {/* Problem → Solution cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {painPointCards.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-white p-8 transition-all hover:shadow-lg"
            >
              {/* Problem */}
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50">
                  <X className="h-4 w-4 text-red-500" />
                </div>
                <p className="text-base font-medium text-text">
                  {item.problem}
                </p>
              </div>

              {/* Arrow */}
              <div className="my-6 flex justify-center">
                <ArrowDown className="h-5 w-5 text-border" />
              </div>

              {/* Solution */}
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-50">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-base text-text-secondary transition-colors group-hover:text-text">
                  {item.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services + CTA */}
        <div className="mt-14">
          <p className="text-lg font-medium text-text-secondary">
            Wir bringen dich auf schnellstem Weg zu deinem Ziel mit:
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Personal Training im privaten Studio",
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
        </div>
      </div>
    </section>
  );
}
