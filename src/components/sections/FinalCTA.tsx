"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/content";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-dark py-24 md:py-32">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/studio/studio-2.jpg"
          alt="Alpha Sports Studio"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <motion.div
        className="relative mx-auto max-w-3xl px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
          Bereit für den ersten Schritt?
        </h2>
        <p className="mt-6 text-lg text-white/60">
          Starte mit einem kostenlosen Beratungsgespräch. Wir analysieren deine
          Ziele und erstellen einen individuellen Plan — unverbindlich.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={siteConfig.bookingUrl}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-dark transition-all hover:bg-white/90 hover:gap-3"
          >
            Jetzt Beratung buchen
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white transition-colors hover:border-white/40 hover:bg-white/10"
          >
            Per WhatsApp schreiben
          </a>
        </div>
        <p className="mt-6 text-sm text-white/40">
          Oder ruf uns direkt an:{" "}
          <a
            href={`tel:${siteConfig.phone}`}
            className="font-medium text-white/70 underline-offset-4 hover:underline"
          >
            {siteConfig.phone}
          </a>
        </p>
      </motion.div>
    </section>
  );
}
