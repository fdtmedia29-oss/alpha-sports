import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktiere Alpha Sports St. Gallen. Kostenloses Beratungsgespräch buchen, WhatsApp, Telefon, E-Mail. Unterer Graben 21, 9000 St. Gallen.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        badge="Kontakt"
        title="Wir freuen uns auf dich."
        description="Buche ein kostenloses Beratungsgespräch oder schreib uns direkt. Wir melden uns innerhalb von 24 Stunden."
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
                    <div className="text-sm text-muted">Studio</div>
                    <div className="font-semibold text-text">
                      {siteConfig.address}
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

            {/* Map & Booking */}
            <div>
              <h2 className="text-2xl font-bold text-text">
                Kostenloses Beratungsgespräch
              </h2>
              <p className="mt-4 text-text-secondary">
                Mit dem kostenlosen Beratungsgespräch machst du den ersten
                Schritt zu deiner Bestform! 30 Minuten, unverbindlich. Melde
                dich per WhatsApp, Telefon oder E-Mail.
              </p>

              <div className="mt-8 rounded-2xl bg-bg-alt p-6">
                <h3 className="font-semibold text-text">
                  Was dich erwartet:
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Kennenlernen",
                    "Ermittlung des IST-Zustandes",
                    "Klares Definieren der Ziele",
                    "Check Up deines Gesundheitszustandes",
                    "Planung der individuellen Strategie",
                    "Passendes Angebot",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-2xl bg-bg-alt p-6">
                <h3 className="font-semibold text-text">
                  Stell dir vorab folgende Fragen:
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Willst du in deinem Leben wirklich etwas verändern?",
                    "Wie viel Zeit kannst du dir für dein Ziel pro Woche nehmen?",
                    "Welches Budget hast du für dein Ziel?",
                    "Können wir dein Ziel sofort in Angriff nehmen?",
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
