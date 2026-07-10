"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { HomeContent } from "@/types/content";

const PIN_POSITIONS = [
  "left-[28%] top-[35%]",
  "left-[48%] top-[30%]",
  "left-[68%] top-[38%]",
  "left-[68%] top-[68%]",
];

export function UniversitySection({
  content,
}: {
  content: HomeContent["university"];
}) {
  const [activeRegion, setActiveRegion] = useState(0);
  const regionCount = content.regions.length;

  const goToPrev = () => {
    setActiveRegion((prev) => (prev - 1 + regionCount) % regionCount);
  };

  const goToNext = () => {
    setActiveRegion((prev) => (prev + 1) % regionCount);
  };

  return (
    <section className="py-16 md:py-24 bg-surface-tint text-center">
      <div className="max-w-[1170px] mx-auto px-6">
        <h2 className="reveal font-heading text-3xl md:text-4xl mb-10 uppercase font-bold text-primary">
          {content.heading}
        </h2>

        <div className="reveal-scale relative bg-white rounded-lg h-[220px] sm:h-[300px] md:h-[420px] overflow-hidden shadow-sm">
          {content.regions.map((region, index) => (
            <button
              key={region.id}
              type="button"
              onClick={() => setActiveRegion(index)}
              aria-label={region.label}
              aria-pressed={activeRegion === index}
              className={cn(
                "absolute w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold border-2 border-white shadow transition-transform duration-300 hover:scale-110",
                PIN_POSITIONS[index],
                activeRegion === index && "scale-110 ring-2 ring-cis-gold",
              )}
            >
              {region.id}
            </button>
          ))}
        </div>

        <div className="bg-primary text-white px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-left">
          <h3 className="text-lg md:text-xl font-bold uppercase">
            {content.subheading}
          </h3>

          <div className="flex items-center gap-3">
            <span className="text-sm">{content.selectAreaLabel}</span>

            <button
              type="button"
              onClick={goToPrev}
              aria-label="Previous region"
              className="flex items-center justify-center w-6 h-6 text-white transition-transform duration-150 hover:-translate-x-0.5 hover:text-cis-gold"
            >
              &#8249;
            </button>

            {content.regions.map((region, index) => (
              <button
                key={region.id}
                type="button"
                onClick={() => setActiveRegion(index)}
                aria-pressed={activeRegion === index}
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all duration-200",
                  activeRegion === index
                    ? "bg-white text-primary"
                    : "border border-white/60 text-white hover:border-white",
                )}
              >
                {region.id}
              </button>
            ))}

            <button
              type="button"
              onClick={goToNext}
              aria-label="Next region"
              className="flex items-center justify-center w-6 h-6 text-white transition-transform duration-150 hover:translate-x-0.5 hover:text-cis-gold"
            >
              &#8250;
            </button>
          </div>
        </div>

        <p className="mt-4 text-muted-foreground text-sm">
          {content.regions[activeRegion].label}
        </p>
      </div>
    </section>
  );
}
