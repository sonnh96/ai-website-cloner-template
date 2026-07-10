import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface CurriculumStage {
  name: string;
  href: string;
  image: string;
  imagePosition?: string;
  pillLabel?: string;
}

const stages: CurriculumStage[] = [
  {
    name: "Early",
    href: "/academics/early-years",
    image:
      "/images/685215c9cc7bbfe9dfcc8045_Kindergarten-B1---Vi-sao-nen-cho-con-hoc-truong-mam-non-quoc-te-ngay-tu-doi-dau-p-1600.webp",
    pillLabel: "Primary Years Programme",
  },
  {
    name: "Elementary",
    href: "/academics/elementary",
    image:
      "/images/695f1f62ea892bfc6d4fe958_530297734_1345925877542087_225820365755328426_n-p-1600.jpg",
    pillLabel: "Primary Years Programme",
  },
  {
    name: "Middle",
    href: "/academics/middle-school",
    image:
      "/images/6a21466cbe40efaf26428190_611241047_1484328890368451_5706714832769279403_n-p-1600.jpg",
  },
  {
    name: "High",
    href: "/academics/high-school",
    // Source photo already carries a real IB Diploma Programme badge in its
    // top-right corner — bias the crop to keep it in frame instead of
    // fabricating a synthetic badge overlay.
    image: "/images/6923fc1cd003b8bd6f06cefd_edit.webp",
    imagePosition: "object-right-top",
  },
];

export function CurriculumSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center text-[36px] font-bold leading-tight text-tas-crimson md:text-[40px]">
          Comprehensive Curriculum Overview for All Educational Stages
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 md:mt-14 md:grid-cols-4">
          {stages.map((stage) => (
            <Link
              key={stage.name}
              href={stage.href}
              className="group relative block overflow-hidden rounded-md pb-6 transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-md">
                <Image
                  src={stage.image}
                  alt={`${stage.name} students at TAS`}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className={cn(
                    "object-cover transition-transform duration-300 group-hover:scale-[1.02]",
                    stage.imagePosition
                  )}
                />

                {stage.pillLabel && (
                  <span className="absolute left-3 top-3 rounded-full bg-black/40 px-3 py-1 text-xs text-white">
                    {stage.pillLabel}
                  </span>
                )}
              </div>

              <div className="relative -mt-6 mx-3 flex items-center justify-between rounded-md bg-white px-4 py-3 shadow-sm">
                <span className="text-[24px] font-bold text-tas-navy">
                  {stage.name}
                </span>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-tas-navy text-tas-navy transition-colors duration-300 group-hover:bg-tas-navy group-hover:text-white">
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
