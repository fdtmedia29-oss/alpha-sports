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
    <section className="relative min-h-[85vh] md:min-h-[60vh]">
      {/* Background: image or gradient, covers entire section edge-to-edge */}
      {backgroundImage ? (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#111] via-[#111] to-[#222]" />
      )}

      {/* Content pinned to bottom */}
      <div className="absolute inset-0 flex items-end">
        <div className="w-full px-6 pb-10 md:pb-16">
          <div className="mx-auto max-w-7xl">
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
        </div>
      </div>
    </section>
  );
}
