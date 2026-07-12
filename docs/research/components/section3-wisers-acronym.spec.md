# Section 3 — "Cộng đồng WISers Hạnh Phúc" (Acronym) Specification

## Overview
- **Target file:** `src/components/HomeSection3.tsx`
- **Interaction model:** static content (AOS fade-in on scroll), 2 CTA pill links at the bottom

## DOM Structure
```
<section class="py-16 md:py-24">
  <div class="max-w-[1272px] mx-auto px-7">
    <h3><span>WISers Hạnh Phúc</span></h3>  {/* full heading is "Cộng đồng WISers Hạnh Phúc" — "Cộng đồng" likely a preceding line/span not captured in this span alone */}
    <div class="content flex flex-col md:flex-row gap-12">
      <div class="image-wrap relative">
        <img class="main-image" src="wisers-photo.png" alt="WISers" />
        <svg><!-- decorative dashed-line connector, orange stroke --></svg>
      </div>
      <div class="main-text flex-1">
        <p class="description ws-b-cus-desc">Wellspring tự hào về những WISers hạnh phúc với trái tim yêu thương, tư duy đổi mới, không ngừng sáng tạo, đồng thời thấu hiểu, lan tỏa và cùng nhau hành động vì những giá trị tích cực cho cộng đồng và xã hội.</p>
        <div class="list-wrap">
          <svg class="dashedline-animation" /> {/* decorative connector */}
          <div class="text-list">
            <AcronymLine letter="W" rest="arm Hearts" translation="(Trái tim yêu thương)" icon="heart" />
            <AcronymLine letter="I" rest="nnovative Minds" translation="(Tư duy đổi mới)" icon="lightbulb" />
            <AcronymLine letter="S" rest="haring Values" translation="(Chia sẻ Giá trị tích cực)" icon="flower" />
            <AcronymLine letter="" rest="ers" translation="" icon="abstract-shapes" />
          </div>
          <div class="button-group flex gap-4">
            <a href="#" class="cta-pill-outline">Cộng đồng Wellspring Hanoi</a>
            <a href="#" class="cta-pill-outline">Cộng đồng Wellspring Saigon</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Computed Styles (exact values, from live inspection)
- Each acronym line's first letter (W/I/S): large display letter, ~64-80px, bold, colored — from the screenshot: "W" is orange (`#EB5123`), "I" is a warm amber/gold, "S" is teal/green, "ers" is navy (`#0F2D53`) — each acronym letter uses a DIFFERENT accent color (rotating through the site's decorative palette: orange, amber, teal, navy)
- Rest-of-word + translation text: navy (`#0F2D53`), rest-of-word in a large-ish weight (~32-40px) matching the letter's baseline, translation "(Trái tim yêu thương)" etc. in a smaller regular-weight gray/navy, same line
- Icons next to each line: small hand-drawn style icons (heart outline, lightbulb, flower/abstract flower shape, two abstract blob shapes for "ers") — orange-toned line-art style matching the site's decorative illustration aesthetic
- CTA buttons "Cộng đồng Wellspring Hanoi" / "Cộng đồng Wellspring Saigon": from the screenshot these render as solid orange pill buttons (`background: #EB5123; color: white; border-radius: 100px`), NOT outlined — same convention as other CTA pills across the site (correcting the DOM-structure sketch above, which labeled them "outline" — use solid orange fill matching the established pill-button convention)

## Assets
- `public/images/section3/wisers-photo.png` — the photo (kids in a science classroom with a teacher, holding up a flask) on the left/image side.
- No exact icon assets were downloaded for the 4 acronym icons (heart/lightbulb/flower/abstract-shapes) — use `lucide-react` icons as a reasonable substitute: `Heart`, `Lightbulb`, `Flower2`, and a generic `Sparkles` or two small abstract shapes for "ers", each styled in a thin/soft line-art way (stroke width ~1.5, sized ~48-64px) consistent with the site's friendly, hand-drawn aesthetic. Exact bespoke hand-drawn icon art is not required for a faithful clone.

## Text Content (verbatim)
- Heading: "Cộng đồng WISers Hạnh Phúc" (bold navy "Cộng đồng", then "WISers Hạnh Phúc" — treat as one heading, styling split however reads best; the captured DOM only exposed a wrapping `<span>WISers Hạnh Phúc</span>`)
- Description: "Wellspring tự hào về những WISers hạnh phúc với trái tim yêu thương, tư duy đổi mới, không ngừng sáng tạo, đồng thời thấu hiểu, lan tỏa và cùng nhau hành động vì những giá trị tích cực cho cộng đồng và xã hội."
- Acronym lines (letter bold+colored, rest normal weight, translation in parens, smaller/lighter):
  1. "W" + "arm Hearts" + "(Trái tim yêu thương)"
  2. "I" + "nnovative Minds" + "(Tư duy đổi mới)"
  3. "S" + "haring Values" + "(Chia sẻ Giá trị tích cực)"
  4. "ers" (no letter/translation, just closes out the acronym "WISers")
- Buttons: "Cộng đồng Wellspring Hanoi", "Cộng đồng Wellspring Saigon" (both `href="#"` for this homepage-only clone)

## Responsive Behavior
- **Desktop (1440px):** image left, text content right, side by side.
- **Mobile (<768px):** stack to single column, image above text, acronym lines remain stacked vertically (they already are), buttons stack or wrap.
- **Breakpoint:** `768px`.
