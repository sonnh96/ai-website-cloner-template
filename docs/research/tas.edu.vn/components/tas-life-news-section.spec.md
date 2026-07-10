# TasLifeNewsSection Specification

## Overview
- **Target file:** `src/components/tas-life-news-section.tsx`
- **Interaction model:** click-driven carousel (Swiper.js on live site). Use the shared `Carousel` primitive at `@/components/carousel` (`arrowVariant="circle"`).

## Content — 4 slides, use verbatim
1. **EXPERIENTIAL LEARNING – EXPLORING TRADITIONAL ARTS** — "Recently, our Kindergarten and Elementary students embarked on an exciting field trip that offered both cultural and recreational engagement."
2. **A JOURNEY INTO THE WORLD OF VAN GOGH AND MONET** — "Our Grade 3 students recently embarked on an inspiring field trip to the Van Gogh Lighting Experience at Thisomall, where art was brought to life through cutting-edge projection technology."
3. **A LOOK BACK AT TẾT FAIR 2025 - BẬT TAS BỪNG TẾT** — "The vibrant spirit of Lunar New Year filled TAS, transforming our campus into a lively celebration of spring and culture."
4. **MUSTANGS LEARNING BEYOND THE CLASSROOM** — "Our high school students recently embarked on an engaging and educational field trip to Cần Giờ. This trip offered a wonderful opportunity to enjoy fresh air, immerse in nature, and explore wildlife conservation areas."

Titles render in ALL CAPS bold navy (`text-tas-navy font-bold uppercase tracking-wide`), excerpt in gray body text below.

## Card layout
Image on top (`aspect-video object-cover rounded-md`) + title + excerpt below (NOT overlaid on the image — unlike BlogCarouselSection, this carousel's text sits in plain white space beneath the photo, per screenshots). Arrange as a `grid md:grid-cols-2 gap-8` per slide if pairing 2 cards per view reads closer to the source, otherwise 1 large card per slide — either is acceptable; prioritize matching the card's own internal layout (image-then-text-below) over exact per-view count.

## Assets
Use real downloaded Facebook-sourced campus photos from `public/images/` (files with long numeric names like `482027480_...jpg`, `480921510_...jpg`, `474813387_...jpg`, `474800444_...jpg` — these are the actual TAS Life news photos scraped from the live site; assign them across the 4 slides in any reasonable order).

## Verification
Run `npx tsc --noEmit`. Import `Carousel` from `@/components/carousel`.
