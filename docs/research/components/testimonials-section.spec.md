# TestimonialsSection Specification

## Overview
- Target file: `src/components/home/TestimonialsSection.tsx`
- Screenshot reference: white background, centered maroon uppercase heading "CẢM NHẬN CỦA PHỤ HUYNH VÀ HỌC SINH". Below: a large opening-quote glyph on the far left and closing-quote glyph on the far right (light red/pink outline style quote marks, decorative), between them a centered italic quote paragraph (dark gray text), below that the attribution line ("Chia sẻ của phụ huynh CIS " in dark + the person's name in bold red, with a short red underline beneath the name). Below the quote block: a row of small pagination dots (5 dots, first one solid red/larger, rest gray outline).
- **Interaction model: CLICK-driven carousel.** Clicking a pagination dot switches to that testimonial (crossfade). We only have 2 real testimonials extracted per locale (live site has ~5 slides in a swiper carousel we couldn't fully extract) — render as many dots as `content.testimonials.items.length` (2), cycling through them; do not fabricate placeholder dots beyond the real item count.

## DOM structure
`<section className="py-16 md:py-24 bg-white text-center">`, container `max-w-[900px] mx-auto px-6`:
- `<h2>` heading, maroon, uppercase bold `font-heading text-2xl md:text-3xl mb-10`
- `<div className="relative">`:
  - Quote block for the active item (`useState` index, default 0): large decorative `“` glyph absolutely positioned top-left (`text-6xl text-primary/20 font-serif absolute -left-4 -top-4` or use `/images/asset/ic-quote-base.svg`), mirrored `”` glyph bottom-right (`/images/asset/ic-quote-base-2.svg`)
  - `<p>` quote text, italic, `text-lg md:text-xl text-foreground/90 leading-relaxed px-8`
  - `<p>` attribution: split `name` on the person's actual name if easy, otherwise render the whole `name` string with the last word(s) in `text-primary font-bold` — simplest correct approach: render the full `name` string as-is in `mt-6 font-medium`, with a `<span className="text-primary font-bold border-b-2 border-primary">` wrapping just the trailing proper-noun name if you can reasonably split it (e.g. split on last 2 words), otherwise render the full line un-split — either is acceptable.
- Pagination dots row: `flex items-center justify-center gap-2 mt-8` — one `<button>` per item, active = `w-3 h-3 rounded-full bg-primary`, inactive = `w-2.5 h-2.5 rounded-full border border-muted-foreground/40`

## Content
`content.testimonials` = `{ heading, items: [{quote, name}] }`.
```tsx
"use client";
export function TestimonialsSection({ content }: { content: HomeContent["testimonials"] }) { ... }
```

## Assets
`/images/asset/ic-quote-base.svg`, `/images/asset/ic-quote-base-2.svg` (optional decorative quote marks — a plain typographic `“`/`”` character is also acceptable and simpler)

## Responsive
- Desktop (1440px): as described, `max-w-[900px]`.
- Tablet (768px): same, `px-6` container padding.
- Mobile (390px): quote text `text-base`, decorative glyphs smaller or hidden if they crowd the text, dots remain.
