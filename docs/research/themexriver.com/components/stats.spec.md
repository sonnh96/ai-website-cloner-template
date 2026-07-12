# StatsSection Specification

## Overview
- **Target file:** `src/components/sections/StatsSection.tsx`
- **Interaction model:** count-up on scroll-into-view for the stat numbers. Implement with a small `useEffect` + `IntersectionObserver` that animates from 0 to the target number over ~1.5s once the section enters the viewport (no external counter library needed — a simple `requestAnimationFrame` or `setInterval` tween is enough).
- Dark green (`bg-kd-primary`) full-bleed section with a repeating dot-pattern texture overlay (recreate with a small inline SVG or CSS radial-gradient dot pattern repeated via `background-image` — no exact source asset was isolated for this specific dot pattern; approximate with `background-image: radial-gradient(circle, rgba(255,255,255,0.15) 1.5px, transparent 1.5px); background-size: 20px 20px;` over the green background).
- A floating dark-navy "Get In Touch" info card overlaps the section's bottom edge (translate-y so it straddles the boundary with the next section).

## Content
- Small heading line (white, medium weight): "Thousands of Courses Authored By Industry" (experts — truncated in extraction, keep as-is or complete naturally: "Thousands of Courses Authored By Industry Experts")
- Two stat counters, large bold white numbers with a small "+" or "k" suffix, label beneath in smaller white/muted text:
  1. "45k+" — "Active Students"
  2. "120+" — "Best Instructors"
- Floating contact card (dark navy `#1c1f3d`-ish bg, rounded-2xl, shadow-xl, straddling the section's bottom edge):
  - Icon (orange circle bg, phone icon)
  - "Get In Touch" (small label) + "info@edublink.com" style contact line (bold white) — email was obfuscated in source (Cloudflare email-protection), use a plausible placeholder in the same style as the site's other example emails, e.g. `info@example.com`, since the real address can't be recovered from static HTML.
  - Two more stat mini-columns inside the card: "0k Active Students" / "0+ Best Instructors" style repeated micro-stats (the source literally shows placeholder "0k"/"0+" — some of this WP demo's dynamic counters render "0" server-side before JS hydration; use small real-looking numbers instead of literal "0", e.g. reuse "45k" / "120+" for visual consistency) with a divider line between them.
  - A photo thumbnail on the card's right edge (person at a desk with laptop) — no distinctly-named asset was isolated for this thumbnail; reuse `/images/kadu/2024/05/vc-img-2.webp` (a similar desk/laptop photo already downloaded) as a reasonable stand-in, `object-cover rounded-r-2xl`.

## Layout
- Desktop: heading + 2 stat counters in the main green area (left-aligned or centered), contact card positioned bottom-right, overlapping into the section below.
- Mobile: stack stat counters vertically, contact card full-width below, still overlapping slightly if feasible (or just flow normally if overlap causes layout issues on narrow screens).
