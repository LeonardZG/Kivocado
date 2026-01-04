import Image from "next/image";
import KivocadoImage from "/public/Bild2.png";
import Link from "next/link";

const OverviewSection = () => {
  return (
    <section className="bg-[#fef9ec] text-black px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Linke Seite: Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Wissenskompass</h2>
          <p className="text-lg mb-4">
            Willkommen beim Kivocado-Wissenskompass.
          </p>
          <p className="text-base mb-4">
            Du bist neu in der Welt der KI? Oder suchst du gezielt Tools für Texte, Bilder oder andere kreative Aufgaben?
            Unser Kompass hilft dir beim Einstieg – klar, verständlich und direkt verlinkt.
          </p>

          {/* Mini-Guides */}
          <div className="mt-8 space-y-6">
            <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-1">Ich will Texte mit KI schreiben</h3>
              <p className="text-sm text-gray-700 mb-2">Texte, Blogposts oder Produktbeschreibungen automatisiert erstellen – das geht besser als du denkst.</p>
              <Link href="/tools/schreiben" className="text-green-700 font-medium hover:underline">Zu den Schreib-Tools →</Link>
            </div>

            <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-1">Ich suche kreative Bildgeneratoren</h3>
              <p className="text-sm text-gray-700 mb-2">Entdecke Tools zur KI-gestützten Bildbearbeitung, Stiltransfer & Generierung.</p>
              <Link href="/tools/bilder" className="text-green-700 font-medium hover:underline">Zu den Bild-Tools →</Link>
            </div>

            <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-1">Ich will erst mal verstehen, wie KI funktioniert</h3>
              <p className="text-sm text-gray-700 mb-2">In unserem Blog erklären wir verständlich, was KI ist und wie du sie sinnvoll einsetzen kannst.</p>
              <Link href="/blog" className="text-green-700 font-medium hover:underline">Zum KI-Guide →</Link>
            </div>
          </div>
        </div>

        {/* Rechte Seite: Illustration */}
        <div className="flex justify-center">
          <Image
            src={KivocadoImage}
            alt="Kivocado Illustration"
            width={400}
            height={400}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
