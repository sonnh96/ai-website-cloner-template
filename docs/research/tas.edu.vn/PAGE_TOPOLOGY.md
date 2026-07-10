# TAS (tas.edu.vn) — Page Topology

Source: https://www.tas.edu.vn/ (homepage). Built on Webflow (cdn.prod.website-files.com), Swiper.js for carousels.

## Global
- **Framework:** Webflow-exported static site + Swiper.js carousels. No SPA framework markers.
- **Fonts:** `Helvetica, Arial, sans-serif` (headings, nav, buttons — many weights, some "Helvetica-Bold"), `"Inter Tight", sans-serif` (h3-level subheads), `Inter, Georgia, sans-serif` (body paragraphs). Loaded via Webflow's shared CSS bundle, not Google Fonts — closest self-hostable equivalents: Helvetica Neue/Arial (system stack) + Inter Tight + Inter (both on Google Fonts).
- **Primary colors:** Crimson red `rgb(199,53,80)`-ish (buttons, accents) — sample from CTA banner ~`#C7304F`/`#C6314D`; Navy blue `rgb(39,78,118)` / footer navy `rgb(30,60,97)`-ish; near-black navy body text `rgb(18,43,80)`; white; light gray section bg `#f5f5f5`.
- **Scroll height:** ~8100px desktop.
- **Nav bar is NOT sticky** — scrolls away with hero, does not pin on scroll.
- **Wavy line SVG background pattern** appears as a decorative repeating watermark behind several sections (Vision/Mission, Achievements) in very light gray.
- **Horse/mustang silhouette watermark** (large, very light gray) appears behind the Achievements/Graduates area.

## Sections (top to bottom)

1. **Header/Nav** — logo (image, "TAS Logo White Landscape"), 5 dropdown nav items (About, Academics, Admission, Our Faculty, TAS Life), red "Enroll Now" button, EN/KR/VN language switcher. Overlays hero (transparent bg over video). Not sticky. Mobile: hamburger → full-screen navy overlay with accordion sections (chevron per item) + social icons + Enroll Now button at bottom.
2. **Hero** — full-bleed background video/image of school entrance with students, dark overlay for text legibility. H1 "Inspiring **Academic Excellence** in a **Dynamic American Educational Program**", 2 buttons (Enroll Now solid red, Learn more about us outline white).
3. **Empowering Students (Vision/Mission)** — 2-col: left = image (students walking), right = eyebrow text + intro paragraph + "Our Vision" heading/paragraph + "Our Mission" heading/paragraph (mission block offset/indented further right). **Scroll-triggered fade-in** (see BEHAVIORS.md).
4. **Academic Achievements** — 2-col: left = heading "Celebrating Our Academic Achievements" + paragraph + "Learn more" button; right = 2x2-ish stat card grid (95% College Acceptance Rate [navy], 1000+ Standardized Test Scores [navy, larger], 15 Scholarships Awarded [red], National Awards Won [navy, small corner card]).
5. **Awards marquee ticker** — full-width light gray strip, infinite horizontal auto-scroll text with red star separators: "30 National Awards Won: Celebrating Excellence ★ Your Child's Future Starts Here ★ Inspiring Lifelong Learning Every Day ★" repeating. Time-driven, no user interaction.
6. **Our Graduates Thrive at Top Universities** — heading + paragraph + "Learn more" button, then **university logo marquee**: 2 rows of grayscale/color university logos (Johns Hopkins, NYU, USC, Yonsei, Osaka University, Cornell, Sydney, SHMi, Fordham, Tulane, RMIT...) each row auto-scrolling horizontally in opposite directions, on a light gray bg with a faint world-map dot pattern.
7. **CTA banner — "Ready to Join Our Community?"** — full-width crimson red section with wavy watercolor pattern overlay, white heading + paragraph, white outline button "View Fees and Apply Now".
8. **Curriculum Overview** — centered heading "Comprehensive Curriculum Overview for All Educational Stages" (red), 4-card row: Early / Elementary / Middle / High — each a tall image card with a small pill label top-left (e.g. "Primary Years Programme") and a bottom label + arrow-icon button, hover likely reveals/highlights.
9. **Facilities** — "Explore Our Exceptional Facilities" eyebrow + paragraph + Learn more button (navy), then an asymmetric image/stat gallery: building photo, "100+ Classrooms" (navy stat card), students-walking photo (tall, spans rows), golf-simulator photo, library photo, "25,000 m2 Total Campus Area" (red stat card), graduation photo, "2000+ Student Capacity" (light stat card).
10. **Preschool blog/article carousel** ("Art Nurtures the Soul..." etc.) — Swiper carousel, navy card background with white heading + white body text over a photo. Long list of ~20 preschool-focused articles cycle through (verified via get_page_text — all article titles/excerpts captured in BEHAVIORS.md content dump).
11. **TAS Life recent news carousel** ("EXPERIENTIAL LEARNING...", "VAN GOGH...", "TẾT FAIR 2025...", "MUSTANGS LEARNING...") — Swiper carousel, image + all-caps title + excerpt, prev/next arrow buttons (circular, outline).
12. **Testimonials carousel** — centered large quote text (navy), circular avatar photo + name (bold) + "Class of 2025" caption, prev/next circular arrow buttons on far left/right. 3 known slides (Khanh Nguyen Jennifer, Samuel Nguyen, Yeji Lee).
13. **"Start Your Journey with Us"** — navy CTA band with mustang-silhouette watermark, white heading/paragraph, white outline "Apply Now" button.
14. **"Explore the TAS Life"** — eyebrow label + navy "See More" button (top-right), full-width video/photo panel below (branded "THE AMERICAN SCHOOL — Developing Academic Excellence and Strength of Character" video thumbnail with play affordance).
15. **SEO/learning-at-TAS blog carousel** ("TAS - 16 Years of Whole-Child Education...", "2025 | A Year of Innovation...", "IB PYP at TAS...", "TAS Students Earn Over USD 200,000...", "Toplist International Schools...", "TAS International School Curriculum...") — plain white cards, title (bold navy) + excerpt (gray), prev/next square outline arrow buttons bottom-right of the section.
16. **"Book a school tour with us!"** — 2-col: left = crimson panel with heading, paragraph, and a lead-capture form (Your Name / Email / Phone number inputs) + "Book a tour" outline button; right = aerial drone photo of the campus (bleeds full-bleed, no padding).
17. **Footer** — navy background with wavy watermark. Logo lockup top-left. 6 columns: About, Academics, Admission, Life at TAS, Staff, Contact Us (email/phone/phone2 + social icons Facebook/Instagram/YouTube + Location address). Bottom bar: copyright "© 2024 The American School. All rights reserved." + EN/KR/VN switcher.

## Responsive behavior
- **Desktop (1440px):** multi-column layouts throughout (2-col text/image splits, 4-col curriculum cards, multi-column footer, asymmetric facilities grid).
- **Mobile (390px):** everything stacks to a single column. Nav collapses to hamburger → full-screen accordion overlay menu (navy bg, chevron-expand items, matches desktop dropdown items). University logo marquee and awards ticker remain horizontal auto-scroll (unaffected by breakpoint — they're full-bleed regardless of column count). Curriculum cards, facility gallery, and stat cards stack vertically full-width.
- Breakpoint switch approximately at Webflow's standard ~991px (tablet) and ~767px (mobile) — not pixel-verified beyond confirming desktop (1440) vs mobile (390) both work correctly stacked.

## Z-index / layering
- Header overlays hero (nav is transparent, absolutely/relatively positioned over the video, no fixed z-index conflicts observed since it isn't sticky).
- Decorative SVG wave/horse watermarks sit behind text content (negative-ish z-index or just very light color, painted before text in DOM order).
