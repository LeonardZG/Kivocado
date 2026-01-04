# Kivocado

Kivocado ist eine experimentelle Blog- und Informationsplattform rund um Künstliche Intelligenz.  
Die Website dient als KI-Ratgeber und bietet einen strukturierten Überblick über verschiedene KI-Tools, Anwendungsfälle und Konzepte.

Das Projekt ist bewusst als **offenes, fortlaufendes Lern- und Entwicklungsprojekt** angelegt und erhebt keinen Anspruch auf Vollständigkeit oder einen finalen Zustand.

---

## Projektidee

Ziel von Kivocado ist es, Inhalte rund um Künstliche Intelligenz verständlich aufzubereiten und technisch sauber darzustellen.  
Der Fokus liegt dabei auf:

- einer klaren inhaltlichen Struktur
- einer modernen, wartbaren Frontend-Architektur
- der Kombination aus statischen Inhalten und dynamischer Darstellung

Kivocado ist kein kommerzielles Produkt, sondern ein persönliches Projekt zur Vertiefung moderner Webtechnologien und zum Experimentieren mit Content-getriebenen Anwendungen.

---

## Verwendete Technologien

Das Projekt basiert auf einem modernen TypeScript- und React-Stack:

- Next.js 15 (App Router)
- React 19
- TypeScript (`.tsx`)
- Tailwind CSS
- PostCSS & Autoprefixer
- Framer Motion (Animationen)
- MDX (`next-mdx-remote`)
- gray-matter (Frontmatter Parsing)
- remark & remark-html (Markdown Verarbeitung)
- next-sitemap (SEO / Sitemap Generierung)
- ESLint
- Git & GitHub
- npm

---

## Projektstruktur und Architektur

Die Anwendung ist komponentenbasiert aufgebaut und trennt Inhalte, Layout und UI-Logik klar voneinander.  
Inhalte werden über Markdown/MDX verarbeitet und zur Laufzeit gerendert.

```text
src/
├── app/
│   ├── layout.tsx       Globales Layout
│   └── page.tsx         Startseite
│
├── components/
│   ├── Header.tsx
│   ├── BlogPost.tsx
│   └── Navigation.tsx
│
├── content/
│   └── posts/           Markdown / MDX Inhalte
│
├── styles/
│   └── globals.css      Globales Styling
│
public/
└── assets/              Bilder & statische Dateien
```

---

## Aktueller Stand

Kivocado befindet sich in einem laufenden Entwicklungs- und Experimentierstadium.
Inhalte werden schrittweise ergänzt
Struktur und Design werden regelmäßig angepasst
einzelne Features dienen primär Lern- und Testzwecken
Ein „fertiger“ Zustand ist nicht geplant – das Projekt entwickelt sich kontinuierlich weiter.

---

## Ziel des Projekts

Vertiefung meiner Kenntnisse in Next.js, React und TypeScript
Arbeiten mit MDX-Content-Pipelines
Umsetzung einer realistischen, contentlastigen Webanwendung
Experimentieren mit SEO, Animationen und UI-Strukturen
Aufbau eines langfristigen Referenzprojekts

---

## Autor

Leonard Zgonjanin
Bachelor of Science Informatik
Angehender Junior Softwareentwickler
