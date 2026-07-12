# VideoCoursesSection Specification

## Overview
- **Target file:** `src/components/sections/VideoCoursesSection.tsx`
- **Interaction model:** click-driven trainer tabs (avatar+name buttons, `useState` active trainer) that swap the visible video-card carousel content; the video cards themselves sit in a horizontal scroll-snap carousel (see shared-tokens.md) with Prev/Next arrows.
- White/light background.

## Content
- Eyebrow (font-script, green): "Video Course"
- H1 heading (font-black, dark): "Online Video Courses"
- Trainer tab buttons (circular avatar + name below/beside, active trainer highlighted with a colored ring or underline):
  1. avatar `/images/kadu/2024/05/vc-author-1.webp`, name "Courtney Henry", role "Behavioral Science" (active by default)
  2. avatar `/images/kadu/2024/05/vc-author-2.webp`, name "Wiliam Kerry", role "WordPress Developer"
  3. avatar `/images/kadu/2024/05/vc-author-3.webp`, name "Smith Henry", role "Graphic Designer"
- Video cards per active trainer (reuse the same 6 downloaded video thumbnails across trainers since source doesn't cleanly separate by tab): each card is a photo with a centered circular play-button overlay (semi-transparent white/blue circle, `PlayIcon` centered, `hover:scale-110 transition-transform`):
  - `/images/kadu/2024/05/vc-img-1.webp`
  - `/images/kadu/2024/05/vc-img-2.webp`
  - `/images/kadu/2024/05/vc-img-3.webp`
  - `/images/kadu/2024/05/vc-img-4.webp`
  - `/images/kadu/2024/05/vc-img-5.webp`
  - `/images/kadu/2024/05/vc-img-6.webp`
  Show ~2-3 per trainer panel (rotate through the 6 images across the 3 trainers, 2 each, or show all 6 per trainer in the carousel — either is faithful since source data isn't tab-filtered).

## Layout
- Desktop: heading centered top, trainer tab row centered below, video card carousel below that (~2.2 cards visible, large cards).
- Mobile: trainer tabs in a scrollable row if needed; video cards single-column carousel.
