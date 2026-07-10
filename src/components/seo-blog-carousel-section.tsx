import { Carousel } from "@/components/carousel";
import Image from "next/image";

interface SeoBlogPost {
  title: string;
  excerpt: string;
  image: string;
}

const SEO_BLOG_POSTS: SeoBlogPost[] = [
  {
    title: "IB World School",
    excerpt:
      "CIS được công nhận là IB World School, giảng dạy chương trình Tú tài Quốc tế (IB Diploma Programme) — nền tảng học thuật được các trường đại học hàng đầu thế giới công nhận.",
    image: "/images/cis-partner-ib.png",
  },
  {
    title: "College Board — Advanced Placement Program",
    excerpt:
      "CIS là thành viên chính thức của College Board, triển khai chương trình Advanced Placement (AP) giúp học sinh tích lũy tín chỉ đại học ngay từ bậc trung học phổ thông.",
    image: "/images/cis-partner-ap.png",
  },
  {
    title: "Council of International Schools — Internationally Accredited School",
    excerpt:
      "CIS được kiểm định quốc tế bởi Council of International Schools (CIS), khẳng định chất lượng giáo dục đạt chuẩn quốc tế trên toàn diện các mặt vận hành nhà trường.",
    image: "/images/cis-partner-cis-accredited.png",
  },
  {
    title: "Cognia Accredited",
    excerpt:
      "Chứng nhận kiểm định từ Cognia (NCA CASI / NWAC / SACS CASI) — một trong những tổ chức kiểm định giáo dục uy tín hàng đầu tại Hoa Kỳ.",
    image: "/images/cis-partner-cognia.png",
  },
  {
    title: "WASC — Accrediting Commission for Schools",
    excerpt:
      "CIS được công nhận đầy đủ bởi WASC (Western Association of Schools and Colleges), một trong sáu tổ chức kiểm định vùng được công nhận tại Hoa Kỳ.",
    image: "/images/cis-partner-wasc.png",
  },
];

export function SeoBlogCarouselSection() {
  return (
    <section className="w-full bg-tas-tint py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Carousel
          arrowVariant="square"
          arrowClassName="justify-end"
          slides={SEO_BLOG_POSTS.map((post) => (
            <article
              key={post.title}
              className="group flex flex-col gap-6 sm:flex-row sm:items-start"
            >
              <div className="relative aspect-[4/3] w-40 shrink-0 overflow-hidden rounded-md border border-tas-crimson/15 bg-white p-4 transition-shadow duration-300 group-hover:shadow-md">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-contain p-4"
                  sizes="160px"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-bold leading-snug text-tas-navy">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        />
      </div>
    </section>
  );
}
