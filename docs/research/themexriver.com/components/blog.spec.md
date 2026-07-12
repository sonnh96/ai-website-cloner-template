# BlogSection Specification

## Overview
- **Target file:** `src/components/sections/BlogSection.tsx`
- **Interaction model:** static 3-up grid (NOT a carousel).
- Dark teal (`bg-kd-primary`) full-bleed background, white/light card content on top.

## Content
- Eyebrow (font-script, white): "Our Blog"
- H1 heading (font-black, white, with "Events & News" possibly in a lighter/green tint — default white): "Popular Events & News"
- 3 blog cards (white bg, rounded-2xl, overflow-hidden, shadow-lg), each: photo top, then padding with small circular author avatar (generic placeholder — no real avatar asset downloaded, use a simple gray circle) + "Marina Valentine" author name, bold title (2-line clamp), gray excerpt text:
  1. photo `/images/kadu/2024/05/blog-1-400x265.webp`, title "Masters In English How English Speaker", excerpt "Lorem ipsum dolor sit amet consectetur. Morbi nibh porttitor in ut tristique mi at eget."
  2. photo `/images/kadu/2024/05/blog-2-400x265.webp`, title "Building Resilience in Students: Tips for Parents", excerpt "Lorem ipsum dolor sit amet consectetur. Morbi nibh porttitor in ut tristique mi at eget."
  3. photo `/images/kadu/2024/05/blof-400x265.webp`, title "Exploring the Benefits of Bilingual Education", excerpt "Lorem ipsum dolor sit amet consectetur. Morbi nibh porttitor in ut tristique mi at eget."

## Layout
- Desktop: 3-column grid, equal width, gap ~24-32px.
- Mobile: single column stack.
