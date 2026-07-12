"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowLeftIcon, ArrowRightIcon, QuoteIcon, StarIcon } from "@/components/icons";

interface Testimonial {
  quote: string;
  avatar: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Awesome hexagon themed stream pack, you can change hexagon stream pack Awesome stream pack, you can",
    avatar: "/images/kadu/2024/05/t1-author-1.webp",
    name: "Millon Zahino",
    role: "Behavioral Science",
  },
  {
    quote:
      "Awesome hexagon themed stream pack, you can change hexagon stream pack Awesome stream pack, you can",
    avatar: "/images/kadu/2024/05/t1-author-1.webp",
    name: "Jalima Kargis",
    role: "Behavioral Science",
  },
];

export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-testimonial-card]");
    const amount = card ? card.offsetWidth + 24 : track.clientWidth;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div className="flex max-w-xl items-start gap-6">
            <div className="kd-img-ani-1 relative hidden h-32 w-28 shrink-0 sm:block">
              <div className="absolute left-0 top-2 h-24 w-20 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/kadu/2024/05/t1-img-1.webp"
                  alt=""
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-14 h-24 w-20 overflow-hidden rounded-2xl shadow-lg ring-4 ring-white">
                <Image
                  src="/images/kadu/2024/05/t1-img-2.webp"
                  alt=""
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <span className="kd-subtitle-ani-1 font-script text-3xl text-kd-primary">testimonial</span>
              <h2 className="kd-split-text kd-title-ani mt-2 font-sans text-3xl font-black text-kd-heading sm:text-4xl lg:text-5xl">
                What Students Have To Say
              </h2>
              <p className="mt-4 text-kd-paragraph">
                We don&apos;t just work with concrete and steel. We work with people, with even
                our highest work <span className="font-bold text-kd-heading">We are Approachable</span>
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-3 self-start md:self-auto">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous testimonial"
              className="flex size-12 items-center justify-center rounded-full border border-kd-heading/15 text-kd-heading transition-colors duration-300 hover:bg-kd-primary hover:text-white"
            >
              <ArrowLeftIcon className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next testimonial"
              className="flex size-12 items-center justify-center rounded-full border border-kd-heading/15 text-kd-heading transition-colors duration-300 hover:bg-kd-primary hover:text-white"
            >
              <ArrowRightIcon className="size-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          data-kd-autoplay="5000"
          className="txaa-fade-right mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${index}`}
              data-testimonial-card
              className="kd-reveal relative w-full shrink-0 snap-center rounded-2xl bg-white p-8 shadow-[0_10px_50px_rgba(0,0,0,0.08)] sm:w-[calc(50%-12px)] sm:p-10"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <QuoteIcon className="absolute right-8 top-8 size-16 text-kd-primary/10" aria-hidden />

              <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <StarIcon
                    key={starIndex}
                    className="size-4 fill-kd-secondary text-kd-secondary"
                  />
                ))}
              </div>

              <p className="relative mt-6 text-lg leading-relaxed text-kd-heading">
                {testimonial.quote}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="relative size-14 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-kd-heading">{testimonial.name}</p>
                  <p className="text-sm text-kd-paragraph">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
