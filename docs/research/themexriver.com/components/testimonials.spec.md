# TestimonialsSection Specification

## Overview
- **Target file:** `src/components/sections/TestimonialsSection.tsx`
- **Interaction model:** horizontal scroll-snap carousel (see shared-tokens.md), Prev/Next arrows.
- Light background section with two decorative photo tiles near the heading.

## Content
- Eyebrow (font-script, green): "testimonial"
- H1 heading (font-black, dark): "What Students Have To Say"
- Body copy: "We don't just work with concrete and steel. We work with people, with even our highest work **We are Approachable**"
- Decorative photo tiles near the heading (small, rounded, offset/overlapping): `/images/kadu/2024/05/t1-img-1.webp`, `/images/kadu/2024/05/t1-img-2.webp`
- 2 testimonial cards (each: large `QuoteIcon` accent, 5-star rating row using `StarIcon` × 5 filled orange, quote text, circular avatar + name + role):
  1. quote: "Awesome hexagon themed stream pack, you can change hexagon stream pack Awesome stream pack, you can" — avatar `/images/kadu/2024/05/t1-author-1.webp`, name "Millon Zahino", role "Behavioral Science"
  2. same quote text — avatar `/images/kadu/2024/05/t1-author-1.webp` (reuse, only one author photo was downloaded), name "Jalima Kargis", role "Behavioral Science"
- Small decorative star accent: `/images/kadu/2024/05/star-3.webp` near the rating row.

## Layout
- Desktop: heading block centered/left, carousel of cards below (~2 cards visible side by side, white rounded-2xl cards with soft shadow).
- Mobile: single-column carousel, one card at a time.
