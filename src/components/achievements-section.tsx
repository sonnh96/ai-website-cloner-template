import { Star } from "lucide-react";
import { Marquee } from "@/components/marquee";

const TICKER_ITEMS = [
  "30 National Awards Won: Celebrating Excellence",
  "Your Child's Future Starts Here",
  "Inspiring Lifelong Learning Every Day",
];

export function AchievementsSection() {
  return (
    <section className="w-full">
      {/* Part A — Achievements content */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left column */}
          <div>
            <h2 className="font-heading text-tas-navy text-[32px] font-bold leading-[1.15] md:text-[36px]">
              Celebrating Our Academic Achievements
            </h2>
            <p className="text-tas-ink mt-5 max-w-md text-base leading-relaxed">
              Our students consistently excel academically, achieving
              outstanding results on standardized tests and earning
              acceptance into prestigious colleges. We take pride in
              fostering a culture of academic excellence.
            </p>
            <button
              type="button"
              className="bg-tas-crimson mt-8 rounded-[10px] px-6 py-3 font-bold text-white transition-opacity hover:opacity-90"
            >
              Learn more
            </button>
          </div>

          {/* Right column — asymmetric stat card grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 — 95% College Acceptance Rate */}
            <div className="bg-tas-navy flex min-h-[140px] flex-col justify-end rounded-[10px] p-6 text-white">
              <span className="text-[40px] font-bold leading-none">95%</span>
              <span className="mt-2 text-base">College Acceptance Rate</span>
            </div>

            {/* Card 2 — 1000+ Standardized Test Scores (taller, spans full stack) */}
            <div className="bg-tas-navy relative col-start-2 row-start-1 row-span-3 flex flex-col justify-end rounded-[10px] p-6 text-white">
              <Star className="absolute right-5 top-5 h-5 w-5 fill-white text-white" />
              <span className="text-[40px] font-bold leading-none">
                1000+
              </span>
              <span className="mt-2 text-base">
                Standardized Test Scores
              </span>
            </div>

            {/* Card 3 — 15 Scholarships Awarded */}
            <div className="bg-tas-crimson relative flex min-h-[140px] flex-col justify-end rounded-[10px] p-6 text-white">
              <Star className="absolute right-5 top-5 h-5 w-5 fill-white text-white" />
              <span className="text-[40px] font-bold leading-none">15</span>
              <span className="mt-2 text-base">Scholarships Awarded</span>
            </div>

            {/* Card 4 — small navy corner card, no numeric value */}
            <div className="bg-tas-navy flex min-h-[80px] items-center rounded-[10px] p-6 text-white">
              <span className="text-base font-bold">National Awards Won</span>
            </div>
          </div>
        </div>
      </div>

      {/* Part B — Awards marquee ticker (full-bleed) */}
      <div className="bg-tas-surface w-full py-6">
        <Marquee direction="left" durationSeconds={28}>
          <div className="flex items-center whitespace-nowrap">
            {TICKER_ITEMS.map((text) => (
              <span key={text} className="flex items-center">
                <span className="text-tas-navy mx-6 text-xl font-bold">
                  {text}
                </span>
                <Star className="mx-6 h-4 w-4 shrink-0 fill-[#df214d] text-[#df214d]" />
              </span>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
