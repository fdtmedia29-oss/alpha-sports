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
  bookingUrl: "/kostenloses-beratungsgespraech",
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
      "Fitness Trainer",
      "Workout Trainer",
      "Functional Trainer",
      "InBody Spezialist",
    ],
    image: "/images/trainers/luigi-lieberherr.jpg",
    bio: "10+ Jahre Fitness-Erfahrung, Breakdance-Instruktor, Swiss Breakdance Champion und Thai-Boxing-Erfahrung. Luigi verbindet Leidenschaft mit Expertise für deine Transformation.",
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
    image: "/images/trainers/julia-lau.jpg",
    bio: "10+ Jahre Erfahrung, ehemalige Wettkampf-Tennisspielerin. Verbindet therapeutisches Wissen mit gezieltem Fitness-Training für nachhaltige Ergebnisse.",
  },
  {
    name: "David Rogers",
    role: "Personal Training & Group Fitness",
    credentials: [
      "Bewegungs- & Gesundheitsförderung",
      "Fitness Instruktor",
      "Pilates & Yoga",
      "Kung Fu & Judo",
      "Selbstverteidigung",
    ],
    image: "/images/trainers/david-rogers.jpg",
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
    image: "/images/trainers/nicole-walser.jpg",
    bio: "HYROX-Athletin, CrossFit, Klettern, Bouldern, Snowboarden — motiviert dich zu Höchstleistungen in der Gruppe und am Race Day.",
  },
  {
    name: "Sandrine Benz",
    role: "Trainerin & Triathlon-Coach",
    credentials: [
      "MSc Sport- und Bewegungswissenschaften (Uni Bern)",
      "BSc Humanmedizin (Uni Fribourg)",
      "Fitness-Instruktor",
      "Trainer C Laufen (Swiss Athletics)",
      "Trisutto Certified Triathlon Coach",
    ],
    image: "/images/trainers/sandrine-benz.jpg",
    bio: "Mehrfache Schweizer-, Europa- und Weltmeisterin im Kurzdistanz-Triathlon. Vize-Europameisterin Halbdistanz-Triathlon und 2-fache Europa- und Weltmeisterin im Kurzdistanz-Duathlon.",
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
      "1:1 Coaching in unserem privaten Studio — individuell auf dich abgestimmt. Abnehmen, Muskelaufbau oder Schmerzfreiheit.",
    href: "/personal-training",
    icon: "dumbbell",
    image: "/images/pt/alpha-personal-03.jpg",
  },
  {
    title: "Gruppenkurse",
    description:
      "Bootcamp, Pilates, Strength und HYROX — motivierendes Training in der Gruppe mit zertifizierten Trainern.",
    href: "/gruppenkurse",
    icon: "users",
    image: "/images/classes/hyrox-abklatschen.jpg",
  },
  {
    title: "Ernährungsberatung",
    description:
      "Massgeschneiderte Ernährungspläne für nachhaltige Ergebnisse. Ohne Verzicht, ohne Crash-Diät.",
    href: "/ernaehrungsberatung",
    icon: "apple",
    image: "/images/ernaehrung/food-3654199-1280.jpg",
  },
  {
    title: "Analysen & Diagnostik",
    description:
      "InBody, Stoffwechsel- & Leistungsanalyse für datenbasiertes Training. Messbare Fortschritte.",
    href: "/analysen",
    icon: "activity",
    image: "/images/analysen/erkl-r-foto-lui.jpg",
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
    name: "Hyrox",
    trainer: "Nicole Walser",
    schedule: "Mo 12:00, Mi 06:30 & 18:30, Fr 17:30",
    description:
      "Race-Day Vorbereitung als Gruppenkurs. Kombiniert Laufen mit funktionellen Übungen - Sled Push, Burpee Broad Jumps, Farmers Carry und mehr. Für Einsteiger und Wettkämpfer.",
    href: "/hyrox",
    image: "/images/classes/hyrox-gruppenkurs.jpg",
  },
  {
    name: "Bootcamp",
    trainer: "Nicole Walser",
    schedule: "Mo 18:30",
    description:
      "Energiegeladener Indoor-Gruppenkurs für jedes Fitness-Level. Kraft-Ausdauer, Herz-Kreislauf, Fettverbrennung und Muskelaufbau mit abwechslungsreichen Übungen. Nachbrenneffekt bis zu 72 Stunden.",
    href: "/gruppenkurse#bootcamp",
    image: "/images/classes/bootcamp.png",
  },
  {
    name: "Pilates",
    trainer: "David Rogers",
    schedule: "Di 19:00 & Fr 12:00",
    description:
      "Stärke deine Mitte und finde die Balance. Core-Stabilität, Mobilität und Körperhaltung verbessern. Bauch-, Rücken- und Beckenbodentraining. Ideale Ergänzung zum Krafttraining.",
    href: "/gruppenkurse#pilates",
    image: "/images/pt/alpha-personal-15.jpg",
  },
  {
    name: "Strength",
    trainer: "David Rogers",
    schedule: "Mi 12:00",
    description:
      "Gezieltes Krafttraining in der Gruppe. Strukturierte Workouts für Muskelaufbau und funktionelle Stärke - für alle Levels.",
    href: "/gruppenkurse#strength",
    image: "/images/pt/alpha-personal-26.jpg",
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
      "Luigi ist einer der Besten in seinem Fach. Er hat umfangreiches Wissen in Ernährung und passt das Training perfekt an meine Bedürfnisse an — trotz Skoliose. Das gut ausgestattete Studio und die Boot Camp Kurse runden das Angebot ab.",
  },
  {
    name: "Peter M.",
    result: "Muskelaufbau & Fettabbau",
    quote:
      "Personal Training hat mir auf vielfältige Weise weitergeholfen. Deutlich Muskelmasse aufgebaut, Körperfett reduziert. Meine Blutwerte haben sich innerhalb kurzer Zeit massiv verbessert. Mehr Mobilität, besserer Schlaf, mehr Selbstvertrauen. Ich nehme jetzt die Treppe statt den Lift.",
  },
  {
    name: "Chantal S.",
    result: "Zielgewicht erreicht & gehalten",
    quote:
      "Das Personal Training ist mein physischer Ausgleich. Mein Zielgewicht erreicht und gehalten — durch Training und Ernährungsbildung. Immunsystem gestärkt, weniger krank. Die abwechslungsreichen Übungen und die persönlich angepassten Trainings machen jede Session einzigartig.",
  },
  {
    name: "Livio C.",
    result: "+10 kg Muskelmasse in 2 Jahren",
    quote:
      "10 kg Muskelmasse in 2 Jahren aufgebaut. Ich fühle mich im Alltag ausgeglichener. Training hilft mir, den Arbeitsstress auszugleichen. Modernes Studio mit viel Platz und top motivierte Trainer. Positives Feedback von Bekannten motiviert zusätzlich.",
  },
  {
    name: "Michele",
    result: "Gewichtsverlust & weniger Rückenschmerzen",
    quote:
      "Gewicht verloren, Rückenschmerzen reduziert. Die grösste Veränderung war mental — ich habe gelernt, meinen Körper zu akzeptieren und mich selbst wieder mehr zu lieben. Luigi hat mich auch ausserhalb des Trainings unterstützt, mit Leidenschaft und echtem Interesse an meinen Zielen.",
  },
];

export const painPointQuotes = [
  "Ich will mich wieder wohl in meinem Körper fühlen.",
  "Ich brauche jemanden, der eine Strategie hat, die funktioniert.",
  "Ich will mich endlich wieder gerne im Spiegel ansehen.",
  "Ich will mein Bauchfett endlich loswerden.",
  "Ich brauche Verbindlichkeit, sonst finde ich immer eine Ausrede.",
  "Ich finde in meinem Alltag einfach keine Zeit für mich.",
];

export const painPointCards = [
  {
    problem: "Du trainierst regelmässig, siehst aber keine Ergebnisse?",
    solution:
      "Individuelle Trainingspläne basierend auf umfangreicher Diagnostik.",
  },
  {
    problem: "Du weisst nicht, wo du anfangen sollst?",
    solution:
      "Kostenloses Beratungsgespräch — wir erstellen deine persönliche Strategie.",
  },
  {
    problem: "Fitnessstudios sind dir zu überfüllt und anonym?",
    solution:
      "Privates Studio — volle Aufmerksamkeit, familiäre Atmosphäre.",
  },
];

export const googleReviews = [
  {
    name: "Artiola L.",
    quote:
      "Luigi ist der beste Personaltrainer überhaupt! Ich hatte bereits mehrere Gespräche und Probetrainings bei verschiedenen Personaltrainern und kann mit voller Überzeugung sagen, dass Luigi heraussticht.",
  },
  {
    name: "Melanie F.",
    quote:
      "Ich trainiere seit rund 6 Monaten bei Lui und bin sehr happy damit. Lui ist ein ausgezeichneter Trainer, der auf meine Bedürfnisse eingeht, Schwachpunkte erkennt und diese gezielt mit mir trainiert.",
  },
  {
    name: "Ornella V.",
    quote:
      "Ich trainiere seit 3 Monaten 2 mal die Woche bei Alpha Sports. Das Training ist super effektiv, anstrengend und macht wahnsinnig viel Spass. Trainer Luigi ist hoch professionell, super nett und ein toller Motivator.",
  },
  {
    name: "Rebecca P.",
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
    name: "Reto S.",
    quote:
      "Die Trainings bei Luigi von Alpha Sports sind perfekt auf meine Bedürfnisse abgestimmt. Er versteht es die Trainings herausfordernd und mit Spass zu gestalten. Schwachstellen erkennt er sofort und bearbeitet diese konsequent.",
  },
  {
    name: "Markus R.",
    quote:
      "Gute Übungen, beobachtet mich immer und korrigiert sofort meine Fehlhaltungen. Bringt mich an die Grenzen (ohne ihn hätte ich schon lange vorher aufgegeben). Verbesserungen sind im Sport spürbar.",
  },
  {
    name: "Claudine G.",
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
];

export const studioImages = [
  // Studio
  "/images/studio/studio-1.jpg",
  "/images/studio/studio-9.jpg",
  "/images/studio/studio-2.jpg",
  "/images/studio/studio-3.jpg",
  "/images/studio/studio-10.jpg",
  "/images/studio/studio-4.jpg",
  "/images/studio/studio-5.jpg",
  "/images/studio/studio-6.jpg",
  "/images/studio/studio-7.jpg",
  "/images/studio/studio-8.jpg",
  "/images/studio/studio-11.jpg",
  "/images/studio/studio-12.jpg",
  "/images/studio/schaufenster.jpg",
  "/images/studio/2024-10-03.jpg",
  // Personal Training
  "/images/pt/alpha-personal-32.jpg",
  "/images/pt/pt-coach-lui-l-chelnd.png",
  "/images/pt/lerchenfeld-73.jpg",
  "/images/pt/alpha-personal-03.jpg",
  "/images/pt/alpha-personal-07.jpg",
  "/images/pt/alpha-personal-09.jpg",
  "/images/pt/alpha-personal-15.jpg",
  "/images/pt/alpha-personal-24.jpg",
  "/images/pt/alpha-personal-26.jpg",
  "/images/pt/kal00470.jpg",
  "/images/pt/kal00633.jpg",
  "/images/pt/kal00693.jpg",
  "/images/pt/facebook-beitrag-coach-lui-bergibt-hantel-an-samira.png",
  // Gruppenkurse
  "/images/classes/hyrox-abklatschen.jpg",
  "/images/classes/hyrox-gruppenkurs.jpg",
  "/images/classes/hyrox-ski-erg.jpg",
  "/images/classes/bootcamp.png",
  // Analysen
  "/images/analysen/erkl-r-foto-lui.jpg",
  "/images/analysen/stoffwechselanalyse.jpg",
  "/images/analysen/leistungsanalyse.jpg",
  // Ernährung
  "/images/ernaehrung/food-3654199-1280.jpg",
  "/images/ernaehrung/food-1898194-1280.jpg",
  "/images/ernaehrung/design-ohne-titel.jpg",
  // Team
  "/images/trainers/team.jpg",
  "/images/trainers/team-foto.jpg",
  "/images/trainers/team-foto-neu.jpg",
  // Erfolgsgeschichten
  "/images/results/beitrag-vorher-nachher-vergleich-dietmar-grichnik.jpg",
  "/images/results/beitrag-vorher-nachher-vergleich-simon-gisler.jpg",
  "/images/results/vorher-nachher-vergleich-markus-richina-jpg.jpg",
  "/images/results/vorher-nachher-vergleich-claudine-g.-beitrag.png",
  "/images/results/vorher-nachher-vergleich-peter-meier.png",
  "/images/results/vorher-nacher-vergleich-izadora-d..png",
];

export const navItems = [
  { label: "Kostenloses Beratungsgespräch", href: "/kostenloses-beratungsgespraech" },
  { label: "Personal Training", href: "/personal-training" },
  {
    label: "Gruppenkurse",
    href: "/gruppenkurse",
    children: [
      { label: "HYROX", href: "/hyrox" },
      { label: "Bootcamp", href: "/gruppenkurse#bootcamp" },
      { label: "Pilates", href: "/gruppenkurse#pilates" },
      { label: "Strength", href: "/gruppenkurse#strength" },
    ],
  },
  { label: "Online Coaching", href: "/online-coaching" },
  { label: "Ernährungsberatung", href: "/ernaehrungsberatung" },
  {
    label: "Analysen",
    href: "/analysen",
    children: [
      { label: "InBody Analyse", href: "/analysen#inbody" },
      { label: "Stoffwechsel & Stressanalyse", href: "/analysen#stoffwechsel" },
      { label: "Leistungsanalyse", href: "/analysen#leistung" },
    ],
  },
  { label: "Hyrox", href: "/hyrox" },
  {
    label: "Mehr",
    children: [
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Einblicke", href: "/einblicke" },
      { label: "Erfolgsgeschichten", href: "/erfolgsgeschichten" },
      { label: "Preise", href: "/preise" },
      { label: "Kontakt", href: "/kostenloses-beratungsgespraech" },
    ],
  },
] as const;


