import { Marquee } from "@/components/marquee";
import { cn } from "@/lib/utils";

// NOTE: No matching logo assets were found in `public/images/` for these
// universities at build time, so each entry renders as a styled text
// wordmark fallback per spec. If real logo files are added later
// (e.g. containing "sydney", "uni2", "uni3", "logo3", "logo5",
// "NarrowLogo"), swap the relevant entries below for <img> tags.
const ROW_ONE_UNIVERSITIES = [
  "Johns Hopkins University",
  "NYU",
  "USC",
  "Yonsei University",
  "Osaka University",
  "Cornell University",
];

const ROW_TWO_UNIVERSITIES = [
  "The University of Sydney",
  "SHMi",
  "Fordham University",
  "Tulane University",
  "RMIT University",
];

function UniversityWordmark({ name }: { name: string }) {
  return (
    <span
      className={cn(
        "flex h-10 items-center whitespace-nowrap font-heading text-lg font-bold uppercase tracking-wide text-tas-navy",
        "opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0",
        "md:h-12 md:text-xl"
      )}
    >
      {name}
    </span>
  );
}

export function GraduatesSection() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="max-w-[480px] font-heading text-[40px] font-bold leading-[1.1] tracking-tight text-tas-crimson">
          Our Graduates Thrive at Top Universities
        </h2>
        <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-tas-ink md:text-lg">
          Our students have been accepted into some of the most prestigious
          universities worldwide. Their hard work and dedication are
          reflected in their remarkable college placements.
        </p>
        <button
          type="button"
          className="mt-8 rounded-[10px] bg-tas-crimson px-6 py-3 font-bold text-white transition hover:brightness-110"
        >
          Learn more
        </button>
      </div>

      <div className="relative w-full overflow-hidden bg-tas-surface py-16">
        {/* No dotted world-map asset (e.g. "*map*") was found in
            `public/images/`, so the background graphic is skipped per spec. */}
        <div className="flex flex-col gap-10">
          <Marquee direction="left" durationSeconds={35}>
            <div className="flex items-center gap-16">
              {ROW_ONE_UNIVERSITIES.map((name) => (
                <UniversityWordmark key={name} name={name} />
              ))}
            </div>
          </Marquee>
          <Marquee direction="right" durationSeconds={45}>
            <div className="flex items-center gap-16">
              {ROW_TWO_UNIVERSITIES.map((name) => (
                <UniversityWordmark key={name} name={name} />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
