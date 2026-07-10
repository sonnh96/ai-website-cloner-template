import Image from "next/image";
import type { HomeContent } from "@/types/content";
import { ScrollScaleImage } from "@/components/motion/ScrollScaleImage";

export function NewsSection({ content }: { content: HomeContent["news"] }) {
  const { heading, featured, items, exploreMoreCta } = content;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1170px] mx-auto px-6">
        <div className="reveal flex items-center gap-4 mb-10">
          <h2 className="text-primary font-heading uppercase text-2xl md:text-3xl whitespace-nowrap">
            {heading}
          </h2>
          <span className="h-px bg-primary/30 flex-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="reveal">
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <ScrollScaleImage className="absolute inset-0">
                <Image
                  src={featured.imageSrc ?? "/images/news/news-featured.jpeg"}
                  alt={featured.title}
                  fill
                  className="object-cover"
                />
              </ScrollScaleImage>
            </div>
            <div className="bg-primary text-white p-6">
              <span className="bg-cis-gold text-cis-gold-foreground text-xs font-semibold uppercase px-3 py-1 rounded-full inline-block">
                {featured.tag}
              </span>
              <span className="ml-3 text-sm">{featured.date}</span>
              <h3 className="font-heading text-lg md:text-xl mt-3">
                {featured.title}
              </h3>
              <a href="#" className="underline text-sm mt-4 inline-block transition-opacity hover:opacity-80">
                {featured.cta}
              </a>
            </div>
          </div>

          <div className="reveal-stagger divide-y divide-border">
            {items.map((item, index) => (
              <div
                key={index}
                style={{ "--i": index } as React.CSSProperties}
                className="py-4 transition-colors duration-200 hover:bg-muted/60"
              >
                <span className="border border-primary text-primary text-xs uppercase px-3 py-1 rounded-full inline-block">
                  {item.tag}
                </span>
                <span className="text-muted-foreground text-sm ml-3">
                  {item.date}
                </span>
                <h3 className="font-heading text-base mt-2">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>

        <a
          href="#"
          className="text-primary font-semibold flex items-center gap-1 justify-end mt-6 transition-transform duration-200 hover:translate-x-1"
        >
          {exploreMoreCta}
          <span aria-hidden="true">&rsaquo;</span>
        </a>
      </div>
    </section>
  );
}
