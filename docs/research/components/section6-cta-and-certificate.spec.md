# Section 6 (Final CTA) + Certificate Strip Specification

Two small, adjacent components — build both as separate files in one pass since each is small.

---

## Component A: Final CTA — "Tham gia cộng đồng WISers Hạnh Phúc"

- **Target file:** `src/components/HomeSection6.tsx`
- **Interaction model:** static content, 2 CTA buttons

### DOM Structure
```
<section class="py-16 md:py-24">
  <div class="max-w-[1272px] mx-auto px-7">
    <div class="relative rounded-3xl overflow-hidden bg-[#0F2D53] flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
      <div class="flex-1 text-white z-10">
        <h3 class="text-3xl font-extrabold mb-4">Tham gia cộng đồng WISers Hạnh Phúc</h3>
        <p class="mb-8 opacity-90">Cảm ơn quý Phụ huynh đã đến với Wellspring. Mời Quý Phụ huynh khởi đầu Hành trình Trưởng thành Hạnh phúc cùng con và trải nghiệm môi trường học tập well-being tại Wellspring.</p>
        <div class="flex flex-wrap gap-4">
          <a href="#" class="rounded-full border-2 border-white text-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-[#0F2D53] transition">Tư vấn tuyển sinh</a>
          <a href="#" class="rounded-full border-2 border-white text-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-[#0F2D53] transition">Tham quan trường</a>
        </div>
      </div>
      <div class="flex-1 relative h-[280px] w-full">
        <img src="/images/section6/cta-photo.jpeg" alt="cta card" class="object-cover rounded-2xl w-full h-full" />
      </div>
      {/* decorative bird-shaped origami SVG icon overlapping the top-left corner, per screenshot */}
    </div>
  </div>
</section>
```

### Visual details
- Card background: solid navy `#0F2D53`, large rounded corners, generous padding.
- CTA buttons: OUTLINED style here (white border + white text on the navy card background), NOT solid orange — this is a deliberate contrast from the site's usual orange-fill pill convention because the card itself is already navy. Hover fills white bg + navy text.
- Decorative orange origami-style bird/paper-plane icon in the top-left corner area (seen in screenshot as an angular folded-paper bird shape) — optional polish, can be a simple SVG shape or omitted if it overcomplicates the component.

### Assets
- `public/images/section6/cta-photo.jpeg`

### Text (verbatim)
- Heading: "Tham gia cộng đồng WISers Hạnh Phúc"
- Body: "Cảm ơn quý Phụ huynh đã đến với Wellspring. Mời Quý Phụ huynh khởi đầu Hành trình Trưởng thành Hạnh phúc cùng con và trải nghiệm môi trường học tập well-being tại Wellspring."
- Buttons: "Tư vấn tuyển sinh", "Tham quan trường"

### Responsive
- Desktop: image + text side by side. Mobile (<768px): stack, image below text. Breakpoint `768px`.

---

## Component B: Certificate / Partner Logos Strip — "Liên kết Quốc Tế"

- **Target file:** `src/components/CertificateStrip.tsx`
- **Interaction model:** AOS fade-in on scroll into view (class `aos-init` observed); the live site duplicates the 5 logos back-to-back (10 total `<img>` tags, same 5 logos repeated twice) — this strongly suggests an infinite auto-scrolling marquee. Implement as a CSS-only infinite horizontal marquee (duplicate the logo list once, animate `translateX` from `0` to `-50%` linearly on an infinite loop, ~20-30s duration, pause on hover) rather than a static row.

### DOM Structure
```
<section class="py-12" style="background:#E5ECF9">
  <div class="max-w-[1272px] mx-auto px-7 text-center">
    <h3 class="text-2xl font-bold text-[#0F2D53] mb-8">Liên kết Quốc Tế</h3>
    <div class="overflow-hidden">
      <div class="flex gap-16 items-center animate-marquee w-max">
        {/* logos array rendered TWICE back to back for seamless loop */}
      </div>
    </div>
  </div>
</section>
```

### Assets (already downloaded, use exactly these — in this order)
1. `public/images/partners/collegeboard-1.png`
2. `public/images/partners/collegeboard-2.png`
3. `public/images/partners/collegeboard-3.png`
4. `public/images/partners/edmentum-mizzou.png`
5. `public/images/partners/wasc.png`

### Visual details
- Background: light blue tint `#E5ECF9` (same as `--secondary` token).
- Heading centered, bold navy.
- Logos: grayscale-ish/muted appearance is common for "trusted by" strips, but the screenshot showed full-color logos — render at full color, height ~40-48px, generous horizontal gaps (~64px).
- Add the `animate-marquee` keyframe to `globals.css` if it doesn't already exist:
```css
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.animate-marquee { animation: marquee 25s linear infinite; }
.animate-marquee:hover { animation-play-state: paused; }
```

### Text (verbatim)
- Heading: "Liên kết Quốc Tế"

### Responsive
- Marquee works the same at all breakpoints (logos just wrap/scroll continuously); reduce gap to ~32px and logo height to ~32px on mobile (<768px).
