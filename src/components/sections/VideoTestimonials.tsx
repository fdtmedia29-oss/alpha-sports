"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Volume2, VolumeX, ChevronLeft, ChevronRight } from "lucide-react";

// Dietmar + Peter kamen am 14.09.2026 von Luigi (Drive "Testimonials Neu").
// Stehen an Platz 2 und 3, damit sie auf dem Desktop ohne Pfeil-Klick sichtbar
// sind. Alle Videos seit 17.09.2026 auf 720x1280 (H.264, CRF 23), je 6-8 MB:
// die Rohfassungen mit bis zu 82 MB frassen 93 % des Vercel-Datenvolumens.
const videos = [
  { src: "/videos/testimonial-1.mp4", poster: "/videos/posters/testimonial-1.jpg", title: "Testimonial 1" },
  { src: "/videos/testimonial-dietmar.mp4", poster: "/videos/posters/testimonial-dietmar.jpg", title: "Testimonial Dietmar" },
  { src: "/videos/testimonial-peter.mp4", poster: "/videos/posters/testimonial-peter.jpg", title: "Testimonial Peter" },
  { src: "/videos/testimonial-jens.mp4", poster: "/videos/posters/testimonial-jens.jpg", title: "Testimonial Jens" },
  { src: "/videos/testimonial-markus.mp4", poster: "/videos/posters/testimonial-markus.jpg", title: "Testimonial Markus" },
];

// Die Liste steht dreimal hintereinander (Kopie, echt, Kopie). Nach jedem
// Scrollen springt die Position unsichtbar zurück in den mittleren Satz,
// dadurch geht es nach dem letzten Video endlos wieder mit dem ersten weiter.
const COPIES = 3;
const GAP_PX = 20; // gap-5

// Nur ein Video spielt gleichzeitig: wer startet, meldet sich hier
const PLAY_EVENT = "alpha-testimonial-play";

// Breite eines ganzen Satzes (5 Karten inkl. Abstand)
function setWidthOf(el: HTMLDivElement | null) {
  if (!el || el.children.length < videos.length * 2) return 0;
  const first = el.children[0] as HTMLElement;
  const second = el.children[videos.length] as HTMLElement;
  return second.offsetLeft - first.offsetLeft;
}

// Bewusst kein Lautstärke-Regler: auf iPhones lässt sich die Lautstärke per
// Code nicht ändern (nur mit den Tasten), der Regler tat dort nichts.
// Ton an/aus funktioniert überall. Entscheid Francesco 15.09.2026.

type Mode = "idle" | "preview" | "sound" | "paused";

function VideoCard({
  video,
  id,
  autoPlay,
  onSoundChange,
}: {
  video: (typeof videos)[number];
  id: string;
  autoPlay: boolean;
  onSoundChange: (id: string, playing: boolean) => void;
}) {
  // idle: noch nie gestartet · preview: spielt stumm von selbst ·
  // sound: vom Besucher gestartet, mit Ton · paused: vom Besucher angehalten
  const [mode, setMode] = useState<Mode>("idle");
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const modeRef = useRef<Mode>("idle");

  const changeMode = useCallback(
    (next: Mode) => {
      modeRef.current = next;
      setMode(next);
      onSoundChange(id, next === "sound");
    },
    [id, onSoundChange]
  );

  // Sichtbarkeit: stumme Vorschau starten (nur erstes Video), alles andere
  // anhalten, sobald die Karte aus dem Bild scrollt
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const v = videoRef.current;
        if (!v) return;
        const current = modeRef.current;
        if (entry.isIntersecting) {
          if (autoPlay && current === "idle") {
            v.muted = true;
            v.play().then(() => changeMode("preview")).catch(() => {});
          }
        } else if (current === "preview") {
          v.pause();
          changeMode("idle");
        } else if (current === "sound") {
          v.pause();
          changeMode("paused");
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [autoPlay, changeMode]);

  // Startet ein anderes Video, hält dieses an
  useEffect(() => {
    const onOtherPlay = (e: Event) => {
      if ((e as CustomEvent<string>).detail === id) return;
      const v = videoRef.current;
      if (!v) return;
      const current = modeRef.current;
      if (current === "preview") {
        v.pause();
        changeMode("idle");
      } else if (current === "sound") {
        v.pause();
        changeMode("paused");
      }
    };
    window.addEventListener(PLAY_EVENT, onOtherPlay);
    return () => window.removeEventListener(PLAY_EVENT, onOtherPlay);
  }, [id, changeMode]);

  const startWithSound = (fromStart: boolean) => {
    const v = videoRef.current;
    if (!v) return;
    window.dispatchEvent(new CustomEvent(PLAY_EVENT, { detail: id }));
    if (fromStart) v.currentTime = 0;
    v.muted = false;
    setMuted(false);
    v.play()
      .then(() => changeMode("sound"))
      .catch(() => {
        // Browser verweigert Ton: dann wenigstens stumm abspielen
        v.muted = true;
        setMuted(true);
        v.play().then(() => changeMode("sound")).catch(() => {});
      });
  };

  const handleClick = () => {
    const v = videoRef.current;
    if (!v) return;
    if (mode === "sound") {
      v.pause();
      changeMode("paused");
    } else if (mode === "paused") {
      startWithSound(false);
    } else {
      // idle oder stumme Vorschau: mit Ton von vorne
      startWithSound(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !muted;
    setMuted(!muted);
  };

  return (
    <div
      ref={containerRef}
      className="w-[70vw] shrink-0 snap-start sm:w-[45vw] md:w-[calc((100%-2.5rem)/3)]"
    >
      <div
        className="group relative aspect-[9/16] cursor-pointer overflow-hidden rounded-3xl border border-border bg-dark"
        onClick={handleClick}
      >
        <video
          ref={videoRef}
          src={video.src}
          poster={video.poster}
          // 15 Karten (Liste dreimal): nichts vorladen, erst beim Abspielen
          preload="none"
          muted
          playsInline
          loop
          className="h-full w-full object-cover"
        />

        {/* Play-Knopf, solange nichts läuft */}
        {(mode === "idle" || mode === "paused") && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/40 bg-black/30 backdrop-blur-sm transition-all group-hover:border-orange group-hover:bg-orange/20">
              <Play
                className="h-7 w-7 text-white transition-colors group-hover:text-orange"
                fill="currentColor"
              />
            </div>
          </div>
        )}

        {/* Stumme Vorschau: Hinweis, dass ein Klick mit Ton startet */}
        {mode === "preview" && (
          <div className="pointer-events-none absolute bottom-4 left-1/2 flex -translate-x-1/2 animate-pulse items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 text-dark shadow-lg backdrop-blur-sm">
            <VolumeX className="h-5 w-5" />
            <span className="whitespace-nowrap text-sm font-semibold">Mit Ton ansehen</span>
          </div>
        )}

        {/* Mit Ton: nur das Lautsprecher-Symbol zum An- und Ausschalten */}
        {mode === "sound" && (
          <button
            type="button"
            onClick={toggleMute}
            className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
            aria-label={muted ? "Ton einschalten" : "Ton ausschalten"}
          >
            {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>
        )}
      </div>
    </div>
  );
}

export default function VideoTestimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const soundPlaying = useRef(new Set<string>());
  const settleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Zurück in den mittleren Satz springen (sieht gleich aus, darum unsichtbar)
  const normalize = useCallback(() => {
    const el = scrollRef.current;
    const w = setWidthOf(el);
    if (!el || !w) return;
    // Nicht springen, solange ein Video mit Ton läuft, sonst reisst es ab
    if (soundPlaying.current.size > 0) return;
    if (el.scrollLeft < w - 2) el.scrollLeft += w;
    else if (el.scrollLeft >= 2 * w - 2) el.scrollLeft -= w;
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const start = () => {
      const w = setWidthOf(el);
      if (w) el.scrollLeft = w;
    };
    start();
    const onScroll = () => {
      if (settleTimer.current) clearTimeout(settleTimer.current);
      settleTimer.current = setTimeout(normalize, 150);
    };
    let lastWidth = el.clientWidth;
    const onResize = () => {
      if (el.clientWidth === lastWidth) return;
      lastWidth = el.clientWidth;
      start();
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (settleTimer.current) clearTimeout(settleTimer.current);
    };
  }, [normalize]);

  const onSoundChange = useCallback((id: string, playing: boolean) => {
    if (playing) soundPlaying.current.add(id);
    else soundPlaying.current.delete(id);
  }, []);

  // Eine Karte pro Klick (Kartenbreite + gap-5)
  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + GAP_PX : 380;
    el.scrollBy({
      left: direction === "left" ? -step : step,
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

        {/* Endlos-Karussell: 3 sichtbar auf Desktop, Pfeile blättern weiter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto overflow-y-hidden pb-4 snap-x snap-mandatory md:pb-0"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              overscrollBehaviorX: "none",
            }}
          >
            {Array.from({ length: COPIES }).flatMap((_, copy) =>
              videos.map((video, i) => (
                <VideoCard
                  key={`${copy}-${i}`}
                  id={`${copy}-${i}`}
                  video={video}
                  // stumme Vorschau nur beim ersten echten Video
                  autoPlay={copy === 1 && i === 0}
                  onSoundChange={onSoundChange}
                />
              ))
            )}
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
        </motion.div>
      </div>
    </section>
  );
}
