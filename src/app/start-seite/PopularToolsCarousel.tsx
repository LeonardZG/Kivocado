import Link from "next/link";

const tools = [
  {
    name: "ChatGPT",
    description: "Texte schreiben, Fragen beantworten & mehr.",
    href: "/tools/schreiben/chatgpt",
    category: "Text",
  },
  {
    name: "Midjourney",
    description: "Bilder per KI generieren – kreativ & präzise.",
    href: "/tools/bilder/midjourney",
    category: "Bild",
  },
];

const PopularToolsCarousel = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Beliebte KI-Tools</h2>
      <div className="overflow-x-auto no-scrollbar flex gap-6 max-w-6xl mx-auto px-2">
        {tools.map((tool) => (
          <Link key={tool.href} href={tool.href} className="min-w-[260px] bg-[#fef9ec] p-5 rounded-xl border hover:shadow-md transition">
            <div className="text-sm text-green-600 font-medium mb-1">{tool.category}</div>
            <h3 className="text-lg font-bold mb-2">{tool.name}</h3>
            <p className="text-sm text-gray-700">{tool.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularToolsCarousel;
