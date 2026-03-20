"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { trainers } from "@/lib/content";

export default function Trainers() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Team photo + header */}
        <div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-text-secondary">
              Unser Team
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-5xl">
              Die Menschen hinter Alpha Sports.
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Zertifizierte Experten mit Leidenschaft, die dich auf deinem Weg
              begleiten — egal wo du startest.
            </p>
            <Link
              href="/ueber-uns"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-dark hover:underline underline-offset-4"
            >
              Mehr über unser Team erfahren →
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[16/10] overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/trainers/team-foto-neu.jpg"
              alt="Alpha Sports Team"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Trainer cards */}
        <div className="flex gap-5 overflow-x-auto overflow-y-hidden pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {trainers.map((trainer, i) => (
            <Link key={trainer.name} href="/ueber-uns" className="group block min-w-[240px] max-w-[260px] shrink-0 snap-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-white p-6 transition-all group-hover:shadow-lg group-hover:border-orange/30"
              >
                {/* Portrait */}
                <div className="relative mx-auto aspect-[3/4] w-full overflow-hidden rounded-xl">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="mt-5 text-center">
                  <h3 className="text-base font-bold text-text">
                    {trainer.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-text-secondary">
                    {trainer.role}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
