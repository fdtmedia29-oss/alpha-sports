"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-dark">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Alpha Sports Personal Training"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-32">
        <div className="max-w-3xl">
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
            className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl"
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
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Deine Experten, wenn es um deine Bestform geht! Gemeinsam nehmen
            wir deine Ziele in die Hand.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
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
            className="mt-16 border-l-2 border-orange pl-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-white/50">
              Unser Motto
            </p>
            <p className="mt-2 text-xl font-bold text-white md:text-2xl">
              Definiert — Kraftvoll — Selbstbewusst
            </p>
            <p className="mt-2 text-sm text-white/60">
              Gemeinsam entfalten wir dein volles Potenzial und formen deinen
              Körper — für mehr Stärke, Selbstvertrauen und nachhaltigen Erfolg.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
