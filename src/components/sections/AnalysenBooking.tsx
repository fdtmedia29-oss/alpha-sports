"use client";

import NutrilizeBooking from "./NutrilizeBooking";
import { analysenOptionen } from "@/lib/booking";

export default function AnalysenBooking() {
  return (
    <NutrilizeBooking
      optionen={analysenOptionen}
      ueberschrift="Analyse direkt buchen."
      text="Wähle deine Analyse und buche deinen Termin."
    />
  );
}
