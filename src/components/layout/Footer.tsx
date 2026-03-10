import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="relative inline-block h-12 w-36">
              <Image
                src="/images/alpha-logo-B-personaltraining.png"
                alt="Alpha Sports"
                fill
                className="object-contain object-left invert"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Personal Training Studio im Herzen von St. Gallen. Individuell, privat,
              effektiv. Krankenkassen anerkannt.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 transition-colors hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 transition-colors hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 transition-colors hover:text-white"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Training */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Training
            </h3>
            <ul className="space-y-3">
              {[
                ["Personal Training", "/personal-training"],
                ["Gruppenkurse", "/gruppenkurse"],
                ["Online Coaching", "/online-coaching"],
                ["HYROX", "/hyrox"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Analysen & Mehr */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Analysen & Mehr
            </h3>
            <ul className="space-y-3">
              {[
                ["InBody Analyse", "/analysen/inbody"],
                ["Stoffwechsel- und Stressanalyse", "/analysen/metabolismus"],
                ["Leistungsanalyse", "/analysen/leistung"],
                ["Ernährungsberatung", "/ernaehrungsberatung"],
                ["Preise", "/preise"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-white/50">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  {siteConfig.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Alpha Sports. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex gap-6">
            {[
              ["Impressum", "/impressum"],
              ["AGB", "/agb"],
              ["Datenschutz", "/datenschutz"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-xs text-white/40 transition-colors hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
