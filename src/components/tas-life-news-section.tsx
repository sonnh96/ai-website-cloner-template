import Image from "next/image";

import { Carousel } from "@/components/carousel";

interface TasLifeNewsSlide {
  image: string;
  title: string;
  excerpt: string;
}

const SLIDES: TasLifeNewsSlide[] = [
  {
    image:
      "/images/67e362a88b825905e8fc7811_471719340_1143911234410220_8761678441710839873_n-p-1080.jpg",
    title: "EXPERIENTIAL LEARNING – EXPLORING TRADITIONAL ARTS",
    excerpt:
      "Recently, our Kindergarten and Elementary students embarked on an exciting field trip that offered both cultural and recreational engagement.",
  },
  {
    image:
      "/images/67ea14dbefc741b78f28889d_474800444_1163867852414558_1287744250052738853_n-p-1080.jpg",
    title: "A JOURNEY INTO THE WORLD OF VAN GOGH AND MONET",
    excerpt:
      "Our Grade 3 students recently embarked on an inspiring field trip to the Van Gogh Lighting Experience at Thisomall, where art was brought to life through cutting-edge projection technology.",
  },
  {
    image:
      "/images/67fcc4c227107c324a8ef63b_474813387_1166484215486255_908178808445388952_n-p-1080.jpg",
    title: "A LOOK BACK AT TẾT FAIR 2025 - BẬT TAS BỪNG TẾT",
    excerpt:
      "The vibrant spirit of Lunar New Year filled TAS, transforming our campus into a lively celebration of spring and culture.",
  },
  {
    image:
      "/images/67fcc659a4ddcea0246f3368_480921510_1194711619330181_720746479259154074_n-p-1080.jpg",
    title: "MUSTANGS LEARNING BEYOND THE CLASSROOM",
    excerpt:
      "Our high school students recently embarked on an engaging and educational field trip to Cần Giờ. This trip offered a wonderful opportunity to enjoy fresh air, immerse in nature, and explore wildlife conservation areas.",
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
          TAS Life News
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
