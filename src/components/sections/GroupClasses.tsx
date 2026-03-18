"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, User, ArrowRight } from "lucide-react";
import { groupClasses } from "@/lib/content";

/* Map course names to optional video sources */
const courseVideos: Record<string, string | undefined> = {
  Hyrox: "/videos/hyrox-1.mp4",
};

function CourseMedia({ name, image }: { name: string; image: string }) {
  const videoSrc = courseVideos[name];
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  /* Autoplay when scrolled into view, pause when out */
  useEffect(() => {
    if (!videoSrc || !videoRef.current || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [videoSrc]);

  if (!videoSrc) {
    return (
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }

  return (
    <div ref={containerRef} className="absolute inset-0">
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        loop
        playsInline
        poster={image}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
}

export default function GroupClasses() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filtered = activeFilter
    ? groupClasses.filter((c) => c.name === activeFilter)
    : groupClasses;

  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Header — centered on desktop */}
        <div className="mb-8 md:text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-text-secondary">
            Gruppenkurse
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-5xl">
            Einblicke in unsere{" "}
            <span className="text-orange">Gruppenstunden</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-text-secondary">
            Kostenlose Probewoche bei allen Kursen.
          </p>
        </div>

        {/* Filter pills — centered */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveFilter(null)}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all ${
              activeFilter === null
                ? "border-orange bg-orange text-white"
                : "border-border bg-white text-text-secondary hover:border-orange hover:text-orange"
            }`}
          >
            Alle
          </button>
          {groupClasses.map((cls) => (
            <button
              key={cls.name}
              onClick={() =>
                setActiveFilter(activeFilter === cls.name ? null : cls.name)
              }
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all ${
                activeFilter === cls.name
                  ? "border-orange bg-orange text-white"
                  : "border-border bg-white text-text-secondary hover:border-orange hover:text-orange"
              }`}
            >
              {cls.name}
            </button>
          ))}
        </div>

        {/* Course cards — horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-5 overflow-x-auto overflow-y-hidden pb-4 snap-x snap-mandatory md:overflow-visible md:overflow-y-visible md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((cls) => (
              <motion.div
                key={cls.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="min-w-[280px] snap-start md:min-w-0"
              >
                <Link
                  href={cls.href}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white transition-all hover:shadow-lg"
                >
                  {/* Image / Video */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                    <CourseMedia name={cls.name} image={cls.image} />
                    {/* Course name overlay */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/80 to-transparent p-4 pt-10">
                      <h3 className="text-lg font-bold text-white">
                        {cls.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <p className="flex-1 text-sm leading-relaxed text-text-secondary">
                      {cls.description}
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-2 text-xs text-muted">
                        <Clock className="h-3.5 w-3.5 shrink-0" />
                        {cls.schedule}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted">
                        <User className="h-3.5 w-3.5 shrink-0" />
                        {cls.trainer}
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-orange">
                      Mehr erfahren
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA — centered */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/gruppenkurse"
            className="group inline-flex items-center gap-2 rounded-full bg-dark px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-dark-surface hover:gap-3"
          >
            Alle Kurse ansehen
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href="https://www.alpha-sports.ch/gruppenkurse"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-orange px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-orange-hover"
          >
            Jetzt buchen
          </a>
        </div>
      </div>
    </section>
  );
}
