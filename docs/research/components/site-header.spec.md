# SiteHeader Specification

## Overview
- **Target file:** `src/components/site-header.tsx` (client component — needs mobile menu state)
- **Interaction model:** click-driven (mobile hamburger → accordion overlay; desktop nav items have dropdown chevrons — dropdown content not scraped beyond top-level labels, build as simple hover/click-opens dropdown shells with matching label text repeated as a single link, `href="#"`)

## DOM structure
Absolutely/relatively positioned bar over the hero, NOT sticky (scrolls away with hero, no scroll-shrink behavior). Row: logo lockup (left) — nav links row (center-right) — "Enroll Now" button + language switcher (far right). On mobile: logo + hamburger icon (3 lines → morphs to X), and clicking it opens a **full-screen navy (`#274e76`) overlay** with an accordion list.

## Content (verbatim)
- Logo: use `public/images/*Logo-White-Landscape*.webp` (white version, for use over the dark hero video) — text lockup reads "THE AMERICAN SCHOOL" / "Developing Academic Excellence and Strength of Character". Render as an `<Image>` of the downloaded logo file (search `public/images/` for the Logo-White-Landscape file), height ~48px, width auto.
- Nav items (top-level, each has a chevron-down icon from `lucide-react` `ChevronDown`): **About**, **Academics**, **Admission**, **Our Faculty**, **TAS Life**
- CTA button: **Enroll Now** (solid crimson, white text)
- Language switcher: **EN** (active, red/underlined) **KR** **VN** — plain text links separated by nothing (small gap), EN is `font-bold text-tas-crimson underline`, others `text-white/80` (desktop, over hero) — render as static non-functional links.

## Styles (from live computed values + screenshots)
- Nav link text: white, `font-bold`, ~16-17px, Arial/Helvetica (`font-sans`).
- "Enroll Now" button: bg `#df214d`, text white, `font-bold`, ~15px, `rounded-[10px]`, padding `~12px 24px`.
- Logo area: white logo mark + wordmark, ~50px tall.
- Header horizontal padding: generous, matches page container (`max-w-7xl mx-auto px-6 lg:px-10`), vertical padding `py-6`.
- Header sits `absolute inset-x-0 top-0 z-20` over the hero (hero has a dark video behind it, so white text is legible without a separate background on the header itself).

## Mobile (390px width, confirmed via live screenshots)
- Header shows: logo (smaller) + hamburger icon (3 horizontal red-brown lines) top-right.
- Click hamburger → hamburger morphs to white **X** icon, and a full-screen `#274e76` navy overlay slides/fades in covering the viewport.
- Overlay content: logo (white) + X close button top row; EN/KR/VN switcher below; then **accordion list**: About / Academics / Admission / Our Faculty / TAS Life — each a full-width row, large bold white text (~28px), with a `ChevronDown` icon on the right, separated by thin white/10 divider lines. Social icons + red "Enroll Now" button pinned near the bottom of the overlay (not fully confirmed pixel position — place them in a footer row of the overlay panel).
- Build with a `useState` for `mobileMenuOpen` and `useState` for which accordion item (if any) is expanded — expanding an accordion item can be a no-op stub (just rotate chevron) since submenu contents weren't scraped.

## Responsive breakpoint
- Switches from full nav row to hamburger at Tailwind `lg` (1024px) — matches typical Webflow tablet+mobile collapse.

## Assets
- Logo: pick the white landscape logo webp from `public/images/` (filename contains `Logo-White-Landscape`).
- Icons: `lucide-react` — `ChevronDown`, `Menu`, `X`.

## Verification
Run `npx tsc --noEmit` before finishing. Component must render standalone (no dependency on page-level scroll state).
