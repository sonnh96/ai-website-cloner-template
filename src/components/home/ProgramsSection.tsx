"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { HomeContent } from "@/types/content";
import { ScrollScaleImage } from "@/components/motion/ScrollScaleImage";

function CornerBracket() {
  return (
    <svg
      className="absolute -top-3 -left-3 h-[60px] w-[60px]"
      viewBox="0 0 60 60"
      fill="none"
      aria-hidden="true"
    >
      <path d="M59 1L1 1L1 59" stroke="#8A0304" strokeWidth="2" fill="none" />
    </svg>
  );
}

function ProgramCard({
  track,
  index,
}: {
  track: HomeContent["programs"]["tracks"][number];
  index: number;
}) {
  const [activeLevel, setActiveLevel] = useState(0);

  return (
    <div style={{ "--i": index } as React.CSSProperties}>
      <div className="relative aspect-[16/10] overflow-hidden md:aspect-[4/3]">
        <CornerBracket />
        <ScrollScaleImage className="absolute inset-0">
          <Image
            src={track.imageSrc}
            alt={track.title}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </ScrollScaleImage>
      </div>
      <h3 className="font-heading mt-4 text-xl font-bold uppercase text-primary">
        {track.title}
      </h3>
      <ul className="mt-4 flex flex-col gap-3">
        {track.levels.map((level, index) => {
          const isActive = index === activeLevel;
          return (
            <li key={level}>
              <button
                type="button"
                onClick={() => setActiveLevel(index)}
                className={cn(
                  "w-full border-l-2 pl-3 text-left text-sm font-semibold uppercase transition-colors",
                  isActive
                    ? "border-primary font-bold text-primary"
                    : "border-transparent text-foreground/70"
                )}
              >
                {level}
              </button>
            </li>
          );
        })}
      </ul>
      <a
        href="#"
        className="mt-4 inline-block bg-primary px-8 py-3 text-sm font-bold uppercase text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-cis-red-dark hover:shadow-md"
      >
        {track.cta}
      </a>
    </div>
  );
}

export function ProgramsSection({ content }: { content: HomeContent["programs"] }) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1170px] px-6 text-center">
        <h2 className="reveal font-heading text-3xl font-bold uppercase text-primary md:text-4xl">
          {content.heading}
        </h2>
        <span className="mx-auto mb-6 mt-2 block h-1 w-10 bg-primary" />
        <p className="reveal mx-auto mb-12 max-w-3xl text-foreground/80">{content.intro}</p>
        <div className="reveal-stagger grid grid-cols-1 gap-12 text-left md:grid-cols-2">
          {content.tracks.map((track, index) => (
            <ProgramCard key={track.title} track={track} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
