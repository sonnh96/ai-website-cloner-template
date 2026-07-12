# Behaviors — themexriver.com/wp/kadu (Kadu Education Theme)

Source: WordPress + Elementor + Tutor LMS + WooCommerce. Confirmed via theme CSS
(`wp-content/themes/kadu/assets/css/main.css`) and raw HTML inspection (curl), not just DOM guessing.

## Libraries in use (confirmed)
- **Bootstrap 5** tabs (`data-bs-toggle="tab"`, `.nav-link`, `.tab-pane.fade`) — click-driven, NOT scroll-driven.
- **Swiper.js** — all carousels use `.swiper-wrapper` / `.swiper-slide` + custom prev/next buttons (`*-slider-btn`).
- **WOW.js** (class `wow`, appears 19x) — scroll-triggered entrance animation, fade-up style, staggered delays. Combined with `animate.css`.
- **Splitting.js** (`data-splitting=""` on headings) — per-character/word text-reveal animation on scroll for big headings (e.g. hero H1, section titles).
- Lenis-style smooth scroll present (`.lenis` class detected on `<html>`/`<body>` at runtime) — use a JS smooth-scroll or CSS `scroll-behavior: smooth` equivalent.
- No exotic scroll-driven tab switching anywhere — confirmed via curl: course tabs and video-course trainer tabs are standard Bootstrap click tabs.

## Global
- **Header is NOT sticky.** It scrolls away normally with the page (confirmed: header fully left the viewport at scrollY=500, no fixed/sticky positioning kicks in).
- Body base type: `Urbanist, sans-serif`, base color `#797a84` (`--kd-clr-p-1`), 20px/32px line-height paragraphs.
- Accent/handwritten font: `"Just Another Hand", cursive` (`--kd-font-sd-1`) — used for small eyebrow/kicker labels like "Guaranteed & Certified", "Online Classes", "Get To Know Us", "Our Blog".
- Headings use `Urbanist` at weight 900 (`--kd-font-pr-1`), color `#363539` (`--kd-clr-h-1`) on light sections, white on dark/green sections.
- Design tokens (from `:root` in main.css):
  - `--kd-clr-h-1: #363539` (heading)
  - `--kd-clr-p-1: #797a84` (paragraph)
  - `--kd-clr-pr-1: #005e4f` (primary dark green — hero/footer/CTA backgrounds, button hover)
  - `--kd-clr-pr-4: #D70007` (red/danger accent)
  - `--kd-clr-sd-1: #ef991f` (secondary orange — primary CTA button bg)
  - `--kd-clr-sd-4: #08D565` (bright green accent)
  - `--cube-1: cubic-bezier(.57,.21,.69,1.25)` (theme's signature bounce easing, used on button transitions)
- Border-radius scale in use: 5, 10, 12, 15, 20, 26, 30, 35, 40, 50, 60, 80, 95, 100px (30px = pill buttons, 20px = cards, 100px = circular badges/avatars).
- Shadow patterns: `0 0 15px rgba(0,0,0,0.08)` (cards), `0 10px 50px rgba(0,0,0,0.05)` (elevated panels), `0px 30px 160px rgba(0,0,0,0.15)` (hero image group).

## Component: Primary Pill Button (`.kd-pr-btn-1`) — "APPLY NOW" / "FIND OUT MORE"
- **Interaction model:** hover-driven text-swap + color-swap.
- **Structure:** `<span class="text" data-front="apply now" data-back="Let's Talk">` + `<span class="icon"><i class="fa-arrow-right"></i></span>`.
- **Default state:** background `#ef991f` (orange), text color `#22281e`, border-radius 30px, padding `20px 31px`, font `15px/800/uppercase`. Text shown via `::before{content:attr(data-front)}` at `translateX(0)`, opacity 1.
- **Hover state:** background transitions to `#005e4f` (dark green), text color `#fff`. `::before` slides out to `translateX(100%)` opacity 0; `::after{content:attr(data-back)}` slides in from `translateX(-100%)` to `translateX(0)` opacity 0→1 — i.e. the visible label swaps from the front word to the back word on hover.
- **Transition:** button-level `0.3s var(--cube-1)`; text-swap layers `0.5s`.
- **Variants:** `.has-black` (dark `#363539` bg, hover→orange), `.has-black-2` (`#000` bg, hover→orange).

## Component: Hero (`kd-hero-1-area`)
- **Interaction model:** Swiper slider, 3 slides (`.kd-hero-1-slider` / `.kd-hero-1-item` ×3), manual Prev/Next controls (`.kd-hero-1-slider-btn`), plus per-slide entrance animation (Splitting.js letter-reveal on the big heading, WOW fade-up on subelements).
- Background is a literal image (`h1-bg-1.png`), not a CSS color — solid dark green pattern with subtle line texture.
- Bottom edge uses an SVG/CSS wave shape transitioning into the white section below.
- Floating badge images (certified stamp, plus-icon accents, stats mini-cards) are absolutely positioned decorative layers over the hero photo — treat each as a separate layered image, not baked into one graphic.

## Component: Popular Category (`kd-pop-cat-1`)
- **Interaction model:** Swiper carousel, 4+ cards visible, arrow buttons (`.kd-pop-cat-1-slider-btn`) advance one at a time. Cards fade/scale slightly on hover (standard card hover lift — verify exact transform via spec extraction).

## Component: Most Popular Courses (`kd-course-1-area`)
- **Interaction model:** TWO layered behaviors — (1) Bootstrap click-tabs (`#myTab`, `data-bs-toggle="tab"`) switch between category panes (e.g. "All", "Design", "Development" — verify exact labels during extraction); (2) within each active tab pane, course cards sit in a Swiper carousel (`.kd-course-1-active`) with prev/next arrows (`.kd-course-1-tabs-slider-btn`).
- Tab switch uses Bootstrap's `.fade` + `.show.active` — cross-fade, not slide.
- Course cards: image with price/free pill badge top-right, title, lesson/week meta row with icons, instructor row, star rating.

## Component: Video Courses (`kd-video-course-1-area`)
- **Interaction model:** same click-tab pattern as courses, but tabs are trainer avatars/names (`.kd-video-course-1-trainer`, `nav-home-tab0/1/2`) rather than text labels — clicking a trainer swaps the associated video content pane. Video cards themselves also sit in a Swiper (`.kd-video-course-1-slider-btn` arrows) with a centered play-button overlay per card.

## Component: Clients / Partners (`kd-client-1`, `kd-client-2`)
- `kd-client-1` renders a static row of university/college crest logos (grayscale).
- `kd-client-2` is a second, separate auto-playing Swiper logo marquee (`.kd-client-2-slider`, `.kd-client-2-active`) — confirm on the live page whether both appear or only one is active on this specific homepage variant.

## Component: Counter / Stats + Contact Card (`kd-counter-1`)
- Dark green section with a repeating dot-pattern background image.
- Stat numbers ("Active Students", "Best Instructors") are count-up animated on scroll into view (0 → target number) — standard counter.js/odometer-style behavior driven by WOW/IntersectionObserver.
- A floating dark-navy "Get In Touch" info card overlaps the section bottom edge with an inset photo.

## Component: Testimonials (`kd-testimonial-1`)
- Swiper slider of testimonial cards with 5-star rating icons, author avatar + name, and small decorative background photo tiles.

## Component: Blog (`kd-blog-1`)
- Static 3-up grid of blog cards (not a carousel) on dark teal background: image, author avatar + name, title, excerpt.

## Component: CTA Banner (`kd-cta-1-area`)
- Dark green full-bleed banner directly above the footer: big heading ("Grow Personal Financial Security Thinking & Principles"), Google Play / App Store badge images.

## Component: Footer (`kd-footer-1`)
- Dark teal, 3-column layout: Contact Info (address/phone/email with icon bullets), Quick Links (2 sub-columns of checkmark-bulleted links), Subscribe Newsletter (email input + pill submit button). Bottom bar: copyright + "Themexriver" link.

## Responsive
- Bootstrap-based grid; standard breakpoints (~992px tablet, ~768px/576px mobile) — verify exact column collapse per section during component extraction. Desktop 1440px confirmed as primary reference; mobile 390px and tablet 768px sweeps still pending (do during per-section extraction, not blocking dispatch).
