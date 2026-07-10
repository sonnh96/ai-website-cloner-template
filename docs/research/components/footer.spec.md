# Footer Specification

## Overview
- Target file: `src/components/layout/Footer.tsx`
- Screenshot reference: white background top section — CIS logo (with "A member of EQuest Education" tagline built into the logo image) on the left, 5 accreditation partner logos on the right (same set as header) separated by a vertical divider. Below: school full name in bold caps, then a 2-column row — left: "LIÊN HỆ"/contact heading (maroon) + phone icon+number, "Hotline" label + recruitment number, mail icon + emails, location pin icon + address, row of 6 circular social icon buttons (maroon bg, white icon) — right: an embedded Google Map (static image or iframe is fine) showing the school pin. Bottom: full-width maroon bar with the legal company name (left) and "Privacy Policy" link (right), small text.
- Interaction model: static.

## DOM structure
`<footer className="bg-white pt-16">`, container `max-w-[1170px] mx-auto px-6`:
- Top row: `flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-10 border-b border-border`:
  - `<img src="/images/logo/cis-logo-color.png" className="h-20" />`
  - `<div className="flex items-center gap-6 flex-wrap">`: 5 partner logos (`/images/partners/ib-world-school.png`, `collegeboard-ap.png`, `cis-accredited.png`, `cognia.png`, `wasc.png`), each `h-12 object-contain`, separated by `w-px h-10 bg-border` dividers
- `<p className="font-heading uppercase text-lg md:text-xl font-bold mt-8 mb-8">{content.footer.schoolFullName}</p>`
- `<div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-12">`:
  - Left (contact block):
    - `<h3 className="text-primary font-heading uppercase text-2xl mb-4">{content.footer.contactHeading}</h3>`
    - phone row: phone icon (`/images/asset/ic-footer-phone.svg`) + `content.footer.phone`, plus `content.footer.hotlineLabel` label + `content.footer.hotlineNote` inline/below
    - mail row: mail icon (`/images/asset/ic-footer-mail.svg`) + `content.footer.emails`
    - address row: location icon (`/images/asset/ic-footer-location.svg`) + `content.footer.address`
    - social icons row: `flex gap-3 mt-6` — 6 circular buttons (`w-10 h-10 rounded-full bg-primary flex items-center justify-center`) using `/images/asset/ic-footer-social-1.svg` through `ic-footer-social-6.svg`, white icon each (`brightness-0 invert` filter if icons render dark, or leave as-is since these SVGs are already simple)
  - Right: Google Maps embed — use a plain `<iframe>` with a generic Google Maps embed URL for "07 Đường Số 23, Phường Tân Mỹ, TP. Hồ Chí Minh" (`src="https://www.google.com/maps?q=..."`), `className="w-full h-[300px] rounded-lg border-0"`, `loading="lazy"`. If an iframe feels heavy, a static styled placeholder div with a map-pin icon and the address text is an acceptable simplification.
- Bottom bar: `<div className="bg-primary text-white py-4 mt-4">`, container `flex flex-col md:flex-row items-center justify-between gap-2 text-xs md:text-sm">`: `<p>{content.footer.companyName}</p>` + `<a>{content.footer.privacyPolicy}</a>` (underlined)

## Content
`content.footer` = `{ memberOf, contactHeading, hotlineLabel, hotline, hotlineNote, phone, emails, address, schoolFullName, companyName, privacyPolicy }`.
```tsx
export function Footer({ content }: { content: HomeContent["footer"] }) { ... }
```

## Assets
`/images/logo/cis-logo-color.png`, `/images/partners/*.png` (5 logos, same as header), `/images/asset/ic-footer-phone.svg`, `ic-footer-mail.svg`, `ic-footer-location.svg`, `ic-footer-social-1.svg` through `ic-footer-social-6.svg`

## Responsive
- Desktop (1440px): as described.
- Tablet (768px): 2-column contact/map row remains, logo row wraps if needed.
- Mobile (390px): logo row stacks (logo then partner logos wrapped), contact block and map stack vertically, bottom bar text stacks centered.
