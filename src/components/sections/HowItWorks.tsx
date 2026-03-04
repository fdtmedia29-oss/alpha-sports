"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, ClipboardCheck, Dumbbell, TrendingUp, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/content";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Kostenloses Beratungsgespräch",
    description:
      "Wir lernen dich und deine Ziele kennen — ob Abnehmen, Muskelaufbau, Schmerzfreiheit oder Wettkampfvorbereitung. 30 Minuten, unverbindlich.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Analyse & individueller Plan",
    description:
      "Basierend auf InBody-Analyse, Stoffwechseltest oder Leistungsdiagnostik erstellen wir deinen massgeschneiderten Trainings- und Ernährungsplan.",
  },
  {
    number: "03",
    icon: Dumbbell,
    title: "Training im privaten Studio",
    description:
      "Du trainierst 1:1 oder in Kleingruppen — mit voller Aufmerksamkeit deines Trainers. Kein Warten auf Geräte, keine Ablenkung.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Fortschritt messen & anpassen",
    description:
      "Regelmässige Check-ins und Analysen zeigen dir schwarz auf weiss, was sich verändert. Wir passen deinen Plan laufend an.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-text-secondary">
            So funktioniert&apos;s
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-5xl">
            In 4 Schritten zum Ziel.
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Vom ersten Gespräch bis zu messbaren Ergebnissen — wir begleiten
            dich auf dem ganzen Weg.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative"
            >
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-10 hidden h-px w-8 translate-x-full bg-border lg:block" />
              )}

              <div className="rounded-2xl border border-border bg-bg-alt p-8">
                {/* Number + Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black text-surface-dark">
                    {step.number}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-dark text-white">
                    <step.icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-6 text-lg font-bold text-text">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href={siteConfig.bookingUrl}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-dark px-8 py-4 text-base font-semibold text-white transition-all hover:bg-dark-light hover:gap-3"
          >
            Jetzt starten — kostenlose Beratung
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
