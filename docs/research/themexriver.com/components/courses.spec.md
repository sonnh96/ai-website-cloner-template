# CoursesSection Specification

## Overview
- **Target file:** `src/components/sections/CoursesSection.tsx`
- **Interaction model:** click-driven tabs (3 category tabs) — each tab's panel contains a horizontal scroll-snap carousel of course cards (see shared-tokens.md for both patterns). Use `useState<'webdev'|'marketing'|'it'>` for active tab, cross-fade panel content on switch (`transition-opacity`).
- White/light background section.

## Content
- Eyebrow (font-script, green): "Get To Know Us"
- H1 heading (font-black, dark, ~40px): "Most Popular Courses"
- Tab buttons (bold uppercase small, active tab gets underline or pill-highlight — verify style from screenshot, default: active = dark bg pill, inactive = plain text): "Web Development" (active by default), "Marketing", "IT & Technology"
- Below the carousel: helper line "We Help Your find the prefect tutor. it's completely free. **Explore all Courses**" (last part is a bold link) — shown once per tab panel, centered.

## Course card content (real, from source — reuse across tabs, since source data doesn't cleanly separate by tab; distribute reasonably, ~5 cards per tab or reuse the same 5 cards in each tab — this WordPress demo doesn't have per-tab filtering, so it's acceptable to show the same course set in every tab):
Each card: photo, price pill badge (top-right corner, white rounded pill, bold — "Free" or "$NN"), title (bold, 2-line clamp), meta row with two icons+labels ("N Lessons", "N Week(s)"), short description line, instructor row (small circular avatar + "posted by Marina Valentine"), student count ("N Students").

1. price "$15", title "Graphic Design Master Class Learn GREAT", 1 Lesson, 1 week, 3 Students
2. price "$59", title "Become a Certified Web Developer: HTML,", 1 Lesson, 1 week, 0 Students
3. price "Free", title "Pixel Art Mastery Course: Beginner To", 0 Lessons, 0 week, 59 Students — use `/images/kadu/2024/06/design-400x235.webp` or similar as placeholder photo
4. price "$139", title "100 Days Of Code – 2024", 0 Lessons, 0 week, 0 Students
5. price "$29", title "The Full Stack Web Development MERN", 0 Lessons, 0 week, 0 Students
6. price "$49", title "IT Fundamentals – Everything you need", 0 Lessons, 0 week, 0 Students
7. price "$29", title "Digital Marketing Masterclass + AI and", 0 Lessons, 0 week, 0 Students
8. price "Free", title "Graphic Design Master Class – Learn", 0 Lessons, 0 week, 14 Students
9. price "Free", title "The Complete Graphic Design Theory for", 0 Lessons, 0 week, 16 Students
10. price "$89", title "Full Stack Web Dev with React", 0 Lessons, 0 week, 0 Students

For photos, use these downloaded images round-robin across the cards (real site images for this exact section weren't individually mapped 1:1 during extraction — use these education/tech-themed photos already downloaded): `/images/kadu/2024/06/design-400x235.webp`, `/images/kadu/2024/06/design-1-400x235.webp`, `/images/kadu/2024/06/development-400x235.webp`, `/images/kadu/2024/06/digital-marketing-400x235.webp`, `/images/kadu/2024/06/it0-400x235.webp`, `/images/kadu/2024/06/program-400x235.webp`, `/images/kadu/2024/06/soft-400x235.webp`, `/images/kadu/2024/06/education-400x235.webp`, `/images/kadu/2024/06/creativity-ideas-design-thought-bubble-icon-concept-400x235.webp`. Instructor avatar: use a generic neutral placeholder circle (no real avatar asset was downloaded for this section — render initials-based avatar fallback, e.g. a gray circle with "MV" or just a `UserIcon`-style circle, do not invent a stock photo path that doesn't exist).

## Layout
- Desktop: heading centered top, tab row centered below, then card carousel (peek-next-card style, ~3.2 cards visible).
- Mobile: tabs scrollable row if they overflow; cards single-column carousel.
