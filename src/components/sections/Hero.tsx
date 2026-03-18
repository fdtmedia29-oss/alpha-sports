"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-dark">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-50"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-dark/70 via-dark/50 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-40 md:pb-24 md:pt-48">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              Personal Training Studio in St. Gallen
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="mt-8 text-4xl font-black leading-[1.08] tracking-tight text-white md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Schnell, effektiv
            <br />
            & individuell.
          </motion.h1>

          {/* Subline */}
          <motion.p
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Schnell & effektiv zu deinem WohlfühlKörper.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href={siteConfig.bookingUrl}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-dark transition-all hover:bg-white/90 hover:gap-3"
            >
              Jetzt Starten
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* Motto */}
          <motion.div
            className="mx-auto mt-14 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Unser Motto
            </p>
            <p className="mt-2 text-xl font-bold text-white md:text-2xl">
              Definiert — Kraftvoll — Selbstbewusst
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/50">
              Gemeinsam entfalten wir dein volles Potenzial und formen deinen
              Körper — für mehr Stärke, Selbstvertrauen und nachhaltigen Erfolg.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
