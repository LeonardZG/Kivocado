import { notFound } from "next/navigation";
import Image from "next/image";

// Typ für ein Tool
type Tool = {
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: string;
  category: string;
};

// Funktion: holt alle Tools mit bestimmter Kategorie
async function getToolsByCategory(slug: string): Promise<Tool[]> {
  const res = await fetch(
    `http://localhost:1337/api/tools?filters[category][slug][$eq]=${slug}&populate=*`,
    { next: { revalidate: 60 } }
  );

  const json = await res.json();
  const tools = json?.data ?? [];

  return tools.map((item: any) => {
    const t = item;
    return {
      title: t.Name,
      slug: t.Slug,
      excerpt: t.excerpt,
      coverImage: t.Bild?.url
        ? `http://localhost:1337${t.Bild.url}`
        : null,
      category: t.category?.slug ?? null,
    };
  });
}

// Props mit dynamic route param
type Props = {
  params: {
    category: string;
  };
};

// Hauptkomponente für die Kategorie-Seite
export default async function ToolCategoryPage({ params }: Props) {
  const { category } = await params;

  const tools = await getToolsByCategory(category);

  if (tools.length === 0) notFound();

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-10 capitalize">
        KI-Tools für {category}
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <a
            key={tool.slug}
            href={`/tools/${tool.category}/${tool.slug}`}
            className="group block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
           {tool.coverImage && (
            <div className="relative w-full h-48 bg-gray-100">
              <Image
                src={tool.coverImage}
               alt={tool.title}
              fill
              className="object-cover"
               />
             </div>
             )}

  <div className="p-5 text-center">
    <h2 className="text-xl font-semibold mb-2 group-hover:text-green-700 transition-colors duration-200">
      {tool.title}
    </h2>
    <p className="text-sm text-gray-600 mb-4">{tool.excerpt}</p>
    <span className="inline-block bg-green-600 text-white text-sm px-4 py-2 rounded-full hover:bg-green-700 transition-colors duration-200">
      Mehr erfahren
    </span>
  </div>
</a>

        ))}
      </div>
    </main>
  );
}

// Statische Pfade generieren für alle Kategorien
export async function generateStaticParams() {
  const res = await fetch("http://localhost:1337/api/categories");
  const json = await res.json();

  return json.data
    .filter((entry: any) => entry?.slug)
    .map((entry: any) => ({
      category: entry.slug,
    }));
}
