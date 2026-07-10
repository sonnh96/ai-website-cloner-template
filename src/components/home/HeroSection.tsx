import Image from "next/image";

import type { HomeContent } from "@/types/content";
import { ScrollScaleImage } from "@/components/motion/ScrollScaleImage";

export function HeroSection({ content }: { content: HomeContent["hero"] }) {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden md:h-[810px]">
      <ScrollScaleImage className="absolute inset-0">
        <Image
          src={content.imageSrc}
          alt={content.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </ScrollScaleImage>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/60 to-transparent"
      />

      <div className="absolute right-0 bottom-16 left-0">
        <div className="mx-auto max-w-[1170px] px-4 md:px-6">
          <h1
            className="enter-rise font-heading max-w-2xl text-lg leading-tight font-bold text-white uppercase md:text-2xl lg:text-3xl"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            {content.title}
          </h1>
          <button
            type="button"
            className="enter-rise mt-4 bg-primary px-6 py-2.5 font-sans text-sm font-semibold text-white uppercase tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg active:translate-y-0 md:px-8 md:py-3 md:text-base"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            {content.cta}
          </button>
        </div>
      </div>

      <div className="absolute right-6 bottom-6 flex flex-col items-center gap-1 md:right-10 md:bottom-8">
        <span className="font-sans text-xs text-white md:text-sm">
          {content.scrollHint}
        </span>
        <Image
          src="/images/asset/ic-scrolldown-animate.svg"
          alt=""
          width={20}
          height={20}
          aria-hidden="true"
          className="drift-down"
        />
      </div>
    </section>
  );
}
