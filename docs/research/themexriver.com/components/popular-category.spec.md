# PopularCategorySection Specification

## Overview
- **Target file:** `src/components/sections/PopularCategorySection.tsx`
- **Interaction model:** horizontal scroll-snap carousel (see shared-tokens.md), Prev/Next arrow buttons.
- White background section, follows directly after Hero's wave transition.

## Content
- Eyebrow (font-script, small, green/dark color, sparkle icon before): "Online Classes"
- H2 heading (font-black, ~40px): "Popular " + "Category" (the word "Category" is highlighted in `text-kd-primary` green, rest in `text-kd-heading` dark gray)
- Body copy under heading (kd-paragraph gray): "We don't just work with concrete and steel. **We are Approachable**" (short, 1-2 lines)
- Primary pill button below heading (has-black variant — dark bg default): "Find Out More"
- 4 category cards (each repeats twice in the live carousel loop — build 4 unique cards, duplicate list is just carousel-loop padding, not distinct content):
  1. Icon `/images/kadu/2024/06/pc-1-icon-1.webp`, label "Digital Marketing"
  2. Icon `/images/kadu/2024/06/pc-1-icon-2.webp`, label "IT & Software"
  3. Icon `/images/kadu/2024/06/pc-1-icon-3.webp`, label "Art & Humanities"
  4. Icon `/images/kadu/2024/06/pc-1-icon-4.webp`, label "Web Development"
- Each card has a light gray rounded-blob background shape behind the icon (`/images/kadu/2024/06/pc-1-shape-1.webp`), the icon centered on top, and the category label rendered as a small dark pill/badge below the icon (rounded-full, dark navy bg `#22335a`-ish, white text — sample exact color from screenshot if possible, else use `bg-kd-heading`).
- Small sparkle/plus icon accents between cards (decorative, use a simple lucide `Sparkle`-style icon or a small inline SVG star — cosmetic only).

## Layout
- Desktop: heading+copy+button on the left (~30% width), 4 cards flowing right in a horizontal row (~70% width, scrollable/carousel).
- Mobile: heading block stacks above, cards become a horizontally scrollable row (full width, snap-x).

## States
- Card hover: subtle lift (`hover:-translate-y-1 transition-transform`) — verify/adjust to taste, no exact value extracted.
