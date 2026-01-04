'use client';

import Link from "next/link";

const BlogTeaserSection = () => {
  return (
    <section className="bg-[#fef9ec] text-black px-6 py-20 ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Guides, Tipps & KI-Wissen
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Im Kivocado-Blog findest du fundierte Beiträge über <strong>KI-Tools, Anwendungsbereiche</strong> und aktuelle Entwicklungen – verständlich aufbereitet und direkt einsetzbar.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/blog"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg transition"
          >
            Zu den Artikeln →
          </Link>
          <Link
            href="/blog/ki-tools-fuer-einsteiger"
            className="text-green-700 hover:underline text-base"
          >
            KI für Einsteiger: Der Guide →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogTeaserSection;
