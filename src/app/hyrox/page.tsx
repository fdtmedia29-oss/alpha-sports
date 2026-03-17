import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import PhotoCarousel from "@/components/ui/PhotoCarousel";
import InlineVideo from "@/components/ui/InlineVideo";
import Image from "next/image";
import { Check, ArrowRight, Shield } from "lucide-react";
import Link from "next/link";
import { certifications } from "@/lib/content";

export const metadata: Metadata = {
  title: "HYROX Training",
  description:
    "HYROX Training und Wettkampfvorbereitung bei Alpha Sports St. Gallen. HYROX365 zertifizierte Trainer. Funktionelle Kraft und Ausdauer.",
};

export default function HyroxPage() {
  return (
    <>
      <PageHero
        badge="HYROX"
        title="Ein Ziel. Eine Challenge. Ein Team, das dich pusht!"
        description="HYROX ist das weltweit erste Fitnessrennen, das funktionelles Training, Kraft und Ausdauer in einem einzigartigen Wettkampf vereint."
        ctaText="Jetzt Buchen"
        ctaHref="/kostenloses-beratungsgespraech"
        backgroundImage="/images/classes/hyrox-gruppenkurs.jpg"
      />

      {/* Intro with video */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <span className="text-sm font-semibold uppercase tracking-widest text-orange">
                HYROX Gruppenkurs
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
                Mehr Power. Mehr Ausdauer. Mehr Selbstbewusstsein.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                HYROX ist das weltweit erste Fitnessrennen, das funktionelles
                Training, Kraft und Ausdauer in einem einzigartigen Wettkampf
                vereint.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                In unserem HYROX-Gruppenkurs trainierst du gezielt für diese
                Herausforderung – mit Workouts, die dich stärker, schneller und
                leistungsfähiger machen. Egal, ob du auf einen Wettkampf
                hinarbeiten oder einfach deine Bestform erreichen willst, hier
                findest du die perfekte Mischung aus Teamspirit, intensiver
                Challenge und echter Weiterentwicklung.
              </p>
              <div className="mt-8">
                <Link
                  href="/kostenloses-beratungsgespraech"
                  className="group inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-orange/90 hover:gap-3"
                >
                  Jetzt Buchen
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:col-span-2">
              <InlineVideo src="/videos/hyrox-1.mp4" />
            </div>
          </div>
        </div>
      </section>

      {/* Was dich erwartet */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/classes/hyrox-ski-erg.jpg"
                alt="HYROX Training"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-orange">
                Was dich erwartet
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
                Ganzkörper-Athletik auf neuem Level.
              </h2>
              <div className="mt-8 space-y-4">
                {[
                  "Kraft, Ausdauer & funktionelle Performance",
                  "Athletisches Ganzkörpertraining",
                  "Strukturierte Vorbereitung auf den Wettkampf",
                  "Motivation & Wettkampf-Spirit",
                  "Einsteiger & Fortgeschrittene",
                  "Muskelaufbau, Kraftentwicklung & Bodyforming",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-light">
                      <Check className="h-3.5 w-3.5 text-orange" />
                    </div>
                    <span className="text-sm text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <Image
          src="/images/classes/hyrox-abklatschen.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark/75" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-4xl">
            HYROX bei Alpha Sports.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/60">
            Kombiniere funktionelle Kraft mit Ausdauer und erlebe das ultimative
            Trainingserlebnis. Ob als Vorbereitung auf deinen nächsten
            HYROX-Wettkampf oder als neue Herausforderung im Alltag — unser
            HYROX-Gruppenkurs bringt dich an dein Limit und darüber hinaus.
            Effektiv, fordernd und motivierend — in einer Community, die dich
            pusht.
          </p>
          <div className="mt-8">
            <Link
              href="/kostenloses-beratungsgespraech"
              className="group inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 text-base font-semibold text-white transition-all hover:bg-orange/90 hover:gap-3"
            >
              Jetzt Buchen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Community Race Photos */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              HYROX Community
            </span>
            <h2 className="mt-4 text-2xl font-bold text-text md:text-3xl">
              Unsere Athleten im Wettkampf.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {[
              "Hyrox Bild Chantal & Livio.jpeg",
              "Hyrox Race Bild Rebekka Widmer.jpeg",
              "Hyrox Race Bild Rebekka.jpeg",
              "Katja Egli Hyrox Race Bild.jpeg",
              "Martin Waldburger Hyrox Race Alpha Sports Logo.jpeg",
              "Martin Waldburger Hyrox Race Wall Balls.jpeg",
              "Katja Egli Wall Balls.jpg",
              "21415_20260118_181449_610464714_socialmedia.jpg",
              "21415_20260118_190213_610521623_socialmedia.jpg",
              "21415_20260118_191245_610554984_socialmedia.jpg",
              "21415_20260118_192022_610565971_socialmedia.jpg",
              "21415_20260118_192327_610566743_socialmedia.jpg",
            ].map((img) => (
              <div key={img} className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={`/images/classes/hyrox-race/${img}`}
                  alt="HYROX Race"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Carousel */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <PhotoCarousel
            title="HYROX Training"
            images={[
              "/images/classes/hyrox-abklatschen.jpg",
              "/images/classes/hyrox-ski-erg.jpg",
              "/images/classes/hyrox-gruppenkurs.jpg",
              "/images/classes/hyrox-race/Hyrox Bild Chantal & Livio.jpeg",
              "/images/classes/hyrox-race/Hyrox Race Bild Rebekka Widmer.jpeg",
              "/images/classes/hyrox-race/Katja Egli Hyrox Race Bild.jpeg",
              "/images/classes/hyrox-race/Martin Waldburger Hyrox Race Alpha Sports Logo.jpeg",
              "/images/classes/hyrox-race/Katja Egli Wall Balls.jpg",
              "/images/classes/hyrox-race/21415_20260118_181449_610464714_socialmedia.jpg",
              "/images/classes/hyrox-race/21415_20260118_190213_610521623_socialmedia.jpg",
              "/images/classes/hyrox-race/21415_20260118_192022_610565971_socialmedia.jpg",
            ]}
          />
        </div>
      </section>

      {/* Krankenkassen + Google Reviews */}
      <section className="border-y border-border bg-white">
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

      <CTABanner
        title="Bereit für HYROX?"
        description="Egal ob dein erstes Race oder deine neue Bestzeit — wir bringen dich hin. Starte mit einem kostenlosen Beratungsgespräch."
      />
    </>
  );
}
