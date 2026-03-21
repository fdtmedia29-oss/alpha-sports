"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PageHeroProps {
  badge: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
  backgroundImageDesktop?: string;
  compact?: boolean;
}

export default function PageHero({ badge, title, description, ctaText, ctaHref, backgroundImage, backgroundImageDesktop, compact }: PageHeroProps) {
  const overlay = "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.2) 100%)";
  const desktopImg = backgroundImageDesktop || backgroundImage;

  return (
    <section className={`relative flex items-center ${compact ? "min-h-0 pb-16 pt-40 md:pb-20 md:pt-44" : "min-h-[90vh] md:min-h-[75vh]"}`}>
      {/* Mobile background */}
      {backgroundImage && (
        <div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: `${overlay}, url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
      {/* Desktop background */}
      {desktopImg && (
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: `${overlay}, url(${desktopImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
      {/* Fallback when no image */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#111] via-[#111] to-[#222]" />
      )}

      <div className="relative w-full px-6 pt-24">
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
            <h1 className="mt-6 text-4xl font-black tracking-tight text-white drop-shadow-lg md:text-6xl">
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
    </section>
  );
}
