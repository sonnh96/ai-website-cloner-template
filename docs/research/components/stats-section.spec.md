# StatsSection Specification

## Overview
- Target file: `src/components/home/StatsSection.tsx`
- Screenshot reference: full-bleed photo background (campus building + pool), dark overlay for text contrast, centered white uppercase heading "NHỮNG CON SỐ ẤN TƯỢNG", below it 4 columns of huge white numbers with small uppercase labels underneath.
- Interaction model: static (live site may count up on scroll-into-view via `jquery.countup.min.js` — nice-to-have: implement a simple count-up animation using `IntersectionObserver` + `useState`, but a static render is acceptable if time-constrained).

## DOM structure
`<section className="relative py-16 md:py-24 bg-cover bg-center">` with `backgroundImage: url(content.stats.backgroundSrc)`, plus an absolutely-positioned `bg-black/50` overlay div for contrast, content `relative z-10`.

Container `max-w-[1170px] mx-auto px-6 text-center`:
- `<h2>` heading, white, uppercase, bold, `font-heading text-3xl md:text-4xl mb-12`
- `<div className="grid grid-cols-2 md:grid-cols-4 gap-8">`: one block per `content.stats.items[]`:
  - big number row: `<span>` value (e.g. "100") in huge bold white `text-5xl md:text-6xl font-heading`, immediately followed by `<span>` suffix (e.g. "%", "/30.2", "+") in a visually smaller size `text-2xl md:text-3xl align-top`
  - `<p>` label below, white, uppercase, `text-sm md:text-base font-semibold tracking-wide mt-2`

## Content
`content.stats` = `{ heading, items: [{value, suffix, label}], backgroundSrc }` (4 items: pass rate, avg IBDP score, clubs, nationalities).
```tsx
export function StatsSection({ content }: { content: HomeContent["stats"] }) { ... }
```

## Assets
`/images/stats/stats-bg.png` (full-bleed background photo)

## Responsive
- Desktop (1440px): 4-column grid.
- Tablet (768px): 4-column grid, smaller numbers (`text-4xl`).
- Mobile (390px): 2x2 grid (`grid-cols-2`), numbers `text-3xl`.
