# Section 4 — "Khởi đầu Hành trình / Trưởng thành Hạnh phúc" Campus Carousel Specification

## Overview
- **Target file:** `src/components/HomeSection4.tsx`
- **Interaction model:** click-driven carousel (prev/next arrow buttons). The live site uses Swiper.js (`swiper swiper-initialized swiper-horizon` classes detected in the DOM) — for this clone, DO NOT add the `swiper` npm dependency; implement an equivalent lightweight carousel with plain React state (`useState<number>` current index) + CSS transform/transition, since only 3 slides need to be cycled.

## DOM Structure
```
<section class="py-16 md:py-24">
  <div class="max-w-[1272px] mx-auto px-7">
    <h3><span>Khởi đầu Hành trình</span><br/><span class="text-[#EB5123] font-handwriting">Trưởng thành Hạnh phúc</span></h3>
    <div class="campus relative mt-10">
      <div class="carousel-track flex gap-8 transition-transform duration-500" style="transform: translateX(-{index*100}%)">
        <CampusCard ... /> {/* Hanoi */}
        <CampusCard ... /> {/* Saigon */}
        <CampusCard ... /> {/* Saigon South */}
      </div>
      <div class="controls flex justify-center gap-4 mt-8">
        <button aria-label="Previous" class="round-arrow-btn" disabled={index===0}>←</button>
        <button aria-label="Next" class="round-arrow-btn-solid">→</button>
      </div>
    </div>
  </div>
</section>
```

Each CampusCard (shows 2 cards side-by-side on desktop per the screenshot, i.e. this is a 2-up carousel not 1-up):
```
<div class="campus-card relative rounded-3xl overflow-hidden">
  <img src="<aerial-photo>" class="w-full h-[280px] object-cover" />
  <div class="absolute top-4 left-4 h-16 w-16 rounded-full bg-white p-2 shadow"> {/* circular "WS" campus badge/logo overlay */}
    <img src="<campus-logo>" />
  </div>
  <div class="p-6 bg-white">
    <p class="font-bold text-[#0F2D53]">{campusName}</p>
    <p class="text-sm text-[#0F2D53]/70 mt-1">{address}</p>
  </div>
</div>
```

## Computed Styles / visual details (from live-site inspection + screenshots)
- Heading: "Khởi đầu Hành trình" in navy Mulish bold, "Trưởng thành Hạnh phúc" in orange Shantell Sans handwriting font (`font-handwriting text-[#EB5123]`) underneath — same two-line heading pattern style as the hero's recap heading.
- Cards: large rounded corners (`rounded-2xl`/`rounded-3xl`), aerial/drone photo on top (tinted with a subtle warm overlay per the screenshot — the photos appeared with an orange/sepia tint wash), circular campus badge logo overlapping the top-left corner of the photo, campus name + address below in a white content area.
- Carousel controls: two round icon buttons below the cards — left/prev button appears disabled/greyed (light gray background, muted arrow) when at the first slide, right/next button is solid orange (`bg-[#EB5123]`) with a white arrow icon (use `ArrowRightIcon` from `src/components/icons.tsx`, mirrored/rotated 180° for the "prev" direction).
- Only 2 cards are visible in the viewport at once on desktop (per screenshots) even though there are 3 total campuses — implement as a 2-up carousel that slides by one card per click, disabling "prev" at index 0 and "next" at the last possible index (`slides.length - visibleCount`).

## Assets (already downloaded, use exactly these mappings)
1. **Wellspring Hanoi:** photo `public/images/section4/hanoi-campus-aerial.png`, logo badge `public/images/logos/wellspring-hanoi-logo.svg`, name "Wellspring Hanoi", address "Số 95, Phố Ái Mộ, Phường Bồ Đề, Hà Nội"
2. **Wellspring Saigon:** photo `public/images/section4/saigon-campus-aerial.jpg`, logo badge `public/images/logos/wellspring-saigon-logo.svg`, name "Trường TH – THCS – THPT Mùa Xuân (Wellspring Saigon)", address "Số 1 Đường D4, KDC Sài Gòn Pearl, 92 Nguyễn Hữu Cảnh, Phường Thạnh Mỹ Tây, TP. Hồ Chí Minh"
3. **Wellspring Saigon South:** photo `public/images/section4/campus-doddle.png`, logo badge `public/images/logos/wellspring-saigon-south-logo.png`, name "Wellspring Saigon South", address "Ngã Tư đường U và Phạm Thái Bường, Phường Tân Hưng, TP. Hồ Chí Minh (VP đại diện: Căn số 13, Tầng trệt, Riverpark Residence)"

## Text Content (verbatim)
- Heading: "Khởi đầu Hành trình" / "Trưởng thành Hạnh phúc"
- Card data: see Assets section above (names/addresses verbatim)

## Responsive Behavior
- **Desktop (1440px):** 2 cards visible per view, carousel advances by 1.
- **Mobile (<768px):** 1 card visible per view (full-width), carousel advances by 1. Not visually confirmed live (tooling limitation) but standard responsive carousel convention.
- **Breakpoint:** `768px`.
