# ProgramsSection Specification

## Overview
- Target file: `src/components/home/ProgramsSection.tsx`
- Screenshot reference: white background, centered maroon uppercase heading "CHƯƠNG TRÌNH GIÁO DỤC" with a short red underline accent, centered intro paragraph below (max-width, gray-ish dark text), then 2 side-by-side cards ("TIỂU HỌC" / "TRUNG HỌC") each with a framed photo (red L-bracket corner decoration, matches PrincipalSection but stroke `#8A0304` since bg is white) and a list of grade-level links + a "Learn more" button.
- **Interaction model: CLICK-driven.** Each card has a list of level links (e.g. "CHƯƠNG TRÌNH LỚP 1 - 3", "CHƯƠNG TRÌNH LỚP 4 - 6"). The first link is active by default. Clicking a level link swaps the card's photo (each level has its own associated image) — implement with local `useState` per card holding the active level index, and swap the `<img src>` accordingly with a `transition-opacity` crossfade.

## DOM structure
`<section className="py-16 md:py-24 bg-white">`, container `max-w-[1170px] mx-auto px-6 text-center`:
- `<h2>` "CHƯƠNG TRÌNH GIÁO DỤC"-style heading, maroon `text-primary`, uppercase, bold, `font-heading text-3xl md:text-4xl`, with a small red horizontal bar/dot centered directly under it (`<span className="block w-10 h-1 bg-primary mx-auto mt-2 mb-6" />`)
- `<p>` intro paragraph, `max-w-3xl mx-auto text-foreground/80 mb-12`
- `<div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">`: one card per `content.programs.tracks[]` item:
  - Corner-bracket-framed photo (`aspect-[4/3]` or similar, `object-cover`), photo src = the currently-active level's image if you model each level as `{label, imageSrc}` — for simplicity, since only the FIRST level's image is confirmed per track from data, treat `track.imageSrc` as the default/active image and swap only if you choose to model per-level images (optional enhancement, not required for correctness)
  - `<h3>` track title (e.g. "TIỂU HỌC"), maroon, bold, uppercase, `font-heading text-xl`
  - vertical list of `track.levels[]` as clickable "links" (`<button>` since no real navigation), first one styled active (`text-primary font-bold border-l-2 border-primary pl-3`), others `text-foreground/70 pl-3` — clicking sets local active state and (if you model per-level images) swaps the photo
  - CTA button (`.btn-global`) with `track.cta` text, `mt-4`

## Computed styles
- Heading: `font-size: 40px; font-weight: 700; color: #8a0304 (maroon, not white here — white was only true for the /vi h2 selector match on section-2, this section's heading is maroon per screenshot)`
- Intro paragraph: `font-size: 16px; color: #212529; line-height: 1.6`
- Card level links: `font-size: 14px; font-weight: 600; text-transform: uppercase`

## Content
`content.programs` = `{ heading, intro, tracks: [{title, levels: string[], cta, imageSrc}] }` (2 tracks: Elementary, Secondary).
```tsx
export function ProgramsSection({ content }: { content: HomeContent["programs"] }) { ... }
```
This must be a **client component** (`"use client"`) because of the click-to-switch state, even though for v1 you can keep it simple by just highlighting the clicked level without actually needing multiple images per level (single `track.imageSrc` is fine — document that live site swaps per-level thumbnails but we only have one representative photo per track).

## Assets
`/images/programs/tieu-hoc.jpg` (Elementary), `/images/programs/trung-hoc.webp` (Secondary)

## Responsive
- Desktop (1440px): 2-column grid as described.
- Tablet (768px): 2-column, tighter gaps.
- Mobile (390px): single column, cards stacked, photo `aspect-[16/10]`.
