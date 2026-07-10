"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Testimonial {
  quote: string;
  name: string;
  cohort: string;
  avatar: string;
  avatarPosition: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I joined TAS in my junior year, and the supportive teachers and welcoming community made a lasting impact. Through MUN with Mr. David, I gained confidence, leadership, and teamwork skills. What I value most is the strong sense of community where I always felt seen and supported.",
    name: "Khanh Nguyen Jennifer",
    cohort: "Class of 2025",
    avatar: "/images/68f98e0a1e0e678a04a36e03_study-abroad-pathway-at-TAS-p-800.jpg",
    avatarPosition: "68% 20%",
  },
  {
    quote:
      "I've studied at TAS for 7 years, and the teachers, especially Mr. Reede, Mr. Taka, and Mr. Andrew, have supported me far beyond academics. When choosing a university, I relied on alumni feedback for real insights. I committed to ASU and have no regrets!",
    name: "Samuel Nguyen",
    cohort: "Class of 2025",
    avatar: "/images/6923fc1cd003b8bd6f06cefd_edit.webp",
    avatarPosition: "55% 20%",
  },
  {
    quote:
      "TAS transformed me from a shy, insecure student into someone confident in expressing myself through both English and art, thanks to the support of inspiring teachers and a community that always believed in me.",
    name: "Yeji Lee",
    cohort: "Class of 2025",
    avatar:
      "/images/67ea14dbefc741b78f28889d_474800444_1163867852414558_1287744250052738853_n-p-800.jpg",
    avatarPosition: "58% 30%",
  },
];

const SLIDE_COUNT = TESTIMONIALS.length;

/**
 * Click-driven testimonials carousel. Reuses the same transform-based
 * slide mechanism as the shared `Carousel` primitive (translateX per
 * index) but keeps its own local state, since this section needs its
 * prev/next arrows pinned to the far left/right edges of the section,
 * vertically centered — a placement the primitive's default
 * below-content arrow row doesn't support.
 */
export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const go = (delta: number) => {
    setIndex((prev) => (prev + delta + SLIDE_COUNT) % SLIDE_COUNT);
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <button
        type="button"
        aria-label="Previous testimonial"
        onClick={() => go(-1)}
        className={cn(
          "border-tas-navy text-tas-navy hover:bg-tas-navy absolute top-1/2 left-4 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border transition-colors hover:text-white"
        )}
      >
        <ChevronLeft className="size-4" />
      </button>
      <button
        type="button"
        aria-label="Next testimonial"
        onClick={() => go(1)}
        className={cn(
          "border-tas-navy text-tas-navy hover:bg-tas-navy absolute top-1/2 right-4 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border transition-colors hover:text-white"
        )}
      >
        <ChevronRight className="size-4" />
      </button>

      <div className="mx-auto max-w-5xl px-16 sm:px-24">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.name} className="w-full shrink-0">
                <figure className="mx-auto flex max-w-3xl flex-col items-center text-center">
                  <blockquote className="font-heading text-tas-navy text-[28px] leading-snug font-medium sm:text-[32px]">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 flex flex-col items-center gap-3">
                    <div className="relative size-14 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                        style={{ objectPosition: testimonial.avatarPosition }}
                      />
                    </div>
                    <div>
                      <div className="text-tas-navy font-body text-base font-bold">
                        {testimonial.name}
                      </div>
                      <div className="font-body text-sm text-gray-500">
                        {testimonial.cohort}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
