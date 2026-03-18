"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface PageHeroProps {
  badge: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
}

export default function PageHero({ badge, title, description, ctaText, ctaHref, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[75vh] items-end overflow-hidden bg-dark md:min-h-0 md:pt-44 md:pb-24">
      {backgroundImage ? (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-dark/20" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-dark-surface" />
      )}
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-12 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            {badge}
          </span>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-white/60 md:text-xl">{description}</p>
          {ctaText && ctaHref && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-8"
            >
              <Link
                href={ctaHref}
                className="group inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 text-base font-semibold text-white transition-all hover:bg-orange/90 hover:gap-3"
              >
                {ctaText}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
