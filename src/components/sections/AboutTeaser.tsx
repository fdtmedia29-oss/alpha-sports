"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target, Shield, Zap, Heart } from "lucide-react";
import { siteConfig } from "@/lib/content";

const highlights = [
  {
    icon: Target,
    title: "Gezielte Strategien",
    text: "Individuelle Diagnostik statt Standardlösungen. Dein Plan basiert auf echten Daten.",
  },
  {
    icon: Zap,
    title: "Schnell & effizient",
    text: "Sichtbare Ergebnisse in kürzester Zeit — durch massgeschneidertes Coaching.",
  },
  {
    icon: Heart,
    title: "Mental & körperlich",
    text: "Nicht nur abnehmen und Muskeln aufbauen — sondern leistungsfähig im Alltag und stark im Auftreten.",
  },
  {
    icon: Shield,
    title: "Privat & persönlich",
    text: "Egal ob Unternehmer/in, Einsteiger/in oder vielbeschäftigt — ein Coaching, das in deinen Alltag passt.",
  },
];

export default function AboutTeaser() {
  return (
    <section className="section-padding bg-dark">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              Alpha Sports
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Dein Weg zur Bestform beginnt jetzt.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              In unserem exklusiven Personal Training Studio in St. Gallen dreht
              sich alles um dich — deine Ziele, deine Transformation, dein neues
              Körpergefühl. Wir glauben nicht an Zufälle, sondern an gezielte
              Strategien, individuelle Diagnostik und die Kraft von Erfahrung.
            </p>
            <p className="mt-4 font-semibold text-white">
              Transformation, die bleibt — mit Kompetenz, Leidenschaft und
              messbaren Ergebnissen.
            </p>
            <div className="mt-8">
              <Link
                href={siteConfig.bookingUrl}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-dark transition-all hover:bg-white/90 hover:gap-3"
              >
                Jetzt Starten
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>

          {/* Right: highlight cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h.icon className="h-7 w-7 text-orange" />
                <h3 className="mt-4 text-base font-bold text-white">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {h.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
