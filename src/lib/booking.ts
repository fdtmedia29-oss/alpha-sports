/**
 * Buchungslinks (nutrilize).
 *
 * Quelle: Luigi, "Nutrilize Buchungslinks für Webseite", 31.08.2026.
 * Ersetzt die früheren Virtuagym-Widgets. Ändert Luigi einen Link,
 * wird er nur hier getauscht.
 */

export const buchungsLinks = {
  beratungsgespraech:
    "https://portal.nutrilize.app/appointment/RsF3dl6gELoRqamgEoaq",
  inbody: "https://portal.nutrilize.app/appointment/CCI5Cir86OsMIRzj230d",
  leistungsanalyse:
    "https://portal.nutrilize.app/appointment/t2iG09pTw0rusXQbBeuE",
  stoffwechselanalyse:
    "https://portal.nutrilize.app/appointment/ouxaHBDmE4hUuk6yM7Ef",
} as const;

/**
 * Buchungslink für die GRUPPENKURSE — der nutrilize-Kursplan.
 *
 * Von Luigi per WhatsApp am 04.09.2026: „Das wär de Link fürd Websitä."
 * Löst das alte Eversports-Widget ab, das seit dem Wechsel nur noch eine leere
 * Fläche rendert hat. Hängt dran: beide Kurs-Buttons auf /gruppenkurse, die
 * drei „Jetzt Buchen" der Kurskarten und der Knopf auf der Startseite.
 *
 * ⏳ Luigi hat im selben Atemzug angekündigt: „Sobald denn d Alpha Sports App
 * fertig isch, schick ich dir den neu." Wenn der neue Link kommt, wird hier
 * eine Zeile getauscht, sonst nichts.
 *
 * Die kostenlose Probewoche läuft bewusst über denselben Kalender — Luigi hat
 * einen Link für die Website geschickt, keinen zweiten für die Probewoche.
 */
export const gruppenkurseBuchung =
  "https://portal.nutrilize.app/profile/ZhZwxOv4tTStfB8OFqptdYZ7gD52/classes";

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
