"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface CurriculumStage {
  name: string;
  href: string;
  image: string;
  imagePosition?: string;
  pillLabel?: string;
  pillTone?: "crimson" | "navy";
}

const stages: CurriculumStage[] = [
  {
    name: "Lớp 1 - 3",
    href: "#",
    image: "/images/cis-elementary.jpg",
    pillLabel: "Tiểu Học",
    pillTone: "crimson",
  },
  {
    name: "Lớp 4 - 6",
    href: "#",
    image: "/images/cis-program-3.png",
    pillLabel: "Tiểu Học",
    pillTone: "crimson",
  },
  {
    name: "Lớp 7 - 10",
    href: "#",
    image: "/images/cis-secondary.webp",
    pillLabel: "Trung Học",
    pillTone: "navy",
  },
  {
    name: "IBDP",
    href: "#",
    image: "/images/cis-program-4.png",
    pillLabel: "Trung Học",
    pillTone: "navy",
  },
];

export function CurriculumSection() {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center text-[36px] font-bold leading-tight text-tas-crimson md:text-[40px]">
          Chương Trình Giáo Dục Toàn Diện Từ Lớp 1 Đến Lớp 12
        </h2>

        <div
          ref={gridRef}
          className="stagger-reveal mt-10 grid grid-cols-2 gap-4 md:mt-14 md:grid-cols-4"
        >
          {stages.map((stage) => (
            <Link
              key={stage.name}
              href={stage.href}
              className="stagger-item group relative block overflow-hidden rounded-md pb-6 transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-md">
                <Image
                  src={stage.image}
                  alt={`Học sinh CIS ${stage.name}`}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className={cn(
                    "object-cover transition-transform duration-300 group-hover:scale-[1.02]",
                    stage.imagePosition
                  )}
                />

                {stage.pillLabel && (
                  <span
                    className={cn(
                      "absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white",
                      stage.pillTone === "navy" ? "bg-tas-navy/85" : "bg-tas-crimson/85"
                    )}
                  >
                    {stage.pillLabel}
                  </span>
                )}
              </div>

              <div className="relative -mt-6 mx-3 flex items-center justify-between rounded-md bg-white px-4 py-3 shadow-sm">
                <span className="text-[24px] font-bold text-tas-navy">
                  {stage.name}
                </span>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-tas-navy text-tas-navy transition-all duration-300 group-hover:scale-110 group-hover:bg-tas-navy group-hover:text-white">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
