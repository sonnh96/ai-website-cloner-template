# Shared Tokens (reference for every builder — already wired into the codebase)

Do NOT redefine these — they already exist. Just use them.

## Fonts (already configured in `src/app/layout.tsx` + `globals.css`)
- Primary sans: `font-sans` (Urbanist, weights 400-900 available via `font-normal`…`font-black`)
- Cursive/script accent (for small eyebrow/kicker labels like "Guaranteed & Certified", "Get To Know Us"): `font-script`

## Colors (already in `globals.css` as Tailwind v4 `@theme` tokens)
- `text-kd-heading` / `bg-kd-heading` — `#363539` (heading text color on light backgrounds)
- `text-kd-paragraph` — `#797a84` (body paragraph color)
- `bg-kd-primary` / `text-kd-primary` — `#005e4f` (dark green — hero bg, footer bg, primary CTA hover)
- `bg-kd-secondary` / `text-kd-secondary` — `#ef991f` (orange — primary CTA button default bg)
- `bg-kd-accent-green` — `#08d565` (bright green accent, sparingly)
- `bg-kd-danger` — `#d70007` (red, sparingly — badges/alerts only)
- Standard Tailwind `white`/`black` used for text-on-dark and dark badges.

## Primary Pill Button pattern
Use for every CTA button ("Find Out More", "Apply Now", "Explore all Courses", "Subscribe Now"):
```tsx
<a href="#" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-kd-secondary px-8 py-5 text-sm font-extrabold uppercase text-[#22281e] transition-colors duration-300 ease-[cubic-bezier(.57,.21,.69,1.25)] hover:bg-kd-primary hover:text-white">
  <span className="relative overflow-hidden">
    <span className="block transition-transform duration-500 group-hover:-translate-y-full group-hover:opacity-0">Find Out More</span>
    <span className="absolute inset-0 block translate-y-full opacity-0 transition-transform duration-500 group-hover:translate-y-0 group-hover:opacity-100">Let&apos;s Talk</span>
  </span>
  <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
</a>
```
Variant `has-black`: default bg `bg-kd-heading` (#363539) instead of orange, same hover→orange-on-dark-variant logic (simplify to just swap bg colors on hover, exact reverse). Variant `has-black-2`: default bg `bg-black`.

## Assets
All downloaded to `public/images/kadu/2024/{05,06}/<filename>`. Reference with plain `<img>` or `next/image` using the path `/images/kadu/2024/05/xxx.webp` etc. Logo: `/images/kadu/2024/05/logo.svg` (color) and `logo-wh.svg` (white, for dark backgrounds).

## Icons
Import from `@/components/icons` — available: `ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon, CheckCircleIcon, HomeIcon, SearchIcon, PlayIcon, QuoteIcon, StarIcon, CloseIcon, MailIcon, MapPinIcon, PhoneIcon, MenuIcon, ChevronDownIcon` (all from lucide-react).

## Scroll-reveal entrance animation
A `.kd-reveal` utility class already exists in `globals.css` (fade-up on mount, 0.8s ease). Apply it to section headings/cards. For a nicer staggered effect on card grids, add inline `style={{ animationDelay: '${i * 0.1}s' }}` per card index — don't over-engineer with IntersectionObserver libraries; mount-triggered is sufficient since these are simple entrance animations, not repeat-on-every-scroll.

## Carousels (Swiper-equivalent sections)
No swiper.js dependency is installed. For sections that are carousels on the live site (Popular Category, Course cards, Video cards, Testimonials), implement a **simple controlled horizontal scroll-snap carousel**: a flex row with `overflow-x-auto snap-x snap-mandatory scroll-smooth`, each card `snap-start`, and Prev/Next buttons that call `scrollBy({left: ±cardWidth, behavior:'smooth'})` on a ref. This matches the visual/interaction intent (arrow-driven horizontal paging) without adding a new dependency. Do NOT build it as click-tabs — these are genuinely swipeable/scrollable card rows, not tab panels.

## Tabs (Bootstrap-equivalent, click-driven — CONFIRMED via source, not scroll-driven)
Course category tabs and Video-course trainer tabs are simple `useState<string>` driven tab panels — clicking a tab/trainer button swaps the visible content with a cross-fade (`transition-opacity duration-300`). Do not build scroll-triggered switching.
