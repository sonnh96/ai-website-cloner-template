# SiteFooter Specification

## Overview
- **Target file:** `src/components/site-footer.tsx`
- **Interaction model:** static (link hovers only — underline or color-shift on hover).

## DOM structure
Full-bleed navy (`bg-tas-navy`, `#274e76`) section with a faint wavy watermark SVG behind it (reuse `public/images/*wave*` or `*Union-grey*` asset at low opacity), `py-16 px-6`.

- Top: logo lockup (white TAS seal + "THE AMERICAN SCHOOL" wordmark + "Developing Academic Excellence and Strength of Character" tagline) — same white logo asset as the header.
- 6-column link grid (`grid grid-cols-2 md:grid-cols-6 gap-8` — stacks to 2 columns on mobile), each column heading bold white ~18px, links below in white/80 ~15px, `space-y-3`:

**About**
- About TAS
- Facilities
- School Profile

**Academics**
- Learning at TAS
- Achievements
- Curriculums
- Resources

**Admission**
- Admission
- Fees
- Policies
- Procedures
- Enrollment

**Life at TAS**
- Life at TAS
- Blog
- Mustang Minutes Newspaper
- TAS Cafeteria Menu

**Staff**
- Our Faculty
- Employment

**Contact Us** (icon + text rows, icons from `lucide-react`: `Mail`, `Phone`, `Smartphone` or `Phone` again for the second number)
- ✉ admissions@mytas.edu.vn
- ☎ 028 3519 2223
- 📱 090 9046 223 (Admissions)
- Social icons row: Facebook, Instagram, YouTube (`lucide-react` `Facebook`, `Instagram`, `Youtube`, white, `size-5`, `hover:opacity-70`)
- "Location" sub-heading + address: "06 Song Hanh Road, HCM - Long Thanh - Dau Giay Freeway, Binh Trung Ward, HCMC, Vietnam"

- Bottom bar: thin white/10 top border, `flex justify-between items-center pt-6 mt-12`: left = "© 2024 The American School. All rights reserved." (white/60, small); right = language switcher "EN" (crimson, active) "KR" "VN" (white/60), same style as header's switcher.

## Links
All internal links (`href="#"` placeholders are fine — this is a homepage-only clone, sub-pages are out of scope per clone defaults).

## Verification
Run `npx tsc --noEmit`.
