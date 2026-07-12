# Section 2 — "Cùng nhau tạo dựng Trường học Hạnh phúc" (SDG Stats) Specification

## Overview
- **Target file:** `src/components/HomeSection2.tsx`
- **Interaction model:** static (AOS fade-in on scroll only, no click/hover logic needed beyond default)

## DOM Structure
```
<section class="py-16 md:py-24">
  <div class="homeSection2nd-row flex gap-12 max-w-[1272px] mx-auto px-7">
    <div class="left-column w-full md:w-[400px] shrink-0">
      <h3>Cùng nhau tạo dựng<br/>Trường học Hạnh phúc</h3>
      <p class="description ws-b-cus-desc">Trường học Hạnh phúc Wellspring nuôi dưỡng well-being thông qua chăm sóc sức khoẻ tinh thần, cảm xúc xã hội, và sự phát triển toàn diện của mỗi thành viên trong Cộng đồng WISers.</p>
    </div>
    <div class="right-column flex-1 grid grid-cols-2 gap-12">
      <StatCard icon="sdg-03-good-health.svg" value="Đầu tiên" label="Trường học" desc="tại Việt Nam tham gia vào Cộng đồng Trường học Hạnh Phúc của UNESCO" />
      <StatCard icon="sdg-04-quality-education.svg" value="25%" label="Thời lượng" desc="sinh hoạt & học tập nhằm phát triển tài năng, nâng cao sức khoẻ thể chất và tinh thần cho WISers" />
      <StatCard icon="decor-illustration-1.svg" value="55%" label="diện tích" desc="trường dành cho không gian mở và cây xanh (Wellspring Hanoi)" />
      <StatCard icon="decor-illustration-2.svg" value="24+" label="dự án cộng đồng" desc="được thực hiện bởi tập thể WISers từ năm 2022 đến nay" />
    </div>
  </div>
</section>
```

## Computed Styles (exact values)
- `.homeSection2nd-row`: `display: flex; gap: 48px` (right-column stat cards use a 2×2 grid internally per the visual reference — screenshots show cards laid out with generous spacing and decorative dashed connector lines between them)
- Heading style matches other section h3s: fontSize ~36px, fontWeight 800, color `#0F2D53`
- Description: fontSize 16px, color `#0F2D53`ish, lineHeight ~24.8px (same `.ws-b-cus-desc` class as Section 1)
- Stat card value (e.g. "25%", "55%", "24+", "Đầu tiên"): large bold display number, orange (`#EB5123`) per the screenshot (e.g. "25%" rendered large and orange), label directly under it in a teal/green accent color per screenshot (e.g. "Thời lượng" in a muted teal), then a smaller gray/navy description line below.
- Decorative dashed curved lines (SVG `.dashedline-animation` class, orange stroke `#EB5123`) connect/surround the stat cards — animate their `stroke-dashoffset` from full to 0 as they scroll into view (draw-in effect), reasonable default ~1-1.5s ease-out.

## Assets (already downloaded, use exactly these mappings)
- Stat 1 ("Đầu tiên" / "Trường học"): `public/images/section2/sdg-03-good-health.svg`
- Stat 2 ("25%" / "Thời lượng"): `public/images/section2/sdg-04-quality-education.svg`
- Stat 3 ("55%" / "diện tích"): `public/images/section2/decor-illustration-1.svg`
- Stat 4 ("24+" / "dự án cộng đồng"): `public/images/section2/decor-illustration-2.svg`

## Text Content (verbatim)
- Heading: "Cùng nhau tạo dựng" (line 1) / "Trường học Hạnh phúc" (line 2, via `<br/>`)
- Description: "Trường học Hạnh phúc Wellspring nuôi dưỡng well-being thông qua chăm sóc sức khoẻ tinh thần, cảm xúc xã hội, và sự phát triển toàn diện của mỗi thành viên trong Cộng đồng WISers."
- Stat cards (value / label / description):
  1. "Đầu tiên" / "Trường học" / "tại Việt Nam tham gia vào Cộng đồng Trường học Hạnh Phúc của UNESCO"
  2. "25%" / "Thời lượng" / "sinh hoạt & học tập nhằm phát triển tài năng, nâng cao sức khoẻ thể chất và tinh thần cho WISers"
  3. "55%" / "diện tích" / "trường dành cho không gian mở và cây xanh (Wellspring Hanoi)"
  4. "24+" / "dự án cộng đồng" / "được thực hiện bởi tập thể WISers từ năm 2022 đến nay"

## Responsive Behavior
- **Desktop (1440px):** left column (heading+desc) + right column 2×2 stat grid, side by side.
- **Mobile (<768px):** stack to single column; stat grid likely becomes 1 or 2 columns (use `grid-cols-2` down to small mobile, or `grid-cols-1` under ~480px).
- **Breakpoint:** `768px`.
