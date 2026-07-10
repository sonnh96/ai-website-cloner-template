# CIS Homepage — Page Topology

Source: https://cis.edu.vn/vi (+ /en, /kr, /zh — identical structure, different text, see src/content/*.ts)

## Design tokens (all sections use these — Tailwind v4 theme vars already wired in globals.css)
- `--color-primary` / `bg-primary` `text-primary`: `#8a0304` (maroon red, dominant brand color)
- `--color-cis-navy` / custom class `bg-cis-navy`: `#282664` (deep navy, used in 5-Stars + Inquiry Form sections)
- Body text: `#212529` (`text-foreground`), muted `#6c757d` (`text-muted-foreground`), border `#dee2e6`
- Headings font: `font-heading` (SVN-Gotham Bold, uppercase, already wired via `--font-gotham` in layout) — always bold, always uppercase in this design
- Body font: `font-sans` (Montserrat, weights 400/500/600/700/800 loaded)
- Container: `max-w-[1170px] mx-auto px-4` (site's `.container.max-w-1170`)
- Section vertical padding: ~80-100px desktop (`py-16 md:py-20`), less on mobile (`py-10`)
- Buttons (`.btn-global`): `bg-primary text-white uppercase text-sm font-semibold px-8 py-3 rounded-none hover:bg-cis-red-dark transition-colors inline-block`
- Corner-bracket decoration: an L-shaped red (`#8A0304`) 2px stroke SVG (130x130, top-left corner) appears behind several card/photo blocks. Simple to reproduce: `<svg>` with a single `<path d="M129 1L1 1L1 129" stroke="#8A0304" stroke-width="2" fill="none"/>` absolutely positioned `-top-2 -left-2` behind the card.
- Headings use a small red underline/dot accent under the title in some sections (`titlebox-stroke` — a short red bar centered under the heading).

## Sections (top to bottom, `<main id="app">`)
1. **Header** (fixed, transparent-over-hero, becomes solid white on scroll) — logo row + accreditation logos + inquiry CTA + lang switcher + search + 360 + library + careers, then nav row below.
2. **FloatingWidgets** — fixed vertical stack of 3 circular buttons on the right edge (headphone/call, calendar, chat), plus a "back to top" circular button that appears after scrolling.
3. **Hero** (`section-banner-home`) — full-bleed campus aerial photo, bottom-left title + CTA button + scroll-down hint.
4. **Principal** (`section-2`) — maroon textured background photo, 2-col: photo left (framed with corner brackets), heading + 3 paragraphs + big quote-mark glyph right, white text.
5. **Programs** (`section-3`) — white bg, centered heading + intro paragraph, then 2-col cards (Elementary / Secondary) each with corner-bracket framed photo that SWITCHES on click of the level links (nav-scrolling), plus CTA button.
6. **FiveStars** (`section-4`) — navy (`#282664`) background with a subtle rotated circular vector watermark, centered heading, 5 bordered cards (white outline boxes) each with a white icon, title, description, arranged 3+2.
7. **Stats** (`section-5`) — full-bleed campus photo background (dark overlay), centered heading, 4-column big number stats.
8. **News** (`section-6`) — white bg, heading, 2-col: large featured news card (image + tag + date + title + CTA) left, list of 4 more news items (tag + date + title, divider lines) right, "Explore More" link bottom-right.
9. **University** (`section-7`) — white bg, heading "HỆ THỐNG TRƯỜNG ĐẠI HỌC", world map graphic with 4 numbered region pins, below it a maroon bar with subheading + region selector (1-4 circular tabs) + prev/next arrows (carousel of university logos per region — simplified to a logo grid per region tab).
10. **Values** (`section-values`) — heading, LEFT: vertical stack of 4 icon-tab buttons (first one active/filled red, rest outlined), RIGHT: large photo gallery (2 images side by side) for the active tab + its label heading above.
11. **Testimonials** (`section-8-home`) — white bg, centered heading, quote carousel (large quote marks left/right, italic quote text, attribution name in red, pagination dots below).
12. **InquiryForm** (`section-9`) — navy background photo (dark overlay), 2-col: heading + subheading left (white text), lead-gen form card right (white card, 6 fields + submit button).
13. **Footer** — white bg, top row: CIS logo + tagline + accreditation logos, then 2-col: contact block (heading, phone, hotline, emails, address, social icons) + Google map embed. Bottom bar: maroon background, legal company name + privacy policy link.

## Responsive breakpoints
- Desktop: 1440px — as captured
- Tablet: 768px — nav collapses to hamburger (not yet captured in detail; use sensible Bootstrap-style stacking: 2-col sections → single column, reduce heading sizes ~25%)
- Mobile: 390px — all multi-column sections stack to single column, hero title/buttons remain bottom-left but smaller, floating widgets remain but may shrink

## Interaction models
- Header: STATIC position but background/shadow appears after scrolling past hero (scroll-driven, threshold ~100px)
- Programs section image: CLICK-driven (click a level link → swap the framed photo via data-src)
- Values section: CLICK-driven tabs (click icon → swap gallery images + heading label, first tab active by default)
- University section: CLICK-driven region tabs (1-4) + prev/next arrows
- Testimonials: swiper carousel, auto-advance not confirmed — treat as click-driven via pagination dots + swipe, safe default: dots are clickable, no forced autoplay
- FloatingWidgets back-to-top button: appears after scrolling down, scrolls to top on click
