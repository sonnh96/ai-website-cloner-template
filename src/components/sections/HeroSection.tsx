"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowRightIcon } from "@/components/icons";

const SLIDE_COUNT = 3;

function HeroSlide() {
  return (
    <div className="kd-hero-1-item relative flex w-full shrink-0 snap-start flex-col items-center gap-8 px-6 py-16 sm:px-10 sm:py-20 md:flex-row md:items-center md:gap-8 md:py-16 lg:px-16 lg:py-20 xl:px-24">
      {/* Text content */}
      <div className="relative z-10 w-full max-w-xl text-center md:w-1/2 md:text-left">
        <span className="kd-hero-subtitle kd-subtitle-ani-1 relative mb-4 inline-flex items-center gap-2 font-script text-2xl text-kd-secondary sm:text-3xl">
          <Image
            src="/images/kadu/2024/05/star-1.webp"
            alt=""
            width={18}
            height={18}
            className="size-4 sm:size-5"
          />
          Guaranteed &amp; certified
          <Image
            src="/images/kadu/2024/05/star-2.webp"
            alt=""
            width={14}
            height={14}
            className="hidden size-3.5 sm:inline-block"
          />
        </span>

        <h1 className="kd-hero-title font-sans text-4xl font-black leading-[1.13] tracking-wide text-white sm:text-5xl md:text-6xl lg:text-[64px]">
          Online Platform For Education.
        </h1>

        <p className="kd-hero-disc mt-4 max-w-[560px] text-base text-white/85 sm:text-lg">
          We don&apos;t just work with concrete and steel. We work with people{" "}
          <span className="underline decoration-white/60 underline-offset-2">
            We are Approachable
          </span>
          , with even our highest work work with concrete and steel. We work
          with people
        </p>

        <div className="kd-hero-btn-wrap mt-6 flex justify-center md:justify-start">
          <a
            href="#"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-kd-secondary px-7 py-4 text-sm font-extrabold uppercase text-[#22281e] transition-colors duration-300 ease-[cubic-bezier(.57,.21,.69,1.25)] hover:bg-kd-primary hover:text-white"
          >
            <span className="relative overflow-hidden">
              <span className="block transition-transform duration-500 group-hover:-translate-y-full group-hover:opacity-0">
                Find Out More
              </span>
              <span className="absolute inset-0 block translate-y-full opacity-0 transition-transform duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                Let&apos;s Talk
              </span>
            </span>
            <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Hero image group — original .kd-hero-1-item-img composition */}
      <div className="relative z-10 flex w-full justify-center md:w-1/2 md:justify-end lg:-ml-[50px]">
        <div className="relative w-full max-w-[400px]">
          {/* img-1: main photo sliding up into a bottom-rounded mask; narrower and
              left-aligned so the img-2 circle stays visible on the right */}
          <div className="kd-hero-img-1 relative mr-auto h-[280px] w-[82%] overflow-hidden rounded-b-[110px] sm:h-[340px] md:-ml-6 lg:-ml-12 lg:h-[420px]">
            <Image
              src="/images/kadu/2024/05/h1-img-1.webp"
              alt="Student in an orange hoodie carrying a backpack"
              fill
              priority
              sizes="(min-width: 1024px) 400px, 90vw"
              className="object-cover object-top"
            />
          </div>

          {/* img-2: circular photo with orange multiply overlay, scales in behind */}
          <div className="kd-hero-img-2 absolute right-[-35px] top-[40px] -z-10 hidden size-[260px] overflow-hidden rounded-full md:block lg:size-[350px]">
            <Image
              src="/images/kadu/2024/05/h1-img-2.webp"
              alt=""
              fill
              sizes="435px"
              className="rounded-full object-cover"
            />
            <span
              className="absolute inset-0 rounded-full bg-kd-secondary mix-blend-multiply"
              aria-hidden="true"
            />
          </div>

          {/* il-1: dashed-circle deco, fades in from (-40,-50) */}
          <div className="kd-hero-il-1 absolute right-0 top-[70px] -z-20 hidden w-[70%] md:block">
            <Image
              src="/images/kadu/2024/05/h1-il-1.webp"
              alt=""
              width={437}
              height={438}
              className="h-auto w-full"
              aria-hidden="true"
            />
          </div>

          {/* il-2: deco shape, spins in from -100deg */}
          <div className="kd-hero-il-2 absolute bottom-0 left-[50px] -z-20 hidden w-[70%] md:block">
            <Image
              src="/images/kadu/2024/05/h1-il-2.webp"
              alt=""
              width={439}
              height={433}
              className="h-auto w-full"
              aria-hidden="true"
            />
          </div>

          {/* il-3/4/5: mouse-parallax accents */}
          <Image
            src="/images/kadu/2024/05/h1-il-3.webp"
            alt=""
            width={113}
            height={39}
            data-value="2"
            className="txa-mm-elm absolute bottom-[10px] left-[-210px] hidden lg:block"
            aria-hidden="true"
          />
          <Image
            src="/images/kadu/2024/05/h1-il-4.webp"
            alt=""
            width={41}
            height={41}
            data-value="3"
            className="txa-mm-elm absolute right-[12%] top-0 hidden md:block"
            aria-hidden="true"
          />
          <Image
            src="/images/kadu/2024/05/h1-il-5.webp"
            alt=""
            width={134}
            height={55}
            data-value="-2"
            className="txa-mm-elm absolute bottom-[30px] right-[100px] hidden md:block"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByOne = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-kd-primary">
      <Image
        src="/images/kadu/2024/06/h1-bg-1.png"
        alt=""
        fill
        priority
        className="pointer-events-none object-cover"
      />
      {/* Recolors the baked-in green texture to the current primary color, preserving
          the original's tonal variation (mix-blend-mode: color keeps luminosity, swaps hue). */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-kd-primary mix-blend-color"
      />

      <div
        ref={trackRef}
        data-kd-autoplay="6000"
        className="relative z-10 flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
          <HeroSlide key={i} />
        ))}
      </div>

      {/* Social row */}
      <div className="absolute bottom-16 left-6 z-30 hidden items-center gap-6 sm:flex lg:bottom-20 lg:left-16">
        <a
          href="#"
          className="text-xs font-bold uppercase tracking-widest text-white/80 transition-colors hover:text-kd-secondary"
        >
          Facebook
        </a>
        <a
          href="#"
          className="text-xs font-bold uppercase tracking-widest text-white/80 transition-colors hover:text-kd-secondary"
        >
          Twitter
        </a>
        <a
          href="#"
          className="text-xs font-bold uppercase tracking-widest text-white/80 transition-colors hover:text-kd-secondary"
        >
          Linkedin
        </a>
      </div>

      {/* Slider nav */}
      <div className="absolute bottom-16 right-6 z-30 flex items-center gap-4 lg:bottom-20 lg:right-16">
        <button
          type="button"
          onClick={() => scrollByOne(-1)}
          aria-label="Previous slide"
          className="text-xs font-bold uppercase tracking-widest text-white/80 transition-colors hover:text-kd-secondary"
        >
          Prev
        </button>
        <span className="h-4 w-px bg-white/30" aria-hidden="true" />
        <button
          type="button"
          onClick={() => scrollByOne(1)}
          aria-label="Next slide"
          className="text-xs font-bold uppercase tracking-widest text-white/80 transition-colors hover:text-kd-secondary"
        >
          Next
        </button>
      </div>

      {/* Bottom wave transition into the next section */}
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 left-0 z-20 h-16 w-full sm:h-20 lg:h-24"
        aria-hidden="true"
      >
        <path
          fill="white"
          d="M0,64 C240,10 480,10 720,45 C960,80 1200,80 1440,32 L1440,90 L0,90 Z"
        />
      </svg>
    </section>
  );
}
