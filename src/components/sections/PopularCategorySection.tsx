"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from "@/components/icons";

interface CategoryCard {
  icon: string;
  label: string;
}

const categories: CategoryCard[] = [
  { icon: "/images/kadu/2024/06/pc-1-icon-1.webp", label: "Digital Marketing" },
  { icon: "/images/kadu/2024/06/pc-1-icon-2.webp", label: "IT & Software" },
  { icon: "/images/kadu/2024/06/pc-1-icon-3.webp", label: "Art & Humanities" },
  { icon: "/images/kadu/2024/06/pc-1-icon-4.webp", label: "Web Development" },
];

export function PopularCategorySection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;
    const amount = Math.round(track.clientWidth * 0.8);
    track.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-10">
          {/* Left: heading block */}
          <div className="shrink-0 text-center lg:w-[30%] lg:text-left">
            <p className="kd-subtitle-ani-1 inline-flex items-center gap-2 font-script text-2xl text-kd-primary">
              <StarIcon className="size-4 fill-kd-primary text-kd-primary" />
              Online Classes
            </p>
            <h2 className="kd-split-text kd-title-ani mt-2 font-sans text-4xl font-black leading-tight text-kd-heading md:text-[40px]">
              Popular <span className="text-kd-primary">Category</span>
            </h2>
            <p className="kd-reveal mt-4 text-kd-paragraph">
              We don&apos;t just work with concrete and steel.{" "}
              <span className="font-bold text-kd-heading">We are Approachable</span>
            </p>

            <a
              href="#"
              className="group relative mt-8 inline-flex items-center gap-2 overflow-hidden rounded-full bg-kd-heading px-8 py-5 text-sm font-extrabold uppercase text-white transition-colors duration-300 ease-[cubic-bezier(.57,.21,.69,1.25)] hover:bg-kd-secondary hover:text-[#22281e]"
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

          {/* Right: carousel */}
          <div className="relative lg:w-[70%]">
            <div
              ref={trackRef}
              data-kd-autoplay="5000"
              className="scrollbar-none flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4"
            >
              {categories.map((category) => (
                <div
                  key={category.label}
                  className="w-[220px] shrink-0 snap-start sm:w-[250px]"
                >
                  <div className="flex flex-col items-center rounded-[28px] bg-[#f5f5f3] px-6 py-10 transition-transform duration-300 hover:-translate-y-1">
                    <div className="kd-jello-hover relative flex size-32 items-center justify-center">
                      <Image
                        src="/images/kadu/2024/06/pc-1-shape-1.webp"
                        alt=""
                        fill
                        sizes="128px"
                        className="object-contain"
                        aria-hidden="true"
                      />
                      <Image
                        src={category.icon}
                        alt={category.label}
                        width={56}
                        height={56}
                        className="kd-jello-target relative z-10 size-14 object-contain"
                      />
                    </div>
                    <span className="mt-6 inline-flex items-center rounded-full bg-kd-heading px-4 py-1.5 text-sm font-bold text-white">
                      {category.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
              <button
                type="button"
                onClick={() => scrollByCard("prev")}
                aria-label="Previous categories"
                className="inline-flex size-12 items-center justify-center rounded-full border border-kd-heading/15 text-kd-heading transition-colors duration-300 hover:bg-kd-primary hover:text-white"
              >
                <ArrowLeftIcon className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard("next")}
                aria-label="Next categories"
                className="inline-flex size-12 items-center justify-center rounded-full border border-kd-heading/15 text-kd-heading transition-colors duration-300 hover:bg-kd-primary hover:text-white"
              >
                <ArrowRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
