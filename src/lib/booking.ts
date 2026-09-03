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
 * ⚠️ OFFEN — Buchungslink für die GRUPPENKURSE.
 *
 * Stand 03.09.2026: Luigi hat gemeldet, dass die Kursbuchung nicht mehr über
 * Eversports läuft, und will einen neuen nutrilize-Link schicken. Solange der
 * fehlt, zeigen die Kurs-Buttons auf die eigene Buchungsseite für das
 * kostenlose Beratungsgespräch — die funktioniert und ist der übliche
 * Einstieg. Das alte Eversports-Widget ist raus, es rendert seit dem Wechsel
 * nur noch eine leere Fläche.
 *
 * SOBALD DER LINK DA IST: hier die nutrilize-URL eintragen, sonst nichts.
 * Beide Kurs-Buttons und der „Jetzt buchen"-Knopf auf der Startseite hängen
 * daran. Prüfen ist dann noch: hat die kostenlose Probewoche einen eigenen
 * Link oder ist sie derselbe Kalender? (Frage an Luigi offen.)
 */
export const gruppenkurseBuchung = "/kostenloses-beratungsgespraech/buchen";

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
