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
