'use client';

import Link from "next/link";

const KIWissenSection = () => {
  return (
    <section className="bg-[#fef9ec] text-black px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          KI verstehen & anwenden – einfach erklärt
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Du fragst dich, wie <strong>künstliche Intelligenz</strong> funktioniert und wie du sie sinnvoll im Alltag oder Beruf einsetzen kannst? 
          Im Kivocado-Blog findest du fundierte Beiträge über <strong>KI-Tools</strong>, <strong>Anwendungsbereiche</strong> und aktuelle Entwicklungen – 
          verständlich erklärt und direkt einsetzbar – ganz ohne Technik-Blabla.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center items-center">
        
            
          <Link
            href="/blog#guides"
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-full text-lg transition"
          >
            Zu den Artikeln →
          </Link>
          <Link
            href="/blog/ki-guide"
            className="text-green-700 hover:underline text-base"
          >
            
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KIWissenSection;
