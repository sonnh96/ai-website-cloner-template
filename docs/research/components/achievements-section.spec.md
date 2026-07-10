# AchievementsSection Specification

## Overview
- **Target file:** `src/components/achievements-section.tsx`
- **Interaction model:** static content + a time-driven infinite marquee ticker directly beneath it (use the shared `Marquee` primitive at `@/components/marquee`, already built — do not reimplement).

## Part A — Achievements content (2-column)
- Left column: heading "Celebrating Our Academic Achievements" (`font-heading text-tas-navy`, ~32-36px, bold-ish), paragraph "Our students consistently excel academically, achieving outstanding results on standardized tests and earning acceptance into prestigious colleges. We take pride in fostering a culture of academic excellence." (`text-tas-ink`), then a solid crimson **"Learn more"** button (`bg-tas-crimson text-white rounded-[10px] font-bold px-6 py-3`).
- A large, very faint mustang/horse-silhouette watermark SVG sits behind this content, bleeding to the right toward the stat cards (decorative, `text-tas-navy/5` or similar very-low-opacity gray, `absolute -z-10`; skip if no matching asset found — do not block on this, a plain background is an acceptable fallback).
- Right column: an asymmetric 2×2-ish stat card grid:
  1. **"95% College Acceptance Rate"** — navy card (`bg-tas-navy text-white`), value bold ~40px, label ~16px, rounded corners, padding ~24px.
  2. **"1000+ Standardized Test Scores"** — navy card, taller/larger than card 1, same style, includes a small white star icon (`lucide-react` `Star`) as decoration in a corner.
  3. **"15 Scholarships Awarded"** — crimson card (`bg-tas-crimson text-white`), same value/label style, small white star icon decoration + faint upward-trending-bars decorative graphic (optional — a simple `lucide-react` `TrendingUp` icon in low-opacity white is an acceptable stand-in if no closer asset).
  4. A small navy corner card reading **"National Awards Won"** (no numeric value visible in the capture — the number "30" belongs to the marquee ticker text below, not this card; this card just shows the label, smaller footprint, tucked top-right of the grid).
- Grid: `grid grid-cols-2 gap-4`, card 2 spans taller (`row-span-2` or explicit height) to match the asymmetric layout seen in screenshots.

## Part B — Awards marquee ticker (directly below, full-bleed, no section padding)
- Full-width light gray (`bg-tas-surface` / `#f5f5f5`) strip, `py-6`.
- Content repeats infinitely: **"30 National Awards Won: Celebrating Excellence"** ★ **"Your Child's Future Starts Here"** ★ **"Inspiring Lifelong Learning Every Day"** ★ (star = `lucide-react` `Star` filled crimson `#df214d`, small, `mx-6`).
- Text: `text-tas-navy font-bold text-xl uppercase-ish` (actual case is title-case, not uppercase — use as written above).
- Implementation: `<Marquee direction="left" durationSeconds={28}>` wrapping a flex row of the 3 phrases + star separators (the `Marquee` component already duplicates its children for seamless looping — just pass the one set of phrases as children).

## Verification
Run `npx tsc --noEmit`. Import `Marquee` from `@/components/marquee`.
