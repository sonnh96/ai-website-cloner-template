# VisionMissionSection Specification

## Overview
- **Target file:** `src/components/vision-mission-section.tsx` (client component — uses `useScrollReveal` hook)
- **Screenshot reference:** section titled "Empowering Students to Thrive in a Supportive Environment"
- **Interaction model:** scroll-driven fade-in reveal (see below) — use the existing hook `src/hooks/use-scroll-reveal.ts` (`useScrollReveal<HTMLDivElement>()`) which returns a ref; attach it to the section's inner wrapper and add the `scroll-reveal` class (defined in `globals.css`, toggles to `.is-visible` automatically via the hook). Do not reimplement IntersectionObserver logic — the hook already does it.

## DOM structure
2-column layout on desktop (`grid md:grid-cols-2 gap-16 items-start`), stacks to 1 column on mobile. Faint repeating wavy-line SVG watermark sits behind the whole section (`public/images/*wave-1920*.svg`, tiled/absolutely positioned, very low opacity, `-z-10`).

- **Left column:** single image (students in blazers walking) — use `public/images/*Day1_UNISMUN-066*.webp` (largest non-thumbnail variant) as a stand-in for the "students walking" photo if no closer match exists; `aspect-[4/3] object-cover rounded-md`.
- **Right column, stacked vertically:**
  1. Eyebrow line: "Empowering Students to Thrive in a Supportive Environment" — small, `text-tas-navy`, `font-light`, ~18px.
  2. Intro paragraph: "The American School fosters the growth of the whole child in a multicultural environment aligned with American educational models." — `text-tas-ink` body copy, ~16-17px, justified/wide line-length.
  3. "Our Vision" — heading, `font-heading` (Inter Tight), `font-medium`, ~28px, `text-tas-navy`.
  4. Vision paragraph: "To be a passionate and internationally inspired organization that is dynamic and evolving, where all members are supported in realizing their unique potential and all students may pursue endeavors beyond the classroom, while consolidating its position as an institution recognized both regionally and internationally as a school of academic excellence." — body copy `text-tas-ink`.
  5. "Our Mission" — same heading style as Vision, but **indented further right** relative to "Our Vision" (screenshots show it offset ~3-4rem to the right of the Vision heading — use `ml-12` or similar on this block only).
  6. Mission paragraph: "The American School educates the whole child in a multicultural environment aligned with educational models in support of individualized pathways. We nurture individual abilities to produce creative confident, and critical thinkers who are self-aware, socially conscious, and prepared for an ever-changing society." — same indent as its heading.

## Scroll-reveal behavior (exact)
- **Trigger:** IntersectionObserver, threshold ~0.2, fires once when section scrolls into view (confirmed: content is visibly pale/desaturated above the fold and ramps to full color/opacity as you scroll it into the viewport).
- **Before:** `opacity: 0; translateY(20px)` (approximate faded state — live site shows very low-contrast pale versions of the navy/ink text colors and a washed-out image, but a straightforward opacity+translateY fade achieves the same visual effect for the clone).
- **After:** full opacity, `translateY(0)`.
- **Transition:** `0.6s ease` (already defined in the `.scroll-reveal` / `.scroll-reveal.is-visible` classes in globals.css — just apply the class + ref from the hook to the outer content wrapper, e.g. wrap the whole right-column content block in one reveal container, and the image in a second reveal container with the same hook for a slight stagger).

## Colors
- Navy heading/eyebrow: `#274e76` (`text-tas-navy`)
- Body ink: `#122b50` (`text-tas-ink`)

## Verification
Run `npx tsc --noEmit`. Confirm `useScrollReveal` import path resolves (`@/hooks/use-scroll-reveal`).
