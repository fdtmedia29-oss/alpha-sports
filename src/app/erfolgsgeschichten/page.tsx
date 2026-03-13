import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import CTABanner from "@/components/sections/CTABanner";
import { Star, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Erfolgsgeschichten",
  description:
    "Erfolgsgeschichten und Testimonials von Alpha Sports Kunden. Abnehmen, Muskelaufbau, Schmerzfreiheit — echte Ergebnisse von echten Menschen in St. Gallen.",
};

const detailedTestimonials = [
  {
    name: "Dr. med. univ. Philipp Krenn",
    result: "Arzt & Sportler",
    quote:
      "Luigi ist einer der Besten in seinem Fach. Er hat umfangreiches Wissen in Ernährung und passt das Training perfekt an meine Bedürfnisse an — trotz Skoliose. Mein Training wurde auf ein neues Level gehoben. Das gut ausgestattete Studio und die Boot Camp Kurse runden das Angebot perfekt ab. Luigi ist flexibel bei der Terminplanung und zeigt echtes physiologisches Verständnis.",
    details: [
      "Training auf neues Level gehoben trotz Skoliose",
      "Umfangreiches Ernährungswissen",
      "Flexible Terminplanung",
      "Vertrauen und physiologisches Verständnis",
    ],
  },
  {
    name: "Peter M.",
    result: "Muskelaufbau & Fettabbau",
    quote:
      "Personal Training hat mir auf vielfältige Weise weitergeholfen. Individualisierte Programme, Motivation, Disziplin, korrekte Technik, Trainingsvielfalt und schnelle Fortschritte. Deutlich Muskelmasse aufgebaut, Körperfett reduziert. Meine Blutwerte haben sich innerhalb kurzer Zeit auf hervorragende Werte verbessert.",
    details: [
      "Signifikanter Muskelaufbau mit Fettabbau",
      "Blutwerte in kurzer Zeit hervorragend verbessert",
      "Nimmt jetzt die Treppe statt den Lift",
      "Trainiert weiter um Gewicht zu halten und im Alter selbstständig zu bleiben",
    ],
  },
  {
    name: "Chantal S.",
    result: "Zielgewicht erreicht & gehalten",
    quote:
      "Das Personal Training ist mein physischer Ausgleich. Mein Zielgewicht erreicht und gehalten — durch Training und richtige Ernährung. Immunsystem gestärkt, weniger krank. Besseres Stressmanagement und mentale Fitness durch das Training. Die abwechslungsreichen Übungen und die persönlich angepassten Trainings machen jede Session einzigartig.",
    details: [
      "Zielgewicht erreicht und langfristig gehalten",
      "Immunsystem gestärkt, weniger Krankheitstage",
      "Besseres Stressmanagement",
      "Richtige Ernährung gelernt",
    ],
  },
  {
    name: "Livio C.",
    result: "+10 kg Muskelmasse in 2 Jahren",
    quote:
      "10 kg Muskelmasse in 2 Jahren aufgebaut durch gezieltes Training. Ich fühle mich im Alltag ausgeglichener. Training hilft mir, den Arbeitsstress auszugleichen. Modernes Studio mit viel Platz und top motivierte Trainer. Positives Feedback von Bekannten motiviert zusätzlich — und ich will meine sportlichen Grenzen weiter ausdehnen.",
    details: [
      "10 kg Muskelmasse in 2 Jahren",
      "Bessere Alltagsfitness",
      "Positives Feedback von Bekannten",
      "Sportliche Grenzen weiter ausdehnen",
    ],
  },
  {
    name: "Michele",
    result: "Gewichtsverlust & weniger Rückenschmerzen",
    quote:
      "Gewicht verloren, Rückenschmerzen reduziert — durch die richtige Übungsauswahl. Die grösste Veränderung war mental: Ich habe Struktur, Energie und Ausdauer gewonnen. Ich habe gelernt, meinen Körper zu akzeptieren und mich selbst wieder mehr zu lieben. Luigi hat mich auch ausserhalb des Trainings unterstützt, mit Leidenschaft und echtem Interesse an meinen Zielen.",
    details: [
      "Gewichtsverlust und Rückenschmerzen reduziert",
      "Mentale Transformation: Struktur, Energie, Ausdauer",
      "Körperakzeptanz und Selbstliebe gelernt",
      "Trainiert jetzt selbstständig mit positiver Einstellung",
    ],
  },
];

export default function ErfolgsgeschichtenPage() {
  return (
    <>
      <PageHero
        badge="Erfolgsgeschichten"
        title="Echte Ergebnisse. Echte Menschen."
        description="Was unsere Kunden über ihre Transformation bei Alpha Sports sagen. Physische und mentale Veränderungen, die das Leben verändern."
      />

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-8">
            {detailedTestimonials.map((t) => (
              <div
                key={t.name}
                className="relative rounded-2xl border border-border bg-white p-8 transition-all hover:shadow-lg md:p-10"
              >
                <Quote className="absolute right-6 top-6 h-8 w-8 text-surface" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Detailed results */}
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {t.details.map((d) => (
                    <div key={d} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                      {d}
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-border pt-6">
                  <div className="font-semibold text-text">{t.name}</div>
                  <div className="mt-1 text-sm font-medium text-orange">
                    {t.result}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-bg-alt p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold text-text">
              5.0 auf Google — 68+ Bewertungen
            </h2>
            <p className="mt-4 text-text-secondary">
              Unsere Kunden bewerten uns mit 5.0 von 5 Sternen.
              Überzeuge dich selbst auf Google Maps.
            </p>
            <a
              href="https://www.google.com/maps/place/Alpha+Sports"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-dark px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-dark-surface"
            >
              Google Bewertungen lesen
            </a>
          </div>
        </div>
      </section>

      {/* Before/After Photo Grid */}
      <section className="section-padding bg-bg-alt">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-orange">
              Transformationen
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
              Vorher — Nachher
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
              Echte Ergebnisse unserer Kunden. Jede Transformation ist einzigartig — und jede beginnt mit dem ersten Schritt.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "/images/results/beitrag-vorher-nachher-vergleich-dietmar-grichnik.jpg",
              "/images/results/beitrag-vorher-nachher-vergleich-simon-gisler.jpg",
              "/images/results/vorher-nachher-vergleich-claudine-g.-beitrag.png",
              "/images/results/vorher-nachher-vergleich-markus-richina-jpg.jpg",
              "/images/results/vorher-nachher-vergleich-peter-meier.png",
              "/images/results/vorher-nacher-vergleich-izadora-d..png",
            ].map((src, i) => (
              <div
                key={src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-white"
              >
                <Image
                  src={src}
                  alt={`Vorher-Nachher Transformation ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Werde die nächste Erfolgsgeschichte."
        description="Starte jetzt mit einem kostenlosen Beratungsgespräch und schreibe deine eigene Story."
      />
    </>
  );
}
