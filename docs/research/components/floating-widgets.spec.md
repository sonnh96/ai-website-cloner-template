# FloatingWidgets Specification

## Overview
- Target file: `src/components/layout/FloatingWidgets.tsx`
- Interaction model: scroll-driven visibility for the back-to-top button; static position for the contact stack.

## DOM structure
Fixed to the right edge of the viewport, vertically centered (`fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3`):
- 3 circular buttons, each `56px` diameter, `bg-primary` (maroon), white icon centered, `rounded-full shadow-lg`, stacked vertically with ~8px gap:
  1. Headphone/call icon (`/images/asset/ic-headerwidget-headphone.svg`)
  2. Calendar icon (`/images/asset/calendar.svg`)
  3. Chat/message icon (`/images/asset/mess.svg`)

Separately, a "back to top" button: circular, white background, maroon chevron-up icon (`/images/asset/ic-backtotop.png`), `48px` diameter, fixed bottom-right (`fixed right-6 bottom-6 z-40`). Only rendered/visible once `window.scrollY > 400` (fade/scale in with a CSS transition). Clicking scrolls to top (`window.scrollTo({top:0, behavior:'smooth'})`).

## Computed styles
- Contact buttons: `w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:bg-cis-red-dark transition-colors`, icon `w-6 h-6` white
- Back-to-top: `w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-opacity duration-300`, `opacity-0 pointer-events-none` when hidden, `opacity-100` when shown

## Assets
`/images/asset/ic-headerwidget-headphone.svg`, `/images/asset/calendar.svg`, `/images/asset/mess.svg`, `/images/asset/ic-backtotop.png`

## Responsive
- Desktop/tablet: as described.
- Mobile (390px): shrink buttons to `44px`, keep same right-edge position.

## Notes
Client component (`"use client"`) for scroll state. No text content needed — icon-only buttons (add appropriate `aria-label`s: "Contact", "Book a tour", "Chat", "Back to top").
