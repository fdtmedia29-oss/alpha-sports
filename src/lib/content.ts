export const siteConfig = {
  name: "Alpha Sports",
  tagline: "Personal Training Studio St. Gallen",
  address: "Unterer Graben 21, 9000 St. Gallen",
  addressSecondary: "Rorschacher Str. 59, 9000 St. Gallen",
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

export const painPoints = [
  {
    problem: "Du trainierst regelmaessig, siehst aber keine Ergebnisse?",
    solution: "Individuelle Trainingsplaene basierend auf deiner Koerperanalyse.",
  },
  {
    problem: "Du weisst nicht, wo du anfangen sollst?",
    solution:
      "Kostenloses Beratungsgespraech — wir erstellen deinen persoenlichen Fahrplan.",
  },
  {
    problem: "Fitnessstudios sind dir zu ueberfuellt und anonym?",
    solution: "Privates Studio mit max. 2 Personen — volle Aufmerksamkeit.",
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
    title: "Personal Training 1:1",
    items: [
      { name: "Beratungsgespraech", price: "Kostenlos", unit: "30 Min" },
      { name: "Einzelsession", price: "150", unit: "60 Min" },
      { name: "1:2 Partner-Training", price: "90", unit: "pro Person / 60 Min" },
      { name: "Trainingsplan", price: "65", unit: "einmalig" },
    ],
  },
  {
    title: "Stempelkarten 1:1",
    items: [
      {
        name: "12 Sessions",
        price: "580",
        note: "1x pro Woche, 3 Monate (CHF 145/Std.)",
        includes: ["Protein Shake", "Sportgetraenk", "Handtuch-Service"],
      },
      {
        name: "24 Sessions",
        price: "1'120",
        note: "2x pro Woche, 3 Monate (CHF 140/Std.)",
        popular: true,
        includes: ["Protein Shake", "Sportgetraenk", "Handtuch-Service"],
      },
      {
        name: "36 Sessions",
        price: "1'560",
        note: "3x pro Woche, 3 Monate (CHF 130/Std.)",
        includes: ["Protein Shake", "Sportgetraenk", "Handtuch-Service"],
      },
      {
        name: "48 Sessions",
        price: "1'920",
        note: "4x pro Woche, 3 Monate (CHF 120/Std.)",
        includes: ["Protein Shake", "Sportgetraenk", "Handtuch-Service"],
      },
    ],
  },
  {
    title: "Stempelkarten 1:2 Partner-Training",
    items: [
      {
        name: "12 Sessions",
        price: "360",
        note: "pro Person (CHF 90/Std.)",
      },
      {
        name: "24 Sessions",
        price: "680",
        note: "pro Person (CHF 85/Std.)",
        popular: true,
      },
      {
        name: "36 Sessions",
        price: "960",
        note: "pro Person (CHF 80/Std.)",
      },
      {
        name: "48 Sessions",
        price: "1'200",
        note: "pro Person (CHF 75/Std.)",
      },
    ],
  },
  {
    title: "Gruppenkurse",
    items: [
      { name: "Probetraining", price: "Kostenlos", unit: "einmalig" },
      { name: "Einzeleintritt", price: "30", unit: "pro Kurs" },
      { name: "12er Karte", price: "324", note: "CHF 27/Kurs" },
      { name: "24er Karte", price: "600", note: "CHF 25/Kurs", popular: true },
      { name: "36er Karte", price: "864", note: "CHF 24/Kurs" },
      { name: "48er Karte", price: "1'104", note: "CHF 23/Kurs" },
    ],
  },
  {
    title: "Online Coaching (12 Wochen)",
    items: [
      {
        name: "Alpha Sports Shape",
        price: "420",
        unit: "/Monat",
        includes: [
          "Individueller Trainingsplan",
          "Ernaehrungsplan",
          "App-Zugang",
          "Lifestyle-Optimierung",
          "Woechentliche Anpassungen",
          "3 Monate Premium Support",
        ],
      },
      {
        name: "Alpha Sports Shape Pro",
        price: "620",
        unit: "/Monat",
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
    ],
  },
  {
    title: "Add-On Pakete",
    items: [
      {
        name: "Shape Paket",
        price: "233",
        unit: "/Monat",
        includes: [
          "4 InBody Analysen",
          "4 Erfolgsberatungen (15 Min)",
          "1 Stoffwechselanalyse",
          "Ernaehrungsberatung",
        ],
      },
      {
        name: "Shape Plus Paket",
        price: "389.50",
        unit: "/Monat",
        includes: [
          "4 InBody Analysen",
          "4 Beratungen",
          "1 Stoffwechselanalyse",
          "4 Koerpervermessungen mit Fotos",
          "Ernaehrungsberatung",
          "3 Ernaehrungsplaene",
        ],
      },
    ],
  },
  {
    title: "Analysen",
    items: [
      { name: "InBody Analyse", price: "80", unit: "inkl. Besprechung" },
      { name: "InBody 3er Karte", price: "210", note: "Ersparnis CHF 30" },
      { name: "InBody als Add-On", price: "60", note: "zu anderen Leistungen" },
      { name: "Stoffwechselanalyse", price: "149", note: "inkl. 3 Monate Rezeptvorschlaege" },
      { name: "Stoffwechsel Add-On", price: "119", note: "zu anderen Leistungen" },
      { name: "Leistungsanalyse", price: "159", note: "inkl. 6-Monate Ausdauerplan" },
      { name: "Leistung Add-On", price: "129", note: "zu anderen Leistungen" },
    ],
  },
  {
    title: "Ernaehrungsberatung",
    items: [
      { name: "Einzelsession", price: "150", unit: "/Stunde" },
      {
        name: "Shape Light Paket",
        price: "592.40",
        includes: [
          "2 Stunden Beratung",
          "Koerperanalysen",
          "Ernaehrungsdossier",
          "Trainingsempfehlungen",
        ],
      },
    ],
  },
  {
    title: "Spezial-Coaching",
    items: [
      {
        name: "Mental Coaching",
        price: "800",
        note: "Robert Winzenried, 3.5 Tage",
      },
      {
        name: "Stressmanagement",
        price: "Auf Anfrage",
        note: "Birgit Allweier",
      },
    ],
  },
];
