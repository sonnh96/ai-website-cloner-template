# TAS (tas.edu.vn) — Behavior Bible

## Scroll sweep findings

### 1. Header
- Not sticky. Scrolls away naturally with the hero. No shrink/shadow/scroll-triggered restyle observed.

### 2. "Empowering Students" (Vision/Mission) section — scroll-triggered fade/color-in
- **Trigger:** IntersectionObserver-style reveal as the section scrolls into the viewport (standard Webflow "fade in on scroll" interaction).
- **Before (out of view):** image and text are heavily desaturated/low-opacity (image looks washed out ~30-40% opacity equivalent; text color is a pale tint of its final color, e.g. heading text goes from pale blue-gray to full `rgb(39,78,118)`, body text from pale gray to full `rgb(18,43,80)`).
- **After (in view):** full color/opacity, normal contrast.
- **Transition:** smooth fade, staggered slightly (image bg photo doesn't visibly fade separately from text — main change is text/photo opacity+color ramping together as you scroll). Approx transition duration feels like ~0.4-0.6s per element with slight stagger between the vision/mission blocks (mission block trails vision block).
- **Implementation approach:** CSS `opacity`/`filter` transition combined with IntersectionObserver toggling a "in-view" class, OR native Webflow scroll-interaction (percentage-based scroll progress). Approximate with IntersectionObserver + CSS transition (opacity 0.3→1, translateY 20px→0) triggered once per section, threshold ~0.2.

### 3. Awards marquee ticker (time-driven, infinite)
- Full-width light gray strip. Text repeats "30 National Awards Won: Celebrating Excellence ★ Your Child's Future Starts Here ★ Inspiring Lifelong Learning Every Day ★" in an infinite horizontal loop, moving right-to-left continuously regardless of scroll position or interaction.
- **Implementation:** CSS `@keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }` on a flex row containing the content duplicated 2x+, `animation: marquee 25s linear infinite`.

### 4. University logos marquee (time-driven, infinite, 2 rows)
- Two stacked rows of university logos on a light gray bg with faint dotted world-map graphic behind. Row 1 and Row 2 scroll horizontally in **opposite directions** continuously (confirmed by comparing two sequential mobile scroll-captures of the same section: visible logo set changed between captures despite only vertical scroll input, and a request captured mid-scroll showed different logos than a moment before/after — classic marquee tell).
- **Implementation:** same CSS marquee technique as #3, one row `animation-direction: normal`, other `animation-direction: reverse`, different durations for a natural feel.

### 5. Curriculum cards (Early/Elementary/Middle/High)
- Interaction model: **hover** (not scroll, not click-to-switch — each card is a static link/button to its own page, not a tab).
- Bottom label pill "Elementary ↗" etc. — arrow icon suggests these are navigation links to sub-pages, not in-page state switches. Treat as static cards; hover likely lightens/scales the image slightly (not verified pixel-exact — approximate with a subtle scale(1.03) + shadow on hover, transition 0.3s ease, standard card-hover pattern).

### 6. Blog / TAS Life / testimonials / SEO-articles carousels — CLICK-DRIVEN (Swiper.js)
- Confirmed via DOM inspection: multiple `.swiper-slide` elements present (15+ instances found), i.e. this site uses the Swiper.js library for ALL carousel sections, not scroll-snap or IntersectionObserver-driven switching.
- Each carousel section has visible prev/next arrow buttons (circular outline for TAS Life news + testimonials, square outline for the SEO blog carousel at the bottom).
- **Interaction model:** click prev/next arrow → slide transitions to next/prev card (Swiper default: horizontal slide transition, ~300-500ms ease).
- Content is real and distinct per slide (verified full article title/excerpt list via page text extraction — see full list in PAGE_TOPOLOGY.md section 10; do not fabricate — reuse actual scraped titles/excerpts for the blog cards).
- Testimonials carousel content (3 known quotes, exact text captured):
  1. Khanh Nguyen Jennifer — Class of 2025 — "I joined TAS in my junior year, and the supportive teachers and welcoming community made a lasting impact. Through MUN with Mr. David, I gained confidence, leadership, and teamwork skills. What I value most is the strong sense of community where I always felt seen and supported."
  2. Samuel Nguyen — Class of 2025 — "I've studied at TAS for 7 years, and the teachers, especially Mr. Reede, Mr. Taka, and Mr. Andrew, have supported me far beyond academics. When choosing a university, I relied on alumni feedback for real insights. I committed to ASU and have no regrets!"
  3. Yeji Lee — Class of 2025 — "TAS transformed me from a shy, insecure student into someone confident in expressing myself through both English and art, thanks to the support of inspiring teachers and a community that always believed in me."

### 7. Newsletter / "Book a school tour" form
- Standard form inputs (Your Name, Email, Phone number), no client-side validation states observed without submitting (avoid triggering a real submission — do not submit the live form). Build as a controlled form with basic required-field validation; no real backend needed (mock submit handler per clone defaults).

## Click sweep
- Nav dropdown items (About, Academics, Admission, Our Faculty, TAS Life) — hover/click reveals a dropdown submenu (chevron icon rotates). Not deep-crawled (out of scope — homepage only per clone defaults); build as a simple dropdown shell using `>` chevron rotate on open, matching the mobile accordion pattern already captured.
- Language switcher (EN/KR/VN) — EN is active/underlined red by default; likely links to locale variants. Out of scope to implement real i18n; render as static links/no-op for the clone.
- "Learn more" / "Apply Now" / "Enroll Now" / "Book a tour" / "See More" buttons — all standard navigational CTAs to other pages; render as `<Link>`/`<a>` placeholders pointing to `#` or matching in-site paths, no special interaction beyond standard hover (background darkens slightly / outline fills).

## Hover sweep
- Solid buttons (red "Enroll Now", "Learn more", "Book a tour"): darken slightly on hover (approx 10% darker shade), transition ~0.2s.
- Outline buttons (white/navy outline, e.g. "Learn more about us", "Apply Now", "View Fees and Apply Now"): fill with their outline color on hover, text flips to white/contrasting, transition ~0.2s.
- Curriculum cards / facility gallery photos: subtle scale-up + shadow (standard card hover), not pixel-verified.

## Responsive sweep (1440 / 768 / 390)
- **1440px:** Full multi-column desktop layout as documented in PAGE_TOPOLOGY.md.
- **390px:** Confirmed via live mobile viewport (390x844) — single-column stacking throughout, hamburger nav → full-screen navy accordion overlay (About/Academics/Admission/Our Faculty/TAS Life, each with a chevron-down affordance, social icons + red CTA pinned at the bottom of the overlay). Marquees (awards ticker, university logos) remain horizontal full-bleed strips unaffected by column stacking.
- **768px (tablet):** not independently screenshotted — assume standard Webflow tablet behavior (breakpoint ~991px switches to hamburger nav per most Webflow builds; content stays 2-column longer than mobile but likely single-column below ~767px). Builders should test at 768px during QA and adjust `md:` Tailwind breakpoint stacking if it looks off compared to the live site.

## No dark mode
- Site has no dark mode variant — light theme only throughout.
