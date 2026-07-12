"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowRightIcon } from "@/components/icons";

const SLIDE_COUNT = 3;

function HeroSlide() {
  return (
    <div className="relative flex w-full shrink-0 snap-start flex-col items-center gap-10 px-6 pt-32 pb-40 sm:px-10 md:flex-row md:items-center md:gap-8 md:pt-40 md:pb-48 lg:px-16 xl:px-24">
      {/* Text content */}
      <div className="relative z-10 w-full max-w-xl text-center md:w-1/2 md:text-left">
        <span className="kd-reveal kd-subtitle-ani-1 relative mb-4 inline-flex items-center gap-2 font-script text-2xl text-kd-secondary sm:text-3xl">
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

        <h1 className="kd-hero-title font-sans text-4xl font-black leading-[1.13] tracking-wide text-white sm:text-5xl md:text-6xl lg:text-[70px]">
          Online Platform For Education.
        </h1>

        <p
          className="kd-reveal mt-6 text-lg text-white/85 sm:text-xl"
          style={{ animationDelay: "0.2s" }}
        >
          We don&apos;t just work with concrete and steel. We work with people{" "}
          <span className="underline decoration-white/60 underline-offset-2">
            We are Approachable
          </span>
          , with even our highest work work with concrete and steel. We work
          with people
        </p>

        <div
          className="kd-reveal mt-8 flex justify-center md:justify-start"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-kd-secondary px-8 py-5 text-sm font-extrabold uppercase text-[#22281e] transition-colors duration-300 ease-[cubic-bezier(.57,.21,.69,1.25)] hover:bg-kd-primary hover:text-white"
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

        {/* Wavy squiggle divider */}
        <svg
          width="140"
          height="30"
          viewBox="0 0 140 30"
          fill="none"
          className="mx-auto mt-10 hidden sm:block md:mx-0"
          aria-hidden="true"
        >
          <path
            d="M2 24C13 6 24 6 35 24C46 42 57 6 70 6C81 6 92 42 105 24C114 11 126 6 138 12"
            stroke="var(--kd-clr-sd-1)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Hero photo */}
      <div className="relative z-10 flex w-full justify-center md:w-1/2 md:justify-end">
        <div className="relative size-64 sm:size-80 md:size-96 lg:size-[26rem]">
          <div className="absolute inset-4 rounded-full bg-kd-secondary/90" />

          <Image
            src="/images/kadu/2024/05/h1-img-2.webp"
            alt=""
            width={260}
            height={260}
            className="absolute -bottom-4 -left-6 z-0 w-2/5 rounded-3xl object-cover opacity-90 sm:-left-8"
          />

          <Image
            src="/images/kadu/2024/05/h1-img-1.webp"
            alt="Student in an orange hoodie carrying a backpack"
            width={420}
            height={480}
            priority
            className="absolute inset-0 z-10 mx-auto h-full w-full object-contain drop-shadow-2xl"
          />

          <Image
            src="/images/kadu/2024/05/h1-il-1.webp"
            alt=""
            width={64}
            height={64}
            className="absolute -right-4 top-2 z-20 w-14 sm:w-16"
          />
          <Image
            src="/images/kadu/2024/05/h1-il-3.webp"
            alt=""
            width={40}
            height={40}
            data-value="2"
            className="txa-mm-elm absolute -left-2 top-1/3 z-20 w-8 sm:w-10"
          />
          <Image
            src="/images/kadu/2024/05/h1-il-4.webp"
            alt=""
            width={28}
            height={28}
            data-value="3"
            className="txa-mm-elm absolute bottom-6 right-2 z-20 w-6 sm:w-7"
          />
          <Image
            src="/images/kadu/2024/05/h1-il-5.webp"
            alt=""
            width={32}
            height={32}
            data-value="-2"
            className="txa-mm-elm absolute -top-4 left-1/3 z-20 w-7 sm:w-8"
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
      <div className="absolute bottom-8 left-6 z-20 hidden items-center gap-6 sm:flex lg:left-16">
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
      <div className="absolute bottom-8 right-6 z-20 flex items-center gap-4 lg:right-16">
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
