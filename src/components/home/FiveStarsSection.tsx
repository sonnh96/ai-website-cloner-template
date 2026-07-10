import type { HomeContent } from "@/types/content";

export function FiveStarsSection({
  content,
}: {
  content: HomeContent["fiveStars"];
}) {
  const { heading, cards } = content;
  const topCards = cards.slice(0, 3);
  const bottomCards = cards.slice(3, 5);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-cis-navy">
      {/* Decorative watermark */}
      <img
        src="/images/home/vector-section-4.png"
        alt=""
        aria-hidden="true"
        className="absolute right-0 top-0 h-full opacity-40 pointer-events-none hidden md:block"
      />
      <img
        src="/images/home/vector-section-4-mb.png"
        alt=""
        aria-hidden="true"
        className="absolute right-0 top-0 w-full opacity-40 pointer-events-none block md:hidden"
      />

      <div className="max-w-[1170px] mx-auto px-6 relative z-10 text-center">
        <h2 className="reveal font-heading text-3xl md:text-4xl font-bold uppercase text-white mb-12">
          {heading}
        </h2>

        <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-3 gap-6">
          {topCards.map((card, index) => (
            <FiveStarsCard key={card.title} card={card} index={index} />
          ))}
        </div>

        <div className="reveal-stagger grid grid-cols-2 max-w-[500px] mx-auto gap-6 mt-6">
          {bottomCards.map((card, index) => (
            <FiveStarsCard key={card.title} card={card} index={index + topCards.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ICONS: Record<string, React.ReactNode> = {
  "STAR STUDENTS": (
    <>
      <circle cx="24" cy="14" r="7" />
      <path d="M11 40c0-8 6-13 13-13s13 5 13 13" />
    </>
  ),
  "STAR TEACHERS & COACHES": (
    <>
      <rect x="8" y="10" width="32" height="20" rx="2" />
      <path d="M16 36h16M24 30v6" />
    </>
  ),
  "STAR FACILITIES": (
    <>
      <path d="M10 40V16l14-8 14 8v24" />
      <path d="M18 40V26h12v14" />
    </>
  ),
  "STAR PARENTS": (
    <>
      <circle cx="16" cy="14" r="6" />
      <circle cx="32" cy="14" r="6" />
      <path d="M6 40c0-7 4.5-12 10-12s10 5 10 12M22 40c0-7 4.5-12 10-12s10 5 10 12" />
    </>
  ),
  "STAR PROGRAMS": (
    <>
      <path d="M10 12h20a4 4 0 0 1 4 4v22H14a4 4 0 0 1-4-4V12Z" />
      <path d="M10 12a4 4 0 0 1 4-4h20v26" />
    </>
  ),
};

function FiveStarsCard({
  card,
  index,
}: {
  card: HomeContent["fiveStars"]["cards"][number];
  index: number;
}) {
  return (
    <div
      style={{ "--i": index } as React.CSSProperties}
      className="group border border-white/60 p-8 flex flex-col items-center text-center gap-4 transition-colors duration-300 hover:border-cis-gold/70"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-full border border-cis-gold/50 transition-colors duration-300 group-hover:bg-cis-gold/10">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="w-9 h-9 text-cis-gold"
        >
          {ICONS[card.title]}
        </svg>
      </span>
      <h3 className="font-heading text-lg font-bold uppercase text-white">
        {card.title}
      </h3>
      <p className="text-sm leading-relaxed text-white/80">
        {card.description}
      </p>
    </div>
  );
}
