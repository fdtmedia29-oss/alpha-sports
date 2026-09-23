/**
 * Buchungslinks (nutrilize).
 *
 * Quelle: Luigi, "Nutrilize Buchungslinks für Webseite", 31.08.2026.
 * Ersetzt die früheren Virtuagym-Widgets. Ändert Luigi einen Link,
 * wird er nur hier getauscht.
 *
 * Seit 23.09.2026 über die neue Alpha Sports App (alpha-sports-app.web.app,
 * nutrilize unter Luigis eigenem Namen). Von Luigi per WhatsApp. Die IDs sind
 * dieselben wie vorher auf portal.nutrilize.app, nur die Domain ist neu.
 */

export const buchungsLinks = {
  beratungsgespraech:
    "https://alpha-sports-app.web.app/appointment/RsF3dl6gELoRqamgEoaq",
  inbody: "https://alpha-sports-app.web.app/appointment/CCI5Cir86OsMIRzj230d",
  leistungsanalyse:
    "https://alpha-sports-app.web.app/appointment/t2iG09pTw0rusXQbBeuE",
  stoffwechselanalyse:
    "https://alpha-sports-app.web.app/appointment/ouxaHBDmE4hUuk6yM7Ef",
} as const;

/**
 * Buchungslink für die GRUPPENKURSE — der nutrilize-Kursplan.
 *
 * Von Luigi per WhatsApp am 04.09.2026: „Das wär de Link fürd Websitä."
 * Löst das alte Eversports-Widget ab, das seit dem Wechsel nur noch eine leere
 * Fläche rendert hat. Hängt dran: beide Kurs-Buttons auf /gruppenkurse, die
 * drei „Jetzt Buchen" der Kurskarten und der Knopf auf der Startseite.
 *
 * ✅ Luigi hatte angekündigt: „Sobald denn d Alpha Sports App fertig isch,
 * schick ich dir den neu." Am 23.09.2026 kam er, jetzt auf der App-Domain.
 *
 * Die kostenlose Probewoche läuft bewusst über denselben Kalender — Luigi hat
 * einen Link für die Website geschickt, keinen zweiten für die Probewoche.
 */
export const gruppenkurseBuchung =
  "https://alpha-sports-app.web.app/profile/ZhZwxOv4tTStfB8OFqptdYZ7gD52/classes";

/** Zeigt die Kursbuchung schon auf nutrilize? Steuert target/rel der Buttons. */
export const gruppenkurseExtern = gruppenkurseBuchung.startsWith("http");

export const analysenOptionen = [
  {
    label: "InBody Körperanalyse",
    url: buchungsLinks.inbody,
    beschreibung:
      "Körperzusammensetzung in einer Minute: Muskelmasse, Körperfett, Wasserhaushalt.",
  },
  {
    label: "Stoffwechsel- und Stressanalyse",
    url: buchungsLinks.stoffwechselanalyse,
    beschreibung:
      "30-minütige Atemgasanalyse in Ruhe: Grundumsatz, Fett- vs. Kohlenhydratverbrennung, Stresslevel.",
  },
  {
    label: "Leistungsanalyse",
    url: buchungsLinks.leistungsanalyse,
    beschreibung:
      "Spiroergometrie: VO2max, individuelle Herzfrequenz-Zonen und dein Fettverbrennungs-Pulsbereich.",
  },
];
