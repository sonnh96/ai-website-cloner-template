# AboutSection Specification

## Overview
- **Target file:** `src/components/sections/AboutSection.tsx`
- **Interaction model:** static (no tabs/carousel).
- White background, full-width section.

## Content
- Eyebrow (font-script, small, green): "Online courses from experts."
- Secondary small eyebrow/badge line just above H1, styled like a stamp: "Guaranteed & certified" (reuse same eyebrow style as Hero, with the circular "CERTIFIED" stamp badge image `/images/kadu/2024/05/kd-a1-certified.webp` positioned near it — this stamp graphic is a rotating/decorative circular badge, absolutely positioned overlapping the image group).
- H1 heading (font-black, ~40-48px, dark `text-kd-heading`, with the last two words in `text-kd-primary` green): "Online Learning Wherever " + "And" (line break) + "Whenever." — render as two lines: "Online Learning Wherever" (dark) then "And Whenever." (green, or verify color split from screenshot — the screenshot shows "Online Learning Wherever" in dark and "And Whenever." in green on the next line).
- Body paragraph: "We don't just work with concrete and steel. We work with people, with even our highest work work with concrete and steel. We work with people **We are Approachable**"
- Two feature checklist items (icon: green CheckCircleIcon in a circle badge, bold label):
  - "Top Instructors"
  - "6,000 Membership" (label might actually be "Online Membership" — use "6,000+ Membership" as the stat-style label, verify against screenshot which showed two checkmark rows with partial text "T...", "6...")
- Stat callouts near the image group (small white rounded cards overlapping the photos): "3020 Online Courses" and "€ Online Certifications" (verify — likely "3020+ Online Courses" and a certifications count; render as two small stat badges).
- Image group (layered, right side on desktop): main photo `/images/kadu/2024/05/kd-a1-img-1.webp`, secondary smaller circular photo `/images/kadu/2024/05/kd-a1-img-2.webp` overlapping bottom-left of the main photo, small decorative accents `kd-a1-img-3.webp` through `kd-a1-img-6.webp` scattered around (dots/plus/sparkle graphics — check each file visually via `public/images/kadu/2024/05/` and place as absolutely-positioned decorative layers, largest as background blob shape, smallest as accent dots).
- Small floating avatar-group graphic near the bottom of the image group implying "trusted by students" (two overlapping circular avatar placeholders) — if no dedicated asset matches, reuse `kd-a1-img-2.webp`/`kd-a1-img-3.webp` as circular avatar crops via `rounded-full object-cover`.

## Layout
- Desktop: text content left (~55%), layered image group right (~45%).
- Mobile: stack, image group above or below text, reduce decorative layers to avoid clutter (still render at least the main + secondary photo).

## Notes
- This section reuses the Primary Pill Button pattern is NOT present here (no CTA button confirmed in extraction) — do not invent one.
