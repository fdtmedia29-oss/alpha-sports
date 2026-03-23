import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB",
  description: "Allgemeine Geschäftsbedingungen der Alpha Sports GmbH, St. Gallen.",
};

export default function AGBPage() {
  return (
    <section className="bg-white pb-20 pt-44 md:pb-28 md:pt-52">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-bold text-text">
          Allgemeine Geschäftsbedingungen
        </h1>

        <div className="mt-8 space-y-8 text-text-secondary leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-text">1. Geltungsbereich</h2>
            <p className="mt-2">
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle
              Dienstleistungen und Angebote der Alpha Sports GmbH, Unterer Graben
              21, 9000 St. Gallen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text">2. Vertragsabschluss</h2>
            <p className="mt-2">
              Ein Vertrag kommt durch die Annahme des Angebots durch den Kunden
              zustande. Dies kann mündlich, schriftlich oder durch konkludentes
              Handeln erfolgen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text">3. Preise und Zahlung</h2>
            <p className="mt-2">
              Alle Preise verstehen sich in Schweizer Franken (CHF) inklusive
              Mehrwertsteuer. Die Zahlung erfolgt gemäss Rechnung oder vor Ort.
              Stempelkarten sind ab Kaufdatum 6 Monate gültig.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text">
              4. Terminabsagen und Stornierung
            </h2>
            <p className="mt-2">
              Personal Training Termine müssen mindestens 24 Stunden vor dem
              vereinbarten Termin abgesagt werden. Bei kurzfristiger Absage oder
              Nichterscheinen wird die Session von der Stempelkarte abgestempelt.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text">5. Haftung</h2>
            <p className="mt-2">
              Das Training erfolgt auf eigene Verantwortung. Alpha Sports haftet
              nicht für Verletzungen oder Schäden, die während oder infolge des
              Trainings entstehen, sofern diese nicht auf grobe Fahrlässigkeit
              zurückzuführen sind.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text">
              6. Gesundheitliche Voraussetzungen
            </h2>
            <p className="mt-2">
              Kunden sind verpflichtet, gesundheitliche Einschränkungen vor
              Trainingsbeginn mitzuteilen. Bei Unsicherheiten empfehlen wir eine
              ärztliche Abklärung.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text">
              7. Anwendbares Recht
            </h2>
            <p className="mt-2">
              Es gilt Schweizer Recht. Gerichtsstand ist St. Gallen.
            </p>
          </div>

          <p className="text-sm text-muted">
            Stand: März 2026 | Alpha Sports GmbH, St. Gallen
          </p>
        </div>
      </div>
    </section>
  );
}
