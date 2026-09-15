"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  transformations,
  transformationViews,
  type Transformation,
} from "@/lib/content";

/* Wie lange eine Ansicht stehen bleibt, bevor die nächste kommt */
const SLIDE_MS = 3200;

function SlideCard({
  item,
  index,
  className,
}: {
  item: Transformation;
  index: number;
  className: string;
}) {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  // Sobald jemand selbst klickt, läuft diese Karte nicht mehr automatisch
  const [manual, setManual] = useState(false);
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.6 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const autoplay = inView && !manual && !reducedMotion;

  const goTo = (i: number) => {
    setManual(true);
    setActive((i + 3) % 3);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
      className={`group overflow-hidden rounded-2xl border border-border bg-dark ${className}`}
    >
      <div className="relative aspect-[4/5]">
        {/* Bild antippen = nächste Ansicht */}
        <button
          type="button"
          onClick={() => goTo(active + 1)}
          className="absolute inset-0 block h-full w-full cursor-pointer"
          aria-label={`${item.name}: nächste Ansicht zeigen`}
        >
          {item.images.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={`Vorher-Nachher ${item.name}, Ansicht ${transformationViews[i]}`}
              fill
              sizes="(min-width: 1024px) 500px, (min-width: 640px) 50vw, 100vw"
              className={`object-cover transition-opacity duration-500 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </button>

        {/* Fortschritt wie bei Instagram-Stories */}
        <div className="pointer-events-none absolute inset-x-3 top-3 flex gap-1.5">
          {transformationViews.map((view, i) => (
            <div
              key={view}
              className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/25"
            >
              {i < active && <div className="h-full w-full bg-white" />}
              {i === active &&
                (autoplay ? (
                  <motion.div
                    key={`${active}-${index}`}
                    className="h-full w-full origin-left bg-orange"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: SLIDE_MS / 1000,
                      ease: "linear",
                      // Karten nicht alle gleichzeitig umblättern lassen
                      delay: active === 0 ? (index % 2) * 1.2 : 0,
                    }}
                    onAnimationComplete={() => setActive((a) => (a + 1) % 3)}
                  />
                ) : (
                  <div className="h-full w-full bg-orange" />
                ))}
            </div>
          ))}
        </div>

        {/* Vorher / Nachher, reine Beschriftung */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-between bg-gradient-to-t from-black/60 to-transparent px-4 pb-3 pt-10 text-[11px] font-semibold uppercase tracking-widest text-white/80">
          <span>Vorher</span>
          <span>Nachher</span>
        </div>

        {/* Pfeile: Desktop beim Überfahren, Mobile immer */}
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-opacity hover:bg-black/60 lg:opacity-0 lg:group-hover:opacity-100"
          aria-label={`${item.name}: vorherige Ansicht`}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => goTo(active + 1)}
          className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-opacity hover:bg-black/60 lg:opacity-0 lg:group-hover:opacity-100"
          aria-label={`${item.name}: nächste Ansicht`}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Name + Ansichten zum direkten Anwählen */}
      <div className="flex items-center justify-between gap-3 bg-white px-4 py-3">
        <span className="text-sm font-semibold text-text">{item.name}</span>
        <div className="flex gap-1">
          {transformationViews.map((view, i) => (
            <button
              key={view}
              type="button"
              onClick={() => goTo(i)}
              aria-pressed={i === active}
              className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
                i === active
                  ? "bg-orange text-white"
                  : "text-text-secondary hover:bg-bg-alt"
              }`}
            >
              {view}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Vorher-Nachher als Slideshow: pro Person Vorne → Seite → Hinten.
 * Handy: alle Karten untereinander. Ab Tablet zwei pro Reihe, eine
 * übrige Karte steht mittig.
 */
export default function TransformationSlideshow() {
  return (
    <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-6">
      {transformations.map((item, i) => (
        <SlideCard
          key={item.name}
          item={item}
          index={i}
          className="w-full sm:w-[calc((100%-1.5rem)/2)]"
        />
      ))}
    </div>
  );
}
