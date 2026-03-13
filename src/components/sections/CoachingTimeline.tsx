"use client";

import { motion } from "framer-motion";
import {
  Video,
  MessageCircle,
  Smartphone,
  Dumbbell,
  Utensils,
  Moon,
  BarChart3,
} from "lucide-react";

const timelineItems = [
  {
    icon: Video,
    title: "Ablauf",
    subtitle: "12 Wochen intensives 1:1 Online Coaching",
    items: [
      "Video-Calls mit deinem Coach",
      "Chat-Support über die App",
      "Zugriff auf eine benutzerfreundliche Betreuungs-App",
    ],
  },
  {
    icon: Dumbbell,
    title: "Trainings",
    items: [
      "Individueller Trainingsplan",
      "Regelmässige Fortschritts-Analysen",
      "Anpassung an Fortschritte & Rückmeldungen",
    ],
  },
  {
    icon: Utensils,
    title: "Ernährungsberatung",
    items: [
      "Alltagsgerechte Ernährung",
      "Strukturierte Makronährstoffplanung (Eiweiss, Kohlenhydrate, Fette)",
      "Keine strikten Diäten",
      "Wöchentliche Auswertung der Daten",
    ],
  },
  {
    icon: Moon,
    title: "Lifestyle-Optimierung",
    subtitle: "Verbesserung",
    items: [
      "deiner Schlafdauer & Schlafqualität",
      "deines Stresslevels",
      "deines Energielevels",
      "deiner Struktur und Routine für mehr Leistungsfähigkeit im Alltag",
    ],
  },
  {
    icon: BarChart3,
    title: "Fortschritte & Kontrolle",
    items: [
      "Regelmässige Dokumentation",
      "Fortschrittsfotos",
      "Körperumfang (z.B. Taille, Hüfte, Brust, Arme, Beine)",
      "Körpergewicht",
      "Datensammlung und gemeinsame Auswertung",
    ],
  },
];

export default function CoachingTimeline() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange">
            Dein Coaching im Detail
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-5xl">
            So begleiten wir dich.
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-orange via-orange to-orange/20 md:block" />
          {/* Mobile line */}
          <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-orange via-orange to-orange/20 md:hidden" />

          <div className="space-y-12 md:space-y-16">
            {timelineItems.map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative"
                >
                  {/* Icon on the line */}
                  <div className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-orange shadow-lg md:left-1/2">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] ${
                      isLeft ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"
                    }`}
                  >
                    <div className="rounded-2xl border border-border bg-bg-alt p-6 transition-all hover:shadow-lg">
                      <h3 className="text-lg font-bold text-text">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="mt-1 text-sm font-medium text-orange">
                          {item.subtitle}
                        </p>
                      )}
                      <ul className="mt-4 space-y-2">
                        {item.items.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2 text-sm text-text-secondary"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 max-w-3xl text-center text-lg leading-relaxed text-text-secondary"
        >
          Unser bewährtes Online Coaching System vereint individuelles Training,
          strukturierte Ernährung und clevere Lifestyle-Anpassungen — alles auf
          dich zugeschnitten und digital abrufbar über unsere Coaching-App.
        </motion.p>
      </div>
    </section>
  );
}
