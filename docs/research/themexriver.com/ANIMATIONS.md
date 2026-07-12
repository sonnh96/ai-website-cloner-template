# Animation Inventory — themexriver.com/wp/kadu (exact, from theme source)

Extracted from `themes/kadu/assets/js/main.js`, `plugins/kadu-plugin/assets/js/core.js`, and
`themes/kadu/assets/css/main.css`. Stack: **GSAP + ScrollTrigger + SplitText, Lenis, WOW.js +
animate.css, Splitting.js, Swiper, tilt.jquery, counterup**.

## Global
| # | Animation | Exact parameters | Source |
|---|---|---|---|
| 1 | Lenis smooth scroll | `new Lenis({ duration: 1.2 })` + rAF loop | main.js:15 |
| 2 | Preloader | GIF overlay, fades on window load, removed after 1s | main.js:28 |
| 3 | Back-to-top button | `.show` class when scrollY > 300 | main.js:~925 |
| 4 | Mouse parallax `.txa-mm-elm` | `translate(clientX*value/250, clientY*value/250)` on mousemove; hero deco il-3/4/5 | main.js:906 |

## Scroll-triggered (GSAP ScrollTrigger, all `toggleActions: "play none none reverse"`)
| # | Class | From → To | Trigger |
|---|---|---|---|
| 5 | `.kd-split-text.kd-title-ani` (ALL 8 section H1s) | SplitText chars: `{opacity:1, color:#005e4f, x:50}` → `{x:0, color:inherit, duration:1, stagger:0.02}` | top 90% |
| 6 | `.txaa-fade-right` (slider arrows, about feature img, testimonial slider, footer links) | `{autoAlpha:0, x:50}` → `{autoAlpha:1, x:0, duration:1}` | top 85% |
| 7 | `.txaa-fade-left` (next arrows) | `{autoAlpha:0, x:-50}` → same | top 85% |
| 8 | `.txaa-slide-right` (choose-us bg shape) | `{xPercent:100}` → `{xPercent:0, duration:1}` | top 85% |
| 9 | `.txaa-scale-up` (CTA banner `kd-cta-1-area`) | `{scale:.5}` → `{scale:1, duration:1}` | top 85% |
| 10 | `.txaa-scalex-up` | `{scaleX:0, origin center}` → `{scaleX:1, duration:3}` | top 85% |
| 11 | `.txaa-slide-down-1` → children `.txaa-slide-down-1-item` (choose-us 2×2 cards, counter row, client logo wrap) | items `{opacity:0, yPercent:100}` stagger 0.2, `circ.out` | top 85% |
| 12 | `.txaa-roteted-1` (about certified stamp, choose-us bg shape) | img `rotate:360→0`, **scrub: 1** | top 85% |
| 13 | `.kd-img-ani-1` (about img-1/img-2, choose-us img) | img `{opacity:0, yPercent:-100, blur(30px)}` → clear, `circ.out`, duration 1 | top 80% |
| 14 | `.kd-subtitle-ani-1` (star icon beside every eyebrow) | img `rotate:360→0`, **scrub: 1**, start top 80% end top 0 | scrub |
| 15 | `.wow` (+Splitting `data-splitting` paras & footer titles) | animate.css `fadeInUp`; split chars: `fadeInUp 0.4s cubic-bezier(0.3,0,0.7,1)` delay `30ms × char-index` | viewport enter |
| 16 | `.counter` stat numbers | counterUp: delay 10, time 3000 | waypoint |

## Load-time (hero)
| # | Element | Animation |
|---|---|---|
| 17 | Hero H1 (active slide) | SplitText chars `{opacity:0, y:50}` → in, `ease:"back"`, duration .5, delay 1, stagger 0.05 |
| 18 | Hero slide-active content (CSS transition-delay) | subtitle translateY+opacity delay 1s; desc clip-path reveal delay 1s; btn delay 2s; img-1 translateY delay 1s; img-2 scale delay 1s; deco il-1/il-2 rotate/translate delay .5s |

## Sliders (Swiper, all loop + autoplay)
| # | Slider | Config |
|---|---|---|
| 19 | Hero `.kd-hero-1-active` | effect **fade** crossFade, autoplay **6000ms**, arrows |
| 20 | Category `.kd-pop-cat-1-active` | 4/3/2/1 per view, gap 40, speed 1000, autoplay 5000 |
| 21 | Courses `.kd-course-1-active` | 3/2/1 per view, gap 30, speed 1000, autoplay 5000 |
| 22 | Video `.kd-video-course-1-active` | 2/1 per view, gap 35, speed 1000, autoplay 5000 |
| 23 | Testimonial `.kd-testimonial-1-active` | 1 per view, speed 1000, autoplay 5000 |

## Hover (CSS, theme main.css)
| # | Target | Effect |
|---|---|---|
| 24 | Course/blog/video card images | `transform: perspective(600px) rotateX(.06deg) scale(1.15)`, transition ~.5s |
| 25 | Category icons, services-card icons, choose-us feature icons, header contact icon | `animation: 1s kd-jello` (skew wobble keyframe) |
| 26 | Play button `.kd-plybtn-1` | двух ring pseudo-elements pulse: `scale(1)→scale(2) opacity .5→0`, 2s & 4s linear infinite |
| 27 | Pill button `.kd-pr-btn-1` | bg 0.3s `cubic-bezier(.57,.21,.69,1.25)`, label swap `data-front/back` 0.5s slide (already implemented) |
| 28 | Client logos `.txaa-tilt_glare`, footer app badges `.txaa-tilt_scale` | tilt.js 3D tilt (maxGlare .5 / scale) |

## Clone implementation notes
- gsap@3.13+ (SplitText now free) + lenis npm packages; one client `AnimationProvider` ports items 1,4–14,17 verbatim.
- Item 15 (`.wow`): replaced with equivalent GSAP fadeInUp batch on `.kd-reveal`.
- Items 19–23: scroll-snap carousels get autoplay via `data-kd-autoplay` interval in provider.
- Items 24–27: pure CSS in globals.css (`.kd-zoom`, `.kd-jello-hover`, `.kd-plybtn`).
- Item 28 approximated with CSS scale/tilt hover (no jQuery).
