// Grounding knowledge base for the Alpha Sports chatbot.
// Built from the SAME source of truth as the website (content.ts) so the bot
// can never drift from the site. Do NOT hand-write facts here — derive them
// from content.ts. The model is instructed to answer ONLY from this text.

import {
  siteConfig,
  services,
  groupClasses,
  trainers,
  faqSections,
} from "./content";

/**
 * Produces the German knowledge block injected into the system prompt.
 * Everything the bot is allowed to state as fact lives here.
 */
export function buildKnowledgeBase(): string {
  const parts: string[] = [];

  // --- Studio / contact ---
  parts.push(
    [
      "## Über Alpha Sports",
      `${siteConfig.companyName} ist ein privates Personal-Training-Studio in St. Gallen.`,
      `Adresse: ${siteConfig.address}.`,
      `Telefon: ${siteConfig.phone} · WhatsApp: ${siteConfig.whatsapp} · E-Mail: ${siteConfig.email}.`,
      `Instagram: ${siteConfig.instagram}.`,
      "Google-Bewertung: 5,0 Sterne aus über 70 Bewertungen.",
      "Qualitop-zertifiziert (von vielen Krankenkassen für Zusatzversicherungen anerkannt).",
    ].join("\n")
  );

  // --- Das kostenlose Angebot (the one CTA) ---
  parts.push(
    [
      "## Kostenloses Beratungsgespräch (das zentrale Angebot)",
      "Der Einstieg bei Alpha Sports ist immer das KOSTENLOSE BERATUNGSGESPRÄCH.",
      "Darin werden Ziele, Gesundheitszustand und Fitnesslevel besprochen und gemeinsam das passende Trainingsangebot festgelegt.",
      "Man muss sich vorher NICHT entscheiden, welches Training man möchte — das wird im Gespräch geklärt.",
      `Buchung: online über ${siteConfig.bookingUrl} (Button/Link „Kostenloses Beratungsgespräch").`,
      "WICHTIG: Alpha Sports bietet KEIN „Probetraining“ an. Das kostenlose Angebot ist ausschliesslich das Beratungsgespräch.",
    ].join("\n")
  );

  // --- Services ---
  parts.push(
    "## Angebote\n" +
      services.map((s) => `- **${s.title}**: ${s.description}`).join("\n") +
      "\n- **Online Coaching**: 12-Wochen-Programme mit persönlicher Betreuung, ortsunabhängig."
  );

  // --- Group classes (authoritative: 4 classes with real schedules) ---
  parts.push(
    "## Gruppenkurse (aktuell 4 Kurse mit festen Zeiten)\n" +
      groupClasses
        .map(
          (c) =>
            `- **${c.name}** (Trainer: ${c.trainer}, Zeiten: ${c.schedule}): ${c.description}`
        )
        .join("\n") +
      "\nGruppenkurse kann man mit einer kostenlosen Trial Week unverbindlich testen. " +
      "Sie eignen sich für jedes Fitnesslevel; die Übungen werden angepasst."
  );

  // --- Trainers ---
  parts.push(
    "## Trainer-Team\n" +
      trainers
        .map((t) => `- **${t.name}** — ${t.role}. ${t.bio}`)
        .join("\n")
  );

  // --- FAQ verbatim (Luigi's own answers) ---
  parts.push(
    "## Häufige Fragen (Antworten von Alpha Sports)\n" +
      faqSections
        .map(
          (sec) =>
            `### ${sec.category}\n` +
            sec.items.map((i) => `**F: ${i.q}**\nA: ${i.a}`).join("\n\n")
        )
        .join("\n\n")
  );

  return parts.join("\n\n");
}
