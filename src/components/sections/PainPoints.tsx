"use client";

import { motion } from "framer-motion";
import { ArrowDown, X, Check } from "lucide-react";
import { painPoints } from "@/lib/content";

export default function PainPoints() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-text-secondary">
            Kommt dir das bekannt vor?
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-5xl">
            Schluss mit Stillstand.
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Wir kennen die typischen Hürden — und haben die Lösung.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {painPoints.map((item, i) => (
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
                <p className="text-base text-text-secondary group-hover:text-text transition-colors">
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
