"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/content";

export default function AboutTeaser() {
  return (
    <section className="section-padding bg-dark">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-orange">
            Alpha Sports
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Dein Weg zur Bestform beginnt jetzt!
          </h2>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-white/70">
            <p>
              In unserem exklusiven Personal Training Studio in St. Gallen dreht
              sich alles um dich, deine Ziele, deine Transformation, dein neues
              Körpergefühl. Wir bei Alpha Sports glauben nicht an Zufälle. Wir
              glauben an gezielte Strategien, individuelle Diagnostik und die
              Kraft von Erfahrung.
            </p>
            <p>
              Du willst abnehmen, dich wohlfühlen und endlich selbstbewusst im
              Spiegel ansehen oder deine Performance aufs nächste Level heben?
              Gemeinsam mit unseren Experten bringen wir dich in deine Bestform
              — schnell, effizient und nachhaltig. Denn echte Veränderung beginnt
              dort, wo Standardlösungen aufhören.
            </p>
            <p>
              Unser Ziel ist nicht nur, dass du abnimmst und gleichzeitig Muskeln
              aufbaust, sondern auch mental und körperlich stärker wirst. Wir
              machen dich leistungsfähig im Alltag und stark im Auftreten, damit
              du dein Leben aktiv in die Hände nehmen kannst und den Erfolg
              erhältst, den du verdienst.
            </p>
            <p>
              Egal ob du Unternehmer/in, Einsteiger/in oder einfach
              vielbeschäftigt bist — bei uns findest du ein massgeschneidertes
              Coaching, welches auf deinen Alltag und deine Ziele abgestimmt ist.
              In privater Atmosphäre und mit voller Unterstützung begleiten wir
              dich auf dem Weg zu einem Körper, der nicht nur stark aussieht,
              sondern sich auch so anfühlt.
            </p>
            <p className="font-semibold text-white">
              Alpha Sports steht für Transformation, die bleibt — mit Kompetenz,
              Leidenschaft und messbaren Ergebnissen.
            </p>
          </div>

          <div className="mt-10">
            <Link
              href={siteConfig.bookingUrl}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-dark transition-all hover:bg-white/90 hover:gap-3"
            >
              Jetzt Starten
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
