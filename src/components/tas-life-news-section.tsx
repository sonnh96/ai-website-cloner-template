import Image from "next/image";

import { Carousel } from "@/components/carousel";

interface TasLifeNewsSlide {
  image: string;
  title: string;
  excerpt: string;
}

const SLIDES: TasLifeNewsSlide[] = [
  {
    image: "/images/cis-portrait-tudo.png",
    title: "TỰ DO SÁNG TẠO",
    excerpt:
      "Một trong bốn giá trị cốt lõi hình thành nên Chân Dung Học Sinh CIS — không gian để học sinh tự do khám phá và thể hiện bản thân.",
  },
  {
    image: "/images/cis-portrait-tuhoc.png",
    title: "TỰ HỌC",
    excerpt:
      "Một trong bốn giá trị cốt lõi hình thành nên Chân Dung Học Sinh CIS — nuôi dưỡng tinh thần chủ động học tập suốt đời.",
  },
  {
    image: "/images/cis-portrait-tutin.png",
    title: "TỰ TIN",
    excerpt:
      "Một trong bốn giá trị cốt lõi hình thành nên Chân Dung Học Sinh CIS — xây dựng sự tự tin để khẳng định bản thân.",
  },
  {
    image: "/images/cis-portrait-tudieuchinh.png",
    title: "TỰ ĐIỀU CHỈNH",
    excerpt:
      "Một trong bốn giá trị cốt lõi hình thành nên Chân Dung Học Sinh CIS — khả năng tự điều chỉnh trước những thử thách mới.",
  },
];

function TasLifeNewsCard({ slide }: { slide: TasLifeNewsSlide }) {
  return (
    <article className="flex h-full flex-col">
      <div className="relative aspect-video w-full overflow-hidden rounded-md">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </div>
      <h3 className="mt-6 font-heading text-lg font-bold uppercase tracking-wide text-tas-navy">
        {slide.title}
      </h3>
      <p className="mt-3 font-body text-base leading-relaxed text-gray-600">
        {slide.excerpt}
      </p>
    </article>
  );
}

export function TasLifeNewsSection() {
  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-tas-navy md:text-4xl">
          Chân Dung Học Sinh CIS
        </h2>

        <div className="mt-10">
          <Carousel
            arrowVariant="circle"
            slides={SLIDES.map((slide) => (
              <TasLifeNewsCard key={slide.title} slide={slide} />
            ))}
          />
        </div>
      </div>
    </section>
  );
}
