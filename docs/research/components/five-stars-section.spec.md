# FiveStarsSection Specification

## Overview
- Target file: `src/components/home/FiveStarsSection.tsx`
- Screenshot reference: solid navy (`#282664`) background with a large, subtle lighter-navy circular/swirl vector watermark bleeding off the right edge. Centered white uppercase heading "TRƯỜNG QUỐC TẾ 5 SAO - 5 STARS". Below: 5 bordered outline cards (white 1px border, transparent bg) arranged 3 across the top row, 2 across the second row (centered), each containing a white icon, bold uppercase title, and a short description paragraph.
- Interaction model: static (no hover effects observed beyond a possible subtle border-brighten on hover, optional).

## DOM structure
`<section className="relative py-16 md:py-24 overflow-hidden bg-cis-navy">`:
- Decorative background image `/images/home/vector-section-4.png` (`absolute right-0 top-0 h-full opacity-40 pointer-events-none`, hidden or swapped for `/images/home/vector-section-4-mb.png` on mobile)
- Container `max-w-[1170px] mx-auto px-6 relative z-10 text-center`:
  - `<h2>` heading, white, uppercase, bold, `font-heading text-3xl md:text-4xl mb-12`
  - `<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">`: 5 cards, each:
    - `border border-white/60 rounded-none p-8 flex flex-col items-center text-center gap-4`
    - icon image (`card.iconSrc`), white/monochrome, `w-16 h-16`
    - `<h3>` title, white, bold, uppercase, `font-heading text-lg`
    - `<p>` description, white/80, `text-sm leading-relaxed`

Note: with 5 cards in a 3-column grid, the last 2 cards will naturally wrap to a second row of 2 — that matches the live layout (3 top, 2 bottom centered). If you want the bottom row visually centered rather than left-aligned, wrap the last 2 in a separate flex row centered with `justify-center` instead of relying on grid wrap, OR use a `lg:grid-cols-3` grid for the first 3 and a second `grid grid-cols-2 max-w-[66%] mx-auto` for the last 2. Either approach is acceptable.

## Computed styles
- Heading: `font-size: 32px+ bold uppercase white` (matches other section headings, `text-3xl md:text-4xl`)
- Card border: `1px solid rgba(255,255,255,0.5)`
- Card title: bold uppercase white ~`18px`
- Card description: white with reduced opacity, `14px`, `line-height: 1.5`

## Content
`content.fiveStars` = `{ heading, cards: [{title, description, iconSrc}] }` (5 cards: Star Students, Star Teachers & Coaches, Star Facilities, Star Parents, Star Programs).
```tsx
export function FiveStarsSection({ content }: { content: HomeContent["fiveStars"] }) { ... }
```

## Assets
`/images/home/vector-section-4.png`, `/images/home/vector-section-4-mb.png` (decorative watermark), `/images/five-stars/star-students.png`, `/images/five-stars/star-teachers.png`, `/images/five-stars/star-facilities.png` (reuse student/teacher icons for the Parents/Programs cards per content data — acceptable since live site content for those 2 extra cards uses generic iconography not individually captured).

## Responsive
- Desktop (1440px): 3-col grid, 5 cards (3+2).
- Tablet (768px): 2-col grid.
- Mobile (390px): 1-col stacked, watermark image swapped to the `-mb` variant, reduced opacity or size.
