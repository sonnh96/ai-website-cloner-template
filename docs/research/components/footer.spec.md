# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** static links + hover states on social icons

## DOM Structure
```
<footer class="bg-[#0F2D53] text-white pt-16 pb-8">
  <div class="max-w-[1272px] mx-auto px-7">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-white/10">
      <FooterLinkColumn links={["Về Wellspring", "Tuyển sinh", "Liên hệ", "Chính sách bảo mật"]} />
      <FooterLinkColumn links={["Trường học Hạnh phúc", "Triết lý giáo dục", "Thông báo Công khai"]} />
      <FooterLinkColumn links={["Học phí & Chính sách", "Học bổng & Khen thưởng", "Câu hỏi thường gặp"]} />
    </div>
    <div class="pt-12">
      <h4 class="uppercase font-bold tracking-wide mb-8">Các cơ sở Wellspring</h4>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <CampusContact ... /> {/* Hanoi */}
        <CampusContact ... /> {/* Saigon */}
        <CampusContact ... /> {/* Saigon South */}
      </div>
    </div>
    <div class="mt-12 pt-6 border-t border-white/10 text-sm text-white/60">
      © Copyright 2025 Wellspring International Bilingual Schools. All Rights Reserved.
    </div>
  </div>
</footer>
```

Each CampusContact:
```
<div>
  <h5 class="font-bold mb-3">{name}</h5>
  <p class="text-sm text-white/80 mb-1">Địa chỉ: {address}</p>
  {vpAddress && <p class="text-sm text-white/80 mb-1"><b>VP Đại diện:</b> {vpAddress}</p>}
  {telephone && <p class="text-sm text-white/80 mb-1">Telephone: {telephone}</p>}
  <p class="text-sm text-white/80 mb-1">Hotline: {hotline}</p>
  <p class="text-sm text-white/80 mb-3">Email: {email}</p>
  <div class="flex gap-3">
    {socialLinks.map(s => <a href={s.href}><SocialIcon /></a>)}
  </div>
</div>
```

## Computed Styles
- Footer background: `#0F2D53` (navy), white text throughout.
- Link columns: simple vertical stacks, `~16px` gap between links, `text-white/90` default, hover → white/orange underline.
- Campus heading "CÁC CƠ SỞ WELLSPRING": uppercase, bold, letter-spacing wide, smaller size (~14-16px).
- Social icons: small circular icon buttons (~32px), muted white/gray icon color, standard hover brighten.

## Assets
- Social icons (already downloaded): `public/images/social/facebook.svg`, `public/images/social/youtube.svg`, `public/images/social/linkedin.svg`, `public/images/social/zalo.svg`.
- Wellspring Hanoi has an extra 5th social icon in the live screenshot (Zalo, appearing between LinkedIn and a duplicate) — use all 4 available icons for Hanoi (Facebook, YouTube, LinkedIn, Zalo, +1 more LinkedIn-looking icon seen in screenshot — treat as Facebook/YouTube/LinkedIn/Zalo, 4 icons, for all three campuses' social rows unless a campus clearly has fewer, per data below).

## Text Content (verbatim)

### Link columns
1. "Về Wellspring", "Tuyển sinh", "Liên hệ", "Chính sách bảo mật"
2. "Trường học Hạnh phúc", "Triết lý giáo dục", "Thông báo Công khai"
3. "Học phí & Chính sách", "Học bổng & Khen thưởng", "Câu hỏi thường gặp"

### Campus contacts
1. **WELLSPRING HANOI**
   - Địa chỉ: Số 95, Phố Ái Mộ, Phường Bồ Đề, Hà Nội
   - Telephone: +84 24 7305 8668 | Fax: +84 24 730 22 555
   - Hotline: 0973 759 229
   - Email: tuyensinh@wellspring.edu.vn
   - Social: Facebook, YouTube, LinkedIn, Zalo (4 icons)
2. **WELLSPRING SAIGON**
   - Địa chỉ: Số 1 Đường D4, KDC Sài Gòn Pearl, 92 Nguyễn Hữu Cảnh, Phường Thạnh Mỹ Tây, TP. Hồ Chí Minh
   - Telephone: +84 28 3840 9292
   - Hotline: 09 37 09 9229
   - Email: admissions@wellspringsaigon.edu.vn
   - Social: Facebook, YouTube, LinkedIn (3 icons)
3. **WELLSPRING SAIGON SOUTH**
   - Địa chỉ: Số 220 Hà Huy Tập, Khu đô thị Phú Mỹ Hưng, Phường Tân Hưng, TP. Hồ Chí Minh
   - VP Đại diện: Căn số 13, Tầng trệt, Riverpark Residence (Lô H18), đường Phạm Văn Nghị, Phường Tân Hưng, TP. Hồ Chí Minh, Việt Nam
   - Hotline: 0917 409 229
   - Email: admissions.sgs@wellspringsaigon.edu.vn
   - Social: Facebook (1 icon)

### Copyright bar
"© Copyright 2025 Wellspring International Bilingual Schools. All Rights Reserved."

## Responsive Behavior
- **Desktop (1440px):** 3-column link grid, 3-column campus grid.
- **Mobile (<768px):** stack all columns to single column.
- **Breakpoint:** `768px`.
