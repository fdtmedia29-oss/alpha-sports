import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Angaben von Alpha Sports GmbH, St. Gallen.",
};

export default function ImpressumPage() {
  return (
    <section className="section-padding bg-white pt-28">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-text">Impressum</h1>

        <div className="mt-8 space-y-8 text-text-secondary leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-text">Unternehmen</h2>
            <p className="mt-2">
              Alpha Sports GmbH
              <br />
              Unterer Graben 21
              <br />
              9000 St. Gallen
              <br />
              Schweiz
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text">Kontakt</h2>
            <p className="mt-2">
              Telefon: +41 76 390 36 79
              <br />
              E-Mail: info@alpha-sports.ch
              <br />
              Website: alpha-sports.ch
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text">
              Vertretungsberechtigte Person
            </h2>
            <p className="mt-2">Luigi Lieberherr, Geschäftsführer</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text">Haftungsausschluss</h2>
            <p className="mt-2">
              Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen
              Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und
              Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor
              wegen Schäden materieller oder immaterieller Art, welche aus dem
              Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten
              Informationen entstanden sind, werden grundsätzlich ausgeschlossen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text">Urheberrechte</h2>
            <p className="mt-2">
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder
              anderen Dateien auf dieser Website gehören ausschliesslich der Alpha
              Sports GmbH oder den speziell genannten Rechtsinhabern.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text">Website</h2>
            <p className="mt-2">
              Design & Entwicklung:{" "}
              <a
                href="https://domai.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-text underline underline-offset-4 hover:text-orange"
              >
                DomAI
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
