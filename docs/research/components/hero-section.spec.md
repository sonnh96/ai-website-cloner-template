# HeroSection Specification

## Overview
- **Target file:** `src/components/hero-section.tsx`
- **Interaction model:** static (video autoplays, loops, muted; no scroll/click behavior on the video itself)

## DOM structure
Full-bleed `relative` section, `min-h-screen` (approx viewport height, screenshots show it fills first ~730-812px at 1440 width but scales with viewport). Background: `<video>` autoplaying muted loop, poster image, dark overlay gradient/scrim for text legibility (a soft dark gradient from top, or a semi-transparent black wash — text is white and clearly legible against the busy photo). Centered/left-aligned text block roughly vertically centered-low (headline sits below the school building canopy in the video, above the students-walking footage), with 2 CTA buttons below.

## Content (verbatim)
- H1: "Inspiring **Academic Excellence** in a **Dynamic American Educational Program**" — regular weight "Inspiring" / "in a", bold weight on "Academic Excellence" and "Dynamic American Educational Program". White text, centered, large (~50px desktop per computed `h1` style, scales down on mobile with wrapping as shown in mobile screenshot — mobile renders ~40px and wraps to 4 lines).
- Button 1: "Enroll Now" — solid crimson `#df214d`, white bold text, `rounded-[10px]`.
- Button 2: "Learn more about us" — outline white (`border-2 border-white`), white bold text, transparent bg, `rounded-[10px]`. On hover: fills white bg with crimson/navy text (standard outline-button hover flip).

## Video
- Use downloaded video files: `public/videos/*Untitled_1-transcode.mp4` and `.webm` (provide both `<source>` tags, mp4 first... actually prefer webm first per smaller size, then mp4 fallback). Poster: `public/images/*Untitled_1-poster*.jpg`.
- Video: `autoPlay muted loop playsInline`, `object-cover` filling the section, `absolute inset-0 -z-10`.
- Add a dark overlay `absolute inset-0 bg-black/25` (approximate — screenshots show moderate darkening, enough for white text contrast without fully obscuring the video) between the video and the text content.

## Layout
- Text block: `relative z-10 flex h-full flex-col items-center justify-end pb-24 text-center px-6 max-w-4xl mx-auto` (headline sits in the lower-middle area of the hero based on screenshots, buttons directly below it, generous bottom padding before the section ends).
- Buttons: `flex gap-4 mt-8`.

## Responsive
- **Desktop (1440):** headline on 3 lines as shown, buttons side-by-side.
- **Mobile (390):** headline wraps to ~4 lines, still centered, font-size reduces (~36-40px), buttons remain side-by-side (confirmed in mobile screenshot — "Enroll Now" and "Learn more about us" sit side by side even at 390px width, each roughly half-width).

## Verification
Run `npx tsc --noEmit`. Confirm the video element references files that actually exist under `public/videos/` (list the directory first).
