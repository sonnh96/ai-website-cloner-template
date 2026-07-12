# ChooseUsSection Specification

## Overview
- **Target file:** `src/components/sections/ChooseUsSection.tsx`
- **Interaction model:** static.
- Light background section (white or very light gray), contains a two-column layout: illustration+features on the left, a 2×2 service-card grid on the right.

## Content
- Eyebrow (font-script, green): "Get To Know Us"
- H1 heading (font-black, dark, with "Quiklearn" possibly in green — verify, default dark): "Don't Know How To Start Quiklearn Courses"
- Body paragraph: "We don't just work with concrete and steel. We work with people **We are Approachable**, with even our highest work"
- Illustration image: `/images/kadu/2024/05/education-400x235.webp` is unrelated — instead the real illustration referenced in extraction was a flat-design "person at computer with graduation cap" graphic; no single dedicated file was isolated for it distinctly from the About section assets. Use `/images/kadu/2024/06/c-us-1-img-1.webp` as the primary illustration/photo for this section's left column (it's the closest matching asset downloaded from the adjacent `c-us-1` asset family), with `/images/kadu/2024/06/c-us-1-icon-1.webp` and `c-us-1-icon-2.webp` as small floating accent icons around it, and `/images/kadu/2024/06/c-us-1-bg-shape-1.webp` as a soft background blob behind the illustration.
- Two feature rows below the illustration (icon left, text right):
  1. "Skilled Lecturers" — "Awesome hexagon themed stream pack, you can change hexagon"
  2. "Learn With Effectivey" — "Awesome hexagon themed stream pack, you can change hexagon"
  (No distinct icon assets were isolated for these two rows — use a small green `CheckCircleIcon` or `StarIcon` in a circular badge for both.)
- Primary pill button: "Find Out More"
- 2×2 service card grid (right column), each card: icon image, bold title (repeated exactly as source — do not invent unique titles), description "Awesome hexagon themed stream pack, you can change hexagon stream pack,":
  1. icon `/images/kadu/2024/05/s1-icon-1.webp`, title "Arts & Design"
  2. icon `/images/kadu/2024/05/s1-icon-3.webp`, title "Arts & Design"
  3. icon `/images/kadu/2024/05/s1-icon-2.webp`, title "Health & Fitness"
  4. icon `/images/kadu/2024/05/s1-icon-4.webp`, title "Health & Fitness"
  Cards: white bg, rounded-2xl, soft shadow (`shadow-[0_0_15px_rgba(0,0,0,0.08)]`), icon top, title bold, description gray small text.

## Layout
- Desktop: ~50/50 two columns.
- Mobile: stack illustration+features above the 2×2 card grid (grid can stay 2 columns even on mobile, cards are compact).
