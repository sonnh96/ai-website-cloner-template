"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { HomeContent } from "@/types/content";

export function ValuesSection({ content }: { content: HomeContent["values"] }) {
  const { heading, cards, gallerySrc } = content;
  const [active, setActive] = useState(0);
  const activeCard = cards[active];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1170px] mx-auto px-6">
        <h2 className="reveal text-primary font-heading uppercase text-3xl md:text-4xl mb-10">
          {heading}
        </h2>

        <div className="reveal flex flex-col md:grid md:grid-cols-[100px_1fr] gap-8 items-start">
          <div className="flex md:flex-col gap-4">
            {cards.map((card, index) => {
              const isActive = index === active;
              return (
                <button
                  key={card.label}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-pressed={isActive}
                  aria-label={card.label}
                  className={cn(
                    "w-20 h-20 flex items-center justify-center rounded-md transition-all duration-200",
                    isActive
                      ? "bg-primary scale-105 shadow-md"
                      : "bg-white border border-border hover:border-primary/40",
                  )}
                >
                  <Image
                    src={card.icon}
                    alt=""
                    width={36}
                    height={36}
                    aria-hidden="true"
                    className={cn("transition-transform duration-200", isActive && "brightness-0 invert")}
                  />
                </button>
              );
            })}
          </div>

          <div>
            <h3 key={`label-${active}`} className="fade-swap font-heading uppercase text-xl mb-4">
              {activeCard.label}
            </h3>
            <div className="relative w-full h-[260px] md:h-[360px] lg:h-[420px] overflow-hidden">
              <Image
                key={`img-${active}`}
                src={gallerySrc}
                alt={activeCard.label}
                fill
                className="fade-swap object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
