# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Screenshot:** `docs/design-references/wellspring.edu.vn/header-desktop.png` (top of homepage screenshot)
- **Interaction model:** scroll-driven class toggle (cosmetically inert today) + click-driven mega-menu dropdowns

## DOM Structure
```
<header class="fixed top-0 w-full z-50"> (height 119px total, position: fixed)
  <div class="top-bar">              // navy bar, height 37px, bg #0F2D53
    <nav>                            // right-aligned
      <DropdownLink>Góc phụ huynh</DropdownLink>
      <DropdownLink>Cửa hàng</DropdownLink>
      <DropdownLink>Tuyển dụng</DropdownLink>
      <Divider>|</Divider>
      <LanguageFlagIcon />           // small circular flag icon (vi/en toggle)
      <SearchIconButton />           // white search icon, opens search (not tested further)
    </nav>
  </div>
  <div class="main-row">             // white bg, height 81px
    <Logo href="/" />                // wellspring-logo.png, rendered ~140x64px
    <nav class="center">
      <NavLink active>Trang chủ</NavLink>
      <NavLinkWithDropdown>Về Wellspring</NavLinkWithDropdown>
      <NavLinkWithDropdown>Tuyển sinh</NavLinkWithDropdown>
    </nav>
    <Button variant="pill-orange">Liên hệ</Button>
  </div>
  <MegaMenuPanel />                  // full-width panel, appears below header when a NavLinkWithDropdown is active
</header>
```

## Computed Styles (exact values from getComputedStyle)

### Top utility bar
- backgroundColor: rgb(15, 45, 83) — `#0F2D53`
- height: 37px
- fontSize: 16px (links render smaller ~14px via their own class, but bar itself reports 16px base)
- color: white text on navy
- layout: flex, justify-content: flex-end, links right-aligned with `chevron-down` icon (12-14px, white) next to each, separated by roughly 24-32px gaps

### Main row
- backgroundColor: white (transparent computed, but visually white — the header's own background is white)
- height: 81px
- Logo: rendered size ~140×64px (source is a wide rectangular PNG logo — flame icon + "WELLSPRING / INTERNATIONAL BILINGUAL SCHOOLS" wordmark)
- Nav links: fontFamily Mulish, fontSize 14px, fontWeight 500, color #000 (inactive) / `#EB5123` orange with an orange underline (border-bottom ~2px solid) for the active "Trang chủ" link
- Dropdown chevron: 24×24 `ChevronDownIcon`, rotates 180° when menu open (standard convention, not directly measured)
- "Liên hệ" button: backgroundColor #EB5123, color white, borderRadius 100px (fully pill), fontSize 14px, fontWeight 500, padding ~12px 24px

### Mega-menu panel (opens on click of "Về Wellspring" or "Tuyển sinh")
- Full width, white background, appears directly below header, top border `1px solid #eee`
- 3-column layout on desktop:
  - **Col 1 (sidebar, ~220px):** bold list of related site/campus links, each row has a small right-chevron icon; first item highlighted in orange with underline (currently active section)
  - **Col 2:** a heading (orange, e.g. "Giới thiệu" / "Tuyển sinh") followed by a plain list of sub-links (dark navy text, ~16px, generous 12-16px vertical spacing)
  - **Col 3 (repeat for wide menus):** another heading + list, e.g. "Thành tích tiêu biểu", "Tin tức", or "Đăng ký Tuyển sinh 2026-2027" with per-campus links
- **"Về Wellspring" menu content:**
  - Sidebar: Wellspring / Wellspring Hanoi / Wellspring Saigon / Wellspring Saigon South
  - Col 2 "Giới thiệu": Triết lý giáo dục, Hành trình Hạnh Phúc
  - Col 3 "Thành tích tiêu biểu" (no sub-items visible), "Tin tức" (no sub-items visible)
- **"Tuyển sinh" menu content:**
  - Sidebar: Tuyển sinh / Học bổng & Khen thưởng
  - Col 2 "Tuyển sinh": Sự kiện tuyển sinh, Biểu phí và chính sách ưu đãi, Câu hỏi thường gặp
  - Col 3 "Đăng ký Tuyển sinh 2026-2027": Wellspring Saigon, Wellspring Saigon South, Wellspring Hanoi
- For this homepage clone, implement the mega-menu with this real content (it's genuinely part of the header chrome) but sub-navigation links can point to `#` placeholders since those pages are out of scope.

## States & Behaviors

### Scroll state class toggle
- **Trigger:** `window.scrollY === 0` vs `> 0`
- **State A (top):** header carries class `sticky-null`
- **State B (scrolled):** header carries class `sticky-down`
- **Transition:** none observed (no visual diff measured between states in the live site)
- **Implementation approach:** a simple scroll listener toggling a data attribute/class; do not invent extra shadow/shrink behavior since none was observed — keep it a harmless hook.

### Mega-menu open/close
- **Trigger:** click on "Về Wellspring" or "Tuyển sinh" (chevron rotates); click elsewhere or Escape closes
- **Transition:** treat as a standard fade + slide-down, ~150-200ms ease-out (not precisely measured)

### Hover
- Top-bar links and main-nav links: standard color shift on hover (navy → orange), transition ~150ms

## Assets
- Logo: `public/images/logos/wellspring-logo.png`
- Icons: `ChevronDownIcon`, `SearchIcon` from `src/components/icons.tsx`
- Language flag icons: small circular flag images (vi/en) — not downloaded (low priority, session/locale-specific); render as simple colored circle placeholders or omit if out of scope.

## Text Content (verbatim)
- Top bar: "Góc phụ huynh", "Cửa hàng", "Tuyển dụng"
- Main nav: "Trang chủ", "Về Wellspring", "Tuyển sinh"
- CTA button: "Liên hệ"
- Mega-menu content: see above (verbatim Vietnamese labels)

## Responsive Behavior
- **Desktop (1440px):** as described above, full mega-menu columns.
- **Tablet (768px):** collapse mega-menu columns to a stacked list (single column) or keep 2 columns; standard responsive mega-menu behavior.
- **Mobile (390px):** collapse to a hamburger icon (top-right, replacing the nav links + Liên hệ button) opening a full-height slide-in/overlay drawer with the same nav items stacked vertically and accordions for the dropdown sections. This was not visually confirmed live (see PAGE_TOPOLOGY.md tooling limitation) — implement the standard hamburger + drawer pattern.
- **Breakpoint:** switch to mobile nav at `768px` per the site's own media queries.
