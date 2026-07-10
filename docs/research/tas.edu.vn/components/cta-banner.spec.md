# CTABanner Specification

## Overview
- **Target file:** `src/components/cta-banner.tsx`
- **Interaction model:** static. This ONE reusable component renders TWO different CTA bands used elsewhere on the page — accept props so it can render either variant:

```ts
interface CTABannerProps {
  variant: "crimson" | "navy";
  eyebrow?: string;
  heading: string;
  description: string;
  buttonLabel: string;
  buttonHref?: string;
}
```

## Variant "crimson" — "Ready to Join Our Community?"
- Full-bleed crimson (`bg-tas-crimson`) section, `py-20 px-6`, with a **wavy watercolor pattern overlay** (use `public/images/*wave-1920*.svg` or `*Union-blue*.svg`/similar wave asset at very low opacity white, `absolute inset-0 opacity-15 object-cover -z-0`; pick whichever downloaded wave/union SVG looks closest to a soft wavy watercolor stroke — do not block on exact match).
- Heading: "Ready to Join Our Community?" — white, bold, ~40px.
- Paragraph: "Discover how easy it is to become part of The American School family! Learn more about our transparent fee structure and streamlined admission process." — white/90.
- Button: "View Fees and Apply Now" — **white outline** button (`border-2 border-white text-white font-bold rounded-[10px] px-6 py-3`, hover fills white bg with crimson text).

## Variant "navy" — "Start Your Journey with Us"
- Full-bleed navy (`bg-tas-navy`) section, `py-20 px-6`, with a large faint **mustang/horse silhouette watermark** bleeding from the right edge (very low-opacity white shape; if no exact SVG asset is found among downloaded files, approximate with a simple abstract shape or omit gracefully — do not fabricate detail that doesn't exist).
- Heading: "Start Your Journey with Us" — white, bold, ~40px.
- Paragraph: "At The American School, we believe in providing a nurturing and supportive environment where every student can thrive." — white/90.
- Button: "Apply Now" — white outline button, same style/hover as above.

## Shared layout
- Content constrained to `max-w-3xl` (or `max-w-2xl` for the navy variant, which reads narrower in screenshots), left-aligned text (NOT centered — screenshots show both banners left-align their heading/paragraph/button block within the section).

## Usage in page assembly (for reference only, do not build the page here)
- Crimson variant renders after GraduatesSection.
- Navy variant renders after TestimonialsSection.

## Verification
Run `npx tsc --noEmit`.
