# GraduatesSection Specification

## Overview
- **Target file:** `src/components/graduates-section.tsx`
- **Interaction model:** static text/button + time-driven infinite marquee (two rows scrolling opposite directions). Use the shared `Marquee` primitive at `@/components/marquee` (already built).

## Content
- Heading: "Our Graduates Thrive at Top Universities" — large, bold, crimson (`text-tas-crimson`), ~40px, tight line-height (screenshots show it wraps to 3 lines in its column at desktop width: "Our Graduates / Thrive at Top / Universities").
- Paragraph: "Our students have been accepted into some of the most prestigious universities worldwide. Their hard work and dedication are reflected in their remarkable college placements." — `text-tas-ink`.
- Button: "Learn more" — solid crimson, same style as AchievementsSection's button (`bg-tas-crimson text-white rounded-[10px] font-bold px-6 py-3`).
- Layout: heading+paragraph+button in a normal `max-w-3xl` container with standard section padding (`py-20 px-6`), NOT part of the marquee (marquee is full-bleed below/around it — from screenshots the text sits above a full-bleed marquee area with a light gray bg and faint dotted world-map graphic).

## University logo marquee
- Full-bleed section, `bg-tas-surface` (`#f5f5f5`), generous vertical padding (`py-16`), with a faint dotted world-map SVG background (`public/images/*map.svg`, very low opacity, `absolute inset-0 -z-10 opacity-20 object-cover`).
- **Two rows**, each a `<Marquee>`, scrolling **opposite directions** (`direction="left"` for row 1, `direction="right"` for row 2), different speeds (`durationSeconds={35}` and `durationSeconds={45}`) so they don't feel synced.
- Each row contains university logo images spaced with generous gaps (`gap-16` inside the marquee content, each logo `h-10 md:h-12 w-auto object-contain grayscale opacity-70 hover:opacity-100` — screenshots show logos in muted grayscale-ish tone, not full color).
- Universities confirmed present (use downloaded logo assets from `public/images/` — search for filenames containing these keywords; if a specific university's asset isn't found, render its name as styled text using the same serif/sans wordmark treatment as a fallback, do not fabricate a logo image):
  Johns Hopkins University, NYU, USC, Yonsei University, Osaka University, Cornell University, The University of Sydney, SHMi (Swiss Hospitality Management Institute), Fordham University, Tulane University, RMIT University.
- Downloaded candidate files to check first: `public/images/*sydney*`, `public/images/*uni2*`, `public/images/*uni3*`, `public/images/*logo3*`, `public/images/*logo5*`, `public/images/*5NarrowLogo*` — inspect each (they may be SVGs/PNGs of specific university marks) and assign to the closest matching university by opening/eyeballing filenames; distribute the rest across the two rows in the order listed above, roughly split in half per row.

## Verification
Run `npx tsc --noEmit`. `ls public/images/` first to confirm exact filenames before importing.
