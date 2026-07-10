"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, type ReactNode } from "react";

interface CarouselProps {
  slides: ReactNode[];
  arrowVariant?: "circle" | "square";
  className?: string;
  arrowClassName?: string;
}

export function Carousel({
  slides,
  arrowVariant = "circle",
  className,
  arrowClassName,
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const slideCount = slides.length;

  const go = (delta: number) => {
    setIndex((prev) => (prev + delta + slideCount) % slideCount);
  };

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="w-full shrink-0">
              {slide}
            </div>
          ))}
        </div>
      </div>
      <div className={cn("mt-6 flex items-center gap-3", arrowClassName)}>
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => go(-1)}
          className={cn(
            "flex size-10 items-center justify-center border border-tas-navy text-tas-navy transition-colors hover:bg-tas-navy hover:text-white",
            arrowVariant === "circle" ? "rounded-full" : "rounded-md"
          )}
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => go(1)}
          className={cn(
            "flex size-10 items-center justify-center border border-tas-navy text-tas-navy transition-colors hover:bg-tas-navy hover:text-white",
            arrowVariant === "circle" ? "rounded-full" : "rounded-md"
          )}
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
