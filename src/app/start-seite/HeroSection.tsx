import Image from "next/image";
import Link from "next/link";
import KivocadoImage from "/public/Bild2.png";

const HeroSection = () => {
    console.log("✅ HeroSection geladen");

  return (
    <section className="relative bg-[#fef9ec] text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        
        

        <h2 className="text-4xl md:text-5xl font-bold mt-8">Dein KI-Kompass für smarte Tools</h2>
        <p className="text-lg mt-4 max-w-xl text-gray-700">
           Egal ob du schreiben, gestalten oder KI besser verstehen willst – Kivocado hilft dir, das passende Tool schnell und einfach zu finden.
        </p>

        {/* Toolfinder Buttons */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
          <ToolButton emoji="✍️" label="Texte schreiben" href="/tools/schreiben" />
          <ToolButton emoji="🎨" label="Bilder erstellen" href="/tools/bilder" />
          <ToolButton emoji="🧠" label="KI verstehen" href="/blog" />
        </div>
      </div>

      {/* Hintergrund-Elemente */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-green-300 rounded-full blur-2xl opacity-20 animate-pulse" />
    </section>
  );
};

const ToolButton = ({ emoji, label, href }: { emoji: string; label: string; href: string }) => (
  <Link
    href={href}
    className="bg-white border border-gray-200 hover:border-green-600 hover:shadow-md transition rounded-xl px-6 py-4 text-lg font-medium flex items-center justify-center gap-3 text-green-700"
  >
    <span className="text-2xl">{emoji}</span>
    {label}
  </Link>
);

export default HeroSection;
