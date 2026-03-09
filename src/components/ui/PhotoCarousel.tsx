"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PhotoCarouselProps {
  title: string;
  images: string[];
}

export default function PhotoCarousel({ title, images }: PhotoCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-16">
      <div className="flex items-end justify-between">
        <h3 className="text-lg font-bold text-text md:text-xl">
          Einblicke: <span className="text-orange">{title}</span>
        </h3>
        <div className="hidden gap-2 md:flex">
          <button
            onClick={() => scroll("left")}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white transition-colors hover:bg-bg-alt"
            aria-label="Zurück"
          >
            <ChevronLeft className="h-4 w-4 text-text" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white transition-colors hover:bg-bg-alt"
            aria-label="Weiter"
          >
            <ChevronRight className="h-4 w-4 text-text" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="mt-6 flex gap-4 overflow-x-auto overflow-y-hidden pb-4 snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          overscrollBehaviorX: "none",
        }}
      >
        {images.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative aspect-[4/3] w-[80vw] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[45vw] md:w-[350px]"
          >
            <Image
              src={src}
              alt={`${title} ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
