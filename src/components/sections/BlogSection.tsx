import Image from "next/image";

interface BlogPost {
  image: string;
  title: string;
  excerpt: string;
}

const posts: BlogPost[] = [
  {
    image: "/images/kadu/2024/05/blog-1-400x265.webp",
    title: "Masters In English How English Speaker",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Morbi nibh porttitor in ut tristique mi at eget.",
  },
  {
    image: "/images/kadu/2024/05/blog-2-400x265.webp",
    title: "Building Resilience in Students: Tips for Parents",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Morbi nibh porttitor in ut tristique mi at eget.",
  },
  {
    image: "/images/kadu/2024/05/blof-400x265.webp",
    title: "Exploring the Benefits of Bilingual Education",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Morbi nibh porttitor in ut tristique mi at eget.",
  },
];

export function BlogSection() {
  return (
    <section className="kd-reveal relative overflow-hidden bg-kd-primary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-script text-2xl text-white/80">Our Blog</p>
          <h2 className="mt-2 font-sans text-4xl font-black leading-tight text-white md:text-[40px]">
            Popular Events &amp; News
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <div className="relative aspect-[400/265] w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-full bg-black/10 text-xs font-bold text-kd-heading">
                    MV
                  </span>
                  <span className="text-sm text-kd-paragraph">
                    Marina Valentine
                  </span>
                </div>
                <h3 className="mt-4 line-clamp-2 text-lg font-bold text-kd-heading">
                  {post.title}
                </h3>
                <p className="mt-2 text-kd-paragraph">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
