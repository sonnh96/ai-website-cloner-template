# Section 1 — UNESCO Happy School Intro Specification

## Overview
- **Target file:** `src/components/HomeSection1.tsx`
- **Interaction model:** static content + one click-driven "read more/less" text toggle
- **Site-wide container note:** this section's content wrapper uses `max-width: 1272px` with `padding: 0 28px 50px` — treat 1272px as the standard content container max-width for all homepage sections unless a spec says otherwise.

## DOM Structure
```
<section class="py-16 md:py-24">          {/* homeSection1st, sits right after the Hero unpins */}
  <div class="wrap flex flex-col md:flex-row gap-x-12 max-w-[1272px] mx-auto px-7 pb-[50px]">
    <div class="left-column w-full md:w-[598px]">
      <h3>
        <span>Thành viên</span> {/* actually one span, see Text Content below for exact structure */}
        Cộng đồng Trường học Hạnh phúc
        thuộc tổ chức UNESCO
      </h3>
      <img alt="happy school" />  {/* side-by-side UNESCO logo + "Happy Schools! A Framework for Learner Well-being" logo, single combined image */}
      <div class="description">
        <div class="text-content line-clamp-3 collapsed">
          <b>“Trường học Hạnh phúc"</b> ... <b>Cộng đồng Trường học Hạnh phúc</b> ... (see verbatim below)
        </div>
        <button class="toggle-button">Xem thêm</button>  {/* Read more/less toggle */}
      </div>
      <a href="/gioi-thieu" class="cta-pill">Khám phá thêm</a>
    </div>
    <div class="right-column flex-1">
      {/* Decorative hand-drawn illustration: colorful city/campus buildings with a bicycle, clouds, dashed path lines (see screenshot) */}
      <svg><!-- decorative mask/illustration graphic, see Assets --></svg>
      <div class="school-icon"><svg><!-- clipPath-based icon --></svg></div>
    </div>
  </div>
</section>
```

## Computed Styles (exact values)
- Content wrap: `display: flex` (row on desktop, stack on mobile), `max-width: 1272px`, `padding: 0px 28px 50px`
- `h3`: fontSize 36px, fontWeight 800, color `#0F2D53`, lineHeight 46.8px, fontFamily Mulish
- Description text (`.ws-b-cus-desc`): fontSize 16px, color `#0F2D53`, lineHeight 24.8px
- Left column measured width: 598px (roughly half the 1272px container minus gap)
- CTA "Khám phá thêm": render as the site's standard orange pill button (`background: #EB5123; color: white; border-radius: 100px; font-size 14px; font-weight 500; padding: 12px 24px`) — matches the same pill style used everywhere else on the page (the raw computed style captured on the `<a>` itself showed browser-default link styling, meaning the actual visual button style lives on an inner span/button; use the established pill-button convention directly).

## States & Behaviors

### Read more / read less toggle (INTERACTION MODEL: click-driven)
- **Trigger:** click on "Xem thêm" button
- **State A (collapsed, default):** description text has `line-clamp-3` (clipped to 3 lines with ellipsis), button label "Xem thêm" ("Read more")
- **State B (expanded):** click reveals full text (no line-clamp), button label should toggle to something like "Thu gọn" ("Collapse") — the exact toggled label wasn't directly captured but this is the standard convention for this toggle-button pattern; implement a simple `useState` boolean flipping `line-clamp-3` on/off and the button label between "Xem thêm" / "Thu gọn".
- **Transition:** none required (instant clip toggle is fine, standard for this pattern), or a simple height transition if easy to implement with CSS Grid rows trick — not required for a faithful clone.

### Illustration
- Static, decorative. No interaction observed. Contains SVG `<mask>` and `<clipPath>` elements internally (site-authored decorative graphic) — for the clone, recreate the visual (colorful low-poly campus building illustration with bicycle + clouds + dashed curved path lines in the site's orange accent color) as a static image or a simplified hand-authored SVG; pixel-exact recreation of the original mask/clipPath internals is not required, only the visual outcome.

## Assets
- `public/images/section1/decor-illustration.svg` — downloaded decorative illustration asset (verify it matches the right-column graphic when you open it; if it's a different piece of art than the building/bicycle illustration, use it wherever it visually fits and note the discrepancy).
- UNESCO / "Happy Schools" combined logo image referenced via `alt="happy school"` — was not individually downloaded as a separate file (it's likely embedded in a different section2 asset or needs a placeholder). Use a simple side-by-side "UNESCO" wordmark + "Happy Schools! A Framework for Learner Well-being" wordmark rendered as styled text/logo placeholders if no exact asset is available.

## Text Content (verbatim)
- Heading: "Thành viên" (smaller weight, navy) then bold "Cộng đồng Trường học Hạnh phúc" then "thuộc tổ chức UNESCO" — rendered together as one heading block, roughly: **Thành viên Cộng đồng Trường học Hạnh phúc thuộc tổ chức UNESCO** (bold on "Cộng đồng Trường học Hạnh phúc")
- Body copy (full, verbatim):
  > Dự án "Trường học Hạnh phúc" được UNESCO khởi xướng và dẫn dắt từ năm 2014. Tháng 1/2022, Wellspring tự hào là thành viên chính thức đầu tiên tại Việt Nam gia nhập Cộng đồng Trường học Hạnh phúc thế giới. Đây là khởi đầu đầy hứng khởi trong hành trình cùng nhau xây dựng và trải nghiệm môi trường học tập vì sự trưởng thành hạnh phúc của cộng đồng WISers.
  (Note: "Trường học Hạnh phúc" and "Cộng đồng Trường học Hạnh phúc" appear bolded (`<b>`) within the body copy per the live DOM.)
- Toggle button: "Xem thêm" (collapsed) / "Thu gọn" (expanded, inferred)
- CTA button: "Khám phá thêm" → links to `/gioi-thieu` (use `href="#"` for this homepage-only clone, or keep `/gioi-thieu` as a dead link — either is fine since it's out of scope)

## Responsive Behavior
- **Desktop (1440px):** two-column flex row, left column ~598px fixed-ish width, right column illustration fills remaining space.
- **Tablet (768px):** likely stacks or narrows; not visually confirmed (tooling limitation) — use `md:flex-row flex-col` stacking below 768px as the standard pattern.
- **Mobile (390px):** single column stack, illustration below or above text, full-width.
- **Breakpoint:** `768px`.
