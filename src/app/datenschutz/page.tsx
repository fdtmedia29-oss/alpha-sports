import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Alpha Sports GmbH, St. Gallen.",
};

export default function DatenschutzPage() {
  return (
    <section className="section-padding bg-white pt-28">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-text">Datenschutzerklärung</h1>

        <div className="mt-8 space-y-8 text-text-secondary leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-text">
              1. Verantwortliche Stelle
            </h2>
            <p className="mt-2">
              Alpha Sports GmbH
              <br />
              Unterer Graben 21
              <br />
              9000 St. Gallen
              <br />
              info@alpha-sports.ch
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text">
              2. Erhebung personenbezogener Daten
            </h2>
            <p className="mt-2">
              Wir erheben personenbezogene Daten nur, wenn Sie uns diese im
              Rahmen einer Kontaktaufnahme, Terminbuchung oder Vertragsbeziehung
              freiwillig mitteilen. Dies umfasst Name, E-Mail-Adresse,
              Telefonnummer und ggf. gesundheitsrelevante Informationen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text">
              3. Verwendung der Daten
            </h2>
            <p className="mt-2">
              Ihre Daten werden ausschliesslich zur Erbringung unserer
              Dienstleistungen, zur Kommunikation mit Ihnen und zur Abwicklung
              von Verträgen verwendet. Eine Weitergabe an Dritte erfolgt nicht,
              es sei denn, dies ist gesetzlich vorgeschrieben.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text">4. Cookies</h2>
            <p className="mt-2">
              Diese Website verwendet technisch notwendige Cookies. Analyse-Cookies
              werden nur mit Ihrer Zustimmung eingesetzt.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text">
              5. Ihre Rechte
            </h2>
            <p className="mt-2">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.
              Kontaktieren Sie uns unter info@alpha-sports.ch.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text">
              6. Hosting
            </h2>
            <p className="mt-2">
              Diese Website wird bei Vercel Inc. gehostet. Vercel kann beim
              Besuch der Website automatisch Informationen in Server-Logfiles
              speichern (IP-Adresse, Browsertyp, Referrer-URL, Datum/Uhrzeit).
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
