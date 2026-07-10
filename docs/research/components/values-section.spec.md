# ValuesSection Specification

## Overview
- Target file: `src/components/home/ValuesSection.tsx`
- Screenshot reference: white/light background, left-aligned maroon heading "CHÂN DUNG HỌC SINH CIS", below it on the LEFT a vertical stack of 4 square icon-tab buttons (first one is filled solid maroon with a white icon = active state; the other 3 are white/outlined boxes with a maroon icon = inactive state), and on the RIGHT a large 2-photo gallery (2 images side by side, slightly different heights, with thin red corner-bracket accents at the top-right/bottom-left of the gallery block) with the active tab's label as a bold uppercase heading directly above the gallery (e.g. "TỰ DO SÁNG TẠO").
- **Interaction model: CLICK-driven.** Clicking one of the 4 left-side icon tabs sets it active (filled maroon) and swaps the gallery images + label heading on the right. First tab active by default.

## DOM structure
`<section className="py-16 md:py-24 bg-white">`, container `max-w-[1170px] mx-auto px-6`:
- `<h2>` heading, maroon, uppercase bold `font-heading text-3xl md:text-4xl mb-10`
- `<div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8 items-start">`:
  - Left column: `<div className="flex md:flex-col gap-4">`, one button per `content.values.cards[]`:
    - `w-20 h-20 flex items-center justify-center rounded-md transition-colors` — active: `bg-primary` with white icon (use a CSS filter or just swap to a white/inverted icon asset if available, otherwise `brightness-0 invert` filter on the img); inactive: `bg-white border border-border` with the maroon-tinted icon as-is
  - Right column: `<h3>` active card's `label` (bold uppercase `font-heading text-xl mb-4`), then `<div className="flex gap-2">` with 1-2 images from `content.values.gallerySrc` (`object-cover`, e.g. `h-[320px] md:h-[420px] flex-1`) — since only one gallery image is provided per active tab in the data model, rendering a single large image is correct (the live site sometimes shows 2 photos side by side as a collage; a single full-width photo is an acceptable simplification).

## Content
`content.values` = `{ heading, activeLabel, cards: [{icon, label}], gallerySrc }` (4 cards).
```tsx
"use client";
export function ValuesSection({ content }: { content: HomeContent["values"] }) { ... }
```
Use `useState(0)` for the active card index; render `cards[active].label` as the heading and `gallerySrc` as the image (note: current content model has one shared `gallerySrc` for the section — that's fine, just always show it regardless of active tab, OR if you want closer fidelity you may extend nothing further since per-tab images weren't individually captured).

## Assets
`/images/values/icon-1.png`, `/images/values/icon-2.png`, `/images/values/icon-3.png`, `/images/values/icon-1-hover.png`, `/images/values/gallery-tu-do.png` (also available but not required: `gallery-tu-tin.png`, `gallery-tu-hoc.png`, `gallery-tu-dieu-chinh.png` in `public/images/values/` — feel free to wire these as the per-tab gallery image using array index if you want extra fidelity: index 0→gallery-tu-do, 1→gallery-tu-tin, 2→gallery-tu-hoc, 3→gallery-tu-dieu-chinh)

## Responsive
- Desktop (1440px): 2-column (100px icon rail + gallery) as described.
- Tablet (768px): same 2-column layout, gallery height ~360px.
- Mobile (390px): icon tabs become a horizontal row above the gallery (`flex-row` instead of `flex-col`), gallery height ~260px, full width.
