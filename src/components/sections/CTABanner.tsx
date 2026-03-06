"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/content";

interface CTABannerProps {
  title?: string;
  description?: string;
}

export default function CTABanner({
  title = "Bereit für den ersten Schritt?",
  description = "Starte mit einem kostenlosen Beratungsgespräch. Wir analysieren deine Ziele und erstellen einen individuellen Plan — unverbindlich.",
}: CTABannerProps) {
  return (
    <section className="bg-dark py-20 md:py-24">
      <motion.div
        className="mx-auto max-w-3xl px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
          {title}
        </h2>
        <p className="mt-6 text-lg text-white/60">{description}</p>
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
      </motion.div>
    </section>
  );
}
