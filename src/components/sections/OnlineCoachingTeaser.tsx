"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone, BarChart3, Utensils, Video } from "lucide-react";

const features = [
  { icon: Smartphone, label: "App-basiert" },
  { icon: BarChart3, label: "Individueller Plan" },
  { icon: Utensils, label: "Ernährung inklusive" },
  { icon: Video, label: "Video-Calls" },
];

export default function OnlineCoachingTeaser() {
  return (
    <section className="section-padding bg-dark">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-12 lg:grid-cols-2"
        >
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
                Online Coaching
              </h2>
              <span className="rounded-full bg-orange px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Neu
              </span>
            </div>
            <p className="mt-3 text-xl font-semibold text-white/60 md:text-2xl">
              Dein Coach. Überall dabei.
            </p>
            <p className="mt-4 text-lg text-white/60">
              12-Wochen Programme mit persönlicher Betreuung via App — Training,
              Ernährung und Lifestyle. Von überall trainieren, mit dem gleichen
              individuellen Ansatz wie im Studio.
            </p>
            <Link
              href="/online-coaching"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-dark transition-all hover:bg-white/90 hover:gap-3"
            >
              Mehr erfahren
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center"
              >
                <f.icon className="mx-auto h-8 w-8 text-orange" />
                <p className="mt-3 text-sm font-medium text-white/80">
                  {f.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
