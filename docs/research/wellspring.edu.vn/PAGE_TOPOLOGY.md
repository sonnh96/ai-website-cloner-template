# Page Topology — wellspring.edu.vn (Homepage)

Framework: Next.js (React) with CSS Modules (class names like `homeHero_homeHero__kv3TO`), GSAP (ScrollTrigger `pin-spacer` detected) + AOS (`aos-init` class on certificate section). Fonts loaded via `next/font` (Mulish + Shantell Sans, hashed class names `__Mulish_xxx`, `__Shantell_Sans_xxx`).

## Order (top to bottom)

1. **Header** — `header_header__yuUqO`, `position: fixed`, height 119px (includes a dark-navy top utility bar + white main nav row). Toggles class `sticky-null` (scrollY === 0) ↔ `sticky-down` (scrollY > 0). No observable visual diff between the two states in this build (same height/shadow/bg) — implement the class-toggle hook but it's cosmetically a no-op today.
2. **Hero** — `homeHero_homeHero__kv3TO`, wrapped in a GSAP ScrollTrigger `pin-spacer` (spacer height ~2567px, hero content height 567px). Interaction model: **scroll-driven pin animation**. See BEHAVIORS.md for the full sequence.
3. **Section 1** — `homeSection1st_homeSection1st__yqtLC`. Autoplay/click-to-expand video (kids painting) + "Thành viên Cộng đồng Trường học Hạnh phúc thuộc tổ chức UNESCO" copy, UNESCO/Happy Schools logos, body copy, "Khám phá thêm" pill CTA.
4. **Section 2** — `homeSection2nd_homeSection2nd__rGNxF`. "Cùng nhau tạo dựng Trường học Hạnh phúc" — SDG stat cards (icon + % + label, e.g. "25% Thời lượng" with SDG-4 badge, "55%" with SDG-9 badge) plus a "Đầu tiên tại Việt Nam tham gia Cộng đồng Trường học Hạnh phúc của UNESCO" callout.
5. **Section 3** — `homeSection3rd_homeSection3rd__pU9L8`. "Cộng đồng WISers Hạnh Phúc" — acronym reveal: W-arm Hearts / I-nnovative Minds / S-haring Values / ers, each line paired with a hand-drawn icon (heart, lightbulb, flower, abstract shapes) and a photo. Ends with two pill buttons: "Cộng đồng Wellspring Hanoi" / "Cộng đồng Wellspring Saigon".
6. **Section 4** — `homeSection4th_homeSection4th__0YfUY`. "Khởi đầu Hành trình / Trưởng thành Hạnh phúc" — campus card carousel (Wellspring Hanoi / Wellspring Saigon, aerial campus photos with circular "WS" badge overlay, address text) with prev/next round arrow buttons.
7. **Section 5** — `homeSection5th_homeSection5th__kTGO8`. "Tin tức & Sự kiện" news grid — 3 (or more, carousel-like) cards, each: navy card with school/partner logos strip, graduation photo, headline, excerpt, "Du học" tag pill. "Khám phá thêm" CTA top-right.
8. **Section 6** — `homeSection6th_homeSection6th__mNTU5`. Final CTA — "Tham gia cộng đồng WISers Hạnh Phúc", copy inviting parents, photo of a student, two outlined pill buttons "Tư vấn tuyển sinh" / "Tham quan trường".
9. **Certificate strip** — `certificate_certificate__3ThAk` (outside `<main>`, `aos-init` class → AOS fade/slide-in on scroll). Light-blue background (`rgb(229,236,249)`). "Liên kết Quốc Tế" heading + row of partner/accreditation logos (CollegeBoard ×3 variants, WASC, Edmentum, Mizzou Academy).
10. **Footer** — `footer_footer__FN_tb`. Navy background (`rgb(15,45,83)`). Multi-column link groups (Về Wellspring / Tuyển sinh / Liên hệ / Chính sách bảo mật | Trường học Hạnh phúc / Triết lý giáo dục / Thông báo Công khai | Học phí & Chính sách / Học bổng & Khen thưởng / Câu hỏi thường gặp), then "CÁC CƠ SỞ WELLSPRING" with 3 campus contact blocks (Hanoi / Saigon / Saigon South — address, phone, hotline, email, social icons), then copyright bar.

## Layout notes
- Sticky/fixed: header only (`position: fixed`).
- Z-index layering: header sits above the pinned hero during the pin animation.
- Container: no single global max-width wrapper detected on section root; inner content appears constrained by per-section wrapper divs (to be confirmed per-component during extraction).
- Breakpoints found in stylesheets: `max-width: 480px` (mobile), `max-width: 768px` / `min-width: 768px` (tablet/desktop split), `min-width: 1440px`, `min-width: 1930px` (large desktop). Use these instead of default Tailwind breakpoints when matching layout shifts.

## Known tooling limitation
The sandboxed Chrome window in this environment could not be resized below ~1440px viewport width (resize_window calls succeeded but `window.innerWidth` stayed 1440). Mobile/tablet layouts were therefore inferred from the site's actual CSS media queries (above) rather than visually captured. Builders should implement mobile-first responsive Tailwind classes at the breakpoints above and we'll visually verify on real mobile viewport during Phase 5 QA using the built Next.js dev server instead.
