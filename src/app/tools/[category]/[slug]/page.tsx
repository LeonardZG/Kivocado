import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import qs from "qs";

// ✅ Typen
export const dynamicParams = true;

type Tool = {
  title: string;
  coverImage?: string;
  content: any[];
  metaTitle?: string;
  metaDescription?: string;
};

type Props = {
  params: { slug: string };
};

// ✅ Datenabruf aus Strapi
async function getToolBySlug(slug: string): Promise<Tool | null> {
  const query = qs.stringify(
    {
      filters: {
        Slug: { $eq: slug },
      },
      populate: {
        Bild: true,
        content: {
          on: {
            "content.bild": { populate: "bild" },
            "content.textblock": { populate: "*" },
            "content.callout": { populate: "*" },
            "content.button": { populate: "*" },
            "content.table": { populate: "*" },
          },
        },
      },
    },
    { encodeValuesOnly: true }
  );

  const res = await fetch(`http://localhost:1337/api/tools?${query}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) return null;

  const json = await res.json();
  const item = json?.data?.[0];
  if (!item) return null;

  return {
    title: item.Name,
    coverImage: item.Bild?.url
      ? `http://localhost:1337${item.Bild.url}`
      : undefined,
    content: item.content ?? [],
    metaTitle: item.metaTitle ?? undefined,
    metaDescription: item.metaDescription ?? undefined,
  };
}

// ✅ SEO-Metadaten erzeugen
export async function generateMetadata(props: Props): Promise<Metadata> {
  const slug = (await props).params.slug;
  const tool = await getToolBySlug(slug); // ✅ warnung verschwindet


  if (!tool) return {};

  return {
    title: tool.metaTitle || tool.title,
    description: tool.metaDescription || `Details zum Tool ${tool.title}`,
    openGraph: {
      title: tool.metaTitle || tool.title,
      description: tool.metaDescription || "",
      images: tool.coverImage ? [tool.coverImage] : [],
    },
  };
}


// ✅ Tool-Detail-Seite
export default async function ToolDetailPage(props: Props) {
  const slug = (await props).params.slug; // ⚠️ wichtig
  const tool = await getToolBySlug(slug);

  if (!tool) return notFound();

  const renderedBlocks = await Promise.all(
    tool.content.map((block, index) => renderContentBlock(block, index))
  );

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="sr-only">{tool.title}</h1>


      {tool.coverImage && (
        <Image
          src={tool.coverImage}
          alt={tool.title}
          width={800}
          height={600}
          className="rounded-xl mb-8 w-full h-auto"
        />
      )}

      <div className="prose lg:prose-lg">{renderedBlocks}</div>
    </main>
  );
}

// ✅ Content Block Renderer
async function renderContentBlock(block: any, index: number) {
  switch (block.__component) {
    case "content.textblock":
      return (
        <div
          key={index}
          className="mb-6 text-base leading-relaxed text-gray-900
            [&_h1]:text-4xl [&_h1]:font-extrabold [&_h1]:mt-12 [&_h1]:mb-6
            [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4
            [&_h3]:text-xl [&_h3]:font-semibold  [&_h3]:mt-6 [&_h3]:mb-2
            [&_p]:mb-4 [&_strong]:font-semibold"
          dangerouslySetInnerHTML={{ __html: convertRichTextToHtml(block.text) }}
        />
      );

    case "content.callout":
      return (
        <div key={index} className={`border-l-4 p-4 my-6 rounded ${getCalloutColor(block.variant)}`}>
          <div dangerouslySetInnerHTML={{ __html: block.text }} />
        </div>
      );

    case "content.button":
      return (
        <a
          key={index}
          href={block.url}
          className={`inline-block px-5 py-3 rounded-full text-sm font-medium mt-4 mb-8 ${getButtonStyle(block.style)}`}
        >
          {block.label}
        </a>
      );

    case "content.table":
      return (
        <div key={index} className="overflow-x-auto my-6">
          <div
            className="[&_table]:w-full [&_table]:text-left [&_table]:border-collapse
                       bg-[#fef9ec] [&_th]:font-semibold [&_th]:p-3 [&_th]:border [&_th]:border-gray-300
                       [&_td]:p-3 [&_td]:border [&_td]:border-gray-200
                       [&_tr:nth-child(even)]:bg-[#fef9ec]
                       text-sm text-gray-800 leading-snug"
            dangerouslySetInnerHTML={{ __html: block.html }}
          />
        </div>
      );

    case "content.bild":
      const rawImage = block?.Bild || block?.bild;
      const image = Array.isArray(rawImage) ? rawImage[0] : rawImage;

      if (!image?.url) {
        return (
          <p key={index} className="text-red-500">
            ⚠️ Kein Bild vorhanden
          </p>
        );
      }

      const imageUrl = `http://localhost:1337${image.url}`;

      return (
        <div key={index} className="my-8">
          <Image
            src={imageUrl}
            alt={image.alternativeText || "Bild"}
            width={image.width || 800}
            height={image.height || 600}
            className="rounded-xl w-full h-auto"
          />
          {image.caption && (
            <p className="text-sm text-gray-500 mt-2 text-center">
              {image.caption}
            </p>
          )}
        </div>
      );

    default:
      return null;
  }
}

// ✅ Hilfsfunktionen
function convertRichTextToHtml(blocks: any[]): string {
  return blocks
    .map((node) => {
      if (node.type === "heading") {
        const level = node.level || 2;
        const content = node.children.map((c: any) => c.text).join("");
        return `<h${level}>${content}</h${level}>`;
      }

      if (node.type === "paragraph") {
        const content = node.children.map((c: any) => c.text).join("");
        return `<p>${content}</p>`;
      }

      if (node.type === "list") {
        const isOrdered = node.format === "ordered";
        const tag = isOrdered ? "ol" : "ul";
        const items = node.children
          .map((item: any) => {
            const text = item.children.map((c: any) => c.text).join("");
            return `<li>${text}</li>`;
          })
          .join("");
        return `<${tag}>${items}</${tag}>`;
      }

      return "";
    })
    .join("\n");
}


function getCalloutColor(variant: string) {
  switch (variant) {
    case "info":
      return "bg-blue-50 border-blue-500 text-blue-900";
    case "warning":
      return "bg-yellow-50 border-yellow-500 text-yellow-900";
    case "success":
      return "bg-green-50 border-green-500 text-green-900";
    default:
      return "bg-gray-100 border-gray-300 text-gray-800";
  }
}

function getButtonStyle(style: string) {
  return style === "primary"
    ? "bg-green-600 text-white hover:bg-green-700"
    : "border border-green-600 text-green-600 hover:bg-green-50";
}
