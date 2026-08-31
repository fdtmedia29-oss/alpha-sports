"use client";

import { ArrowUpRight } from "lucide-react";

/**
 * Buchungs-Auswahl für nutrilize (portal.nutrilize.app).
 *
 * Löst die alten Virtuagym-Widgets ab (Umstellung 31.08.2026, Links von Luigi).
 *
 * BEWUSST kein iframe: nutrilize erlaubt das Einbetten zwar technisch
 * (kein X-Frame-Options, keine frame-ancestors), aber der Buchungsflow
 * verlangt Login oder "Continue as guest" und braucht dafür Storage-Zugriff.
 * Den klemmt Chrome im Fremd-iframe ab — getestet 31.08.2026: die Karte
 * rendert, der Buchen-Button tut dann aber nichts. In Safari/iOS wäre es
 * noch strenger. Deshalb öffnen wir nutrilize in einem neuen Tab.
 */

export type BuchungsOption = {
  label: string;
  url: string;
  beschreibung?: string;
};

export default function NutrilizeBooking({
  optionen,
  titel = "Jetzt buchen",
  ueberschrift,
  text,
}: {
  optionen: BuchungsOption[];
  titel?: string;
  ueberschrift: string;
  text?: string;
}) {
  const einzeln = optionen.length === 1;

  return (
    <section id="buchen" className="scroll-mt-24 section-padding bg-bg-alt">
      <div className={`mx-auto ${einzeln ? "max-w-2xl" : "max-w-5xl"}`}>
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange">
            {titel}
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-text md:text-3xl">
            {ueberschrift}
          </h2>
          {text && <p className="mt-3 text-text-secondary">{text}</p>}
        </div>

        <div
          className={`grid gap-5 ${
            einzeln ? "grid-cols-1" : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {optionen.map((opt) => (
            <a
              key={opt.url}
              href={opt.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-border bg-white p-7 transition-all hover:border-orange hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-text">{opt.label}</h3>
              {opt.beschreibung && (
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                  {opt.beschreibung}
                </p>
              )}
              <span className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white transition-all group-hover:gap-3">
                Termin buchen
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-text-secondary">
          Die Buchung öffnet sich in einem neuen Fenster.
        </p>
      </div>
    </section>
  );
}
