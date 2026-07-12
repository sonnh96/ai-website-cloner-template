# Page Topology — themexriver.com/wp/kadu (Home / Kadu education theme)

Single long-scroll landing page. Total height ~9132px at 1440px viewport. No sticky/fixed overlays
(header scrolls away normally — see BEHAVIORS.md). All sections flow top-to-bottom in normal document order.

| # | Section (working name) | Theme class | Interaction model |
|---|---|---|---|
| 1 | Header (top bar + main nav) | `kd-header-1-area` | static; dropdowns on Pages/Courses/Event (hover or click — verify); search icon toggles search box; hamburger for mobile |
| 2 | Hero | `kd-hero-1-area` | Swiper slider, 3 slides, manual arrows; Splitting.js heading reveal |
| 3 | Popular Category | `kd-pop-cat-1` | Swiper carousel, 4 visible cards, arrows |
| 4 | About / "Online Learning Wherever And Whenever" | `kd-about-1` | static, feature checklist + certified badge + floating avatar group |
| 5 | Most Popular Courses | `kd-course-1-area` | Bootstrap click-tabs (category) → Swiper carousel of course cards per tab |
| 6 | Choose Us / "Don't Know How To Start" | `kd-choose-us-1` | static, illustration + 6 hexagon-style feature cards (Health & Fitness, Arts & Design, etc.) |
| 7 | Clients / Partner Logos | `kd-client-1` (+ `kd-client-2` marquee, verify which is live) | static row or auto-scroll marquee of college/university crest logos |
| 8 | Counter / Stats + Get In Touch card | `kd-counter-1` | dot-pattern dark bg, count-up stat numbers on scroll, floating contact-info card with photo |
| 9 | Online Video Courses | `kd-video-course-1-area` | Bootstrap click-tabs by trainer → Swiper carousel of video cards w/ play button overlay |
| 10 | Testimonials | `kd-testimonial-1` | Swiper slider, star ratings, avatar + name |
| 11 | Blog / "Popular Events & News" | `kd-blog-1` | static 3-up card grid, dark teal bg |
| 12 | CTA Banner (financial/app download) | `kd-cta-1-area` | static, big heading + Google Play / App Store badges |
| 13 | Footer | `kd-footer-1` | static, 3-column (Contact Info / Quick Links / Newsletter) + copyright bar |

## Layout notes
- Scroll container: default document scroll (Lenis-flavored smooth scroll detected, no scroll-snap).
- Z-index layers: decorative floating images/badges within Hero, About, and Counter sections are absolutely
  positioned above their parent's flow content — each needs its own layered `<img>`, not a single flattened background.
- Column structure follows Bootstrap's 12-col grid; most content sections use a `container` max-width (~1200px)
  centered wrapper with a full-bleed background image/color behind it.
- No dependencies between sections beyond shared header/footer — each can be built and merged independently.

## Build order (dispatch priority)
1. Foundation (fonts, colors, globals.css, icons, asset download) — sequential, blocks everything else.
2. Header + Footer — used to wrap every page; build early.
3. Hero, Popular Category, About, Courses, Choose Us, Clients, Counter, Video Courses, Testimonials, Blog, CTA —
   independent, dispatch in parallel once foundation lands.
