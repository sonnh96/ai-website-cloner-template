# FacilitiesSection Specification

## Overview
- **Target file:** `src/components/facilities-section.tsx`
- **Interaction model:** static asymmetric gallery grid.

## Content — header row
- Eyebrow/heading: "Explore Our Exceptional Facilities" — `text-tas-navy font-heading`, ~18-20px eyebrow style matching other section eyebrows.
- Paragraph (right-aligned column on desktop, 2-col split with the eyebrow on the left): "The new TAS campus, completed in 2020, offers outstanding facilities for students from Pre-Nursery to Grade 12. Designed to support significant growth, the campus has a capacity of over 2,000 students, eliminating the need for major future construction projects." — `text-tas-ink`.
- Button: "Learn more" — navy outline or solid navy button (`bg-tas-navy text-white rounded-[10px] font-bold px-6 py-3`) placed under the eyebrow on the left.

## Gallery grid (asymmetric masonry, use CSS grid with explicit spans)
Reproduce this arrangement (desktop, left-to-right / top-to-bottom):
- Row 1: building exterior photo (wide) | "100+ Classrooms" navy stat card | students-walking photo (tall, spans 2 rows down the right side)
- Row 2: golf-simulator photo (small) | library/media-center photo (small, continues under classrooms card) | (students photo continues spanning)
- Row 3: "25,000 m² Total Campus Area" crimson stat card | graduation-ceremony photo | "2000+ Student Capacity" light stat card

Simplify to a responsive grid: `grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]` with explicit `md:col-span-*`/`md:row-span-*` utility classes per item to approximate the asymmetric layout above — exact pixel match is not required, but preserve: (a) stat cards alternate navy/crimson/light tones, (b) at least one photo spans multiple rows taller than its neighbors, (c) 8 total cells (3 photos + 3 stat cards + 2 more photos = 8 items per the screenshots).

## Stat card content (exact text)
1. "100+" / "Classrooms" — `bg-tas-navy text-white`
2. "25,000 m2" / "Total Campus Area" — `bg-tas-crimson text-white` (render "m²" with a proper superscript 2 or the literal text "25,000 m2" as scraped)
3. "2000+" / "Student Capacity" — light bg (`bg-tas-surface text-tas-navy` or a pale blue `bg-blue-50 text-tas-navy`)

Each stat card: value bold ~36-40px on its own line, label ~16px below.

## Assets
Use real downloaded photos from `public/images/` depicting: campus building exterior, students walking on campus, a golf simulator/sports facility, a library/media center, and a graduation ceremony (search filenames for "Graduation" — `public/images/*Graduation-Grade-12*` is confirmed to exist and matches the graduation photo).

## Verification
Run `npx tsc --noEmit`.
