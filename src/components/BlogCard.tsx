'use client';

import Image from "next/image";

type BlogCardProps = {
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: string;
};

export default function BlogCard({ title, slug, excerpt, coverImage }: BlogCardProps) {
  return (
    <div className="bg-white rounded shadow p-6">
      {coverImage && (
        <div className="w-full h-40 relative mb-4">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover rounded"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <a href={`/blog/${slug}`} className="text-blue-500 hover:underline">
        Weiterlesen →
      </a>
    </div>
  );
}
