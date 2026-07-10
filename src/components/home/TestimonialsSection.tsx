"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { HomeContent } from "@/types/content";

export function TestimonialsSection({
  content,
}: {
  content: HomeContent["testimonials"];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = content.items[activeIndex];

  return (
    <section className="relative py-20 md:py-28 bg-cis-navy text-center overflow-hidden">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 -top-16 font-serif text-[14rem] leading-none text-white/5 select-none"
      >
        &ldquo;
      </span>
      <div className="reveal relative max-w-[900px] mx-auto px-6">
        <h2 className="font-heading text-xs md:text-sm mb-8 uppercase tracking-[0.2em] text-cis-gold">
          {content.heading}
        </h2>
        <div className="relative min-h-[9rem] md:min-h-[7rem]">
          <p
            key={`quote-${activeIndex}`}
            className="fade-swap italic text-xl md:text-2xl lg:text-3xl font-heading font-medium text-white leading-snug px-4 text-balance"
          >
            {active.quote}
          </p>
          <p key={`name-${activeIndex}`} className="fade-swap mt-6 font-medium">
            <span className="text-cis-gold font-bold uppercase tracking-wide text-sm">
              {active.name}
            </span>
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 mt-10">
          {content.items.map((item, index) => (
            <button
              key={item.name + index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Xem cảm nhận ${index + 1}`}
              aria-current={index === activeIndex}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "w-6 bg-cis-gold"
                  : "w-2 bg-white/30 hover:bg-white/50",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
