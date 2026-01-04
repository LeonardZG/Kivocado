export async function getAllTools() {
  const res = await fetch("http://localhost:1337/api/tools?populate=coverImage,category", {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`, // optional
    },
    next: { revalidate: 60 },
  });

  const json = await res.json();
  return json.data.map((item: any) => {
    const t = item.attributes;
    return {
      title: t.title,
      slug: t.slug,
      excerpt: t.excerpt,
      coverImage: t.coverImage?.data?.attributes?.url ?? null,
      category: t.category?.data?.attributes?.slug ?? null,
    };
  });
}

export async function getToolBySlug(slug: string) {
  const res = await fetch(`http://localhost:1337/api/tools?filters[slug][$eq]=${slug}&populate=coverImage,category`);
  const json = await res.json();
  const item = json.data[0]?.attributes;

  return {
    title: item?.title,
    content: item?.content,
    coverImage: item?.coverImage?.data?.attributes?.url ?? null,
  };
}
