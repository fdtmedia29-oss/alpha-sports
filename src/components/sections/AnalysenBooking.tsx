"use client";

import { useState } from "react";
import Script from "next/script";

const bookingOptions = [
  { label: "InBody Analyse", widgetKey: "64231731b19d6c001b9b9bfb" },
  { label: "Stoffwechselanalyse", widgetKey: "685074cf6ace8e001b595d45" },
  { label: "Leistungsanalyse", widgetKey: "68507560b67c9b0018bf34a7" },
];

export default function AnalysenBooking() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = bookingOptions[activeIdx];

  return (
    <section id="buchen" className="scroll-mt-24 section-padding bg-bg-alt">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange">
            Jetzt buchen
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-text md:text-3xl">
            Analyse direkt buchen.
          </h2>
          <p className="mt-3 text-text-secondary">
            Wähle deine Analyse und buche deinen Termin.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {bookingOptions.map((opt, idx) => (
            <button
              key={opt.label}
              onClick={() => setActiveIdx(idx)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                idx === activeIdx
                  ? "bg-orange text-white"
                  : "bg-white text-text-secondary border border-border hover:border-orange hover:text-orange"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Widget */}
        <div
          key={active.widgetKey}
          dangerouslySetInnerHTML={{
            __html: `
              <vg-guest-booking
                widget-key="${active.widgetKey}"
                club-id="70387"
                lang="de"
                source=""
              ></vg-guest-booking>
            `,
          }}
        />
        <Script
          src="https://static.virtuagym.com/vg-guest-booking-widget/dist/js/app.js"
          strategy="afterInteractive"
        />
      </div>
    </section>
  );
}
