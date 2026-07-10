# InquiryFormSection Specification

## Overview
- Target file: `src/components/home/InquiryFormSection.tsx`
- Screenshot reference: full-bleed dark navy/purple background photo (blurred interior hallway) with a dark overlay, 2-column layout — left: white bold uppercase heading "TƯ VẤN" + white subheading paragraph, right: a white rounded card containing a lead-gen form with 6 fields + submit button.
- Interaction model: static form layout (no real submission backend — build a plain HTML form with controlled inputs is NOT required; uncontrolled inputs with a no-op `onSubmit={(e) => e.preventDefault()}` is sufficient since there's no backend in scope).

## DOM structure
`<section className="relative py-16 md:py-24 bg-cover bg-center">` with `backgroundImage: url(content.inquiryForm.backgroundSrc)` plus `bg-cis-navy/80` dark overlay div, content `relative z-10`.

Container `max-w-[1170px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start`:
- Left: `<h2>` heading, white, uppercase bold `font-heading text-3xl md:text-4xl mb-4`; `<p>` subheading, white/80, `text-base md:text-lg max-w-md`
- Right: `<form className="bg-white rounded-lg p-8 shadow-xl flex flex-col gap-5">`:
  - Text input: `content.inquiryForm.fields.parentName` label (required, red asterisk), `<input type="text" className="w-full bg-muted border-0 rounded px-4 py-3 text-sm" placeholder="Nhập ở đây...">`
  - Text input: `studentAge` label (not required), similar input
  - Tel input: `phone` label (required), placeholder = `fields.phonePlaceholder`
  - Email input: `email` label (required), placeholder = `fields.emailPlaceholder`
  - Text input: `nationality` label
  - Select: `program` label, `<select>` with one placeholder `<option>` = `fields.programPlaceholder`
  - Submit button: `<button type="submit">` `content.inquiryForm.submitCta`, `bg-cis-navy text-white uppercase font-semibold px-8 py-3 rounded self-start hover:opacity-90`

Each field label uses `text-sm font-medium text-foreground mb-1.5 block`, required fields append a `<span className="text-primary">*</span>`.

## Content
`content.inquiryForm` = `{ heading, subheading, fields: {...}, submitCta, backgroundSrc }`.
```tsx
export function InquiryFormSection({ content }: { content: HomeContent["inquiryForm"] }) { ... }
```

## Assets
`/images/homev2/bg-sec9.jpg`

## Responsive
- Desktop (1440px): 2-column as described.
- Tablet (768px): 2-column, tighter gap.
- Mobile (390px): single column, heading/subheading first, form card below, full width, form card padding `p-6`.
