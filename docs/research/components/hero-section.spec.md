# HeroSection Specification

## Overview
- Target file: `src/components/home/HeroSection.tsx`
- Screenshot reference: full-bleed aerial campus photo (river + villas + red/white school campus buildings with pool), viewed at top of page.
- Interaction model: static, with a subtle bounce/scroll-hint animation on the "scroll down" indicator.

## DOM structure
`<section>` full viewport height minus header overlap is not needed — section is `h-[810px]` desktop (use `h-[85vh] min-h-[600px] md:h-[810px]`), `relative`, background image fills it (`object-cover`, image = `content.hero.imageSrc`). A dark gradient overlay at the bottom (`bg-gradient-to-t from-black/60 to-transparent`, bottom 40% of section) ensures the white title text is readable.

Bottom-left content (`absolute bottom-16 left-0 right-0`, inside the `max-w-[1170px] mx-auto px-6` container):
- `<h1>` title, white, uppercase, bold, `font-heading`, `text-2xl md:text-3xl` (~24px desktop per computed style, `line-height: 1.2`)
- Below it, CTA button (`.btn-global` style — maroon bg, white text, uppercase, `px-8 py-3`) with `content.hero.cta` text, `mt-4`

Scroll hint: small text + down-chevron icon, bottom-right or bottom-center of the section, white, small text (`content.hero.scrollHint`), icon `/images/asset/ic-scrolldown-animate.svg`. Animate with a gentle vertical bounce (`animate-bounce` Tailwind utility is fine).

## Computed styles (from live site)
- h1: `font-family: SVN-Gotham; font-size: 24px; font-weight: 700; color: #fff; line-height: 28.8px; text-transform: uppercase` (use `font-heading text-2xl` which maps to this)
- Button: `font-family: Montserrat; font-size: 16px` white text, maroon `#8a0304` background

## Content
`content.hero` = `{ title, cta, scrollHint, imageSrc }`. Component signature:
```tsx
export function HeroSection({ content }: { content: HomeContent["hero"] }) { ... }
```

## Assets
`/images/banner/hero-campus.jpg` (515KB full-bleed aerial photo), `/images/asset/ic-scrolldown-animate.svg`

## Responsive
- Desktop (1440px): as described, title ~24-28px.
- Tablet (768px): section height ~500px, title ~20px.
- Mobile (390px): section height ~420px, title ~18px, button slightly smaller padding, content still bottom-left with `px-4`.
