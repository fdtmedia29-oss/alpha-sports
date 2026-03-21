"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { studioImages } from "@/lib/content";
import VideoTestimonials from "@/components/sections/VideoTestimonials";

export default function Einblicke() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="relative overflow-hidden pb-24 pt-44 md:pb-32 md:pt-52">
        <Image
          src="/images/studio/schaufenster.jpg"
          alt="Alpha Sports Studio Schaufenster"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="relative mx-auto max-w-7xl px-6">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange">
            Einblicke
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Unser Studio.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/60">
            Privat, modern und voll ausgestattet — im Herzen von St. Gallen.
            Hier entstehen Transformationen.
          </p>
        </div>
      </section>

      <VideoTestimonials />

      {/* Gallery grid */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {studioImages.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="mb-4 break-inside-avoid overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt={`Alpha Sports Studio ${i + 1}`}
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
