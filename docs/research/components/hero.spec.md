# Hero Specification

## Overview
- **Target file:** `src/components/Hero.tsx`
- **Interaction model:** scroll-driven pin animation (GSAP ScrollTrigger `pin: true, scrub: true`) — NOT click-driven, NOT autoplay-only. The whole effect is scrubbed 1:1 with scroll position over roughly 2500px of scroll distance, then the section unpins and normal document flow resumes into Section 1.

## DOM Structure (from live site)
```
<section class="hero"> (h ~567px at rest, becomes GSAP-pinned)
  <div class="video-container-wrapper">
    <div class="video-wrapper">                 // 1440x551 at rest, overflow:hidden
      <video autoPlay loop muted playsInline>    // Hero_updated.mp4, 1280x720 source
        <source src=".../hero-video.mp4" type="video/mp4" />
      </video>
      <a class="video-watching-full">            // circular play icon + label, bottom-center over video
        <img /> {/* small circular icon button, camera/play glyph */}
        <span>Xem trọn vẹn bộ phim</span>          {/* "Watch the full film" */}
      </a>
    </div>
    <div class="text-intro">
      <h4><span>WELLSPRING</span></h4>            {/* fontSize 36px... but see note below, this is the SMALL top line during pin; the giant wordmark is a separate larger heading rendered at rest, see Stage A below */}
      <h5>TRƯỜNG HỌC HẠNH PHÚC</h5>
    </div>
  </div>
  <div class="scroll-to">
    <span>Cuộn để khám phá</span>
    <ScrollHintArrowIcon />
  </div>
</section>
```

Note: at true rest (scrollY=0, before any pin scrub has started) the DOM order/measurement above reflects the *settled* state — but the FIRST thing a visitor sees (per the initial screenshot, before scrolling) is actually: a small navy line "Chào mừng quý Phụ huynh đến với" above a giant bold wordmark "WELLSPRING" (much larger than 36px — visually spans the full 1440px container width, so estimate ~140-160px/clamp() responsive display type), with "TRƯỜNG HỌC HẠNH PHÚC" in the 48px orange Shantell Sans handwriting font underneath, and the "Cuộn để khám phá" prompt below that. The 36px/48px h4/h5 measured above were captured mid-scroll after the layout had already partly transitioned — treat the giant wordmark as the TRUE resting/initial state, and the measured 36px/orange-48px pair as roughly representative of the SUBSEQUENT smaller "Chào mừng quý Phụ huynh đến với WELLSPRING / TRƯỜNG HỌC HẠNH PHÚC" recap heading that appears once the pin animation completes and Section 1 begins (i.e. this h4/h5 pair is reused at both the giant intro size and the smaller recap size via GSAP scale tweening — same DOM nodes, animated scale/position).

## Computed Styles (exact values, captured mid-animation — use as the SETTLED/final sizes, and scale up for the initial giant-wordmark state)
- h4 span ("WELLSPRING" recap line): fontSize 36px, fontWeight 800, color `#0F2D53`, fontFamily Mulish, lineHeight 46.8px
- h5 ("TRƯỜNG HỌC HẠNH PHÚC"): fontSize 48px, fontWeight 700, color `#EB5123`, fontFamily Shantell Sans (handwriting)
- Video source: 1280×720, `autoplay muted loop playsInline`, real file at `public/videos/hero-video.mp4`
- video-wrapper: `position: relative; width: 1440px; height: 551px; overflow: hidden` at rest (no clip-path/mask present in the resting computed style — GSAP applies mask/clip-path dynamically only during the active scrub, then it reverts)
- "Cuộn để khám phá" prompt: `color: #2F2F2F`, positioned relative, sits below the main heading block, with `ScrollHintArrowIcon` (the hand-drawn squiggle arrow, `stroke: #EB5123`) beneath the text

## States & Behaviors — 5-stage scroll-scrubbed sequence (INTERACTION MODEL: scroll-driven, GSAP ScrollTrigger pin+scrub, NOT click-triggered)

1. **Stage A (scrollY = 0, initial paint):** White background, full viewport. Giant bold wordmark "WELLSPRING" (dark charcoal `#2F2F2F`/navy, very large responsive display size) centered, "TRƯỜNG HỌC HẠNH PHÚC" in orange Shantell Sans handwriting font (~48px+) beneath it, small navy intro line "Chào mừng quý Phụ huynh đến với" above the wordmark. "Cuộn để khám phá" + `ScrollHintArrowIcon` centered below, fairly small (~14px label).
2. **Stage B (early scroll, ~0-20% of pin distance):** The wordmark letters begin acting as a mask/viewport revealing the background video underneath — i.e. inside each letter's glyph shape, the video's moving pixels become visible while the rest of the viewport stays white. Recommended implementation: an SVG `<mask>` containing `<text>WELLSPRING</text>` (matching the heading's font/weight/size) applied via the CSS `mask`/`-webkit-mask` property to an absolutely-positioned, full-bleed `<video>` layer stacked exactly behind the (now transparent-text) heading; GSAP scrubs the mask's reveal (e.g. animate the video layer's opacity 0→1, or mask-size, in sync with scroll) so the "video only shows through the letters" effect appears progressively.
3. **Stage C (mid scroll, ~20-50%):** A large dark, organic morphing blob/curve (looked like a giant stylized "S" curve sweeping diagonally across the viewport, charcoal fill `#2F2F2F`-ish) wipes across as a transition, as if peeling back to reveal more video. Implement as an absolutely-positioned SVG path (or a `clip-path: path(...)`) animated via GSAP scrub across this scroll range.
4. **Stage D (mid-late scroll, ~50-85%):** The masked video reveal completes — video now plays full-bleed, full-viewport (visible content: overhead shot of kids painting at a table, later a shot of two kids in a science lab with goggles). The small circular "Xem trọn vẹn bộ phim" (watch full film) button fades in, centered near the bottom of the video.
5. **Stage E (end of pin, ~85-100%):** Content settles: the video shrinks from full-bleed down into the inline `video-wrapper` box (1440×551 contained block), the "Chào mừng quý Phụ huynh đến với WELLSPRING / TRƯỜNG HỌC HẠNH PHÚC" recap heading (the 36px/48px pair measured above) fades/slides into place above it, and the pin releases — normal scroll resumes into Section 1 (UNESCO intro).

**Recommended GSAP implementation:**
```
ScrollTrigger.create({
  trigger: heroRef.current,
  start: "top top",
  end: "+=2500",       // matches observed pin-spacer height (~2567px)
  pin: true,
  scrub: 1,
  onUpdate: (self) => {
    const p = self.progress; // 0 -> 1, drive all 5 stages off this single progress value
  },
})
```
Drive the mask reveal, blob wipe, and video scale/position off a single `progress` value using `gsap.to()` calls with matching `start`/`end` label offsets (e.g. mask reveal 0→0.3, blob wipe 0.2→0.55, video full-bleed 0.5→0.85, settle 0.85→1). Exact per-frame easing curves were not individually measurable from static inspection — use `ease: "none"` (linear) since `scrub` already ties it to scroll, which is the standard GSAP ScrollTrigger convention for scrubbed animations.

### Watch-full-film button
- **Trigger:** click on `.video-watching-full` (icon + "Xem trọn vẹn bộ phim" label)
- Likely opens a video lightbox/modal with the full uncut film. Since the exact target/behavior wasn't tested further (out of scope to chase), implement it as a simple modal (using `@base-ui/react` Dialog or a minimal custom overlay) that plays the same `hero-video.mp4` at larger size — acceptable placeholder behavior for a clone.

### "Cuộn để khám phá" hint
- Purely decorative scroll affordance; no click behavior. Consider a subtle bounce/pulse CSS animation on the arrow icon (small vertical translate loop, ~1.5s ease-in-out infinite) for polish, though this wasn't directly measured.

## Assets
- Video: `public/videos/hero-video.mp4`
- Icon: `ScrollHintArrowIcon` from `src/components/icons.tsx` (stroke `#EB5123`)
- No separate play-icon asset was downloaded for `.video-watching-full` — use a simple circular button with a camera/play glyph from `lucide-react` (already a dependency, e.g. `Camera` or `Play` icon) inside a white-bordered circle, `~48px` diameter, semi-transparent dark backdrop, matching the site's soft rounded aesthetic.

## Text Content (verbatim)
- "Chào mừng quý Phụ huynh đến với" (small intro line, navy)
- "WELLSPRING" (giant wordmark, then recap heading)
- "TRƯỜNG HỌC HẠNH PHÚC" (orange handwriting)
- "Cuộn để khám phá" (scroll hint)
- "Xem trọn vẹn bộ phim" (watch full film button label)

## Responsive Behavior
- **Desktop (1440px):** full 5-stage pin-scrub sequence as described, `end: "+=2500"` scroll distance.
- **Tablet/Mobile (<768px):** GSAP ScrollTrigger pin animations are commonly disabled or drastically shortened below a breakpoint for performance and UX reasons (pinning is jarring on small viewports). Use `ScrollTrigger.matchMedia()` to provide a simplified variant below 768px: skip the pin entirely, and instead just fade/slide the giant wordmark and video in as the section enters the viewport (standard `IntersectionObserver`-driven fade-in), with the video playing inline at a fixed aspect-ratio box rather than full-bleed. Not visually confirmed on the live site (tooling limitation, see PAGE_TOPOLOGY.md) but this is the standard, expected pattern for this kind of scroll-pin hero on mobile.
- **Breakpoint:** `768px`.
