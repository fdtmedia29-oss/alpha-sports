"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { X, ArrowRight } from "lucide-react";

/**
 * Pop-up für die HYROX Race Simulation am 3. Oktober 2026.
 *
 * Verschwindet von selbst, sobald der Anmeldeschluss durch ist — niemand muss
 * daran denken, es wieder auszubauen. Erscheint einmal pro Browser-Sitzung und
 * nie auf der Race-Seite selbst.
 */

const ENDE = new Date("2026-10-01T00:00:00+02:00");
const SPEICHER = "race2026-popup";
const VERZOEGERUNG = 2600;

export default function RacePopup() {
  const pfad = usePathname();
  const [offen, setOffen] = useState(false);
  const [sichtbar, setSichtbar] = useState(false);

  useEffect(() => {
    if (Date.now() >= ENDE.getTime()) return;
    if (pfad?.startsWith("/race")) return;

    try {
      if (window.sessionStorage.getItem(SPEICHER)) return;
    } catch {
      // Privater Modus oder blockierte Speicherung: dann zeigen wir es halt.
    }

    const t = setTimeout(() => setOffen(true), VERZOEGERUNG);
    return () => clearTimeout(t);
  }, [pfad]);

  useEffect(() => {
    if (!offen) return;
    const t = setTimeout(() => setSichtbar(true), 20);
    const esc = (e: KeyboardEvent) => e.key === "Escape" && schliessen();
    document.addEventListener("keydown", esc);
    const vorher = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", esc);
      document.body.style.overflow = vorher;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offen]);

  function schliessen() {
    try {
      window.sessionStorage.setItem(SPEICHER, "gesehen");
    } catch {
      // nicht schlimm, dann sieht der Besucher es beim nächsten Mal nochmal
    }
    setSichtbar(false);
    setTimeout(() => setOffen(false), 220);
  }

  if (!offen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="race-popup-titel"
      className={`fixed inset-0 z-[70] flex items-end justify-center p-0 transition-opacity duration-200 sm:items-center sm:p-6 ${
        sichtbar ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        aria-label="Schliessen"
        onClick={schliessen}
        className="absolute inset-0 h-full w-full cursor-default bg-black/65 backdrop-blur-sm"
      />

      <div
        className={`relative w-full max-w-[420px] overflow-hidden rounded-t-3xl bg-white shadow-2xl transition-all duration-300 sm:rounded-3xl ${
          sichtbar ? "translate-y-0 scale-100" : "translate-y-6 scale-[0.98]"
        }`}
      >
        <button
          onClick={schliessen}
          aria-label="Schliessen"
          className="absolute right-3.5 top-3.5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-md transition hover:bg-black/70"
        >
          <X className="h-[18px] w-[18px]" />
        </button>

        <div className="relative h-[190px] w-full sm:h-[210px]">
          {/* Statisches HTML-Asset der Race-Seite, darum bewusst kein next/image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/race/img/hero.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
          <div className="absolute bottom-4 left-5 right-5">
            <div className="text-[14px] font-extrabold uppercase tracking-[1.8px] text-orange sm:text-[15px]">
              5 Jahre Alpha Sports
            </div>
            <div className="mt-1 text-[22px] font-black leading-tight tracking-tight text-white">
              HYROX Race Simulation
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <p id="race-popup-titel" className="text-[15px] leading-relaxed text-text-secondary">
            Am <b className="font-bold text-text">Samstag, 3. Oktober</b> feiern wir
            <b className="font-bold text-text"> 5 Jahre Alpha Sports</b> mit einer
            HYROX Race Simulation. Full oder Half, alleine oder zu zweit – du kannst
            dich kostenlos anmelden.
          </p>

          <a
            href="/race"
            onClick={schliessen}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-orange px-5 py-4 text-[16px] font-extrabold text-white transition hover:bg-orange-hover"
          >
            Startplatz sichern
            <ArrowRight className="h-[18px] w-[18px]" />
          </a>

          <button
            onClick={schliessen}
            className="mt-2.5 w-full py-2 text-[13.5px] font-semibold text-muted transition hover:text-text"
          >
            Vielleicht später
          </button>
        </div>
      </div>
    </div>
  );
}
