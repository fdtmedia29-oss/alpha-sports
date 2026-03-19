"use client";

import Link from "next/link";
import Script from "next/script";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/content";

const qualificationQuestions = [
  "Willst du in deinem Leben wirklich etwas verändern?",
  "Wie viel Zeit kannst du dir für dein Ziel pro Woche nehmen?",
  "Welches Budget hast du für dein Ziel?",
  "Können wir dein Ziel sofort in Angriff nehmen, wenn dir unser Angebot gefällt?",
  "Entscheidest du allein ob du startest kannst oder musst du im voraus noch Abklärungen treffen?",
];

const interestOptions = [
  "Beratungsgespräch",
  "Personal Training",
  "Gruppenkurs",
  "HYROX",
  "Ernährungscoaching",
  "Analysen",
  "Frau-zu-Frau Personal Training",
  "Geschenkgutschein",
];

const goalOptions = [
  "Körperfett Reduktion",
  "Schmerzfrei werden",
  "Muskeln aufbauen",
  "Sportartspezifisch trainieren",
  "Fit & Gesund sein",
  "Longevity",
  "Lernen wie man zielspezifisch Trainiert",
];

export default function BuchenPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="bg-dark pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/kostenloses-beratungsgespraech"
              className="inline-flex items-center gap-1.5 text-sm text-white/50 transition-colors hover:text-white/80"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Zurück
            </Link>
            <h1 className="mt-6 text-3xl font-black tracking-tight text-white md:text-5xl">
              Beratungsgespräch buchen
            </h1>
            <p className="mt-4 text-lg text-white/60">
              Wähle einen Termin und starte deine Reise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Virtuagym Booking Widget ── */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-2xl">
          <div
            dangerouslySetInnerHTML={{
              __html: `
                <vg-guest-booking
                  widget-key="64231731b19d6c001b9b9bfb"
                  club-id="70387"
                  lang="de"
                  source=""
                ></vg-guest-booking>
              `,
            }}
          />
          <Script
            src="https://static.virtuagym.com/vg-guest-booking-widget/dist/js/app.js"
            strategy="afterInteractive"
          />
        </div>
      </section>

      {/* ── Qualification questions ── */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-text md:text-3xl">
              Stelle dir vorab folgende Fragen:
            </h2>
            <p className="mt-3 text-text-secondary">
              So kannst du das Meiste aus deinem Gespräch herausholen.
            </p>
          </motion.div>
          <ul className="mt-10 space-y-5 text-left">
            {qualificationQuestions.map((q, i) => (
              <motion.li
                key={q}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="flex items-start gap-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange/10 text-xs font-bold text-orange">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="pt-1 text-base text-text-secondary">{q}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Interest & Goals ── */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-text md:text-3xl">
              Wofür interessierst du dich?
            </h2>
          </motion.div>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {interestOptions.map((opt) => (
              <span
                key={opt}
                className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-text-secondary"
              >
                {opt}
              </span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-text md:text-3xl">
              Was ist dein Ziel?
            </h2>
          </motion.div>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {goalOptions.map((opt) => (
              <span
                key={opt}
                className="rounded-full bg-orange-light px-4 py-2 text-sm font-medium text-orange"
              >
                {opt}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-dark py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-xl font-bold text-white md:text-2xl">
            Noch Fragen? Schreib uns einfach.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange/90 hover:gap-3"
            >
              WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              E-Mail senden
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
