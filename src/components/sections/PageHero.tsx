"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  badge: string;
  title: string;
  description: string;
}

export default function PageHero({ badge, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-dark pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-dark-surface" />
      <div className="relative mx-auto max-w-7xl px-6">
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
        </motion.div>
      </div>
    </section>
  );
}
