# NewsSection Specification

## Overview
- Target file: `src/components/home/NewsSection.tsx`
- Screenshot reference: white background, left-aligned maroon uppercase heading "TIN TỨC & SỰ KIỆN SẮP TỚI" with a short horizontal red rule to its right (decorative line filling remaining width), then a 2-column layout: large featured news card (photo + red tag pill "Tin tức" + date + bold title + "Đọc thêm" link) on the left (~45% width), a list of 4 more news rows on the right (each: red-outline tag pill + date on one line, bold uppercase-ish title below, thin divider line under each row). Bottom-right: "Khám phá thêm" link with a chevron.
- Interaction model: static list (live site paginates/loads more via CMS — out of scope, render the 5 items we have).

## DOM structure
`<section className="py-16 md:py-24 bg-white">`, container `max-w-[1170px] mx-auto px-6`:
- Heading row: `flex items-center gap-4 mb-10` — `<h2>` (`text-primary font-heading uppercase text-2xl md:text-3xl whitespace-nowrap`) + `<span className="h-px bg-primary/30 flex-1" />`
- `<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">`:
  - Left: featured card — image (`featured.imageSrc`, `aspect-[16/10] object-cover`), below it (or overlaid bottom like a caption bar per screenshot — the tag+date+title sit in a dark-red bar directly under the image, no gap) a `bg-primary text-white p-6` block containing: tag pill (`bg-white/20 text-white text-xs uppercase px-3 py-1 rounded-full inline-block mb-2` + date next to it), bold title (`font-heading text-lg md:text-xl mt-2`), "Đọc thêm" link (`underline text-sm mt-4 inline-block`)
  - Right: `<div className="divide-y divide-border">`, one row per `content.news.items[]`: `py-4` containing tag pill (outlined, `border border-primary text-primary text-xs uppercase px-3 py-1 rounded-full inline-block`) + date (`text-muted-foreground text-sm ml-3`), then bold title below (`font-heading text-base mt-2`)
- Bottom-right: `<a>` "Khám phá thêm" (`content.news.exploreMoreCta`) with a right-chevron, `text-primary font-semibold flex items-center gap-1 justify-end mt-6`

## Content
`content.news` = `{ heading, featured: {tag, date, title, imageSrc, cta}, items: [{tag, date, title, cta}], exploreMoreCta }`.
```tsx
export function NewsSection({ content }: { content: HomeContent["news"] }) { ... }
```

## Assets
`/images/news/news-featured.jpeg`

## Responsive
- Desktop (1440px): 2-column as described.
- Tablet (768px): 2-column, tighter gap.
- Mobile (390px): single column, featured card first, list below, full width.
