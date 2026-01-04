import Image from "next/image";
import Link from "next/link";
import BlogIntroSection from "../components/BlogIntroSection";

export const revalidate = 60;

type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: string;
};

async function getAllBlogPosts(): Promise<BlogPost[]> {
  const res = await fetch("http://localhost:1337/api/blogs?populate=coverImage", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    console.error("Fehler beim Abrufen der Blogposts");
    return [];
  }

  const json = await res.json();
  const blogs = json?.data ?? [];

  return blogs
    .filter((item: any) => item?.title && item?.slug)
    .map((item: any) => ({
      title: item.title,
      slug: item.slug,
      excerpt: item.excerpt ?? "",
      coverImage: item.coverImage?.url
        ? `http://localhost:1337${item.coverImage.url}`
        : undefined,
    }));
}



export default async function BlogPage() {
  const blogPosts = await getAllBlogPosts();

  return (
    <>
      <BlogIntroSection />

      <main className="max-w-6xl mx-auto px-6 pt-0">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Aktuelle Blogartikel
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {post.coverImage && (
                <div className="relative w-full h-48 bg-gray-100">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-700 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                <span className="inline-block bg-green-600 text-white text-sm px-4 py-2 rounded-full hover:bg-green-700 transition-colors duration-200">
                  Weiterlesen
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
