# NewsletterSection Specification

## Overview
- **Target file:** `src/components/newsletter-section.tsx` (client component — controlled form inputs, mock submit handler per clone defaults; no real backend)
- **Interaction model:** static form (do not implement real submission — `onSubmit` should `preventDefault()` and can just log or reset the form; standard `required` HTML validation on inputs is fine).

## Content
- Heading: "Book a school tour with us!" — white, bold, ~36px.
- Paragraph: "Be the first to know about exciting school updates, events, and achievements." — white/90.
- Form fields (each with a white label above and a white-outline input with transparent/white-tinted bg, placeholder text as shown):
  - Label "Your Name" — input placeholder "Enter Your Name Here"
  - Label "Email" — input type="email"
  - Label "Phone number" — input type="tel"
- Button: "Book a tour" — white outline button (`border-2 border-white text-white font-bold rounded-[10px]`, hover fills white/crimson text).

## Layout
- 2-column full-bleed section: **left** = crimson (`bg-tas-crimson`) panel containing all the text/form content above, generous padding (`p-12 md:p-16`); **right** = a full-bleed aerial drone photo of the campus (`object-cover h-full w-full`, no padding — bleeds to the section edges). `grid md:grid-cols-2` with the right column `hidden md:block` or stacked below on mobile (photo below the form on small screens is acceptable).

## Assets
Use a real aerial/wide campus photo from `public/images/` for the right panel (search for a wide landscape-oriented campus shot among the downloaded images).

## Verification
Run `npx tsc --noEmit`.
