"use client";

import Image from "next/image";
import Link from "next/link";

const HeroIntroSection = () => {
  return (
    <section className="pt-20 flex flex-col md:flex-row items-center justify-start gap-32 px-6 py-12 max-w-6xl mx-auto">
      {/* Bild */}
      <div className="flex-shrink-0 ml-0 md:ml-[-2rem]">
        <Image
          src="/logo1.png"
          alt="Kivocado Logo"
          width={384}
          height={384}
          className="w-72 md:w-96 h-auto"
          priority
        />
      </div>

      {/* Text */}
      <div className="text-center md:text-left max-w-xl md:ml-14">
        <h1 className="text-5xl font-bold mb-6">Willkommen bei Kivocado</h1>
        <p className="text-xl font-medium mb-2">Dein KI-Kompass für smarte Anwendungen</p>

        <p className="mb-4">
          Kivocado zeigt dir die besten <strong>KI-Tools</strong> für <strong>Texterstellung</strong>,
          <strong> Bildgenerierung</strong>, <strong>Video-Produktion</strong> und mehr.
          Egal ob du Inhalte mit Künstlicher Intelligenz schreiben, visuell gestalten oder effizient planen willst – wir helfen dir, das passende Tool zu finden.
        </p>

        <p className="mb-4">
          Unsere Plattform bietet dir strukturierte <strong>Tool-Vergleiche</strong>, unabhängige Bewertungen und einfache Erklärungen zu beliebten
          <strong> KI-Anwendungen</strong>. So findest du schnell und sicher genau das <strong>KI-Tool</strong>, das zu dir, deinem Projekt und deinen Zielen passt.
        </p>

        <p className="mb-4">
          Ob für Content-Erstellung, kreative Ideenfindung oder Geschäftsoptimierung – Kivocado ist dein Wegweiser im digitalen KI-Dschungel.
        </p>

        <Link href="/tools" className="inline-block mt-6 bg-green-600 text-white font-medium px-6 py-3 rounded hover:bg-green-700 transition">
              Jetzt KI-Tools entdecken →
        </Link>

      </div>
    </section>
  );
};

export default HeroIntroSection;
