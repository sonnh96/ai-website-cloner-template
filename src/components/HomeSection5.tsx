import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

interface NewsCardData {
  banner: string;
  date: string;
  title: string;
  excerpt: string;
  tag: string;
}

const newsCards: NewsCardData[] = [
  {
    banner: "/images/cis/news-1.jpeg",
    date: "29/06/2026",
    title: "CIS Inspires | Biến đam mê thể thao thành sứ mệnh vì cộng đồng",
    excerpt:
      "Học sinh CIS lan tỏa tinh thần thể thao và trách nhiệm cộng đồng qua chuỗi hoạt động CIS Inspires đầy cảm hứng.",
    tag: "Tin tức",
  },
  {
    banner: "/images/cis/elementary.jpg",
    date: "14/06/2026",
    title: "Vinh danh những đóng góp ý nghĩa tại GIN Awards 2026",
    excerpt:
      "CIS tự hào vinh danh các dự án phục vụ cộng đồng nổi bật của học sinh tại lễ trao giải Global Issues Network (GIN) Awards 2026.",
    tag: "Tin tức",
  },
  {
    banner: "/images/cis/secondary.webp",
    date: "05/06/2026",
    title: "Lễ tốt nghiệp niên khoá 2026 - CIS",
    excerpt:
      "Chúc mừng các tân khoa CIS đã hoàn thành xuất sắc chương trình Tú tài Quốc tế (IBDP) và sẵn sàng cho hành trình đại học phía trước.",
    tag: "Tin tức",
  },
];

const cardBadges = ["CIS", "IB World School", "WASC"];

function NewsCard({ banner, date, title, excerpt, tag }: NewsCardData) {
  return (
    <article className="rounded-2xl overflow-hidden bg-white shadow-sm border border-border flex flex-col">
      <div className="bg-foreground px-4 py-3 flex items-center gap-3">
        {cardBadges.map((badge) => (
          <span
            key={badge}
            className="rounded-full bg-white/10 text-white/90 text-[10px] font-medium px-2 py-1 leading-none"
          >
            {badge}
          </span>
        ))}
      </div>
      <div className="relative h-[180px]">
        <Image src={banner} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 flex flex-col gap-2 flex-1">
        <p className="text-xs text-muted-foreground">{date}</p>
        <h4 className="font-bold text-foreground line-clamp-2">{title}</h4>
        <p className="text-sm text-muted-foreground line-clamp-2">{excerpt}</p>
        <span className="mt-auto inline-block w-fit rounded-full border border-[#D9660A]/30 text-[#D9660A] text-xs px-3 py-1">
          {tag}
        </span>
      </div>
    </article>
  );
}

export function HomeSection5() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1272px] mx-auto px-7">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-[36px] font-extrabold text-foreground">
            Tin tức &amp; Sự kiện
          </h3>
          <a
            href="#"
            className="rounded-full bg-[#D9660A] text-white px-6 py-3 text-sm font-medium hover:brightness-95 active:scale-95 transition shrink-0"
          >
            Xem tất cả tin tức
          </a>
        </div>
        <ScrollReveal
          stagger
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {newsCards.map((card) => (
            <NewsCard key={card.title} {...card} />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
