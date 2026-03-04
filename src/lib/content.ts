export const siteConfig = {
  name: "Alpha Sports",
  tagline: "Personal Training Studio St. Gallen",
  address: "Rorschacher Str. 59, 9000 St. Gallen",
  phone: "+41 71 000 00 00",
  email: "info@alpha-sports.ch",
  whatsapp: "https://wa.me/41710000000",
  instagram: "https://instagram.com/alphasports_sg",
  facebook: "https://facebook.com/alphasportssg",
  youtube: "#",
  bookingUrl: "/kontakt",
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
    role: "Inhaber & Personal Trainer",
    credentials: [
      "Personal Trainer",
      "HYROX365 Foundation",
      "Ernährungscoach",
      "Functional Trainer",
      "InBody Specialist",
    ],
    image: "/images/trainers/team.jpg",
    bio: "Fitness seit über 10 Jahren, Swiss Breakdance Champion, Muay Thai Erfahrung.",
  },
  {
    name: "Julia Lau",
    role: "Physiotherapeutin & Trainerin",
    credentials: [
      "Dipl. Physiotherapeutin",
      "Klassische Massage",
      "Boeger Therapie",
      "Group Fitness",
    ],
    image: "/images/trainers/team.jpg",
    bio: "Verbindet therapeutisches Wissen mit gezieltem Fitness-Training.",
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
    bio: "Spezialist für funktionelle Bewegung, Pilates, Yoga und Kampfsport.",
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
    bio: "HYROX, CrossFit, Klettern, Bouldern — motiviert zu Höchstleistungen.",
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
      "1:1 Training im privaten Studio — individuell auf dich abgestimmt.",
    href: "/personal-training",
    icon: "dumbbell",
    image: "/images/studio/studio-6.jpg",
  },
  {
    title: "Online Coaching",
    description:
      "12-Wochen Programme mit persönlicher Betreuung via App — von überall.",
    href: "/online-coaching",
    icon: "monitor",
    image: "/images/studio/studio-7.jpg",
  },
  {
    title: "Ernährungsberatung",
    description:
      "Massgeschneiderte Ernährungspläne für nachhaltige Ergebnisse.",
    href: "/ernaehrungsberatung",
    icon: "apple",
    image: "/images/studio/studio-8.jpg",
  },
  {
    title: "Analysen & Diagnostik",
    description:
      "InBody, Stoffwechsel- & Leistungsanalyse für datenbasiertes Training.",
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
    href: "/gruppenkurse/bootcamp",
    image: "/images/classes/bootcamp.png",
  },
  {
    name: "Hypertrophic",
    trainer: "Team Alpha Sports",
    schedule: "Mi 18:00–19:00",
    description:
      "Muskelaufbau und Kraftentwicklung mit Fokus auf Technik bei Grundübungen.",
    href: "/gruppenkurse/hypertrophic",
    image: "/images/studio/studio-6.jpg",
  },
  {
    name: "HIIT Boxing",
    trainer: "Luigi Lieberherr",
    schedule: "Do 18:30–19:30",
    description:
      "Muay-Thai-Elemente kombiniert mit HIIT — Kraft, Ausdauer und Koordination.",
    href: "/gruppenkurse/hiit-boxing",
    image: "/images/studio/studio-7.jpg",
  },
  {
    name: "Pilates",
    trainer: "Julia Lau",
    schedule: "So 10:00–11:00",
    description:
      "Kraft, Flexibilität und Balance — für alle Fitness-Levels geeignet.",
    href: "/gruppenkurse/pilates",
    image: "/images/studio/studio-3.jpg",
  },
  {
    name: "Yoga",
    trainer: "David Rogers",
    schedule: "Mi 19:30–20:30",
    description:
      "Körper und Geist in Einklang — Posen, Atmung und Meditation.",
    href: "/gruppenkurse/yoga",
    image: "/images/studio/studio-4.jpg",
  },
  {
    name: "Stretching & Mobility",
    trainer: "David Rogers",
    schedule: "So 11:30–12:30",
    description:
      "Flexibilität und Gelenksmobilisation — ideal als Ergänzung zum Training.",
    href: "/gruppenkurse/stretching",
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
    name: "Sarah M.",
    result: "-12 kg in 4 Monaten",
    quote:
      "Das Training bei Alpha Sports hat mein Leben verändert. Luigi hat mich Schritt für Schritt begleitet.",
  },
  {
    name: "Marco T.",
    result: "Von 0 auf HYROX Finisher",
    quote:
      "In 6 Monaten von der Couch zum HYROX Finish — das hätte ich nie für möglich gehalten.",
  },
  {
    name: "Anna K.",
    result: "Schmerzfrei nach 2 Jahren",
    quote:
      "Dank Julias Expertise als Physiotherapeutin und Trainerin bin ich endlich schmerzfrei.",
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
      { label: "Gruppenkurse", href: "/gruppenkurse" },
      { label: "HYROX", href: "/gruppenkurse/hyrox" },
    ],
  },
  {
    label: "Analysen",
    children: [
      { label: "InBody Analyse", href: "/analysen/inbody" },
      { label: "Stoffwechselanalyse", href: "/analysen/metabolismus" },
      { label: "Leistungsanalyse", href: "/analysen/leistung" },
    ],
  },
  { label: "Preise", href: "/preise" },
  { label: "Über uns", href: "/ueber-uns" },
] as const;
