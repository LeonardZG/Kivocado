import Link from "next/link";
import { Metadata } from "next";
import {
  PencilIcon,
  PhotoIcon,
  VideoCameraIcon,
  LightBulbIcon,
  CodeBracketIcon,
  MicrophoneIcon,
  LanguageIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  ShoppingCartIcon,
  PaintBrushIcon,
  CubeTransparentIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

// ✅ SEO-Metadaten
export const metadata: Metadata = {
  title: "Kivocado – Übersicht aller KI-Kategorien & Anwendungsbereiche",
  description:
    "Entdecke 14 übersichtliche KI-Kategorien für Schreiben, Bilder, Programmieren, Sprache, E-Commerce & mehr. Finde das passende KI-Tool für dein Projekt.",
  openGraph: {
    title: "Kivocado – KI-Kategorien entdecken",
    description:
      "Finde KI-Tools nach Kategorien: Schreiben, Bilder, Audio, Präsentationen, Code uvm.",
    type: "website",
    locale: "de_DE",
    images: ["/logo-kivocado.png"],
  },
};

// ✅ Kategorien-Array
const categories = [
  {
    title: "KI zum Schreiben",
    description: "Texterstellung, Blogbeiträge, Produkttexte.",
    href: "/tools/schreiben",
    icon: PencilIcon,
    color: "bg-blue-200 hover:bg-blue-300 text-blue-600",
  },
  {
    title: "KI für Bilder",
    description: "Bildgenerierung, Bearbeitung, kreative Tools.",
    href: "/tools/bilder",
    icon: PhotoIcon,
    color: "bg-green-200 hover:bg-green-300 text-green-600",
  },
  {
    title: "KI für Videos",
    description: "Erstellen & Schneiden von Videos mit KI.",
    href: "/tools/videos",
    icon: VideoCameraIcon,
    color: "bg-red-200 hover:bg-red-300 text-red-600",
  },
  {
    title: "KI zur Ideenfindung",
    description: "Brainstorming, Planung, Strategieunterstützung.",
    href: "/tools/ideen",
    icon: LightBulbIcon,
    color: "bg-yellow-200 hover:bg-yellow-300 text-yellow-600",
  },
  {
    title: "KI zum Programmieren",
    description: "Code-Vervollständigung, Tests, Debugging.",
    href: "/tools/code",
    icon: CodeBracketIcon,
    color: "bg-indigo-200 hover:bg-indigo-300 text-indigo-600",
  },
  {
    title: "KI-Allrounder",
    description: "Multifunktionale Tools wie ChatGPT & Co.",
    href: "/tools/allrounder",
    icon: CpuChipIcon,
    color: "bg-gray-200 hover:bg-gray-300 text-gray-700",
  },
  {
    title: "KI für Sprache & Audio",
    description: "Text-to-Speech, Spracherkennung, Voice Cloning.",
    href: "/tools/audio",
    icon: MicrophoneIcon,
    color: "bg-pink-200 hover:bg-pink-300 text-pink-600",
  },
  {
    title: "KI für Übersetzung",
    description: "Mehrsprachigkeit, Lokalisierung, Sprache.",
    href: "/tools/uebersetzung",
    icon: LanguageIcon,
    color: "bg-emerald-200 hover:bg-emerald-300 text-emerald-600",
  },
  {
    title: "KI für Analyse & Daten",
    description: "Datenauswertung, Visualisierung, Insights.",
    href: "/tools/analyse",
    icon: ChartBarIcon,
    color: "bg-teal-200 hover:bg-teal-300 text-teal-600",
  },
  {
    title: "KI für Chat & Kundenservice",
    description: "Chatbots, Support-Automation, CRM-Tools.",
    href: "/tools/chat",
    icon: ChatBubbleLeftRightIcon,
    color: "bg-orange-200 hover:bg-orange-300 text-orange-600",
  },
  {
    title: "KI für Präsentationen",
    description: "Folien, Zusammenfassungen, Dokus mit KI.",
    href: "/tools/praesentationen",
    icon: DocumentTextIcon,
    color: "bg-cyan-200 hover:bg-cyan-300 text-cyan-600",
  },
  {
    title: "KI für E-Commerce",
    description: "Produktbeschreibungen, SEO, Shop-Automation.",
    href: "/tools/ecommerce",
    icon: ShoppingCartIcon,
    color: "bg-fuchsia-200 hover:bg-fuchsia-300 text-fuchsia-600",
  },
  {
    title: "KI für Design & UI/UX",
    description: "Wireframes, Farbvorschläge, UX-Optimierung.",
    href: "/tools/design",
    icon: PaintBrushIcon,
    color: "bg-lime-200 hover:bg-lime-300 text-lime-600",
  },
  {
    title: "KI für KI-Entwicklung",
    description: "Modelle trainieren, fine-tunen & deployen.",
    href: "/tools/devtools",
    icon: CubeTransparentIcon,
    color: "bg-violet-200 hover:bg-violet-300 text-violet-600",
  },
];

// ✅ Server Component – funktioniert mit App Router
export default function ToolCategoryPage() {
  return (
    <main className="min-h-screen bg-[#fef9ec] px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Entdecke unsere KI-Kategorien
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <Link key={index} href={cat.href} className="group block">
                <div
                  className={`rounded-2xl p-6 transition-transform duration-300 group-hover:shadow-xl group-hover:-translate-y-1 ${cat.color}`}
                >
                  <div className="mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-xl font-semibold group-hover:underline">
                    {cat.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-700">{cat.description}</p>
                  <div className="mt-4 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition">
                    Jetzt entdecken →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
