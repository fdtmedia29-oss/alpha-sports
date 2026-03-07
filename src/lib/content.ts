export const siteConfig = {
  name: "Alpha Sports",
  tagline: "Personal Training Studio St. Gallen",
  address: "Unterer Graben 21, 9000 St. Gallen",
  phone: "+41 76 390 36 79",
  email: "info@alpha-sports.ch",
  whatsapp: "https://wa.me/41763903679",
  instagram: "https://instagram.com/alpha_sports_studio",
  facebook: "https://facebook.com/Alpha-Sports-Studio",
  youtube: "https://youtube.com/channel/UCL2frzl8mszclBbDItizUFg",
  bookingUrl: "/kontakt",
  companyName: "Alpha Sports GmbH",
} as const;

export interface Trainer {
  name: string;
  role: string;
  credentials: string[];
  image: string;
  bio: string;
}

export const trainers: Trainer[] = [
  {
    name: "Luigi Lieberherr",
    role: "Geschaeftsfuehrer & Personal Trainer",
    credentials: [
      "Personal Trainer",
      "HYROX365 Foundation",
      "Ernaehrungscoach",
      "Fitness & Functional Trainer",
      "InBody Specialist",
    ],
    image: "/images/trainers/team.jpg",
    bio: "10+ Jahre Fitness-Erfahrung, Breakdance-Instruktor, Swiss Breakdance Champion und Thai-Boxing-Erfahrung. Luigi verbindet Leidenschaft mit Expertise fuer deine Transformation.",
  },
  {
    name: "Julia Lau",
    role: "Personal Training & Group Fitness",
    credentials: [
      "Dipl. Physiotherapeutin BSc",
      "Klassische Massage (EMR)",
      "Boeger Therapie BT1+BT3",
      "GLA:D Arthrose",
      "Group Fitness",
    ],
    image: "/images/trainers/team.jpg",
    bio: "10+ Jahre Erfahrung, ehemalige Wettkampf-Tennisspielerin. Verbindet therapeutisches Wissen mit gezieltem Fitness-Training fuer nachhaltige Ergebnisse.",
  },
  {
    name: "David Rogers",
    role: "Personal Training & Group Fitness",
    credentials: [
      "Bewegungs- & Gesundheitsfoerderung",
      "Fitness Instruktor",
      "Pilates & Yoga",
      "Kung Fu & Judo",
      "Selbstverteidigung",
    ],
    image: "/images/trainers/team.jpg",
    bio: "Spezialist fuer funktionelle Bewegung, Pilates, Yoga und Kampfsport. Bringt Koerper und Geist in Einklang.",
  },
  {
    name: "Nicole Walser",
    role: "Group Fitness & HYROX",
    credentials: [
      "Fitness Instruktorin",
      "HYROX365 Foundation",
      "Ernaehrungscoach",
    ],
    image: "/images/trainers/team.jpg",
    bio: "HYROX-Athletin, CrossFit, Klettern, Bouldern, Snowboarden — motiviert dich zu Hoechstleistungen in der Gruppe und am Race Day.",
  },
  {
    name: "Isabell Tatzl",
    role: "Schwangerschaftscoaching & Kurse",
    credentials: [
      "Zertifizierte Schwangerschafts-Trainerin",
      "Mutter von zwei Kindern",
    ],
    image: "/images/trainers/team.jpg",
    bio: "Ausgebildete Expertin und Mutter von zwei Kindern. Begleitet werdende Muetter mit sanften Kraft- und Beweglichkeitsuebungen sicher durch die Schwangerschaft.",
  },
];

export interface Service {
  title: string;
  description: string;
  href: string;
  icon: string;
  image: string;
}

export const services: Service[] = [
  {
    title: "Personal Training",
    description:
      "1:1 Training im privaten Studio — individuell auf dich abgestimmt. Abnehmen, Muskelaufbau oder Schmerzfreiheit.",
    href: "/personal-training",
    icon: "dumbbell",
    image: "/images/studio/studio-6.jpg",
  },
  {
    title: "Online Coaching",
    description:
      "12-Wochen Programme mit persoenlicher Betreuung via App — von ueberall. Training, Ernaehrung und Lifestyle.",
    href: "/online-coaching",
    icon: "monitor",
    image: "/images/studio/studio-7.jpg",
  },
  {
    title: "Ernaehrungsberatung",
    description:
      "Massgeschneiderte Ernaehrungsplaene fuer nachhaltige Ergebnisse. Ohne Verzicht, ohne Crash-Diaet.",
    href: "/ernaehrungsberatung",
    icon: "apple",
    image: "/images/studio/studio-8.jpg",
  },
  {
    title: "Analysen & Diagnostik",
    description:
      "InBody, Stoffwechsel- & Leistungsanalyse fuer datenbasiertes Training. Messbare Fortschritte.",
    href: "/analysen",
    icon: "activity",
    image: "/images/studio/studio-1.jpg",
  },
];

export interface GroupClass {
  name: string;
  trainer: string;
  schedule: string;
  description: string;
  href: string;
  image: string;
}

export const groupClasses: GroupClass[] = [
  {
    name: "Bootcamp",
    trainer: "Nicole Walser",
    schedule: "Mo 18:30 & Fr 17:30",
    description:
      "Energiegeladener Indoor-Gruppenkurs fuer jedes Fitness-Level. Kraft-Ausdauer, Herz-Kreislauf, Fettverbrennung und Muskelaufbau mit abwechslungsreichen Uebungen. Nachbrenneffekt bis zu 72 Stunden.",
    href: "/gruppenkurse#bootcamp",
    image: "/images/classes/bootcamp.png",
  },
  {
    name: "Hypertrophic",
    trainer: "Team Alpha Sports",
    schedule: "Mi 18:00–19:00",
    description:
      "Fundiertes Hypertrophie-Training mit Fokus auf korrekte Technik bei Grunduebungen. Progressive Ueberlastung, Muskelspannung und gezielter Reiz fuer maximalen Muskelaufbau und Body Recomposition.",
    href: "/gruppenkurse#hypertrophic",
    image: "/images/studio/studio-6.jpg",
  },
  {
    name: "HIIT Boxing",
    trainer: "Luigi Lieberherr",
    schedule: "Do 18:30–19:30",
    description:
      "Fusion aus Thaiboxen (Muay Thai) und HIIT-Training. Kicks, Schlaege, Knie und Ellbogen kombiniert mit hochintensiven Intervallen. Ganzkoerper-Workout fuer Kondition, Kraft und Schnelligkeit.",
    href: "/gruppenkurse#hiit-boxing",
    image: "/images/studio/studio-7.jpg",
  },
  {
    name: "Pilates",
    trainer: "Julia Lau",
    schedule: "So 10:00–11:00",
    description:
      "Staerke deine Mitte und finde die Balance. Core-Stabilitaet, Mobilitaet und Koerperhaltung verbessern. Bauch-, Ruecken- und Beckenbodentraining. Ideale Ergaenzung zum Krafttraining.",
    href: "/gruppenkurse#pilates",
    image: "/images/studio/studio-3.jpg",
  },
  {
    name: "Yoga",
    trainer: "David Rogers",
    schedule: "Mi 19:30–20:30",
    description:
      "Koerper, Geist und Seele in Einklang bringen. Gezielte Atemtechniken, fliessende Bewegungen und achtsame Praxis fuer koerperliches Wohlbefinden und innere Balance. Rueckenmuskulatur staerken, Flexibilitaet verbessern.",
    href: "/gruppenkurse#yoga",
    image: "/images/studio/studio-4.jpg",
  },
  {
    name: "Stretching & Mobility",
    trainer: "David Rogers",
    schedule: "So 11:30–12:30",
    description:
      "Dynamische und statische Dehnuebungen fuer erhoehte Flexibilitaet, verbesserte Koerperhaltung und reduziertes Verletzungsrisiko. Gelenke mobilisieren, Muskulatur entspannen, Verspannungen loesen.",
    href: "/gruppenkurse#stretching",
    image: "/images/studio/studio-5.jpg",
  },
];

export interface Testimonial {
  name: string;
  result: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Dr. med. univ. Philipp Krenn",
    result: "Arzt & Sportler",
    quote:
      "Luigi ist einer der Besten in seinem Fach. Er hat umfangreiches Wissen in Ernaehrung und passt das Training perfekt an meine Beduerfnisse an — trotz Skoliose. Das gut ausgestattete Studio und die Boot Camp Kurse runden das Angebot ab.",
  },
  {
    name: "Peter M.",
    result: "Muskelaufbau & Fettabbau",
    quote:
      "Personal Training hat mir auf vielfaeltige Weise weitergeholfen. Deutlich Muskelmasse aufgebaut, Koerperfett reduziert. Meine Blutwerte haben sich innerhalb kurzer Zeit massiv verbessert. Mehr Mobilitaet, besserer Schlaf, mehr Selbstvertrauen. Ich nehme jetzt die Treppe statt den Lift.",
  },
  {
    name: "Chantal S.",
    result: "Zielgewicht erreicht & gehalten",
    quote:
      "Das Personal Training ist mein physischer Ausgleich. Mein Zielgewicht erreicht und gehalten — durch Training und Ernaehrungsbildung. Immunsystem gestaerkt, weniger krank. Die abwechslungsreichen Uebungen und die persoenlich angepassten Trainings machen jede Session einzigartig.",
  },
  {
    name: "Livio C.",
    result: "+10 kg Muskelmasse in 2 Jahren",
    quote:
      "10 kg Muskelmasse in 2 Jahren aufgebaut. Ich fuehle mich im Alltag ausgeglichener. Training hilft mir, den Arbeitsstress auszugleichen. Modernes Studio mit viel Platz und top motivierte Trainer. Positives Feedback von Bekannten motiviert zusaetzlich.",
  },
  {
    name: "Michele",
    result: "Gewichtsverlust & weniger Rueckenschmerzen",
    quote:
      "Gewicht verloren, Rueckenschmerzen reduziert. Die groesste Veraenderung war mental — ich habe gelernt, meinen Koerper zu akzeptieren und mich selbst wieder mehr zu lieben. Luigi hat mich auch ausserhalb des Trainings unterstuetzt, mit Leidenschaft und echtem Interesse an meinen Zielen.",
  },
];

export const painPointQuotes = [
  "Ich will mich wieder wohl in meinem Körper fühlen.",
  "Ich brauche jemanden, der eine Strategie hat, die funktioniert.",
  "Ich will mich endlich wieder gerne im Spiegel ansehen.",
  "Ich brauche Verbindlichkeit, sonst finde ich immer eine Ausrede.",
  "Ich finde in meinem Alltag einfach keine Zeit für mich.",
];

export const painPointCards = [
  {
    problem: "Du trainierst regelmässig, siehst aber keine Ergebnisse?",
    solution:
      "Individuelle Trainingspläne basierend auf InBody-Analyse und Leistungsdiagnostik.",
  },
  {
    problem: "Du weisst nicht, wo du anfangen sollst?",
    solution:
      "Kostenloses Beratungsgespräch — wir erstellen deine persönliche Strategie.",
  },
  {
    problem: "Fitnessstudios sind dir zu überfüllt und anonym?",
    solution:
      "Privates Studio, max. 2 Personen — volle Aufmerksamkeit, familiäre Atmosphäre.",
  },
];

export const googleReviews = [
  {
    name: "Artiola Lenjani",
    quote:
      "Luigi ist der beste Personaltrainer überhaupt! Ich hatte bereits mehrere Gespräche und Probetrainings bei verschiedenen Personaltrainern und kann mit voller Überzeugung sagen, dass Luigi heraussticht.",
  },
  {
    name: "Melanie Frei",
    quote:
      "Ich trainiere seit rund 6 Monaten bei Lui und bin sehr happy damit. Lui ist ein ausgezeichneter Trainer, der auf meine Bedürfnisse eingeht, Schwachpunkte erkennt und diese gezielt mit mir trainiert.",
  },
  {
    name: "Ornella Vicentini",
    quote:
      "Ich trainiere seit 3 Monaten 2 mal die Woche bei Alpha Sports. Das Training ist super effektiv, anstrengend und macht wahnsinnig viel Spass. Trainer Luigi ist hoch professionell, super nett und ein toller Motivator.",
  },
  {
    name: "Rebecca Pfau",
    quote:
      "Luigi ist ein super Personal Trainer! Sehr motivierend, professionell und immer gut gelaunt. Das Training ist effektiv und macht richtig Spass. Klare Empfehlung!",
  },
  {
    name: "Simon",
    quote:
      "Luigi geht sehr auf die individuellen Ziele von einem ein. Er nimmt sich Zeit für jede einzelne Frage und man spürt seine Begeisterung für sein Fachgebiet. Man merkt, dass er das Beste für einen rausholen möchte.",
  },
  {
    name: "Michi",
    quote:
      "Das Training bei Luigi und David ist einfach nur top und macht Spass. Ich kann es allen empfehlen — auch solchen, die vorher nie ein Fitnessstudio besucht haben.",
  },
  {
    name: "Reto Scherrer",
    quote:
      "Die Trainings bei Luigi von Alpha Sports sind perfekt auf meine Bedürfnisse abgestimmt. Er versteht es die Trainings herausfordernd und mit Spass zu gestalten. Schwachstellen erkennt er sofort und bearbeitet diese konsequent.",
  },
  {
    name: "Markus Richina",
    quote:
      "Gute Übungen, beobachtet mich immer und korrigiert sofort meine Fehlhaltungen. Bringt mich an die Grenzen (ohne ihn hätte ich schon lange vorher aufgegeben). Verbesserungen sind im Sport spürbar.",
  },
  {
    name: "Claudine Giason",
    quote:
      "Luigi ist eine offene und herzliche Persönlichkeit. Seine Freude an seiner Arbeit ist spürbar. Er ist bedacht das passende Training für einem zu finden und ist dabei sehr aufmerksam. Zusammen mit seiner Partnerin Julia war die Betreuung fachlich wie auch menschlich super.",
  },
  {
    name: "Sandrine Benz",
    quote:
      "Sehr kompetentes und engagiertes Trainerteam, sei es für ein Einzel- oder auch für ein Gruppentraining, adaptieren die Belastung sehr gut an das Fitnesslevel ihrer Kundschaft. Man fühlt sich gut aufgehoben und hat nach einer Stunde ein richtig gutes Workout gemacht.",
  },
];

export const certifications = [
  { name: "Qualitop", logo: "/images/certs/qualitop.png" },
  { name: "EMR", logo: "/images/certs/emr.png" },
  { name: "SwissActive", logo: "/images/certs/swissactive.png" },
];

export const studioImages = [
  "/images/studio/studio-1.jpg",
  "/images/studio/studio-2.jpg",
  "/images/studio/studio-3.jpg",
  "/images/studio/studio-4.jpg",
  "/images/studio/studio-5.jpg",
  "/images/studio/studio-6.jpg",
  "/images/studio/studio-7.jpg",
  "/images/studio/studio-8.jpg",
];

export const navItems = [
  { label: "Kostenloses Beratungsgespraech", href: "/kontakt" },
  { label: "Personal Training", href: "/personal-training" },
  { label: "Online Coaching", href: "/online-coaching" },
  { label: "Ernaehrungsberatung", href: "/ernaehrungsberatung" },
  {
    label: "Analysen",
    children: [
      { label: "InBody Analyse", href: "/analysen#inbody" },
      { label: "Stoffwechselanalyse", href: "/analysen#stoffwechsel" },
      { label: "Leistungsanalyse", href: "/analysen#leistung" },
    ],
  },
  {
    label: "Gruppenkurse",
    children: [
      { label: "Bootcamp", href: "/gruppenkurse#bootcamp" },
      { label: "Hypertrophic", href: "/gruppenkurse#hypertrophic" },
      { label: "HIIT Boxing", href: "/gruppenkurse#hiit-boxing" },
      { label: "Pilates", href: "/gruppenkurse#pilates" },
      { label: "Yoga", href: "/gruppenkurse#yoga" },
      { label: "Stretching & Mobility", href: "/gruppenkurse#stretching" },
    ],
  },
  { label: "Hyrox", href: "/hyrox" },
  {
    label: "Mehr",
    children: [
      { label: "Ueber uns", href: "/ueber-uns" },
      { label: "Erfolgsgeschichten", href: "/erfolgsgeschichten" },
      { label: "Preise", href: "/preise" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
] as const;

export interface PricingCategory {
  title: string;
  items: PricingItem[];
}

export interface PricingItem {
  name: string;
  price: string;
  unit?: string;
  note?: string;
  popular?: boolean;
  includes?: string[];
}

export const pricing: PricingCategory[] = [
  {
    title: "Einzelbuchungen",
    items: [
      { name: "Beratungsgespraech", price: "Kostenlos", unit: "30 Min" },
      { name: "1:1 Personal Training", price: "150", unit: "60 Min" },
      { name: "1:2 Personal Training", price: "90", unit: "pro Person / 60 Min" },
      { name: "Trainingsplanung", price: "65" },
    ],
  },
  {
    title: "1:1 Stempelkarten",
    items: [
      {
        name: "12er Stempelkarte",
        price: "580",
        note: "CHF 145/h | Mit Isabell/David: CHF 125/h (500/mtl)",
        includes: ["1 Proteinshake pro Training", "1 Sportgetraenk pro Training", "Handtuchservice"],
      },
      {
        name: "24er Stempelkarte",
        price: "1'120",
        note: "CHF 140/h | Mit Isabell/David: CHF 120/h (960/mtl)",
        popular: true,
        includes: ["1 Proteinshake pro Training", "1 Sportgetraenk pro Training", "Handtuchservice"],
      },
      {
        name: "36er Stempelkarte",
        price: "1'560",
        note: "CHF 130/h | Mit Isabell/David: CHF 115/h (1'380/mtl)",
        includes: ["1 Proteinshake pro Training", "1 Sportgetraenk pro Training", "Handtuchservice"],
      },
      {
        name: "48er Stempelkarte",
        price: "1'920",
        note: "CHF 120/h | Mit Isabell/David: CHF 110/h (1'760/mtl)",
        includes: ["1 Proteinshake pro Training", "1 Sportgetraenk pro Training", "Handtuchservice"],
      },
    ],
  },
  {
    title: "1:2 Stempelkarten",
    items: [
      {
        name: "12er Stempelkarte",
        price: "360",
        note: "CHF 90/h p.P. | Mit Isabell/David: CHF 70/h (280/mtl p.P.)",
      },
      {
        name: "24er Stempelkarte",
        price: "680",
        note: "CHF 85/h p.P. | Mit Isabell/David: CHF 65/h (520/mtl p.P.)",
      },
      {
        name: "36er Stempelkarte",
        price: "960",
        note: "CHF 80/h p.P. | Mit Isabell/David: CHF 60/h (720/mtl p.P.)",
      },
      {
        name: "48er Stempelkarte",
        price: "1'200",
        note: "CHF 75/h p.P. | Mit Isabell/David: CHF 60/h (960/mtl p.P.)",
      },
    ],
  },
  {
    title: "Gruppenkurse",
    items: [
      { name: "Schnupperstunde", price: "Kostenlos" },
      { name: "Einzeleintritt", price: "30" },
      { name: "12er Karte", price: "324", note: "CHF 27/Kurs" },
      { name: "24er Karte", price: "600", note: "CHF 25/Kurs", popular: true },
      { name: "36er Karte", price: "864", note: "CHF 24/Kurs" },
      { name: "48er Karte", price: "1'104", note: "CHF 23/Kurs" },
    ],
  },
  {
    title: "Trainingspakete (12 Wochen)",
    items: [
      {
        name: "Abnehm Paket Silber",
        price: "1'428",
        unit: "/mtl",
        includes: [
          "24 Personal Trainings",
          "2h Ernaehrungsberatung",
          "4x InBody Analyse",
          "Stoffwechselanalyse",
          "Leistungsanalyse",
          "4 Erfolgsgespraeche",
          "Woechentliche Follow-ups",
        ],
      },
      {
        name: "Abnehm Paket Gold",
        price: "1'947",
        unit: "/mtl",
        popular: true,
        includes: [
          "36 Personal Trainings",
          "2h Ernaehrungsberatung",
          "4x InBody Analyse",
          "Stoffwechselanalyse",
          "Leistungsanalyse",
          "4 Erfolgsgespraeche",
          "Woechentliche Follow-ups",
        ],
      },
      {
        name: "Muskelaufbau Silber",
        price: "1'381",
        unit: "/mtl",
        includes: [
          "24 Personal Trainings",
          "2h Ernaehrungsberatung",
          "4x InBody Analyse",
          "Stoffwechselanalyse",
          "4 Erfolgsgespraeche",
          "Woechentliche Follow-ups",
        ],
      },
      {
        name: "Muskelaufbau Gold",
        price: "1'900",
        unit: "/mtl",
        includes: [
          "36 Personal Trainings",
          "2h Ernaehrungsberatung",
          "4x InBody Analyse",
          "Stoffwechselanalyse",
          "4 Erfolgsgespraeche",
          "Woechentliche Follow-ups",
        ],
      },
    ],
  },
  {
    title: "Mix Pakete (PT + Gruppenkurse)",
    items: [
      { name: "Abnehm Silber Budget", price: "915", unit: "/mtl" },
      { name: "Abnehm Gold Budget", price: "1'015", unit: "/mtl" },
      { name: "Muskelaufbau Silber Budget", price: "915", unit: "/mtl" },
      { name: "Muskelaufbau Gold Budget", price: "1'015", unit: "/mtl" },
    ],
  },
  {
    title: "Gruppenkurs Pakete",
    items: [
      { name: "Abnehm Silber Budget", price: "908" },
      { name: "Abnehm Gold Budget", price: "1'193" },
      { name: "Muskelaufbau Silber Budget", price: "908" },
      { name: "Muskelaufbau Gold Budget", price: "1'193" },
    ],
  },
  {
    title: "Online Coaching",
    items: [
      { name: "All-In-One Premium Check-In", price: "770" },
      { name: "Basic Premium Check-In", price: "240" },
      { name: "1 Monat Premium Online Betreuung", price: "360", unit: "/mtl" },
      {
        name: "Alpha Sports Shape Pro (12 Wochen)",
        price: "620",
        unit: "/mtl",
        popular: true,
        includes: [
          "Alles aus Shape",
          "Stoffwechsel- & Leistungsanalyse",
          "InBody Koerperanalyse",
          "FMS-Test",
          "Personal Training Session",
          "Priority Support",
        ],
      },
      {
        name: "Alpha Sports Shape (12 Wochen)",
        price: "420",
        unit: "/mtl",
        includes: [
          "Individueller Trainingsplan",
          "Ernaehrungsplan",
          "App-Zugang",
          "Lifestyle-Optimierung",
          "Woechentliche Anpassungen",
          "3 Monate Premium Support",
        ],
      },
    ],
  },
  {
    title: "Ernaehrungsberatung",
    items: [
      { name: "Einzelsession", price: "150", unit: "/Stunde" },
      { name: "Shape Light", price: "592.40" },
    ],
  },
  {
    title: "Analysen",
    items: [
      { name: "InBody Analyse", price: "80" },
      { name: "InBody 3er Karte", price: "210" },
      { name: "InBody 12er Karte", price: "810" },
      { name: "InBody Add-On", price: "60" },
      { name: "Stoffwechselanalyse", price: "149" },
      { name: "Stoffwechsel Add-On", price: "119" },
      { name: "Leistungsanalyse", price: "159" },
      { name: "Leistung Add-On", price: "129" },
    ],
  },
  {
    title: "Externe Coachings",
    items: [
      {
        name: "Mental Coaching mit Robert Winzenried",
        price: "800",
        note: "3.5 Tage",
      },
      {
        name: "Stress-Management mit Birgit Allweier",
        price: "Auf Anfrage",
        note: "Preise nach Vereinbarung",
      },
    ],
  },
];
