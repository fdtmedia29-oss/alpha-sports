"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star, Target, BarChart3, Zap } from "lucide-react";
import { siteConfig } from "@/lib/content";

const consultationSteps = [
  { step: "01", title: "Kennenlernen", description: "Wir lernen dich und deine Geschichte kennen." },
  { step: "02", title: "Ermittlung IST-Zustand", description: "Wo stehst du aktuell? Körperlich und mental." },
  { step: "03", title: "Klares Definieren der Ziele", description: "Was willst du erreichen — und bis wann?" },
  { step: "04", title: "Check Up Gesundheitszustand", description: "Gibt es Einschränkungen oder Vorerkrankungen?" },
  { step: "05", title: "Planung individuelle Strategie", description: "Wir skizzieren deinen Weg zum Ziel." },
  { step: "06", title: "Passendes Angebot", description: "Du erhältst ein individuelles Angebot." },
  { step: "07", title: "Start und Vereinbarung der ersten Termine", description: "Direkt loslegen — keine Wartezeit." },
];


export default function KontaktPage() {
  return (
    <>
      {/* ── Hero with background image ── */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <Image
          src="/images/pt/alpha-personal-03.jpg"
          alt="Personal Training bei Alpha Sports"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative mx-auto w-full max-w-3xl px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              Kostenlos & unverbindlich
            </span>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl lg:text-7xl">
              Dein erster Schritt zu deiner Bestform.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/70 md:text-xl">
              45 Minuten, die alles verändern können. Wir analysieren deine Ziele und erstellen deinen individuellen Plan.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col items-center gap-4"
          >
            <Link
              href="/kostenloses-beratungsgespraech/buchen"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-orange/90 hover:gap-3"
            >
              Jetzt Beratung buchen
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <span className="flex items-center gap-1.5 text-sm text-white/50">
              <Star className="h-4 w-4 fill-orange text-orange" />
              5.0 auf Google — 68 Bewertungen
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── What is the consultation? ── */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-text md:text-4xl">
              Was ist das Beratungsgespräch?
            </h2>
          </motion.div>

          <div className="mt-10 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-3"
            >
              <Target className="h-6 w-6 text-orange" />
              <p className="text-lg leading-relaxed text-text-secondary">
                Bei diesem Gespräch nehmen wir deine Ziele und deinen
                Gesundheitszustand ins Visier, um herauszufinden, wo du aktuell stehst.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center gap-3"
            >
              <BarChart3 className="h-6 w-6 text-orange" />
              <p className="text-lg leading-relaxed text-text-secondary">
                Anhand der gesammelten Daten erarbeiten wir uns eine Strategie,
                welche du langfristig umsetzen kannst und in deinen Alltag passt.
                Somit können wir dir garantieren, dass du dein Ziel auf schnellstem Weg erreichst.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col items-center gap-3"
            >
              <Zap className="h-6 w-6 text-orange" />
              <p className="text-lg leading-relaxed text-text-secondary">
                Du erhältst dann von uns ein individuelles Angebot und die
                Möglichkeit, direkt mit der Reise zu deiner besten Version zu starten.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-6"
          >
            <Link
              href="/kostenloses-beratungsgespraech/buchen"
              className="inline-flex items-center gap-2 text-sm font-semibold text-orange transition-all hover:gap-3"
            >
              Beratung buchen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 7 Steps — Was dich erwartet ── */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-3xl font-bold text-text md:text-4xl"
          >
            Was dich erwartet:
          </motion.h2>
          <div className="mt-14 space-y-0">
            {consultationSteps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative flex gap-5 pb-12 last:pb-0"
              >
                {/* Vertical connector line */}
                {i < consultationSteps.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-px bg-orange/20" />
                )}
                {/* Step number circle */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange text-sm font-bold text-white shadow-lg shadow-orange/20">
                  {s.step}
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-bold text-text">{s.title}</h3>
                  <p className="mt-1 text-base text-text-secondary">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <Link
              href="/kostenloses-beratungsgespraech/buchen"
              className="inline-flex items-center gap-2 text-sm font-semibold text-orange transition-all hover:gap-3"
            >
              Jetzt loslegen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative overflow-hidden bg-dark py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-surface to-dark" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-2xl px-6 text-center"
        >
          <h2 className="text-3xl font-black text-white md:text-5xl">
            Buche jetzt dein kostenloses Beratungsgespräch!
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-white/60">
            Bevor dir wieder eine Ausrede einfällt, um deine Gesundheit
            einmal mehr aufs nächste Jahr zu verschieben.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/kostenloses-beratungsgespraech/buchen"
              className="group inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 text-base font-semibold text-white transition-all hover:bg-orange/90 hover:gap-3"
            >
              Beratung buchen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              Per WhatsApp anfragen
            </a>
          </div>
          <p className="mt-8 text-sm text-white/40">
            Alpha Sports — {siteConfig.address}
          </p>
        </motion.div>
      </section>
    </>
  );
}
