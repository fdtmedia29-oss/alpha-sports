"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  { src: "/videos/testimonial-1.mp4", title: "Testimonial 1" },
  { src: null, title: "Testimonial 2" },
  { src: null, title: "Testimonial 3" },
];

function VideoCard({ video, index }: { video: (typeof videos)[number]; index: number }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current || !video.src) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="w-[70vw] shrink-0 snap-start sm:w-[45vw] md:w-auto"
    >
      <div
        className="group relative aspect-[9/16] cursor-pointer overflow-hidden rounded-3xl border border-border bg-dark"
        onClick={togglePlay}
      >
        {video.src ? (
          <>
            <video
              ref={videoRef}
              src={video.src}
              playsInline
              loop
              className="h-full w-full object-cover"
            />
            {!playing && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/40 bg-black/30 backdrop-blur-sm transition-all group-hover:border-orange group-hover:bg-orange/20">
                  <Play className="h-7 w-7 text-white transition-colors group-hover:text-orange" fill="currentColor" />
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/20 transition-colors group-hover:border-orange group-hover:bg-orange/10">
              <Play className="h-7 w-7 text-white/40 transition-colors group-hover:text-orange" />
            </div>
            <p className="mt-4 text-sm font-medium text-white/40">
              Video folgt
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function VideoTestimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -380 : 380,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-bg-alt px-6 py-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header — centered with orange accent */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-orange" />
          <h2 className="text-2xl font-bold tracking-tight text-text md:text-4xl">
            Das sagen unsere <span className="text-orange">Kunden.</span>
          </h2>
        </div>

        {/* Video grid: 3 on desktop, carousel on mobile */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {videos.map((video, i) => (
              <VideoCard key={i} video={video} index={i} />
            ))}
          </div>

          {/* Desktop arrows */}
          <div className="hidden md:block">
            <button
              onClick={() => scroll("left")}
              className="absolute -left-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white shadow-md transition-colors hover:bg-bg-alt"
              aria-label="Zurück"
            >
              <ChevronLeft className="h-5 w-5 text-text" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="absolute -right-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white shadow-md transition-colors hover:bg-bg-alt"
              aria-label="Weiter"
            >
              <ChevronRight className="h-5 w-5 text-text" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
