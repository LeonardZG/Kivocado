import Link from "next/link";

const blogPosts = [
  {
    title: "Was ist eigentlich KI?",
    slug: "/blog/was-ist-ki",
    readTime: "3 Min",
    tag: "Einsteiger",
  },
  {
    title: "Die 5 besten Schreib-KI-Tools",
    slug: "/blog/schreibtools",
    readTime: "4 Min",
    tag: "Empfehlung",
  },
];

const BlogPreviewSlider = () => {
    console.log("✅ BlogPreviewSlider geladen");

  return (
    <section className="bg-[#fcfbf7] py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Neu im Blog</h2>
      <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={post.slug} className="flex-1 bg-white p-6 rounded-xl border hover:shadow-md transition">
            <div className="text-sm text-green-600 font-semibold mb-1">{post.tag}</div>
            <h3 className="text-lg font-bold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-600">Lesezeit: {post.readTime}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogPreviewSlider;
