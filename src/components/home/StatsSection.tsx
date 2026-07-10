import type { HomeContent } from "@/types/content";
import { CountUpStat } from "@/components/motion/CountUpStat";

export function StatsSection({ content }: { content: HomeContent["stats"] }) {
  return (
    <section
      className="relative py-16 md:py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${content.backgroundSrc})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-[1170px] mx-auto px-6 text-center">
        <h2 className="reveal font-heading text-3xl md:text-4xl mb-12 font-bold uppercase text-white">
          {content.heading}
        </h2>
        <div className="reveal-stagger grid grid-cols-2 md:grid-cols-4 gap-8">
          {content.items.map((item, index) => (
            <div
              key={item.label}
              style={{ "--i": index } as React.CSSProperties}
              className="flex flex-col items-center"
            >
              <CountUpStat value={item.value} suffix={item.suffix} />
              <span aria-hidden="true" className="mt-3 h-0.5 w-10 bg-cis-gold" />
              <p className="mt-3 text-sm md:text-base font-semibold uppercase tracking-wide text-white">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
