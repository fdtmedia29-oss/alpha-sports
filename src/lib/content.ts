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
    role: "Geschäftsführer & Personal Trainer",
    credentials: [
      "Personal Trainer",
      "HYROX365 Foundation",
      "Ernährungscoach",
      "Functional Trainer",
      "InBody Specialist",
    ],
    image: "/images/trainers/team.jpg",
    bio: "10+ Jahre Fitness-Erfahrung, Swiss Breakdance Champion, Muay Thai Fighter. Luigi verbindet Leidenschaft mit Expertise für deine Transformation.",
  },
  {
    name: "Julia Lau",
    role: "Physiotherapeutin & Trainerin",
    credentials: [
      "Dipl. Physiotherapeutin BSc",
      "Klassische Massage (EMR)",
      "Boeger Therapie BT1+BT3",
      "GLA:D Arthrose",
      "Group Fitness",
    ],
    image: "/images/trainers/team.jpg",
    bio: "10+ Jahre Erfahrung. Verbindet therapeutisches Wissen mit gezieltem Fitness-Training für nachhaltige Ergebnisse.",
  },
  {
    name: "David Rogers",
    role: "Bewegungs- & Gesundheitsspezialist",
    credentials: [
      "Bewegungsförderung",
      "Fitness Instruktor",
      "Pilates & Yoga",
      "Kung Fu & Judo",
    ],
    image: "/images/trainers/team.jpg",
    bio: "Spezialist für funktionelle Bewegung, Pilates, Yoga und Kampfsport. Bringt Körper und Geist in Einklang.",
  },
  {
    name: "Nicole Walser",
    role: "Group Fitness & HYROX",
    credentials: [
      "Fitness Instruktorin",
      "HYROX365 Foundation",
      "Ernährungscoach",
    ],
    image: "/images/trainers/team.jpg",
    bio: "HYROX Athletin, CrossFit, Klettern, Bouldern — motiviert dich zu Höchstleistungen.",
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
      "12-Wochen Programme mit persönlicher Betreuung via App — von überall. Training, Ernährung und Lifestyle.",
    href: "/online-coaching",
    icon: "monitor",
    image: "/images/studio/studio-7.jpg",
  },
  {
    title: "Ernährungsberatung",
    description:
      "Massgeschneiderte Ernährungspläne für nachhaltige Ergebnisse. Ohne Verzicht, ohne Crash-Diät.",
    href: "/ernaehrungsberatung",
    icon: "apple",
    image: "/images/studio/studio-8.jpg",
  },
  {
    title: "Analysen & Diagnostik",
    description:
      "InBody, Stoffwechsel- & Leistungsanalyse für datenbasiertes Training. Messbare Fortschritte.",
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
      "Herzfrequenzgesteuertes Training — Cardio, Kraft & HIIT für maximale Fettverbrennung.",
    href: "/gruppenkurse#bootcamp",
    image: "/images/classes/bootcamp.png",
  },
  {
    name: "Hypertrophic",
    trainer: "Team Alpha Sports",
    schedule: "Mi 18:00–19:00",
    description:
      "Muskelaufbau und Kraftentwicklung mit Fokus auf Technik bei Grundübungen.",
    href: "/gruppenkurse#hypertrophic",
    image: "/images/studio/studio-6.jpg",
  },
  {
    name: "HIIT Boxing",
    trainer: "Luigi Lieberherr",
    schedule: "Do 18:30–19:30",
    description:
      "Muay-Thai-Elemente kombiniert mit HIIT — Kraft, Ausdauer und Koordination.",
    href: "/gruppenkurse#hiit-boxing",
    image: "/images/studio/studio-7.jpg",
  },
  {
    name: "Pilates",
    trainer: "Julia Lau",
    schedule: "So 10:00–11:00",
    description:
      "Kraft, Flexibilität und Balance — für alle Fitness-Levels geeignet.",
    href: "/gruppenkurse#pilates",
    image: "/images/studio/studio-3.jpg",
  },
  {
    name: "Yoga",
    trainer: "David Rogers",
    schedule: "Mi 19:30–20:30",
    description:
      "Körper und Geist in Einklang — Posen, Atmung und Meditation.",
    href: "/gruppenkurse#yoga",
    image: "/images/studio/studio-4.jpg",
  },
  {
    name: "Stretching & Mobility",
    trainer: "David Rogers",
    schedule: "So 11:30–12:30",
    description:
      "Flexibilität und Gelenksmobilisation — ideal als Ergänzung zum Training.",
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
    name: "Dr. med. Philipp Krenn",
    result: "Arzt & Sportler",
    quote:
      "Luigi ist einer der Besten in seinem Fach. Er hat umfangreiches Wissen in Ernährung und passt das Training perfekt an meine Bedürfnisse an — trotz Skoliose.",
  },
  {
    name: "Peter M.",
    result: "Muskelaufbau & Fettabbau",
    quote:
      "Deutlich Muskelmasse aufgebaut, Körperfett reduziert. Meine Blutwerte haben sich massiv verbessert. Mehr Mobilität, besserer Schlaf, mehr Selbstvertrauen.",
  },
  {
    name: "Chantal S.",
    result: "Zielgewicht erreicht & gehalten",
    quote:
      "Mein Zielgewicht erreicht und gehalten — durch Training und Ernährungsbildung. Weniger krank, positives Feedback von allen Seiten.",
  },
  {
    name: "Livio C.",
    result: "+10 kg Muskelmasse in 2 Jahren",
    quote:
      "10 kg Muskelmasse in 2 Jahren aufgebaut. Training hilft mir, den Arbeitsstress auszugleichen. Modernes Studio und top motivierte Trainer.",
  },
  {
    name: "Michèle",
    result: "Gewichtsverlust & weniger Rückenschmerzen",
    quote:
      "Gewicht verloren, Rückenschmerzen reduziert. Die grösste Veränderung war mental — ich habe gelernt, meinen Körper zu akzeptieren und zu lieben.",
  },
];

export const painPoints = [
  {
    problem: "Du trainierst regelmässig, siehst aber keine Ergebnisse?",
    solution: "Individuelle Trainingspläne basierend auf deiner Körperanalyse.",
  },
  {
    problem: "Du weisst nicht, wo du anfangen sollst?",
    solution:
      "Kostenloses Beratungsgespräch — wir erstellen deinen persönlichen Fahrplan.",
  },
  {
    problem: "Fitnessstudios sind dir zu überfüllt und anonym?",
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
  {
    label: "Trainieren",
    children: [
      { label: "Personal Training", href: "/personal-training" },
      { label: "Online Coaching", href: "/online-coaching" },
      { label: "Ernährungsberatung", href: "/ernaehrungsberatung" },
      { label: "Gruppenkurse", href: "/gruppenkurse" },
      { label: "HYROX", href: "/hyrox" },
    ],
  },
  {
    label: "Analysen",
    children: [
      { label: "InBody Analyse", href: "/analysen#inbody" },
      { label: "Stoffwechselanalyse", href: "/analysen#stoffwechsel" },
      { label: "Leistungsanalyse", href: "/analysen#leistung" },
    ],
  },
  { label: "Erfolgsgeschichten", href: "/erfolgsgeschichten" },
  { label: "Preise", href: "/preise" },
  { label: "Über uns", href: "/ueber-uns" },
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
      { name: "Beratungsgespräch", price: "Kostenlos", unit: "30 Min" },
      { name: "Einzelsession", price: "150", unit: "60 Min" },
      { name: "1:2 Training", price: "90", unit: "pro Person / 60 Min" },
      { name: "Trainingsplan", price: "65", unit: "einmalig" },
    ],
  },
  {
    title: "Stempelkarten 1:1",
    items: [
      {
        name: "12 Sessions",
        price: "580",
        unit: "/Monat",
        note: "1x pro Woche, 3 Monate",
        includes: ["Protein Shake", "Sportgetränk", "Handtuch-Service"],
      },
      {
        name: "24 Sessions",
        price: "960",
        unit: "/Monat",
        note: "2x pro Woche, 3 Monate",
        popular: true,
        includes: ["Protein Shake", "Sportgetränk", "Handtuch-Service"],
      },
      {
        name: "36 Sessions",
        price: "1'380",
        unit: "/Monat",
        note: "3x pro Woche, 3 Monate",
        includes: ["Protein Shake", "Sportgetränk", "Handtuch-Service"],
      },
      {
        name: "48 Sessions",
        price: "1'760",
        unit: "/Monat",
        note: "4x pro Woche, 3 Monate",
        includes: ["Protein Shake", "Sportgetränk", "Handtuch-Service"],
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
          "Ernährungsplan",
          "App-Zugang",
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
          "Wöchentliche Video-Calls",
          "Erweiterte Analysen",
          "Priority Support",
        ],
      },
    ],
  },
  {
    title: "Analysen",
    items: [
      { name: "InBody Analyse", price: "80", unit: "inkl. Report" },
      { name: "InBody 4er Karte", price: "270", note: "Ersparnis CHF 50" },
      { name: "Stoffwechselanalyse", price: "149" },
      { name: "Leistungsanalyse", price: "159" },
    ],
  },
  {
    title: "Ernährungsberatung",
    items: [
      { name: "Einzelsession", price: "150", unit: "/Stunde" },
      {
        name: "Shape Light Paket",
        price: "592.40",
        includes: [
          "2 Stunden Beratung",
          "Körperanalysen",
          "Ernährungsdossier",
        ],
      },
    ],
  },
];
