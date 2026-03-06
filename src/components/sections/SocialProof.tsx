import Image from "next/image";
import { Shield } from "lucide-react";
import { certifications } from "@/lib/content";

export default function SocialProof() {
  return (
    <section className="border-b border-border bg-bg-alt">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-6 md:flex-row">
        <div className="flex items-center gap-2 text-sm text-text-secondary">
          <Shield className="h-4 w-4 text-dark" />
          <span className="font-medium">Krankenkassen anerkannt</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {certifications.map((cert) =>
            cert.logo.includes("qualitop") ? (
              <Image
                key={cert.name}
                src={cert.logo}
                alt={cert.name}
                width={80}
                height={32}
                className="h-8 w-auto opacity-60 grayscale"
              />
            ) : (
              <div
                key={cert.name}
                className="text-sm font-semibold uppercase tracking-widest text-muted"
              >
                {cert.name}
              </div>
            )
          )}
          <div className="flex items-center gap-1.5 text-sm font-medium text-dark">
            <span className="text-lg text-amber-500">★</span>
            <span>
              5.0 auf Google{" "}
              <span className="text-muted">— 68 Bewertungen</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
