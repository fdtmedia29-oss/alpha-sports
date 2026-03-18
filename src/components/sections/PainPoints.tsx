"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, X, Check } from "lucide-react";
import { painPointQuotes, painPointCards, siteConfig } from "@/lib/content";

export default function PainPoints() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Header + quotes */}
        <div className="mb-16 grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-widest text-orange md:text-3xl">
              Erkennst du dich wieder?
            </h2>
            <div className="mt-8 space-y-4">
              {painPointQuotes.map((quote, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="text-lg text-text-secondary"
                >
                  &laquo;{quote}&raquo;
                </motion.p>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-text md:text-4xl">
              Ja?
              <br />
              Dann bist du bei uns{" "}
              <span className="text-orange">genau richtig.</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              Wir bringen dich auf schnellstem Weg zu deinem Ziel — mit
              Personal Training in unserem privaten Studio, massgeschneiderter
              Ernährung, modernster Diagnostik und Gruppenkursen.
            </p>
            <div className="mt-8">
              <Link
                href={siteConfig.bookingUrl}
                className="group inline-flex items-center gap-2 rounded-full bg-dark px-8 py-4 text-base font-semibold text-white transition-all hover:bg-dark-light hover:gap-3"
              >
                Kostenloses Beratungsgespräch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Problem → Solution cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {painPointCards.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-3xl border border-border bg-white p-8 transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50">
                  <X className="h-4 w-4 text-red-500" />
                </div>
                <p className="text-base font-medium text-text">
                  {item.problem}
                </p>
              </div>

              <div className="my-6 flex justify-center">
                <ArrowDown className="h-5 w-5 text-border" />
              </div>

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
      </div>
    </section>
  );
}
