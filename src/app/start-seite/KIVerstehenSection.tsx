'use client';

import Link from "next/link";

const KIVerstehenSection = () => {
  return (
    <section className="bg-[#fef9ec] text-black px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          KI verstehen – einfach erklärt
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Du fragst dich, wie <strong>künstliche Intelligenz</strong> eigentlich funktioniert? Oder wie du sie sinnvoll
          in deinem Alltag oder im Beruf einsetzen kannst? Wir geben dir verständliche Antworten – ganz ohne Technik-Blabla.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/blog"
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-full text-lg transition"
          >
            Zum Wissensbereich →
          </Link>
          <Link
            href="/blog/was-ist-ki"
            className="text-green-700 hover:underline text-base"
          >
            Was ist KI? Grundlagenartikel lesen
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KIVerstehenSection;
