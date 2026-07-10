import { Carousel } from "@/components/carousel";
import Image from "next/image";

interface BlogPost {
  title: string;
  date: string;
  image: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    title:
      "HỘI THẢO CHUYÊN MÔN CUỐI TUẦN EARCOS - KIẾN TẠO VĂN HÓA HỌC ĐƯỜNG CÙNG CHUYÊN GIA KENDALL ZOLLER",
    date: "30/06/2026",
    image: "/images/cis-news-1.jpeg",
  },
  {
    title: "CIS INSPIRES | BIẾN ĐAM MÊ THỂ THAO THÀNH SỨ MỆNH VÌ CỘNG ĐỒNG",
    date: "29/06/2026",
    image: "/images/cis-web-home.png",
  },
  {
    title: "LỄ TRAO GIẢI THỂ THAO MÙA GIẢI 2025 - 2026 TẠI CIS",
    date: "16/06/2026",
    image: "/images/cis-staticpage-1.png",
  },
  {
    title: "VINH DANH NHỮNG ĐÓNG GÓP Ý NGHĨA TẠI GIN AWARDS 2026",
    date: "14/06/2026",
    image: "/images/cis-hero-banner.jpg",
  },
];

export function BlogCarouselSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="mb-6 text-sm font-bold uppercase tracking-wide text-tas-navy">
        Tin Tức CIS
      </p>
      <Carousel
        arrowVariant="circle"
        slides={BLOG_POSTS.map((post, index) => (
          <article
            key={post.title}
            className="relative aspect-[16/7] w-full overflow-hidden rounded-lg bg-tas-navy"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 1024px, 100vw"
              priority={index === 0}
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <p className="mb-2 text-sm font-bold uppercase tracking-wide text-white/70">
                Tin tức · {post.date}
              </p>
              <h3 className="max-w-3xl text-xl font-bold leading-snug text-white sm:text-2xl md:text-3xl">
                {post.title}
              </h3>
            </div>
          </article>
        ))}
      />
    </section>
  );
}
