# Header Specification

## Overview
- Target file: `src/components/layout/Header.tsx`
- Interaction model: scroll-driven background change (transparent over hero → solid white with shadow after scrolling past ~100px)

## DOM structure
`<header>` fixed top-0 left-0 right-0 z-50, full width, two stacked rows inside a flex column:
- Row 1 (top, ~72px tall): left = CIS logo (`/images/logo/cis-logo-color.png`, ~64px tall) + 5 accreditation partner logos in a row separated by thin vertical dividers (`/images/partners/ib-world-school.png`, `collegeboard-ap.png`, `cis-accredited.png`, `cognia.png`, `wasc.png`, each ~40px tall, `object-contain`). Right = Inquiry CTA button (maroon `.btn-global`, small, e.g. "TƯ VẤN"/"INQUIRY") + language switcher (flag icon 20px + 2-letter code + chevron-down, opens a dropdown listing the other 3 locales as links to `/{locale}`) + search icon + 360° icon + "Library" text link + "Careers" text link.
- Row 2 (~40px tall, sits right under row 1): centered nav — 5 items from `content.header.nav`, uppercase, `font-sans font-semibold text-sm tracking-wide`, spaced `gap-8`, each is a plain link (no dropdown content available — just link to `href`). Active/hover state: `text-primary`.

## Computed styles
- Row 1 background: transparent when `scrollY < 80`; `bg-white shadow-md` once `scrollY >= 80` (use a scroll listener + `useState`, `transition-colors duration-300`)
- Row 1 text/icon color: white when transparent (over hero photo), `#212529` once solid white — swap via conditional classes tied to the same scroll state
- Nav row 2: always `bg-white` (it's a thin bar right under row 1) with `border-b border-border`; nav link text `#212529`, hover/active `#8a0304`
- CTA button: `bg-primary text-white uppercase text-sm font-bold px-6 py-2.5`
- Container: `max-w-[1400px] mx-auto px-6 flex items-center justify-between`
- Logo height ~48-56px desktop, ~36px mobile

## Content
Import `HomeContent["header"]` (fields: `inquiryCta`, `library`, `careers`, `nav: {label, href}[]`) plus top-level `languageLabel`, `flagSrc` and a hardcoded list of the other 3 locales for the switcher (locales are `vi`,`en`,`kr`,`zh`; flags at `/images/asset/flag-vn-small.png`, `flag-canada-small.png` (used for EN), `flag-kr-small.png`, `flag-zh-small.png`).

Component signature:
```tsx
import type { HomeContent, Locale } from "@/types/content";
export function Header({ content, locale }: { content: HomeContent; locale: Locale }) { ... }
```
Use `next/link` for locale-switch links: `href={`/${otherLocale}`}`.

## Assets
- `/images/logo/cis-logo-color.png`
- `/images/partners/ib-world-school.png`, `/images/partners/collegeboard-ap.png`, `/images/partners/cis-accredited.png`, `/images/partners/cognia.png`, `/images/partners/wasc.png`
- `/images/asset/flag-vn-small.png`, `/images/asset/flag-canada-small.png`, `/images/asset/flag-kr-small.png`, `/images/asset/flag-zh-small.png`
- `/images/asset/ic-header-searchbox.svg`, `/images/asset/ic-360.svg`

## Responsive
- Desktop (1440px): full layout as described, all partner logos visible.
- Tablet (768px): hide partner logos row (or shrink to just 2-3), keep logo + CTA + lang switcher + hamburger icon replacing nav row.
- Mobile (390px): single row — logo left, hamburger menu icon right (opens a full-screen or slide-in mobile nav — for this build, a simple `useState` toggle showing a stacked mobile menu below the header is sufficient; no need to pixel-match a complex mobile drawer).

## Notes
Must accept `content` and `locale` as props — this is a client component (`"use client"`) since it tracks scroll state.
