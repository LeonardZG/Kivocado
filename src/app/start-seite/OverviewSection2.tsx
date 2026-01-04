import Image from "next/image";
import KivocadoImage from "/public/Bild2.png";
import Link from "next/link";
import { FaPenFancy, FaImage, FaBrain } from "react-icons/fa";

const OverviewSection = () => {
  return (
    <section className="bg-[#fef9ec] text-black px-6 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Textseite */}
        <div className="bg-[#fef9ec] py-20 px-6">
  <div className="max-w-4xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold mb-4">Dein Einstieg in die KI – Schritt für Schritt</h2>
    <p className="text-lg text-gray-700">Starte dort, wo du gerade stehst. Unser Wissenskompass führt dich ans Ziel – klar, kreativ und verständlich.</p>
  </div>

  <div className="space-y-10">
    {/* Schritt 1 */}
    <div className="flex items-start gap-5">
      <div className="text-green-700 text-3xl">📖</div>
      <div>
        <h3 className="text-xl font-semibold">Schritt 1: KI verstehen</h3>
        <p className="text-gray-700 text-sm mb-2">Lerne die Grundlagen der KI – ganz ohne Fachjargon.</p>
        <Link href="/blog" className="text-green-700 font-medium hover:underline">Zum KI-Guide →</Link>
      </div>
    </div>

    {/* Schritt 2 */}
    <div className="flex items-start gap-5">
      <div className="text-green-700 text-3xl">✍️</div>
      <div>
        <h3 className="text-xl font-semibold">Schritt 2: Mit KI schreiben</h3>
        <p className="text-gray-700 text-sm mb-2">Texte, Posts oder Produktbeschreibungen automatisiert erstellen.</p>
        <Link href="/tools/schreiben" className="text-green-700 font-medium hover:underline">Zu den Schreib-Tools →</Link>
      </div>
    </div>

    {/* Schritt 3 */}
    <div className="flex items-start gap-5">
      <div className="text-green-700 text-3xl">🎨</div>
      <div>
        <h3 className="text-xl font-semibold">Schritt 3: Bilder mit KI gestalten</h3>
        <p className="text-gray-700 text-sm mb-2">Nutze kreative Tools für Bildgenerierung, Stiltransfer und Bearbeitung.</p>
        <Link href="/tools/bilder" className="text-green-700 font-medium hover:underline">Zu den Bild-Tools →</Link>
      </div>
    </div>
  </div>
</div>


        {/* Illustration */}
        <div className="flex justify-center">
          <Image
            src={KivocadoImage}
            alt="Kivocado Illustration"
            width={420}
            height={420}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
