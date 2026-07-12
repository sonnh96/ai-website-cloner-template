# ClientsSection Specification

## Overview
- **Target file:** `src/components/sections/ClientsSection.tsx`
- **Interaction model:** static row (confirmed: the secondary `kd-client-2` auto-scroll marquee variant is NOT populated/active on this homepage — build only the static row, do not build a marquee).
- White background, simple centered section.

## Content
- Small centered heading (gray/muted, medium weight, ~18-20px): "Leading Universities And Companies"
- Row of grayscale partner/university crest logos, evenly spaced, centered, wrapping on smaller screens:
  - `/images/kadu/2024/06/clients_logo_1.png`
  - `/images/kadu/2024/06/clients_logo_2.png`
  - `/images/kadu/2024/06/clients_logo_3.png`
  - `/images/kadu/2024/06/clients_logo_5.webp`
  - `/images/kadu/2024/06/clients_logo_6.webp`
  - `/images/kadu/2024/06/clients_logo_7.webp`
- Render logos at a consistent height (~48-64px), `grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition` for a nice subtle interaction, `object-contain`.

## Layout
- Desktop: single row, justify-between/evenly, generous horizontal padding.
- Mobile: wrap to 2-3 per row, centered.
