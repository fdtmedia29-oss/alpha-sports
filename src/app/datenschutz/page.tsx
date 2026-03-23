import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Alpha Sports GmbH, St. Gallen.",
};

export default function DatenschutzPage() {
  return (
    <section className="bg-white pb-20 pt-44 md:pb-28 md:pt-52">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-bold text-text md:text-4xl">
          Datenschutzerklärung
        </h1>

        <div className="mt-10 space-y-10 text-text-secondary leading-relaxed">
          {/* ==================== 1. Datenschutz auf einen Blick ==================== */}
          <div>
            <h2 className="text-xl font-bold text-text">
              1. Datenschutz auf einen Blick
            </h2>

            <h3 className="mt-6 text-lg font-semibold text-text">
              Allgemeine Hinweise
            </h3>
            <p className="mt-3">
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können. Ausführliche
              Informationen zum Thema Datenschutz entnehmen Sie unserer unter
              diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-text">
              Datenerfassung auf dieser Website
            </h3>
            <p className="mt-3 font-semibold">
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </p>
            <p className="mt-3">
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
              &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in dieser
              Datenschutzerklärung entnehmen.
            </p>

            <p className="mt-3 font-semibold">
              Wie erfassen wir Ihre Daten?
            </p>
            <p className="mt-3">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die
              Sie in ein Kontaktformular eingeben.
            </p>
            <p className="mt-3">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
              Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
              allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem
              oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten
              erfolgt automatisch, sobald Sie diese Website betreten.
            </p>

            <p className="mt-3 font-semibold">
              Wofür nutzen wir Ihre Daten?
            </p>
            <p className="mt-3">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie
              Bereitstellung der Website zu gewährleisten. Andere Daten können
              zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <p className="mt-3 font-semibold">
              Welche Rechte haben Sie bezüglich Ihrer Daten?
            </p>
            <p className="mt-3">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
              die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie
              eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie
              diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem
              haben Sie das Recht, unter bestimmten Umständen die Einschränkung
              der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des
              Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu.
            </p>
            <p className="mt-3">
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
              sich jederzeit an uns wenden.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-text">
              Analyse-Tools und Tools von Drittanbietern
            </h3>
            <p className="mt-3">
              Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
              ausgewertet werden. Das geschieht vor allem mit sogenannten
              Analyseprogrammen.
            </p>
            <p className="mt-3">
              Detaillierte Informationen zu diesen Analyseprogrammen finden Sie
              in der folgenden Datenschutzerklärung.
            </p>
          </div>

          {/* ==================== 2. Hosting und CDN ==================== */}
          <div>
            <h2 className="text-xl font-bold text-text">
              2. Hosting und Content Delivery Networks (CDN)
            </h2>
            <p className="mt-3">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>

            <h3 className="mt-6 text-lg font-semibold text-text">
              Externes Hosting
            </h3>
            <p className="mt-3">
              Diese Website wird extern gehostet. Die personenbezogenen Daten,
              die auf dieser Website erfasst werden, werden auf den Servern des
              Hosters / der Hoster gespeichert. Hierbei kann es sich v.&nbsp;a.
              um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
              Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
              Daten, die über eine Website generiert werden, handeln.
            </p>
            <p className="mt-3">
              Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung
              gegenüber unseren potenziellen und bestehenden Kunden (Art. 6
              Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen
              und effizienten Bereitstellung unseres Online-Angebots durch einen
              professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern
              eine entsprechende Einwilligung abgefragt wurde, erfolgt die
              Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1
              lit. a DSGVO und &sect;&nbsp;25 Abs. 1 TTDSG, soweit die
              Einwilligung die Speicherung von Cookies oder den Zugriff auf
              Informationen im Endgerät des Nutzers (z.&nbsp;B.
              Device-Fingerprinting) im Sinne des TTDSG umfasst. Die
              Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mt-3">
              Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit
              verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten
              erforderlich ist und unsere Weisungen in Bezug auf diese Daten
              befolgen.
            </p>
            <p className="mt-3">Wir setzen folgende(n) Hoster ein:</p>
            <p className="mt-3">
              Vercel Inc.
              <br />
              440 N Barranca Ave #4133
              <br />
              Covina, CA 91723, USA
            </p>

            <h3 className="mt-6 text-lg font-semibold text-text">
              Google Cloud CDN
            </h3>
            <p className="mt-3">
              Wir nutzen das Content Delivery Network Google Cloud CDN. Anbieter
              ist die Google Ireland Limited (&bdquo;Google&ldquo;), Gordon
              House, Barrow Street, Dublin 4, Irland.
            </p>
            <p className="mt-3">
              Google bietet ein weltweit verteiltes Content Delivery Network an.
              Dabei wird technisch der Informationstransfer zwischen Ihrem
              Browser und unserer Website über das Netzwerk von Google geleitet.
              Hierdurch können wir die weltweite Erreichbarkeit und die
              Leistungsfähigkeit unserer Website erhöhen.
            </p>
            <p className="mt-3">
              Der Einsatz von Google Cloud CDN beruht auf unserem berechtigten
              Interesse an einer möglichst fehlerfreien und sicheren
              Bereitstellung unseres Webangebotes (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p className="mt-3">
              Die Datenübertragung in die USA wird auf die
              Standardvertragsklauseln der EU-Kommission gestützt. Details
              finden Sie hier:{" "}
              <a
                href="https://cloud.google.com/terms/eu-model-contract-clause"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://cloud.google.com/terms/eu-model-contract-clause
              </a>
              .
            </p>
            <p className="mt-3">
              Weitere Informationen zu Google Cloud CDN finden Sie hier:{" "}
              <a
                href="https://cloud.google.com/cdn/docs/overview?hl=de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://cloud.google.com/cdn/docs/overview?hl=de
              </a>
              .
            </p>
            <p className="mt-3">
              Das Unternehmen verfügt über eine Zertifizierung nach dem
              &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF ist ein
              Übereinkommen zwischen der Europäischen Union und den USA, der die
              Einhaltung europäischer Datenschutzstandards bei
              Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem
              DPF zertifizierte Unternehmen verpflichtet sich, diese
              Datenschutzstandards einzuhalten. Weitere Informationen hierzu
              erhalten Sie vom Anbieter unter folgendem Link:{" "}
              <a
                href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active
              </a>
            </p>
          </div>

          {/* ==================== 3. Allgemeine Hinweise und Pflichtinformationen ==================== */}
          <div>
            <h2 className="text-xl font-bold text-text">
              3. Allgemeine Hinweise und Pflichtinformationen
            </h2>

            <h3 className="mt-6 text-lg font-semibold text-text">
              Datenschutz
            </h3>
            <p className="mt-3">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="mt-3">
              Wenn Sie diese Website benutzen, werden verschiedene
              personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
              mit denen Sie persönlich identifiziert werden können. Die
              vorliegende Datenschutzerklärung erläutert, welche Daten wir
              erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu
              welchem Zweck das geschieht.
            </p>
            <p className="mt-3">
              Wir weisen darauf hin, dass die Datenübertragung im Internet
              (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitslücken
              aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff
              durch Dritte ist nicht möglich.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-text">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <p className="mt-3">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist:
            </p>
            <p className="mt-3">
              Alpha Sports GmbH
              <br />
              Rorschacherstr. 59
              <br />
              9000 St. Gallen
            </p>
            <p className="mt-3">
              Telefon:{" "}
              <a
                href="tel:+41763903679"
                className="text-orange underline underline-offset-4 hover:text-orange/80"
              >
                +41 76 390 36 79
              </a>
              <br />
              E-Mail:{" "}
              <a
                href="mailto:info@alpha-sports.ch"
                className="text-orange underline underline-offset-4 hover:text-orange/80"
              >
                info@alpha-sports.ch
              </a>
            </p>
            <p className="mt-3">
              Verantwortliche Stelle ist die natürliche oder juristische Person,
              die allein oder gemeinsam mit anderen über die Zwecke und Mittel
              der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen,
              E-Mail-Adressen o.&nbsp;Ä.) entscheidet.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-text">
              Speicherdauer
            </h3>
            <p className="mt-3">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere
              Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
              Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine
              Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
              gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für
              die Speicherung Ihrer personenbezogenen Daten haben (z.&nbsp;B.
              steuer- oder handelsrechtliche Aufbewahrungsfristen); im
              letztgenannten Fall erfolgt die Löschung nach Fortfall dieser
              Gründe.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-text">
              Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung
              auf dieser Website
            </h3>
            <p className="mt-3">
              Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten
              wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1
              lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere
              Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im
              Falle einer ausdrücklichen Einwilligung in die Übertragung
              personenbezogener Daten in Drittstaaten erfolgt die
              Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a
              DSGVO. Sofern Sie in die Speicherung von Cookies oder in den
              Zugriff auf Informationen in Ihr Endgerät (z.&nbsp;B. via
              Device-Fingerprinting) eingewilligt haben, erfolgt die
              Datenverarbeitung zusätzlich auf Grundlage von &sect;&nbsp;25
              Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind
              Ihre Daten zur Vertragserfüllung oder zur Durchführung
              vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre
              Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren
              verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer
              rechtlichen Verpflichtung erforderlich sind auf Grundlage von
              Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf
              Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1
              lit. f DSGVO erfolgen. Über die jeweils im Einzelfall
              einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen
              dieser Datenschutzerklärung informiert.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-text">
              Hinweis zur Datenweitergabe in datenschutzrechtlich nicht sichere
              Drittstaaten sowie die Weitergabe an US-Unternehmen, die nicht
              DPF-zertifiziert sind
            </h3>
            <p className="mt-3">
              Wir verwenden unter anderem Tools von Unternehmen mit Sitz in
              datenschutzrechtlich nicht sicheren Drittstaaten sowie US-Tools,
              deren Anbieter nicht nach dem EU-US-Data Privacy Framework (DPF)
              zertifiziert sind. Wenn diese Tools aktiv sind, können Ihre
              personenbezogene Daten in diese Staaten übertragen und dort
              verarbeitet werden. Wir weisen darauf hin, dass in
              datenschutzrechtlich unsicheren Drittstaaten kein mit der EU
              vergleichbares Datenschutzniveau garantiert werden kann.
            </p>
            <p className="mt-3">
              Wir weisen darauf hin, dass die USA als sicherer Drittstaat
              grundsätzlich ein mit der EU vergleichbares Datenschutzniveau
              aufweisen. Eine Datenübertragung in die USA ist danach zulässig,
              wenn der Empfänger eine Zertifizierung unter dem &bdquo;EU-US Data
              Privacy Framework&ldquo; (DPF) besitzt oder über geeignete
              zusätzliche Garantien verfügt. Informationen zu Übermittlungen an
              Drittstaaten einschließlich der Datenempfänger finden Sie in
              dieser Datenschutzerklärung.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-text">
              Empfänger von personenbezogenen Daten
            </h3>
            <p className="mt-3">
              Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit
              verschiedenen externen Stellen zusammen. Dabei ist teilweise auch
              eine Übermittlung von personenbezogenen Daten an diese externen
              Stellen erforderlich. Wir geben personenbezogene Daten nur dann an
              externe Stellen weiter, wenn dies im Rahmen einer
              Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu
              verpflichtet sind (z.&nbsp;B. Weitergabe von Daten an
              Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6
              Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine
              sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz
              von Auftragsverarbeitern geben wir personenbezogene Daten unserer
              Kunden nur auf Grundlage eines gültigen Vertrags über
              Auftragsverarbeitung weiter. Im Falle einer gemeinsamen
              Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung
              geschlossen.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-text">
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h3>
            <p className="mt-3">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
              Einwilligung möglich. Sie können eine bereits erteilte
              Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum
              Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
              unberührt.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-text">
              Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen
              sowie gegen Direktwerbung (Art. 21 DSGVO)
            </h3>
            <div className="mt-3 rounded-xl bg-bg-alt p-6 text-sm font-medium text-text">
              WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E
              ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN,
              DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE
              VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN;
              DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES
              PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE
              VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG.
              WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN
              PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR
              KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
              NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN
              ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER
              VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21
              ABS. 1 DSGVO).
              <br />
              <br />
              WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG
              ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN
              DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM
              ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS
              PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT.
              WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
              ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET
              (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
            </div>

            <h3 className="mt-6 text-lg font-semibold text-text">
              Beschwerderecht bei der zuständigen Aufsichtsbehörde
            </h3>
            <p className="mt-3">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
              Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
              Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
              oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
              besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
              gerichtlicher Rechtsbehelfe.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-text">
              Recht auf Datenübertragbarkeit
            </h3>
            <p className="mt-3">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
              Einwilligung oder in Erfüllung eines Vertrags automatisiert
              verarbeiten, an sich oder an einen Dritten in einem gängigen,
              maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
              direkte Übertragung der Daten an einen anderen Verantwortlichen
              verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-text">
              Auskunft, Berichtigung und Löschung
            </h3>
            <p className="mt-3">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
              jederzeit das Recht auf unentgeltliche Auskunft über Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht
              auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu
              weiteren Fragen zum Thema personenbezogene Daten können Sie sich
              jederzeit an uns wenden.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-text">
              Recht auf Einschränkung der Verarbeitung
            </h3>
            <p className="mt-3">
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen. Hierzu können Sie sich
              jederzeit an uns wenden. Das Recht auf Einschränkung der
              Verarbeitung besteht in folgenden Fällen:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                personenbezogenen Daten bestreiten, benötigen wir in der Regel
                Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie
                das Recht, die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen.
              </li>
              <li>
                Wenn die Verarbeitung Ihrer personenbezogenen Daten
                unrechtmäßig geschah/geschieht, können Sie statt der Löschung
                die Einschränkung der Datenverarbeitung verlangen.
              </li>
              <li>
                Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie
                sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von
                Rechtsansprüchen benötigen, haben Sie das Recht, statt der
                Löschung die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen.
              </li>
              <li>
                Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
                haben, muss eine Abwägung zwischen Ihren und unseren Interessen
                vorgenommen werden. Solange noch nicht feststeht, wessen
                Interessen überwiegen, haben Sie das Recht, die Einschränkung
                der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
            </ul>
            <p className="mt-3">
              Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
              eingeschränkt haben, dürfen diese Daten - von ihrer Speicherung
              abgesehen - nur mit Ihrer Einwilligung oder zur Geltendmachung,
              Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz
              der Rechte einer anderen natürlichen oder juristischen Person oder
              aus Gründen eines wichtigen öffentlichen Interesses der
              Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-text">
              SSL- bzw. TLS-Verschlüsselung
            </h3>
            <p className="mt-3">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
              oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine
              SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung
              erkennen Sie daran, dass die Adresszeile des Browsers von
              &bdquo;http://&ldquo; auf &bdquo;https://&ldquo; wechselt und an
              dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
            <p className="mt-3">
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
              Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
              werden.
            </p>
          </div>

          {/* ==================== 4. Datenerfassung auf dieser Website ==================== */}
          <div>
            <h2 className="text-xl font-bold text-text">
              4. Datenerfassung auf dieser Website
            </h2>

            <h3 className="mt-6 text-lg font-semibold text-text">Cookies</h3>
            <p className="mt-3">
              Unsere Internetseiten verwenden so genannte &bdquo;Cookies&ldquo;.
              Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät
              keinen Schaden an. Sie werden entweder vorübergehend für die Dauer
              einer Sitzung (Session-Cookies) oder dauerhaft (permanente
              Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden
              nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies
              bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst
              löschen oder eine automatische Löschung durch Ihren Webbrowser
              erfolgt.
            </p>
            <p className="mt-3">
              Cookies können von uns (First-Party-Cookies) oder von
              Drittunternehmen stammen (sog. Third-Party-Cookies).
              Third-Party-Cookies ermöglichen die Einbindung bestimmter
              Dienstleistungen von Drittunternehmen innerhalb von Webseiten
              (z.&nbsp;B. Cookies zur Abwicklung von
              Zahlungsdienstleistungen).
            </p>
            <p className="mt-3">
              Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind
              technisch notwendig, da bestimmte Webseitenfunktionen ohne diese
              nicht funktionieren würden (z.&nbsp;B. die Warenkorbfunktion oder
              die Anzeige von Videos). Andere Cookies können zur Auswertung des
              Nutzerverhaltens oder zu Werbezwecken verwendet werden.
            </p>
            <p className="mt-3">
              Cookies, die zur Durchführung des elektronischen
              Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen
              erwünschter Funktionen (z.&nbsp;B. für die Warenkorbfunktion) oder
              zur Optimierung der Website (z.&nbsp;B. Cookies zur Messung des
              Webpublikums) erforderlich sind (notwendige Cookies), werden auf
              Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern
              keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber
              hat ein berechtigtes Interesse an der Speicherung von notwendigen
              Cookies zur technisch fehlerfreien und optimierten Bereitstellung
              seiner Dienste. Sofern eine Einwilligung zur Speicherung von
              Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt
              wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage
              dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und &sect;&nbsp;25
              Abs. 1 TTDSG); die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mt-3">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen
              von Cookies informiert werden und Cookies nur im Einzelfall
              erlauben, die Annahme von Cookies für bestimmte Fälle oder
              generell ausschließen sowie das automatische Löschen der Cookies
              beim Schließen des Browsers aktivieren. Bei der Deaktivierung von
              Cookies kann die Funktionalität dieser Website eingeschränkt sein.
            </p>
            <p className="mt-3">
              Welche Cookies und Dienste auf dieser Website eingesetzt werden,
              können Sie dieser Datenschutzerklärung entnehmen.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-text">
              Kontaktformular
            </h3>
            <p className="mt-3">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mt-3">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
              Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
              Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
              Verarbeitung auf unserem berechtigten Interesse an der effektiven
              Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
              DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
              sofern diese abgefragt wurde; die Einwilligung ist jederzeit
              widerrufbar.
            </p>
            <p className="mt-3">
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei
              uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
              Speicherung widerrufen oder der Zweck für die Datenspeicherung
              entfällt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihrer
              Anfrage). Zwingende gesetzliche Bestimmungen - insbesondere
              Aufbewahrungsfristen - bleiben unberührt.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-text">
              Anfrage per E-Mail, Telefon oder Telefax
            </h3>
            <p className="mt-3">
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird
              Ihre Anfrage inklusive aller daraus hervorgehenden
              personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung
              Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mt-3">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
              Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
              Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
              Verarbeitung auf unserem berechtigten Interesse an der effektiven
              Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
              DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
              sofern diese abgefragt wurde; die Einwilligung ist jederzeit
              widerrufbar.
            </p>
            <p className="mt-3">
              Die von Ihnen an uns per Kontaktanfragen übersandten Daten
              verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
              Einwilligung zur Speicherung widerrufen oder der Zweck für die
              Datenspeicherung entfällt (z.&nbsp;B. nach abgeschlossener
              Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen -
              insbesondere gesetzliche Aufbewahrungsfristen - bleiben unberührt.
            </p>
          </div>

          {/* ==================== 5. Soziale Medien ==================== */}
          <div>
            <h2 className="text-xl font-bold text-text">5. Soziale Medien</h2>

            <h3 className="mt-6 text-lg font-semibold text-text">Facebook</h3>
            <p className="mt-3">
              Auf dieser Website sind Elemente des sozialen Netzwerks Facebook
              integriert. Anbieter dieses Dienstes ist die Meta Platforms
              Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland. Die
              erfassten Daten werden nach Aussage von Facebook jedoch auch in die
              USA und in andere Drittländer übertragen.
            </p>
            <p className="mt-3">
              Eine Übersicht über die Facebook Social-Media-Elemente finden Sie
              hier:{" "}
              <a
                href="https://developers.facebook.com/docs/plugins/?locale=de_DE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://developers.facebook.com/docs/plugins/?locale=de_DE
              </a>
              .
            </p>
            <p className="mt-3">
              Wenn das Social-Media-Element aktiv ist, wird eine direkte
              Verbindung zwischen Ihrem Endgerät und dem Facebook-Server
              hergestellt. Facebook erhält dadurch die Information, dass Sie mit
              Ihrer IP-Adresse diese Website besucht haben. Wenn Sie den
              Facebook &bdquo;Like-Button&ldquo; anklicken, während Sie in Ihrem
              Facebook-Account eingeloggt sind, können Sie die Inhalte dieser
              Website auf Ihrem Facebook-Profil verlinken. Dadurch kann Facebook
              den Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen
              darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom
              Inhalt der übermittelten Daten sowie deren Nutzung durch Facebook
              erhalten. Weitere Informationen hierzu finden Sie in der
              Datenschutzerklärung von Facebook unter:{" "}
              <a
                href="https://de-de.facebook.com/privacy/explanation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://de-de.facebook.com/privacy/explanation
              </a>
              .
            </p>
            <p className="mt-3">
              Soweit eine Einwilligung (Consent) eingeholt wurde, erfolgt der
              Einsatz des o.&nbsp;g. Dienstes auf Grundlage von Art. 6 Abs. 1
              lit. a DSGVO und &sect;&nbsp;25 TTDSG. Die Einwilligung ist
              jederzeit widerrufbar. Soweit keine Einwilligung eingeholt wurde,
              erfolgt die Verwendung des Dienstes auf Grundlage unseres
              berechtigten Interesses an einer möglichst umfassenden
              Sichtbarkeit in den Sozialen Medien.
            </p>
            <p className="mt-3">
              Soweit mit Hilfe des hier beschriebenen Tools personenbezogene
              Daten auf unserer Website erfasst und an Facebook weitergeleitet
              werden, sind wir und die Meta Platforms Ireland Limited, 4 Grand
              Canal Square, Grand Canal Harbour, Dublin 2, Irland gemeinsam für
              diese Datenverarbeitung verantwortlich (Art. 26 DSGVO). Die
              gemeinsame Verantwortlichkeit beschränkt sich dabei ausschließlich
              auf die Erfassung der Daten und deren Weitergabe an Facebook. Die
              nach der Weiterleitung erfolgende Verarbeitung durch Facebook ist
              nicht Teil der gemeinsamen Verantwortung. Die uns gemeinsam
              obliegenden Verpflichtungen wurden in einer Vereinbarung über
              gemeinsame Verarbeitung festgehalten. Den Wortlaut der
              Vereinbarung finden Sie unter:{" "}
              <a
                href="https://www.facebook.com/legal/controller_addendum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://www.facebook.com/legal/controller_addendum
              </a>
              . Laut dieser Vereinbarung sind wir für die Erteilung der
              Datenschutzinformationen beim Einsatz des Facebook-Tools und für
              die datenschutzrechtlich sichere Implementierung des Tools auf
              unserer Website verantwortlich. Für die Datensicherheit der
              Facebook-Produkte ist Facebook verantwortlich. Betroffenenrechte
              (z.&nbsp;B. Auskunftsersuchen) hinsichtlich der bei Facebook
              verarbeiteten Daten können Sie direkt bei Facebook geltend machen.
              Wenn Sie die Betroffenenrechte bei uns geltend machen, sind wir
              verpflichtet, diese an Facebook weiterzuleiten.
            </p>
            <p className="mt-3">
              Die Datenübertragung in die USA wird auf die
              Standardvertragsklauseln der EU-Kommission gestützt. Details finden
              Sie hier:{" "}
              <a
                href="https://www.facebook.com/legal/EU_data_transfer_addendum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://www.facebook.com/legal/EU_data_transfer_addendum
              </a>
              ,{" "}
              <a
                href="https://de-de.facebook.com/help/566994660333381"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://de-de.facebook.com/help/566994660333381
              </a>
              {" "}und{" "}
              <a
                href="https://www.facebook.com/policy.php"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://www.facebook.com/policy.php
              </a>
              .
            </p>
            <p className="mt-3">
              Das Unternehmen verfügt über eine Zertifizierung nach dem
              &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF ist ein
              Übereinkommen zwischen der Europäischen Union und den USA, der die
              Einhaltung europäischer Datenschutzstandards bei
              Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem
              DPF zertifizierte Unternehmen verpflichtet sich, diese
              Datenschutzstandards einzuhalten. Weitere Informationen hierzu
              erhalten Sie vom Anbieter unter folgendem Link:{" "}
              <a
                href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnywAAC&status=Active"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnywAAC&status=Active
              </a>
            </p>

            <h3 className="mt-6 text-lg font-semibold text-text">Instagram</h3>
            <p className="mt-3">
              Auf dieser Website sind Funktionen des Dienstes Instagram
              eingebunden. Diese Funktionen werden angeboten durch die Meta
              Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal
              Harbour, Dublin 2, Irland.
            </p>
            <p className="mt-3">
              Wenn das Social-Media-Element aktiv ist, wird eine direkte
              Verbindung zwischen Ihrem Endgerät und dem Instagram-Server
              hergestellt. Instagram erhält dadurch Informationen über den Besuch
              dieser Website durch Sie.
            </p>
            <p className="mt-3">
              Wenn Sie in Ihrem Instagram-Account eingeloggt sind, können Sie
              durch Anklicken des Instagram-Buttons die Inhalte dieser Website
              mit Ihrem Instagram-Profil verlinken. Dadurch kann Instagram den
              Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen
              darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom
              Inhalt der übermittelten Daten sowie deren Nutzung durch Instagram
              erhalten.
            </p>
            <p className="mt-3">
              Soweit eine Einwilligung (Consent) eingeholt wurde, erfolgt der
              Einsatz des o.&nbsp;g. Dienstes auf Grundlage von Art. 6 Abs. 1
              lit. a DSGVO und &sect;&nbsp;25 TTDSG. Die Einwilligung ist
              jederzeit widerrufbar. Soweit keine Einwilligung eingeholt wurde,
              erfolgt die Verwendung des Dienstes auf Grundlage unseres
              berechtigten Interesses an einer möglichst umfassenden
              Sichtbarkeit in den Sozialen Medien.
            </p>
            <p className="mt-3">
              Soweit mit Hilfe des hier beschriebenen Tools personenbezogene
              Daten auf unserer Website erfasst und an Facebook bzw. Instagram
              weitergeleitet werden, sind wir und die Meta Platforms Ireland
              Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
              Irland gemeinsam für diese Datenverarbeitung verantwortlich
              (Art. 26 DSGVO). Die gemeinsame Verantwortlichkeit beschränkt sich
              dabei ausschließlich auf die Erfassung der Daten und deren
              Weitergabe an Facebook bzw. Instagram. Die nach der Weiterleitung
              erfolgende Verarbeitung durch Facebook bzw. Instagram ist nicht
              Teil der gemeinsamen Verantwortung. Die uns gemeinsam obliegenden
              Verpflichtungen wurden in einer Vereinbarung über gemeinsame
              Verarbeitung festgehalten. Den Wortlaut der Vereinbarung finden
              Sie unter:{" "}
              <a
                href="https://www.facebook.com/legal/controller_addendum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://www.facebook.com/legal/controller_addendum
              </a>
              . Laut dieser Vereinbarung sind wir für die Erteilung der
              Datenschutzinformationen beim Einsatz des Facebook- bzw.
              Instagram-Tools und für die datenschutzrechtlich sichere
              Implementierung des Tools auf unserer Website verantwortlich. Für
              die Datensicherheit der Facebook bzw. Instagram-Produkte ist
              Facebook verantwortlich. Betroffenenrechte (z.&nbsp;B.
              Auskunftsersuchen) hinsichtlich der bei Facebook bzw. Instagram
              verarbeiteten Daten können Sie direkt bei Facebook geltend machen.
              Wenn Sie die Betroffenenrechte bei uns geltend machen, sind wir
              verpflichtet, diese an Facebook weiterzuleiten.
            </p>
            <p className="mt-3">
              Die Datenübertragung in die USA wird auf die
              Standardvertragsklauseln der EU-Kommission gestützt. Details finden
              Sie hier:{" "}
              <a
                href="https://www.facebook.com/legal/EU_data_transfer_addendum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://www.facebook.com/legal/EU_data_transfer_addendum
              </a>
              ,{" "}
              <a
                href="https://privacycenter.instagram.com/policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://privacycenter.instagram.com/policy/
              </a>
              {" "}und{" "}
              <a
                href="https://de-de.facebook.com/help/566994660333381"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://de-de.facebook.com/help/566994660333381
              </a>
              .
            </p>
            <p className="mt-3">
              Weitere Informationen hierzu finden Sie in der
              Datenschutzerklärung von Instagram:{" "}
              <a
                href="https://privacycenter.instagram.com/policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://privacycenter.instagram.com/policy/
              </a>
              .
            </p>
            <p className="mt-3">
              Das Unternehmen verfügt über eine Zertifizierung nach dem
              &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF ist ein
              Übereinkommen zwischen der Europäischen Union und den USA, der die
              Einhaltung europäischer Datenschutzstandards bei
              Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem
              DPF zertifizierte Unternehmen verpflichtet sich, diese
              Datenschutzstandards einzuhalten. Weitere Informationen hierzu
              erhalten Sie vom Anbieter unter folgendem Link:{" "}
              <a
                href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnywAAC&status=Active"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnywAAC&status=Active
              </a>
            </p>
          </div>

          {/* ==================== 6. Analyse-Tools und Werbung ==================== */}
          <div>
            <h2 className="text-xl font-bold text-text">
              6. Analyse-Tools und Werbung
            </h2>

            <h3 className="mt-6 text-lg font-semibold text-text">
              Google Tag Manager
            </h3>
            <p className="mt-3">
              Wir setzen den Google Tag Manager ein. Anbieter ist die Google
              Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p className="mt-3">
              Der Google Tag Manager ist ein Tool, mit dessen Hilfe wir
              Tracking- oder Statistik-Tools und andere Technologien auf unserer
              Website einbinden können. Der Google Tag Manager selbst erstellt
              keine Nutzerprofile, speichert keine Cookies und nimmt keine
              eigenständigen Analysen vor. Er dient lediglich der Verwaltung und
              Ausspielung der über ihn eingebundenen Tools. Der Google Tag
              Manager erfasst jedoch Ihre IP-Adresse, die auch an das
              Mutterunternehmen von Google in die Vereinigten Staaten übertragen
              werden kann.
            </p>
            <p className="mt-3">
              Der Einsatz des Google Tag Managers erfolgt auf Grundlage von
              Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
              berechtigtes Interesse an einer schnellen und unkomplizierten
              Einbindung und Verwaltung verschiedener Tools auf seiner Website.
              Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt
              die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1
              lit. a DSGVO und &sect;&nbsp;25 Abs. 1 TTDSG, soweit die
              Einwilligung die Speicherung von Cookies oder den Zugriff auf
              Informationen im Endgerät des Nutzers (z.&nbsp;B.
              Device-Fingerprinting) im Sinne des TTDSG umfasst. Die
              Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mt-3">
              Das Unternehmen verfügt über eine Zertifizierung nach dem
              &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF ist ein
              Übereinkommen zwischen der Europäischen Union und den USA, der die
              Einhaltung europäischer Datenschutzstandards bei
              Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem
              DPF zertifizierte Unternehmen verpflichtet sich, diese
              Datenschutzstandards einzuhalten. Weitere Informationen hierzu
              erhalten Sie vom Anbieter unter folgendem Link:{" "}
              <a
                href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active
              </a>
            </p>

            <h3 className="mt-6 text-lg font-semibold text-text">
              Google Analytics
            </h3>
            <p className="mt-3">
              Diese Website nutzt Funktionen des Webanalysedienstes Google
              Analytics. Anbieter ist die Google Ireland Limited
              (&bdquo;Google&ldquo;), Gordon House, Barrow Street, Dublin 4,
              Irland.
            </p>
            <p className="mt-3">
              Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten
              der Websitebesucher zu analysieren. Hierbei erhält der
              Websitebetreiber verschiedene Nutzungsdaten, wie z.&nbsp;B.
              Seitenaufrufe, Verweildauer, verwendete Betriebssysteme und
              Herkunft des Nutzers. Diese Daten werden in einer User-ID
              zusammengefasst und dem jeweiligen Endgerät des Websitebesuchers
              zugeordnet.
            </p>
            <p className="mt-3">
              Des Weiteren können wir mit Google Analytics u.&nbsp;a. Ihre Maus-
              und Scrollbewegungen und Klicks aufzeichnen. Ferner verwendet
              Google Analytics verschiedene Modellierungsansätze, um die
              erfassten Datensätze zu ergänzen und setzt
              Machine-Learning-Technologien bei der Datenanalyse ein.
            </p>
            <p className="mt-3">
              Google Analytics verwendet Technologien, die die Wiedererkennung
              des Nutzers zum Zwecke der Analyse des Nutzerverhaltens
              ermöglichen (z.&nbsp;B. Cookies oder Device-Fingerprinting). Die
              von Google erfassten Informationen über die Benutzung dieser
              Website werden in der Regel an einen Server von Google in den USA
              übertragen und dort gespeichert.
            </p>
            <p className="mt-3">
              Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer
              Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und &sect;&nbsp;25
              Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mt-3">
              Die Datenübertragung in die USA wird auf die
              Standardvertragsklauseln der EU-Kommission gestützt. Details finden
              Sie hier:{" "}
              <a
                href="https://privacy.google.com/businesses/controllerterms/mccs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://privacy.google.com/businesses/controllerterms/mccs/
              </a>
              .
            </p>
            <p className="mt-3">
              Das Unternehmen verfügt über eine Zertifizierung nach dem
              &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF ist ein
              Übereinkommen zwischen der Europäischen Union und den USA, der die
              Einhaltung europäischer Datenschutzstandards bei
              Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem
              DPF zertifizierte Unternehmen verpflichtet sich, diese
              Datenschutzstandards einzuhalten. Weitere Informationen hierzu
              erhalten Sie vom Anbieter unter folgendem Link:{" "}
              <a
                href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active
              </a>
            </p>

            <h3 className="mt-6 text-lg font-semibold text-text">
              Browser Plugin
            </h3>
            <p className="mt-3">
              Sie können die Erfassung und Verarbeitung Ihrer Daten durch Google
              verhindern, indem Sie das unter dem folgenden Link verfügbare
              Browser-Plugin herunterladen und installieren:{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout?hl=de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://tools.google.com/dlpage/gaoptout?hl=de
              </a>
              .
            </p>
            <p className="mt-3">
              Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics
              finden Sie in der Datenschutzerklärung von Google:{" "}
              <a
                href="https://support.google.com/analytics/answer/6004245?hl=de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://support.google.com/analytics/answer/6004245?hl=de
              </a>
              .
            </p>

            <h3 className="mt-6 text-lg font-semibold text-text">
              Google-Signale
            </h3>
            <p className="mt-3">
              Wir nutzen Google-Signale. Wenn Sie unsere Website besuchen,
              erfasst Google Analytics u.&nbsp;a. Ihren Standort, Suchverlauf
              und YouTube-Verlauf sowie demografische Daten (Besucherdaten).
              Diese Daten können mit Hilfe von Google-Signal für personalisierte
              Werbung verwendet werden. Wenn Sie über ein Google-Konto verfügen,
              werden die Besucherdaten von Google-Signal mit Ihrem Google-Konto
              verknüpft und für personalisierte Werbebotschaften verwendet. Die
              Daten werden außerdem für die Erstellung anonymisierter Statistiken
              zum Nutzerverhalten unserer User verwendet.
            </p>

            <h3 className="mt-6 text-lg font-semibold text-text">
              Google Ads
            </h3>
            <p className="mt-3">
              Der Websitebetreiber verwendet Google Ads. Google Ads ist ein
              Online-Werbeprogramm der Google Ireland Limited
              (&bdquo;Google&ldquo;), Gordon House, Barrow Street, Dublin 4,
              Irland.
            </p>
            <p className="mt-3">
              Google Ads ermöglicht es uns Werbeanzeigen in der
              Google-Suchmaschine oder auf Drittwebseiten auszuspielen, wenn der
              Nutzer bestimmte Suchbegriffe bei Google eingibt
              (Keyword-Targeting). Ferner können zielgerichtete Werbeanzeigen
              anhand der bei Google vorhandenen Nutzerdaten (z.&nbsp;B.
              Standortdaten und Interessen) ausgespielt werden
              (Zielgruppen-Targeting). Wir als Websitebetreiber können diese
              Daten quantitativ auswerten, indem wir beispielsweise analysieren,
              welche Suchbegriffe zur Ausspielung unserer Werbeanzeigen geführt
              haben und wie viele Anzeigen zu entsprechenden Klicks geführt
              haben.
            </p>
            <p className="mt-3">
              Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer
              Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und &sect;&nbsp;25
              Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mt-3">
              Die Datenübertragung in die USA wird auf die
              Standardvertragsklauseln der EU-Kommission gestützt. Details finden
              Sie hier:{" "}
              <a
                href="https://policies.google.com/privacy/frameworks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://policies.google.com/privacy/frameworks
              </a>
              {" "}und{" "}
              <a
                href="https://privacy.google.com/businesses/controllerterms/mccs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://privacy.google.com/businesses/controllerterms/mccs/
              </a>
              .
            </p>
            <p className="mt-3">
              Das Unternehmen verfügt über eine Zertifizierung nach dem
              &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF ist ein
              Übereinkommen zwischen der Europäischen Union und den USA, der die
              Einhaltung europäischer Datenschutzstandards bei
              Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem
              DPF zertifizierte Unternehmen verpflichtet sich, diese
              Datenschutzstandards einzuhalten. Weitere Informationen hierzu
              erhalten Sie vom Anbieter unter folgendem Link:{" "}
              <a
                href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active
              </a>
            </p>
          </div>

          {/* ==================== 7. Plugins und Tools ==================== */}
          <div>
            <h2 className="text-xl font-bold text-text">
              7. Plugins und Tools
            </h2>

            <h3 className="mt-6 text-lg font-semibold text-text">YouTube</h3>
            <p className="mt-3">
              Diese Website bindet Videos der Website YouTube ein. Betreiber der
              Website ist die Google Ireland Limited (&bdquo;Google&ldquo;),
              Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p className="mt-3">
              Wenn Sie eine unserer Webseiten besuchen, auf denen YouTube
              eingebunden ist, wird eine Verbindung zu den Servern von YouTube
              hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche
              unserer Seiten Sie besucht haben.
            </p>
            <p className="mt-3">
              Des Weiteren kann YouTube verschiedene Cookies auf Ihrem Endgerät
              speichern oder vergleichbare Technologien zur Wiedererkennung
              verwenden (z.&nbsp;B. Device-Fingerprinting). Auf diese Weise kann
              YouTube Informationen über Besucher dieser Website erhalten. Diese
              Informationen werden u.&nbsp;a. verwendet, um Videostatistiken zu
              erfassen, die Anwenderfreundlichkeit zu verbessern und
              Betrugsversuchen vorzubeugen.
            </p>
            <p className="mt-3">
              Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie
              YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil
              zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem
              YouTube-Account ausloggen.
            </p>
            <p className="mt-3">
              Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden
              Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes
              Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern
              eine entsprechende Einwilligung abgefragt wurde, erfolgt die
              Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a
              DSGVO und &sect;&nbsp;25 Abs. 1 TTDSG, soweit die Einwilligung die
              Speicherung von Cookies oder den Zugriff auf Informationen im
              Endgerät des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne
              des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mt-3">
              Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der
              Datenschutzerklärung von YouTube unter:{" "}
              <a
                href="https://policies.google.com/privacy?hl=de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://policies.google.com/privacy?hl=de
              </a>
              .
            </p>
            <p className="mt-3">
              Das Unternehmen verfügt über eine Zertifizierung nach dem
              &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF ist ein
              Übereinkommen zwischen der Europäischen Union und den USA, der die
              Einhaltung europäischer Datenschutzstandards bei
              Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem
              DPF zertifizierte Unternehmen verpflichtet sich, diese
              Datenschutzstandards einzuhalten. Weitere Informationen hierzu
              erhalten Sie vom Anbieter unter folgendem Link:{" "}
              <a
                href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active
              </a>
            </p>

            <h3 className="mt-6 text-lg font-semibold text-text">
              Google Fonts
            </h3>
            <p className="mt-3">
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so
              genannte Google Fonts, die von Google bereitgestellt werden. Beim
              Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in ihren
              Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
            </p>
            <p className="mt-3">
              Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung
              zu den Servern von Google aufnehmen. Hierdurch erlangt Google
              Kenntnis darüber, dass über Ihre IP-Adresse diese Website
              aufgerufen wurde. Die Nutzung von Google Fonts erfolgt auf
              Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber
              hat ein berechtigtes Interesse an der einheitlichen Darstellung des
              Schriftbildes auf seiner Website. Sofern eine entsprechende
              Einwilligung abgefragt wurde, erfolgt die Verarbeitung
              ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und
              &sect;&nbsp;25 Abs. 1 TTDSG, soweit die Einwilligung die
              Speicherung von Cookies oder den Zugriff auf Informationen im
              Endgerät des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne
              des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mt-3">
              Wenn Ihr Browser Google Fonts nicht unterstützt, wird eine
              Standardschrift von Ihrem Computer genutzt.
            </p>
            <p className="mt-3">
              Weitere Informationen zu Google Fonts finden Sie unter{" "}
              <a
                href="https://developers.google.com/fonts/faq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://developers.google.com/fonts/faq
              </a>
              {" "}und in der Datenschutzerklärung von Google:{" "}
              <a
                href="https://policies.google.com/privacy?hl=de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://policies.google.com/privacy?hl=de
              </a>
              .
            </p>
            <p className="mt-3">
              Das Unternehmen verfügt über eine Zertifizierung nach dem
              &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF ist ein
              Übereinkommen zwischen der Europäischen Union und den USA, der die
              Einhaltung europäischer Datenschutzstandards bei
              Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem
              DPF zertifizierte Unternehmen verpflichtet sich, diese
              Datenschutzstandards einzuhalten. Weitere Informationen hierzu
              erhalten Sie vom Anbieter unter folgendem Link:{" "}
              <a
                href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active
              </a>
            </p>

            <h3 className="mt-6 text-lg font-semibold text-text">
              Font Awesome
            </h3>
            <p className="mt-3">
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
              und Symbolen Font Awesome. Anbieter ist die Fonticons, Inc., 6
              Porter Road Apartment 3R, Cambridge, Massachusetts, USA.
            </p>
            <p className="mt-3">
              Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in
              ihren Browsercache, um Texte, Schriftarten und Symbole korrekt
              anzuzeigen. Zu diesem Zweck muss der von Ihnen verwendete Browser
              Verbindung zu den Servern von Font Awesome aufnehmen. Hierdurch
              erlangt Font Awesome Kenntnis darüber, dass über Ihre IP-Adresse
              diese Website aufgerufen wurde. Die Nutzung von Font Awesome
              erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben
              ein berechtigtes Interesse an der einheitlichen Darstellung des
              Schriftbildes auf unserer Website. Sofern eine entsprechende
              Einwilligung abgefragt wurde, erfolgt die Verarbeitung
              ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und
              &sect;&nbsp;25 Abs. 1 TTDSG, soweit die Einwilligung die
              Speicherung von Cookies oder den Zugriff auf Informationen im
              Endgerät des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne
              des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mt-3">
              Wenn Ihr Browser Font Awesome nicht unterstützt, wird eine
              Standardschrift von Ihrem Computer genutzt.
            </p>
            <p className="mt-3">
              Weitere Informationen zu Font Awesome finden Sie und in der
              Datenschutzerklärung von Font Awesome unter:{" "}
              <a
                href="https://fontawesome.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://fontawesome.com/privacy
              </a>
              .
            </p>

            <h3 className="mt-6 text-lg font-semibold text-text">
              Google Maps
            </h3>
            <p className="mt-3">
              Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die
              Google Ireland Limited (&bdquo;Google&ldquo;), Gordon House, Barrow
              Street, Dublin 4, Irland.
            </p>
            <p className="mt-3">
              Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre
              IP-Adresse zu speichern. Diese Informationen werden in der Regel an
              einen Server von Google in den USA übertragen und dort gespeichert.
              Der Anbieter dieser Seite hat keinen Einfluss auf diese
              Datenübertragung. Wenn Google Maps aktiviert ist, kann Google zum
              Zwecke der einheitlichen Darstellung der Schriftarten Google Fonts
              verwenden. Beim Aufruf von Google Maps lädt Ihr Browser die
              benötigten Web Fonts in ihren Browsercache, um Texte und
              Schriftarten korrekt anzuzeigen.
            </p>
            <p className="mt-3">
              Die Nutzung von Google Maps erfolgt im Interesse einer
              ansprechenden Darstellung unserer Online-Angebote und an einer
              leichten Auffindbarkeit der von uns auf der Website angegebenen
              Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6
              Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung
              abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf
              Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect;&nbsp;25
              Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies
              oder den Zugriff auf Informationen im Endgerät des Nutzers
              (z.&nbsp;B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die
              Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mt-3">
              Die Datenübertragung in die USA wird auf die
              Standardvertragsklauseln der EU-Kommission gestützt. Details finden
              Sie hier:{" "}
              <a
                href="https://privacy.google.com/businesses/gdprcontrollerterms/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://privacy.google.com/businesses/gdprcontrollerterms/
              </a>
              {" "}und{" "}
              <a
                href="https://privacy.google.com/businesses/gdprcontrollerterms/sccs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://privacy.google.com/businesses/gdprcontrollerterms/sccs/
              </a>
              .
            </p>
            <p className="mt-3">
              Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der
              Datenschutzerklärung von Google:{" "}
              <a
                href="https://policies.google.com/privacy?hl=de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://policies.google.com/privacy?hl=de
              </a>
              .
            </p>
            <p className="mt-3">
              Das Unternehmen verfügt über eine Zertifizierung nach dem
              &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF ist ein
              Übereinkommen zwischen der Europäischen Union und den USA, der die
              Einhaltung europäischer Datenschutzstandards bei
              Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem
              DPF zertifizierte Unternehmen verpflichtet sich, diese
              Datenschutzstandards einzuhalten. Weitere Informationen hierzu
              erhalten Sie vom Anbieter unter folgendem Link:{" "}
              <a
                href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange underline underline-offset-4 hover:text-orange/80 break-all"
              >
                https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active
              </a>
            </p>
          </div>

          {/* ==================== 8. eCommerce und Zahlungsanbieter ==================== */}
          <div>
            <h2 className="text-xl font-bold text-text">
              8. eCommerce und Zahlungsanbieter
            </h2>

            <h3 className="mt-6 text-lg font-semibold text-text">
              Verarbeiten von Kunden- und Vertragsdaten
            </h3>
            <p className="mt-3">
              Wir erheben, verarbeiten und nutzen personenbezogene Kunden- und
              Vertragsdaten zur Begründung, inhaltlichen Ausgestaltung und
              Änderung unserer Vertragsbeziehungen. Personenbezogene Daten über
              die Inanspruchnahme dieser Website (Nutzungsdaten) erheben,
              verarbeiten und nutzen wir nur, soweit dies erforderlich ist, um
              dem Nutzer die Inanspruchnahme des Dienstes zu ermöglichen oder
              abzurechnen. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. b
              DSGVO.
            </p>
            <p className="mt-3">
              Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder
              Beendigung der Geschäftsbeziehung und Ablauf der ggf. bestehenden
              gesetzlichen Aufbewahrungsfristen gelöscht. Gesetzliche
              Aufbewahrungsfristen bleiben unberührt.
            </p>
          </div>

          {/* ==================== Stand ==================== */}
          <p className="text-sm text-text-secondary">Stand: März 2026</p>
        </div>
      </div>
    </section>
  );
}
