# CurriculumSection Specification

## Overview
- **Target file:** `src/components/curriculum-section.tsx`
- **Interaction model:** static cards with hover (subtle scale/shadow lift), each card is a navigation link (not a tab/click-to-switch — verified this is NOT a state-switching interaction).

## Content
- Centered heading: "Comprehensive Curriculum Overview for All Educational Stages" — crimson (`text-tas-crimson`), bold, ~36-40px, `max-w-3xl mx-auto text-center`.
- 4-card row beneath (`grid grid-cols-2 md:grid-cols-4 gap-4`):
  1. **Early** — pill label top-left "Primary Years Programme", photo of a preschooler in a sun hat.
  2. **Elementary** — pill label top-left "Primary Years Programme", photo of a young girl with a red hair bow.
  3. **Middle** — photo of two students in a science lab.
  4. **High** — photo of a student holding a microphone on stage, has a small circular "IB" badge/logo top-right corner.

## Card structure
- Tall aspect image (`aspect-[3/4] object-cover rounded-md`) filling the card.
- Small pill badge top-left on cards 1-2 only (semi-transparent dark bg, small white/gold text, rounded-full, e.g. `absolute top-3 left-3 bg-black/40 text-white text-xs px-3 py-1 rounded-full`) — text "Primary Years Programme".
- Bottom label bar overlapping the image's bottom edge: white/light background box containing the stage name (bold, ~24px, `text-tas-navy`) + a circular arrow-icon button (`ArrowUpRight` from `lucide-react`, navy circle outline, rotates/fills on hover).
- Hover: `hover:scale-[1.02] transition-transform duration-300` on the image, `hover:shadow-lg` on the card.

## Assets
- Use real downloaded photos from `public/images/` — pick 4 distinct people/education-themed photos (search for ones depicting young children, a science-lab scene, and a stage/speaking scene per the descriptions above; if exact matches aren't available reuse the closest general school-life photos already downloaded rather than introducing placeholder gray boxes).

## Colors
- Heading: `#df214d` (crimson)
- Card label text: `#274e76` (navy)

## Verification
Run `npx tsc --noEmit`.
