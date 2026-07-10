# TestimonialsSection Specification

## Overview
- **Target file:** `src/components/testimonials-section.tsx`
- **Interaction model:** click-driven carousel (Swiper.js on live site). Use the shared `Carousel` primitive at `@/components/carousel` (`arrowVariant="circle"`), but note the arrow buttons sit at the far left/right edges of the whole section (vertically centered), not below the content like the other carousels — pass `arrowClassName` to reposition, or wrap the `Carousel` output in a custom flex layout with the prev/next buttons absolutely positioned at `left-4`/`right-4` `top-1/2 -translate-y-1/2` if the primitive's default layout doesn't support that placement (acceptable to render the arrows manually here instead of using the primitive's built-in arrow row, while still reusing its slide/index state — read `src/components/carousel.tsx` first to decide the cleanest approach).

## Content — 3 slides, use verbatim, centered, large quote text (~28-32px, `text-tas-navy font-heading`, centered, `max-w-3xl mx-auto`)

1. Quote: "I joined TAS in my junior year, and the supportive teachers and welcoming community made a lasting impact. Through MUN with Mr. David, I gained confidence, leadership, and teamwork skills. What I value most is the strong sense of community where I always felt seen and supported."
   Name: **Khanh Nguyen Jennifer** — Class of 2025

2. Quote: "I've studied at TAS for 7 years, and the teachers, especially Mr. Reede, Mr. Taka, and Mr. Andrew, have supported me far beyond academics. When choosing a university, I relied on alumni feedback for real insights. I committed to ASU and have no regrets!"
   Name: **Samuel Nguyen** — Class of 2025

3. Quote: "TAS transformed me from a shy, insecure student into someone confident in expressing myself through both English and art, thanks to the support of inspiring teachers and a community that always believed in me."
   Name: **Yeji Lee** — Class of 2025

## Layout per slide
Centered column: quote text (with curly quote marks as shown above), then a circular avatar photo (~56px, `rounded-full object-cover`) + name (bold navy) + "Class of 2025" (gray, smaller) stacked/centered below the quote.

## Assets
Use real downloaded student/graduation photos from `public/images/` as avatar stand-ins (crop to a circle) — e.g. files with "Graduation" or general student portraits already downloaded; do not use generic silhouette placeholders since real campus photography is available.

## Verification
Run `npx tsc --noEmit`.
