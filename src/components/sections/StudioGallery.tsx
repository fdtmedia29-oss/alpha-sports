"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { studioImages } from "@/lib/content";

export default function StudioGallery() {
  return (
    <section className="section-padding bg-bg-alt">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-text-secondary">
            Unser Studio
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-5xl">
            Privat. Modern. Für dich.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-secondary">
            Training in privater Atmosphäre — max. 2 Personen gleichzeitig, volle
            Aufmerksamkeit garantiert.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {studioImages.slice(0, 8).map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-xl ${
                i === 0 || i === 5
                  ? "col-span-2 row-span-2 aspect-square"
                  : "aspect-[4/3]"
              }`}
            >
              <Image
                src={src}
                alt={`Alpha Sports Studio ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
