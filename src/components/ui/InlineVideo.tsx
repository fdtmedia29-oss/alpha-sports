"use client";

import { useRef, useState, useEffect } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

export default function InlineVideo({ src }: { src: string }) {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!videoRef.current || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
          setPlaying(true);
        } else {
          videoRef.current?.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-[9/16] w-full max-w-[280px] cursor-pointer overflow-hidden rounded-2xl bg-dark lg:max-w-[320px]"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        loop
        className="h-full w-full object-cover"
      />
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/40 bg-black/30 backdrop-blur-sm">
            <Play className="h-6 w-6 text-white" fill="currentColor" />
          </div>
        </div>
      )}
      {playing && (
        <button
          onClick={toggleMute}
          className={`absolute bottom-4 flex items-center gap-2 backdrop-blur-sm transition-all ${
            muted
              ? "left-1/2 -translate-x-1/2 animate-pulse rounded-full bg-white/90 px-4 py-2 text-dark shadow-lg"
              : "right-4 rounded-full bg-black/40 p-2.5 hover:bg-black/60"
          }`}
          aria-label={muted ? "Ton einschalten" : "Ton ausschalten"}
        >
          {muted ? (
            <>
              <VolumeX className="h-4 w-4" />
              <span className="text-sm font-semibold">Ton einschalten</span>
            </>
          ) : (
            <Volume2 className="h-4 w-4 text-white" />
          )}
        </button>
      )}
    </div>
  );
}
