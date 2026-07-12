# HeroSection Specification

## Overview
- **Target file:** `src/components/sections/HeroSection.tsx`
- **Interaction model:** Simple carousel (scroll-snap pattern, see shared-tokens.md), 3 slides — all 3 slides have IDENTICAL real content (confirmed from source, this is the live site's actual demo content, not an extraction gap) — so render one slide's markup repeated 3× in the scroll track, with working Prev/Next arrows and dot/counter chrome even though content doesn't visually change slide-to-slide.
- Full-bleed section, dark green background.

## Content (verbatim, real)
- Eyebrow (font-script, small, orange/accent color, with a sparkle icon before it): "Guaranteed & certified"
- H1 (font-sans font-black, ~56-70px desktop, white, tight line-height ~1.13, letter-spacing 0.5px): "Online Platform For Education."
- Paragraph (white/light, ~18-20px): "We don't just work with concrete and steel. We work with people **We are Approachable**, with even our highest work work with concrete and steel. We work with people" — "We are Approachable" is a nested link/emphasis (underlined).
- Primary pill button (shared-tokens.md pattern): "Find Out More"
- Social row (bottom-left, plain text links, white, uppercase small, spaced apart): "Facebook", "Twitter", "Linkedin"
- Slider nav (bottom-right): "Prev" / "Next" text links

## Background & imagery
- Section background: `/images/kadu/2024/06/h1-bg-1.png` (dark green textured pattern, `background-size: cover`) — this is the ONLY thing providing the green color; the section itself has no CSS background-color.
- Hero photo (right side, large, a person in orange hoodie with backpack, overlapping into an orange circular shape behind them): use `/images/kadu/2024/05/h1-img-1.webp` as the main photo, `/images/kadu/2024/05/h1-img-2.webp` as a secondary layered photo (they composite — check both, layer img-2 behind/beside img-1 if they're clearly two different crops).
- Decorative layered images absolutely positioned around the hero photo (each is a SEPARATE `<img>`, not baked in): `/images/kadu/2024/05/h1-il-1.webp` through `h1-il-5.webp` (small badge/plus/sparkle accent graphics — scatter them near top-right and around the circular photo edge per the screenshot), `/images/kadu/2024/05/star-1.webp` / `star-2.webp` (small star accents near the eyebrow text).
- A wavy line SVG/icon graphic (orange squiggle) sits left-of-center in the lower hero area between the description and the social row — recreate as a simple inline SVG wavy line in orange, ~140×40px (no source file for this one; approximate from screenshot).
- Bottom edge: a white wave shape cuts into the green section transitioning to the white Popular Category section below — implement with an SVG wave (`<svg>` with a sine-like path, fill white) absolutely positioned at the bottom of the hero, OR a simple large white border-radius ellipse overflow trick. Match the gentle double-wave silhouette visible in the screenshot.

## Layout
- Desktop: two-column — text content left (~50%), photo right (~50%), photo slightly overflows the section's right edge.
- Mobile (390px): stack to single column, photo below text, reduce H1 to ~36-40px.

## States
- Button hover: see shared Primary Pill Button pattern.
- "Prev"/"Next" text links: underline-on-hover or color shift to orange.
