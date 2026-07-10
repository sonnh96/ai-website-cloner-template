# UniversitySection Specification

## Overview
- Target file: `src/components/home/UniversitySection.tsx`
- Screenshot reference: white background, centered maroon heading "HỆ THỐNG TRƯỜNG ĐẠI HỌC", below a world map graphic (gray landmass, 4 regions highlighted maroon: North America, UK/Ireland, East Asia, Australia — each with a numbered circular pin 1-4), then directly below the map a full-width maroon bar containing the subheading "CÁC TRƯỜNG ĐẠI HỌC HÀNG ĐẦU THẾ GIỚI" (left) and "Chọn khu vực:" + 4 numbered circular region-select tabs + prev/next chevron arrows (right).
- **Interaction model: CLICK-driven.** Clicking a numbered region tab (1-4) sets the active region (`useState`). The live site's map pins are also clickable and highlight the corresponding tab. **Simplification for this build:** the original renders a full interactive SVG world map with precise country paths and a university-logo carousel per region — that level of geographic fidelity is out of scope. Build a simplified but visually consistent version: a static world-map illustration (use a simple representative image/gradient block or an abstract silhouette — a plain `bg-muted rounded-lg` panel with the 4 numbered pins positioned via `absolute` at approximate percentage coordinates is acceptable) with the region tabs fully functional (clicking changes `activeRegion` state and updates the displayed region label below).

## DOM structure
`<section className="py-16 md:py-24 bg-white text-center">`, container `max-w-[1170px] mx-auto px-6`:
- `<h2>` heading, maroon, uppercase bold `font-heading text-3xl md:text-4xl mb-10`
- Map area: `relative bg-muted/40 rounded-lg h-[320px] md:h-[420px] mb-0 overflow-hidden` — inside, 4 numbered pin buttons (`absolute w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold border-2 border-white shadow`) positioned roughly: pin 1 (North America) `left-[28%] top-[35%]`, pin 2 (UK/Ireland) `left-[48%] top-[30%]`, pin 3 (Asia) `left-[68%] top-[38%]`, pin 4 (Australia) `left-[68%] top-[68%]`. Clicking a pin also sets the active region.
- Region bar: `bg-primary text-white px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-left`:
  - Left: `<h3>` subheading (`content.university.subheading`), bold uppercase `text-lg md:text-xl`
  - Right: `content.university.selectAreaLabel` text + 4 circular number buttons (`w-8 h-8 rounded-full flex items-center justify-center font-bold`, active = `bg-white text-primary`, inactive = `border border-white/60 text-white`) + prev/next chevron arrow buttons on the far left/right edges of this bar (`absolute` or flex `justify-between` wrapping the whole bar)

Below the bar (optional but recommended for completeness): show `content.university.regions[activeIndex].label` as a small caption confirming the selected region name, since we don't have the actual per-region university logo list from extraction.

## Content
`content.university` = `{ heading, subheading, selectAreaLabel, regions: [{id, label}] }` (4 regions).
```tsx
"use client";
export function UniversitySection({ content }: { content: HomeContent["university"] }) { ... }
```

## Responsive
- Desktop (1440px): as described.
- Tablet (768px): map height ~300px, region bar wraps if needed.
- Mobile (390px): map height ~220px, region bar stacks vertically (subheading on top, region selector row below, centered).
