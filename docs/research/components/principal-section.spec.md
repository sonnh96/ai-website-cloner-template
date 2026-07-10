# PrincipalSection Specification

## Overview
- Target file: `src/components/home/PrincipalSection.tsx`
- Screenshot reference: maroon/dark-red textured background (campus photo desaturated + maroon overlay), 2-column layout — photo of the Head of School on the left, heading + 3 paragraphs of white text on the right with a large decorative quote-mark glyph.
- Interaction model: static.

## DOM structure
`<section>` `bg-cis-red` (maroon `#8a0304`) with a subtle background image (the site uses `bg-sec2.jpg`, a dark textured campus photo blended under the maroon color — approximate with `bg-primary` solid color; optionally layer a very low-opacity building silhouette, but a solid maroon background is an acceptable simplification), `py-16 md:py-24`.

Container `max-w-[1170px] mx-auto px-6`, `grid grid-cols-1 md:grid-cols-2 gap-12 items-center`:
- Left: photo (`content.principal.photoSrc`), portrait aspect ratio, framed with the red corner-bracket SVG decoration top-left and bottom-right (2 small L-shaped brackets, white stroke this time since bg is dark — use `stroke="#fff"`), `rounded-none`, `object-cover`, roughly `500px` tall desktop.
- Right: 
  - `<h2>` heading, white, uppercase, bold, `font-heading text-3xl md:text-4xl` (computed: 40px/48px line-height desktop)
  - Large decorative `"` quote glyph (just render literal `“` character or use `/images/asset/ic-quote-base.svg`), maroon-tinted or white/10 opacity, positioned above the paragraphs
  - 3 `<p>` paragraphs, white, `font-sans text-lg font-semibold leading-relaxed` (computed: 18px/25px, weight 600), stacked with `space-y-4`

## Content
`content.principal` = `{ heading, paragraphs: string[], photoSrc }`.
```tsx
export function PrincipalSection({ content }: { content: HomeContent["principal"] }) { ... }
```

## Assets
`/images/staticpage/principal.jpg` (portrait photo of the Head of School)

## Responsive
- Desktop (1440px): 2-column grid as described.
- Tablet (768px): 2-column but tighter gap, or stack if it feels cramped — use `md:grid-cols-2` so tablet ≥768px keeps 2 columns, gap reduces to `gap-6`.
- Mobile (390px): single column, photo on top (`order-1`), text below (`order-2`), photo height ~320px, heading `text-2xl`.
