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
              src="/images/trainers/team.jpg"
              alt="Alpha Sports Team"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Trainer cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-white p-6 transition-all hover:shadow-lg"
            >
              {/* Avatar */}
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-dark text-2xl font-black text-white">
                {trainer.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>

              {/* Info */}
              <div className="mt-5 text-center">
                <h3 className="text-base font-bold text-text">
                  {trainer.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-text-secondary">
                  {trainer.role}
                </p>

                {/* Credentials */}
                <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                  {trainer.credentials.slice(0, 3).map((cred) => (
                    <span
                      key={cred}
                      className="rounded-full bg-bg-alt px-2.5 py-1 text-[11px] text-text-secondary"
                    >
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
