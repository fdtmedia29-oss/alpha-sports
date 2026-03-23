import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Angaben von Alpha Sports GmbH, St. Gallen.",
};

export default function ImpressumPage() {
  return (
    <section className="bg-white pb-20 pt-44 md:pb-28 md:pt-52">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-bold text-text md:text-4xl">Impressum</h1>

        <div className="mt-10 space-y-8 text-text-secondary leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-text">Angaben gemäss § 5 TMG</h2>
            <p className="mt-2">
              Alpha Sports GmbH
              <br />
              Rorschacherstr. 59
              <br />
              9000 St. Gallen
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text">Handelsregister</h2>
            <p className="mt-2">
              CH-320.4.090.700-6
              <br />
              Handelsregister-Amt St. Gallen
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text">Vertreten durch</h2>
            <p className="mt-2">Luigi Lieberherr</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text">Kontakt</h2>
            <p className="mt-2">
              Telefon:{" "}
              <a href="tel:+41763903679" className="underline underline-offset-4 hover:text-orange">
                +41 76 390 36 79
              </a>
              <br />
              E-Mail:{" "}
              <a href="mailto:info@alpha-sports.ch" className="underline underline-offset-4 hover:text-orange">
                info@alpha-sports.ch
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text">Umsatzsteuer-ID</h2>
            <p className="mt-2">
              Umsatzsteuer-Identifikationsnummer gemäss § 27 a Umsatzsteuergesetz:
              <br />
              CHE-429.490.058
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text">Wirtschafts­identifikations­nummer</h2>
            <p className="mt-2">CHE-429.490.058</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text">Verbraucher­streit­beilegung / Universal­schlichtungs­stelle</h2>
            <p className="mt-2">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
              vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
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
