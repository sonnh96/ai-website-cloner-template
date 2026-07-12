# Section 5 — "Tin tức & Sự kiện" News Cards Specification

## Overview
- **Target file:** `src/components/HomeSection5.tsx`
- **Interaction model:** static grid/carousel of cards (the live site uses Swiper.js again; for this clone, a simple responsive CSS grid of 3 cards is sufficient — no carousel behavior is required since the "Khám phá thêm" link handles seeing more, and this section reads fine as a static 3-card row).

## DOM Structure
```
<section class="py-16 md:py-24">
  <div class="max-w-[1272px] mx-auto px-7">
    <div class="flex items-center justify-between mb-10">
      <h3 class="text-[36px] font-extrabold text-[#0F2D53]">Tin tức & Sự kiện</h3>
      <a href="#" class="rounded-full bg-[#EB5123] text-white px-6 py-3 text-sm font-medium">Khám phá thêm</a>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <NewsCard ... /> {/* x3 */}
    </div>
  </div>
</section>
```

Each NewsCard:
```
<article class="rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100">
  <div class="bg-[#0F2D53] p-4 flex items-center justify-between">
    {/* partner/program logo strip: small "Wellspring" + "Happy Journey" + "WASC" logos side by side, white/light versions */}
  </div>
  <div class="relative">
    <img src="<banner>" class="w-full h-[180px] object-cover" />
    {/* small graduation-cap icon badge + country flag icon overlaid top-right corner per screenshot */}
  </div>
  <div class="p-6">
    <p class="text-xs text-gray-400 mb-2">{date}</p>
    <h4 class="font-bold text-[#0F2D53] line-clamp-2 mb-2">{title}</h4>
    <p class="text-sm text-[#0F2D53]/70 line-clamp-2 mb-4">{excerpt}</p>
    <span class="inline-block rounded-full border border-[#0F2D53]/30 text-[#0F2D53] text-xs px-3 py-1">{tag}</span>
  </div>
</article>
```

## Visual details (from live-site inspection + screenshots)
- Section header row: "Tin tức & Sự kiện" heading left, orange pill "Khám phá thêm" button right, space-between layout.
- Each card: navy top banner strip with small white/light logos (Wellspring, "Happy Journey", WASC accreditation mark — decorative, low priority to get pixel-exact), then a photo (graduation portrait) with small corner badges (graduation cap icon + a small country flag, e.g. 🇺🇸/🇳🇱 depending on the story), then white content area: small gray date, bold navy headline (2-line clamp), muted excerpt (2-line clamp), and an outlined pill "tag" badge at the bottom (e.g. "Du học" = "Study Abroad").
- Card corner radius: large/soft (`rounded-2xl`), subtle shadow.

## Assets (already downloaded, use exactly these mappings)
1. Card 1 banner: `public/images/section5/news-banner-1.png`
2. Card 2 banner: `public/images/section5/news-banner-2.png`
3. Card 3 banner: `public/images/section5/news-banner-3.png`
- No separate assets exist for the navy logo strip inside each card or the small graduation-cap/flag corner badges — render these as simple placeholder text/icon treatments (e.g. small "WELLSPRING" wordmark + generic accreditation-mark dots) rather than chasing pixel-exact logos; they're minor decorative chrome, not the focal content.

## Text Content (verbatim — Vietnamese, do not translate)
1. Date: "11/06/2026"
   Title: "Từ cậu bé 4 tuổi mê Lego đến tấm vé vào Đại học Top 23 Thế giới: WISer trúng tuyển 09 trường Đại học tại Mỹ - Canada - Hà Lan"
   Excerpt (truncate to ~2 lines with `line-clamp-2`, full text available if useful): "Từ niềm yêu thích lego khi còn nhỏ, WISer Phùng Đức An - học sinh lớp 12 hệ Quốc tế Hoa Kỳ, trường Wellspring Hanoi không chỉ chinh phục nhiều giải thưởng Robotics trong nước và quốc tế mà còn "sở hữu" hồ sơ học tập ấn tượng..."
   Tag: "Du học"
2. Date: "11/06/2026"
   Title: "WISer tự học lập trình, trúng tuyển loạt đại học Mỹ với học bổng gần 10 tỷ đồng"
   Excerpt: "Từng nghĩ mình khó có cơ hội vào những trường đại học hàng đầu nước Mỹ, Phúc Khang với hồ sơ học thuật vững chắc..."
   Tag: "Du học"
3. Date: "11/06/2026"
   Title: "Vừa giành huy chương đấu kiếm Quốc gia, vừa sở hữu GPA 4.0 tuyệt đối: Nữ sinh Wellspring Hanoi chinh phục học bổng gần 9 tỷ đồng từ Đại học Mỹ"
   Excerpt: "Không chỉ duy trì điểm GPA tuyệt đối trong suốt những năm học bậc THPT, TOEFL iBT 111/120..."
   Tag: "Du học"
- Section CTA: "Khám phá thêm"

## Responsive Behavior
- **Desktop (1440px):** 3-column grid.
- **Mobile (<768px):** single column stack.
- **Breakpoint:** `768px` (`md:grid-cols-3`).
