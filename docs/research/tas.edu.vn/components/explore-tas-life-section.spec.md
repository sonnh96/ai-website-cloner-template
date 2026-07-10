# ExploreTasLifeSection Specification

## Overview
- **Target file:** `src/components/explore-tas-life-section.tsx`
- **Interaction model:** static (video panel is a poster image with a play affordance — do not autoplay; a real `<video>` element with `controls` and the poster image is fine, or a simple styled `<img>` with a centered play button icon overlay if you prefer a lighter-weight static treatment. Either is acceptable since this is homepage decoration, not the primary media focus).

## Content
- Row: eyebrow text **"Explore the TAS Life"** (left, `text-tas-navy font-heading`, ~20px) and a **"See More"** button (right, `bg-tas-navy text-white rounded-[10px] font-bold px-6 py-3`) — `flex items-center justify-between` header row.
- Below: a full-width video/photo panel, `aspect-video rounded-lg overflow-hidden relative`, showing the TAS brand lockup centered: "THE AMERICAN SCHOOL" wordmark + "Developing Academic Excellence and Strength of Character" tagline, white text over a dimmed photo of a teacher/classroom scene, with a circular white play-button icon overlay (`lucide-react` `Play` icon inside a white/20 backdrop-blur circle, `size-16`).

## Assets
- Background photo: use a classroom/teacher photo from `public/images/` (any general campus/classroom photo already downloaded is fine — this is a decorative video-thumbnail treatment).
- Logo/wordmark: reuse the TAS logo asset already used in the header (`public/images/*Logo*` — pick a white variant) for the centered lockup text, or render "THE AMERICAN SCHOOL" as styled serif/heading text directly if a cleaner logo crop isn't available.

## Verification
Run `npx tsc --noEmit`.
