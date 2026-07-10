"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { HomeContent } from "@/types/content";
import { ScrollScaleImage } from "@/components/motion/ScrollScaleImage";

const AUTOPLAY_MS = 6500;

export function HeroSection({ content }: { content: HomeContent["hero"] }) {
  const { slides } = content;
  const hasMultiple = slides.length > 1;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!hasMultiple || paused) return;
    const id = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [hasMultiple, paused, slides.length]);

  function goTo(index: number) {
    setActive(((index % slides.length) + slides.length) % slides.length);
  }

  return (
    <section
      className="relative h-[85vh] min-h-[600px] overflow-hidden md:h-[810px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          aria-hidden={index !== active}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-out"
          style={{ opacity: index === active ? 1 : 0 }}
        >
          <ScrollScaleImage className="absolute inset-0">
            <div className="hero-kenburns relative h-full w-full">
              {slide.type === "video" ? (
                <video
                  src={slide.src}
                  poster={slide.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={slide.src}
                  alt={index === 0 ? content.title : ""}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover"
                />
              )}
            </div>
          </ScrollScaleImage>
        </div>
      ))}

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

      {hasMultiple && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => goTo(active - 1)}
            className="absolute top-1/2 left-3 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-white transition-colors duration-200 hover:text-cis-gold md:left-6 md:h-11 md:w-11"
          >
            <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => goTo(active + 1)}
            className="absolute top-1/2 right-20 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-white transition-colors duration-200 hover:text-cis-gold md:right-24 md:h-11 md:w-11"
          >
            <ChevronRight className="h-6 w-6 md:h-7 md:w-7" />
          </button>

          <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2 md:bottom-8">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === active}
                onClick={() => goTo(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === active ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70",
                )}
              />
            ))}
          </div>
        </>
      )}

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
