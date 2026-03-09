"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, User, ArrowRight } from "lucide-react";
import { groupClasses } from "@/lib/content";

export default function GroupClasses() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-text-secondary">
              Gruppenkurse
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-5xl">
              Gemeinsam stärker.
            </h2>
            <p className="mt-3 text-text-secondary">
              Kostenlose Schnupperwoche bei allen Kursen.
            </p>
          </div>
          <Link
            href="/gruppenkurse"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-dark"
          >
            Alle Kurse ansehen
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-3 lg:grid-cols-3 md:overflow-visible md:pb-0 snap-x snap-mandatory">
          {groupClasses.map((cls, i) => (
            <motion.div
              key={cls.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="min-w-[280px] snap-start md:min-w-0"
            >
              <Link
                href={cls.href}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white transition-all hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  <Image
                    src={cls.image}
                    alt={cls.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-text">{cls.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-text-secondary">
                    {cls.description}
                  </p>
                  <div className="mt-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs text-muted">
                      <Clock className="h-3.5 w-3.5" />
                      {cls.schedule}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted">
                      <User className="h-3.5 w-3.5" />
                      {cls.trainer}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
