export const HLS_SRC =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

export const NAV_LINKS = [
  { id: "home", label: "Start" },
  { id: "work", label: "Projekte" },
  { id: "bewertungen", label: "Bewertungen" },
];

export const LOADING_WORDS = ["Entwickeln", "Automatisieren", "Betreuen"];

export const ROLES = ["Entwickler", "Automatisierer", "Admin", "Betreuer"];

export type Project = {
  slug: string;
  title: string;
  category: string;
  /** Karten-Vorschaubild (Bento-Grid & Übersichtsseite) */
  image: string;
  /** Großes Bild oben auf der Detailseite — fällt auf `image` zurück, wenn nicht gesetzt */
  heroImage?: string;
  /** Weitere Screenshots für die Projekt-Detailseite (optional, erstmal leer) */
  images?: string[];
  /** URL der Live-Website, falls öffentlich erreichbar */
  liveUrl?: string;
  /** Auf der Startseite im Bento-Grid zeigen? Alle Projekte erscheinen immer auf /projekte */
  featured?: boolean;
  /** Nur für featured-Projekte im Bento-Grid relevant */
  span?: string;
  aspect?: string;
  about: string;
  challenge: string;
  solution: string;
  result: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "rgbibel-official",
    title: "RGBibel Official",
    category: "E-Commerce & Konfigurator",
    image: "/rgibelofficial.png",
    images: [
      "/rgibelofficial.png",
      "/rgb/rgb-1.png",
      "/rgb/rgb-2.png",
      "/rgb/rgb-3.png",
      "/rgb/rgb-4.png",
      "/rgb/rgb-5.png",
    ],
    liveUrl: "https://rgbibelofficial.com",
    featured: true,
    span: "md:col-span-7",
    aspect: "aspect-4/3",
    about:
      "RGBibel Official ist ein E-Commerce-Shop für fertig konfigurierte Gaming-PCs, betrieben von einem jungen Unternehmerteam aus Berlin. Kernstück ist ein Konfigurator, mit dem Kund:innen ihren PC nach Preis-Leistung zusammenstellen können – inklusive Bestellverfolgung, Support und Lieferung.",
    challenge:
      "Der Konfigurator muss über 14 Millionen mögliche Komponenten-Kombinationen zuverlässig berechnen und validieren. Gleichzeitig musste die Umsetzung von Zahlungsabwicklung und Bestelldaten höchsten Sicherheitsansprüchen genügen.",
    solution:
      "Content-Pflege und Optionslogik laufen über Sanity, während eine eigene Berechnungslogik die Kombinationen aus Komponenten und Preisen verarbeitet. Bei einem Sicherheits-Review wurden mehrere kritische Lücken geschlossen: zuvor offene API-Routen für Rechnungs- und Lieferschein-Erzeugung wurden mit Admin-Auth abgesichert, öffentliche Endpunkte (Bestellabschluss, Zahlungs-Intent, Rabattcodes) erhielten strikte Input-Validierung, Admin-Zugangsdaten wurden von client- auf serverseitige Umgebungsvariablen umgestellt und ein hart codiertes Fallback-Secret durch ein echtes Zufalls-Secret ersetzt. Ein einziger, geteilter Adress-Parser ersetzt seither zwei abweichende Kopien in Rechnung und Lieferschein.",
    result:
      "Der Shop ist live und erhält sehr gute Rückmeldungen, unter anderem auf Trustpilot. Hosting und laufende Wartung übernehme ich weiterhin, betrieben auf Next.js.",
  },
  {
    slug: "ki-entscheidungsspiel",
    title: "KI-Entscheidungsspiel",
    category: "Forschungsprojekt · Uni Konstanz",
    image: "/ki-entscheidungsspiel.png",
    heroImage: "/ki-entscheid-hero.png",
    images: [
      "/ki-entscheidungsspiel.png",
      "/ki-spiel/ki-1.png",
      "/ki-spiel/ki-2.png",
      "/ki-spiel/ki-3.png",
      "/ki-spiel/ki-4.png",
      "/ki-spiel/ki-5.png",
    ],
    liveUrl: "https://ai-decision-game.de/",
    featured: true,
    span: "md:col-span-5",
    aspect: "aspect-3/4",
    about:
      "Ein Next.js-Tool für eine Masterarbeits-Studie der Universität Konstanz (Betreuer: Dr. Matthias Conrad), das untersucht, wie Zeitdruck und Aufgabenwichtigkeit die Bereitschaft beeinflussen, KI-Vorschläge zu übernehmen (2×2-Within-Subjects-Design mit drei Gruppen). Ich habe die komplette Logik, Sicherheit sowie Datenverarbeitung, -aufbereitung und den Export umgesetzt.",
    challenge:
      "Die größte Herausforderung lag in der technischen Umsetzung der Studienlogik – balancierte Gruppenzuteilung und ein sauberer Ablauf über mehrere Entscheidungsrunden – sowie in der Sicherheit der erhobenen Daten.",
    solution:
      "Teilnehmende erhalten eine anonyme ID und werden über eine atomare Postgres-Funktion balanciert einer von drei Gruppen zugeteilt, durchlaufen vier Entscheidungsrunden und einen Abschlussfragebogen inklusive BFI-10-Persönlichkeitsprofil. Der Admin-Bereich bietet ein Statistik-Dashboard, CSV-Export und einen Live-Editor für Texte, Farben und Studien-Sets samt Versionshistorie. Sicherheitsseitig kommen bcrypt-Passwort-Hashing, zweistufige 2FA (TOTP oder E-Mail-Code) und JWT-Session-Handling mit Account-Lockout nach Fehlversuchen zum Einsatz. Teilnehmerdaten sind vollständig pseudonymisiert, es werden keine IPs, Cookies oder externen Analytics erhoben; alle Datenbankzugriffe laufen über parametrisierte Queries. Die Speicherung erfolgt DSGVO-konform auf einem deutschen Server.",
    result:
      "Die Studie läuft aktuell, die Datenerhebung ist im Gange. Betreuer und Uni sind sehr zufrieden mit der Umsetzung, ich betreue Hosting und Weiterentwicklung laufend.",
  },
  {
    slug: "e-werkwort",
    title: "eWerkwort",
    category: "KI-Web-App · Handwerk",
    image: "/e-werkwort.png",
    heroImage: "/hero-werkwort.png",
    images: [
      "/e-werkwort.png",
      "/e-werk/e-werk-1.png",
      "/e-werk/e-werk-2.png",
      "/e-werk/e-werk-3.png",
      "/e-werk/e-werk-4.png",
      "/e-werk/e-werk-5.png",
      "/e-werk/e-werk-6.png",
    ],
    liveUrl: "https://e-werkwort.com",
    featured: true,
    span: "md:col-span-5",
    aspect: "aspect-3/4",
    about:
      "WerkWort ist eine B2B-SaaS-Plattform für Handwerksbetriebe, die mit KI-Unterstützung Angebote, Rechnungen, Bauverträge und Bautagebücher erstellt – inklusive rechtskonformer Buchhaltungs-Exporte und Zahlungsabwicklung. Dokumente lassen sich aus Freitext oder Audio generieren, Preislisten per KI-Bildanalyse direkt aus Fotos oder PDFs extrahieren.",
    challenge:
      "Die Herausforderung lag darin, verlässliche, rechtlich korrekte Dokumente (ZUGFeRD/EN16931-konforme E-Rechnungen, DATEV-Export für Steuerberater) aus unstrukturierten Eingaben zu erzeugen und dabei ein kosteneffizientes, sicheres KI-Abrechnungsmodell zu gewährleisten.",
    solution:
      "Der Stack basiert auf Next.js 16, React 19 und TypeScript mit Supabase für Auth und Datenbank, Stripe für Checkout und Auszahlungen an Handwerker sowie Anthropic Claude und OpenAI Whisper für Dokumentengenerierung und Audio-Transkription. PDFs werden über pdf-lib im ZUGFeRD-Format erzeugt, die KI-Nutzung läuft über ein token-basiertes Abrechnungsmodell via Stripe Checkout. Sicherheitsseitig sorgt eine zentrale Middleware für abgestuftes Rate-Limiting (strenger für Admin-, Auth- und KI-Routen), vollständige Security-Header, Bot-Erkennung, serverseitige Session-Prüfung, eine per 2FA zusätzlich abgesicherte Admin-Ebene sowie konsequentes Input-Sanitizing und Audit-Logging.",
    result: "WerkWort befindet sich aktuell in der Beta-Phase.",
  },
  {
    slug: "ehautarzt",
    title: "eHautarzt",
    category: "Web-Entwicklung · Dermatologie",
    image: "/ehautarzt.png",
    featured: true,
    span: "md:col-span-7",
    aspect: "aspect-4/3",
    about:
      "eHautarzt ist eine Telemedizin-Plattform für Dermatologie, über die Patient:innen Hautprobleme online einreichen und per Ferndiagnose von Ärzt:innen begutachten lassen können. Der Ablauf: Patient:in füllt ein medizinisches Formular inklusive Fotos aus, bezahlt über Stripe, Ärzt:in sichtet den Fall im Dashboard und stellt Diagnose/Rezept per PDF sowie E-Mail-/SMS-Benachrichtigung aus. Es gibt getrennte Rollenbereiche für Patient:innen, Ärzt:innen, Admins und Sysadmins.",
    challenge:
      "Neben der medizinischen Kernlogik lag die größte Herausforderung in der regulatorischen Absicherung eines produktiven Medizinsystems – DSGVO, ISO 27001 und die EU-Medizinprodukteverordnung (MDR) mussten von Anfang an mitgedacht werden, insbesondere beim Umgang mit hochsensiblen Gesundheitsdaten und Hautfotos.",
    solution:
      "Die Plattform setzt auf eine mehrschichtige Sicherheitsarchitektur: Zero-Trust-Auth mit IP-Rate-Limiting, progressiven Account-Sperren und Geräte-Fingerprinting, einen manipulationssicheren Audit-Trail per Hash-Kette für jeden Zugriff auf Patientendaten sowie einen selbst gehosteten Malware-Scan für alle Foto-Uploads, damit keine Daten an Dritte gehen. Dazu kommen klassische Web-Härtungsmaßnahmen wie CSP-Header, sichere Cookie-Flags, parametrisierte Queries und JWT-Auth mit Admin-only-Endpunkten. Die Weiterentwicklung erfolgt in einem klaren Feature- → Go-Live- → Bugfixing-Zyklus mit eigenen Testskripten und automatisierten Vulnerability-Scans.",
    result: "Die Plattform ist live im Einsatz und wird aktiv von Ärzt:innen und Patient:innen genutzt.",
  },
  {
    slug: "pfandhaus-oldenburg",
    title: "Pfandhaus Oldenburg",
    category: "Individualsoftware · Pfandhausverwaltung",
    image: "/pfandhaus/hero-pfandhaus.jpg",
    images: [
      "/pfandhaus/hero-pfandhaus.jpg",
      "/pfandhaus/01-dashboard.png",
      "/pfandhaus/02-kunden.png",
      "/pfandhaus/03-vertrag-detail.png",
      "/pfandhaus/04-kassenbuch.png",
      "/pfandhaus/05-goldankauf.png",
      "/pfandhaus/06-versteigerung.png",
    ],
    featured: true,
    span: "md:col-span-7",
    aspect: "aspect-4/3",
    about:
      "Pfandhaus Oldenburg ist eine moderne Web-Anwendung, die die veraltete Desktop-Software (Baujahr 2009) eines Pfandhauses für den kompletten Betriebsablauf ablöst: Kundenverwaltung, Pfandverträge, Kassenbuch, Goldankauf, Verwertung und Versteigerung nach Ablauf der gesetzlichen Frist. Die Anwendung läuft aktuell im Parallelbetrieb neben dem Altsystem.",
    challenge:
      "Die Software verarbeitet hochsensible personenbezogene Daten wie Ausweisnummern und Vermögenswerte und musste dabei gleichzeitig revisionssichere Nachvollziehbarkeit für Prüfungen, Konformität mit der Pfandleiherverordnung (gesetzliche Mindestlaufzeiten und Verwertungsfristen) und DSGVO-gerechten Umgang mit Kundendaten sicherstellen. Hinzu kam die Migration eines gewachsenen historischen Datenbestands – rund 120.000 Verträge, über 370.000 Kassenbucheinträge und mehr als 8.700 Kunden – aus den SQL-Dumps des Altsystems.",
    solution:
      "Ich habe die komplette Fachlogik für den Pfandhaus-Alltag umgesetzt: Kundenverwaltung mit Legitimationsprüfung, Vertragsabschluss/-verlängerung/-einlösung, einen Edelmetall-Rechner nach Feingehalt, separaten Goldankauf, doppelte Kassenbuchführung mit Stornofunktion, eine automatische Verwertungsliste nach §9 PfandlV sowie ein Versteigerungsmodul inklusive Live-Auktionsmodus für die Beamer-Leinwand am Auktionstag. Sicherheitsseitig sind sensible Felder wie Ausweis- und Passnummern serverseitig mit AES-256-GCM verschlüsselt und werden nie im Klartext gespeichert oder geloggt, Sessions laufen ohne Klartext-Tokens in der Datenbank (nur als SHA-256-Hash) mit E-Mail-basierter Zwei-Faktor-Authentifizierung, und ein unveränderliches Audit-Log protokolliert per Datenbank-Trigger jede Änderung an Kunden, Verträgen, Kassenbuch und Benutzerkonten – nachträgliches Ändern oder Löschen ist auch für Administratoren technisch ausgeschlossen. Für die Migration habe ich einen eigenen Parser für die SQL-Dumps des Altsystems geschrieben, der historische Formatfehler korrigiert und die gesetzlichen Mindestlaufzeiten validiert. Technisch basiert die Anwendung auf Next.js (App Router) und React mit TypeScript im Strict Mode sowie PostgreSQL mit Drizzle ORM, abgesichert durch eine automatisierte CI-Pipeline mit Typecheck, Linting und Dependency-Audit bei jedem Commit.",
    result:
      "Die Anwendung läuft aktuell im Parallelbetrieb neben dem Altsystem, während der komplette historische Datenbestand migriert und laufend abgeglichen wird. Ich betreue Hosting und Weiterentwicklung laufend.",
  },
];

export type Exploration = {
  slug: string;
  image: string;
  rotate: number;
};

export const EXPLORATIONS: Exploration[] = [
  { slug: "exploration-1", image: "/exp-1.png", rotate: -3 },
  { slug: "exploration-2", image: "/exp-2.png", rotate: 2 },
  { slug: "exploration-3", image: "/exp-3.png", rotate: -2 },
  { slug: "exploration-4", image: "/exp-4.png", rotate: 3 },
  { slug: "exploration-5", image: "/exp-5.png", rotate: -4 },
  { slug: "exploration-6", image: "/exp-6.png", rotate: 2 },
];

// Trustpilot Business-Dashboard → Widgets → TrustBox ("Review Collector")
export const TRUSTPILOT_BUSINESS_ID = "6a356eea3e92883fbdd439fd";
export const TRUSTPILOT_TEMPLATE_ID = "56278e9abfbbba0bdcd568bc";
export const TRUSTPILOT_TOKEN = "64667ee2-5f4d-422a-afdd-06ecd225e7e3";
export const TRUSTPILOT_PROFILE_URL =
  "https://de.trustpilot.com/review/liam-schneider-webdevelopment.vercel.app";

export type Testimonial = {
  author: string;
  location: string;
  reviewCount: string;
  rating: number;
  title: string;
  text: string;
  date: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    author: "Uni Konstanz",
    location: "DE",
    reviewCount: "1 Bewertung",
    rating: 5,
    title: "Zuverlässige und professionelle Umsetzung bei wissenschaftlichem Projekt",
    text: "Liam Schneider hat für ein wissenschaftliches Forschungsprojekt an der Universität Konstanz ein browserbasiertes Erhebungsinstrument entwickelt. Das Grundgerüst wurde wie vereinbart innerhalb von 7 Werktagen geliefert, entsprach unseren Anforderungen vollständig und funktionierte von Anfang an zuverlässig.\n\nDie Kommunikation war während des gesamten Projekts und auch danach sehr angenehm: schnelle Reaktionszeiten, professioneller Umgang mit Änderungswünschen und hohe Flexibilität auch bei kurzfristigen Anpassungen. Die technische Umsetzung erfüllt unsere Anforderungen voll und ganz, das Instrument läuft stabil und zuverlässig.\nWir waren sehr zufrieden. Klare Empfehlung!",
    date: "25. Juni 2026",
  },
  {
    author: "RGBibelOfficial",
    location: "DE",
    reviewCount: "1 Bewertung",
    rating: 5,
    title: "Maximal kompetenter Developer!",
    text: "Wenn wir auf den Aufbau von RGBibelOfficial zurückblicken, dann gehört Liam ganz klar zu den Menschen, die einen wichtigen Anteil daran hatten, dass aus einer Idee und einer Marke Schritt für Schritt eine funktionierende, professionelle und ernstzunehmende Plattform werden konnte. Er hat nicht nur technische Dinge umgesetzt, sondern maßgeblich dazu beigetragen, dass RGBibelOfficial im Web heute so strukturiert, glaubwürdig und funktional auftreten kann.\nLiam denkt mit, bringt sinnvolle Impulse ein und versteht es, ein Projekt nicht nur technisch, sondern auch inhaltlich weiterzubringen. Genau das macht die Zusammenarbeit mit ihm so wertvoll.\nFür RGBibelOfficial war und ist Liam damit weit mehr als nur ein Developer im Hintergrund, sondern ein enorm wichtiger, und stets zuverlässiger Teil der Entwicklung unseres Projekts.",
    date: "24. Juni 2026",
  },
  {
    author: "Renate Matuschka",
    location: "DE",
    reviewCount: "9 Bewertungen",
    rating: 5,
    title: "Schnell und zuverlässig",
    text: "Sehr schnelle und zuverlässige Bearbeitung. Super Kommunikation auch für mich als Laie verständlich.\nGerne wieder",
    date: "14. Mai 2026",
  },
];

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/liamd-schneider" },
  { label: "Trustpilot", href: TRUSTPILOT_PROFILE_URL },
];

export const CONTACT_EMAIL = "kontakt@liam-schneider.de";
