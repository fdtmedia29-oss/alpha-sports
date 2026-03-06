import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { Phone, Mail, MapPin, MessageCircle, Check } from "lucide-react";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktiere Alpha Sports St. Gallen. Kostenloses Beratungsgespraech buchen, WhatsApp, Telefon, E-Mail. Unterer Graben 21 & Rorschacher Str. 59, 9000 St. Gallen.",
};

const consultationSteps = [
  { step: "01", text: "Kennenlernen — wer bist du und wo stehst du?" },
  { step: "02", text: "Standortbestimmung — deine aktuelle Situation erfassen" },
  { step: "03", text: "Zieldefinition — klar formulieren, was du erreichen willst" },
  { step: "04", text: "Gesundheits-Check — deinen Gesundheitszustand pruefen" },
  { step: "05", text: "Strategieplanung — einen personalisierten Ansatz entwickeln" },
  { step: "06", text: "Massgeschneidertes Angebot — das passende Programm fuer dich" },
];

const interestOptions = [
  "Beratungsgespraech",
  "Probetraining",
  "Personal Training",
  "Gruppenkurs",
  "HYROX",
  "Schwangerschaftscoaching",
  "Schwangerschaftskurs",
  "Ernaehrungscoaching",
  "Analyse",
  "Massagen",
  "Frau-zu-Frau Personal Training",
  "Geschenkgutschein",
];

const goalOptions = [
  "Gewicht reduzieren",
  "Schmerzfrei werden",
  "Muskeln aufbauen",
  "Sportartspezifisch trainieren",
  "Fit & gesund durch die Schwangerschaft",
];

export default function KontaktPage() {
  return (
    <>
      <PageHero
        badge="Kontakt"
        title="Wir freuen uns auf dich."
        description="Buche ein kostenloses Beratungsgespraech oder schreib uns direkt. Wir melden uns innerhalb von 24 Stunden."
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-text">Kontaktdaten</h2>
              <div className="mt-8 space-y-6">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-4 rounded-xl border border-border p-4 transition-all hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-light">
                    <Phone className="h-5 w-5 text-orange" />
                  </div>
                  <div>
                    <div className="text-sm text-muted">Telefon</div>
                    <div className="font-semibold text-text">
                      {siteConfig.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-border p-4 transition-all hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366]/10">
                    <MessageCircle className="h-5 w-5 text-[#25D366]" />
                  </div>
                  <div>
                    <div className="text-sm text-muted">WhatsApp</div>
                    <div className="font-semibold text-text">
                      Direkt schreiben
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 rounded-xl border border-border p-4 transition-all hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-light">
                    <Mail className="h-5 w-5 text-orange" />
                  </div>
                  <div>
                    <div className="text-sm text-muted">E-Mail</div>
                    <div className="font-semibold text-text">
                      {siteConfig.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-xl border border-border p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-light">
                    <MapPin className="h-5 w-5 text-orange" />
                  </div>
                  <div>
                    <div className="text-sm text-muted">Studio 1</div>
                    <div className="font-semibold text-text">
                      {siteConfig.address}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl border border-border p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-light">
                    <MapPin className="h-5 w-5 text-orange" />
                  </div>
                  <div>
                    <div className="text-sm text-muted">Studio 2</div>
                    <div className="font-semibold text-text">
                      {siteConfig.addressSecondary}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-8">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-secondary">
                  Folge uns
                </h3>
                <div className="flex gap-3">
                  {[
                    { name: "Instagram", href: siteConfig.instagram },
                    { name: "Facebook", href: siteConfig.facebook },
                    { name: "YouTube", href: siteConfig.youtube },
                  ].map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-bg-alt px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-dark hover:text-text"
                    >
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking & Consultation */}
            <div>
              <h2 className="text-2xl font-bold text-text">
                Kostenloses Beratungsgespraech
              </h2>
              <p className="mt-4 text-text-secondary">
                Dein erster Schritt zu deiner Bestform. 30 Minuten, unverbindlich.
                Wir lernen dich kennen, besprechen deine Ziele und entwickeln eine
                nachhaltige Strategie, die in deinen Alltag passt.
              </p>

              {/* What happens in the consultation */}
              <div className="mt-8">
                <h3 className="font-semibold text-text">
                  Was dich im Beratungsgespraech erwartet:
                </h3>
                <div className="mt-4 space-y-4">
                  {consultationSteps.map((s) => (
                    <div key={s.step} className="flex gap-3">
                      <span className="text-lg font-black text-orange">
                        {s.step}
                      </span>
                      <p className="pt-0.5 text-sm text-text-secondary">{s.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Qualification questions */}
              <div className="mt-8 rounded-2xl bg-bg-alt p-6">
                <h3 className="font-semibold text-text">
                  Stell dir vorab folgende Fragen:
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Willst du in deinem Leben wirklich etwas veraendern?",
                    "Hast du woechentlich Zeit fuer deine Ziele?",
                    "Hast du ein Budget fuer deine Gesundheit eingeplant?",
                    "Bist du bereit, sofort zu starten, wenn das Angebot passt?",
                  ].map((q) => (
                    <li
                      key={q}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                      {q}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-muted">
                  Wenn du alle mit Ja beantworten kannst, bist du bei uns
                  richtig. Wir bringen dich auf dem schnellsten Weg zu deinem
                  Ziel.
                </p>
              </div>

              {/* Interest and goals tags */}
              <div className="mt-8">
                <h3 className="mb-3 text-sm font-semibold text-text">
                  Wofuer interessierst du dich?
                </h3>
                <div className="flex flex-wrap gap-2">
                  {interestOptions.map((opt) => (
                    <span
                      key={opt}
                      className="rounded-full bg-bg-alt px-3 py-1.5 text-xs font-medium text-text-secondary"
                    >
                      {opt}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="mb-3 text-sm font-semibold text-text">
                  Was ist dein Ziel?
                </h3>
                <div className="flex flex-wrap gap-2">
                  {goalOptions.map((opt) => (
                    <span
                      key={opt}
                      className="rounded-full bg-orange-light px-3 py-1.5 text-xs font-medium text-orange"
                    >
                      {opt}
                    </span>
                  ))}
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="mt-8 overflow-hidden rounded-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.5!2d9.3767!3d47.4245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b1e4a40000001%3A0x1!2sUnterer+Graben+21%2C+9000+St.+Gallen!5e0!3m2!1sde!2sch!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Alpha Sports Standort"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
