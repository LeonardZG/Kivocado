'use client';

import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
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

const categories = [
  {
    title: "KI zum Schreiben",
    description: "Texterstellung, Blogbeiträge, Produkttexte.",
    href: "/tools/schreiben",
    icon: <PencilIcon className="w-8 h-8 text-blue-600" />,
    color: "bg-blue-200 hover:bg-blue-300",
  },
  {
    title: "KI für Bilder",
    description: "Bildgenerierung, Bearbeitung, kreative Tools.",
    href: "/tools/bilder",
    icon: <PhotoIcon className="w-8 h-8 text-green-600" />,
    color: "bg-green-200 hover:bg-green-300",
  },
  {
    title: "KI für Videos",
    description: "Erstellen & Schneiden von Videos mit KI.",
    href: "/tools/videos",
    icon: <VideoCameraIcon className="w-8 h-8 text-red-600" />,
    color: "bg-red-200 hover:bg-red-300",
  },
  {
    title: "KI zur Ideenfindung",
    description: "Brainstorming, Planung, Strategieunterstützung.",
    href: "/tools/ideen",
    icon: <LightBulbIcon className="w-8 h-8 text-yellow-600" />,
    color: "bg-yellow-200 hover:bg-yellow-300",
  },
  {
    title: "KI zum Programmieren",
    description: "Code-Vervollständigung, Tests, Debugging.",
    href: "/tools/code",
    icon: <CodeBracketIcon className="w-8 h-8 text-indigo-600" />,
    color: "bg-indigo-200 hover:bg-indigo-300",
  },
  {
    title: "KI-Allrounder",
    description: "Multifunktionale Tools wie ChatGPT & Co.",
    href: "/tools/allrounder",
    icon: <CpuChipIcon className="w-8 h-8 text-gray-700" />,
    color: "bg-gray-200 hover:bg-gray-300",
  },
  {
    title: "KI für Sprache & Audio",
    description: "Text-to-Speech, Spracherkennung, Voice Cloning.",
    href: "/tools/audio",
    icon: <MicrophoneIcon className="w-8 h-8 text-pink-600" />,
    color: "bg-pink-200 hover:bg-pink-300",
  },
  {
    title: "KI für Übersetzung",
    description: "Mehrsprachigkeit, Lokalisierung, Sprache.",
    href: "/tools/uebersetzung",
    icon: <LanguageIcon className="w-8 h-8 text-emerald-600" />,
    color: "bg-emerald-200 hover:bg-emerald-300",
  },
  {
    title: "KI für Analyse & Daten",
    description: "Datenauswertung, Visualisierung, Insights.",
    href: "/tools/analyse",
    icon: <ChartBarIcon className="w-8 h-8 text-teal-600" />,
    color: "bg-teal-200 hover:bg-teal-300",
  },
  {
    title: "KI für Chat & Kundenservice",
    description: "Chatbots, Support-Automation, CRM-Tools.",
    href: "/tools/chat",
    icon: <ChatBubbleLeftRightIcon className="w-8 h-8 text-orange-600" />,
    color: "bg-orange-200 hover:bg-orange-300",
  },
  {
    title: "KI für Präsentationen",
    description: "Folien, Zusammenfassungen, Dokus mit KI.",
    href: "/tools/praesentationen",
    icon: <DocumentTextIcon className="w-8 h-8 text-cyan-600" />,
    color: "bg-cyan-200 hover:bg-cyan-300",
  },
  {
    title: "KI für E-Commerce",
    description: "Produktbeschreibungen, SEO, Shop-Automation.",
    href: "/tools/ecommerce",
    icon: <ShoppingCartIcon className="w-8 h-8 text-fuchsia-600" />,
    color: "bg-fuchsia-200 hover:bg-fuchsia-300",
  },
  {
    title: "KI für Design & UI/UX",
    description: "Wireframes, Farbvorschläge, UX-Optimierung.",
    href: "/tools/design",
    icon: <PaintBrushIcon className="w-8 h-8 text-lime-600" />,
    color: "bg-lime-200 hover:bg-lime-300",
  },
  {
    title: "KI für KI-Entwicklung",
    description: "Modelle trainieren, fine-tunen & deployen.",
    href: "/tools/devtools",
    icon: <CubeTransparentIcon className="w-8 h-8 text-violet-600" />,
    color: "bg-violet-200 hover:bg-violet-300",
  },
];

export default function ToolCategoryPage() {
  return (
    <>
      <Head>
        <title>Kivocado – Übersicht aller KI-Kategorien & Anwendungsbereiche</title>
        <meta
          name="description"
          content="Entdecke 14 übersichtliche KI-Kategorien für Schreiben, Bilder, Programmieren, Sprache, E-Commerce & mehr. Finde das passende KI-Tool für dein Projekt."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Kivocado – KI-Kategorien entdecken" />
        <meta property="og:description" content="Finde KI-Tools nach Kategorien: Schreiben, Bilder, Audio, Präsentationen, Code uvm. Kivocado hilft dir, den Überblick zu behalten." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo-kivocado.png" />
        <meta property="og:locale" content="de_DE" />
      </Head>

      <main className="min-h-screen bg-[#fef9ec] px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">
            Entdecke unsere KI-Kategorien
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categories.map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link href={cat.href} className="group block">
                  <div className={`rounded-2xl p-6 transition-transform duration-300 transform group-hover:shadow-xl group-hover:-translate-y-1 ${cat.color}`}>
                    <div className="mb-4">{cat.icon}</div>
                    <h2 className="text-xl font-semibold group-hover:underline">{cat.title}</h2>
                    <p className="mt-2 text-sm text-gray-700">{cat.description}</p>
                    <div className="mt-4 text-blue-600 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                      Jetzt entdecken →
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

