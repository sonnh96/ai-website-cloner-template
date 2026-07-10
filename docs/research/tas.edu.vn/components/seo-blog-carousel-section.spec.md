# SeoBlogCarouselSection Specification

## Overview
- **Target file:** `src/components/seo-blog-carousel-section.tsx`
- **Interaction model:** click-driven carousel (Swiper.js on live site). Use the shared `Carousel` primitive at `@/components/carousel`, but set `arrowVariant="square"` — this carousel's prev/next buttons are **square outline** (not circular), positioned at the bottom-right of the section (pass `arrowClassName="justify-end"`).

## Content — 6 slides, use verbatim. Plain white cards (no photo overlay text — title is bold navy plain text above a gray excerpt, NOT overlaid on an image like BlogCarouselSection)
1. **TAS - 16 Years of Whole-Child Education with a Seamless Learning Pathway** — "Looking for an international school for your child? TAS offers a clear learning journey from IB PYP to AP, helping students grow academically and make confident university choices. The school is built on four whole-child pillars and is expanding toward the IB Diploma Programme."
2. **2025 | A Year of Innovation, Upgrading, and Growth at TAS International School** — "2025 marks a major milestone for TAS International School with strong academic achievements, campus upgrades, IB PYP authorization, and IB DP Candidate status, reinforcing a sustainable education strategy for Mustangs."
3. **IB PYP at TAS – Learning Through Inquiry, Nurturing Future-Ready Skills** — "The IB Primary Years Programme (PYP) is one of the world's most advanced educational frameworks for elementary students. At The American School (TAS), the PYP is offered from Grade 1 to Grade 5, providing an active, holistic, and experience-rich learning journey that helps children develop essential thinking skills, core values, and the mindset of global citizens from their early years."
4. **TAS Students Earn Over USD 200,000 in Scholarships from Top Universities Worldwide** — "For many consecutive years, students of The American School (TAS) — widely recognized as one of the best international schools in Ho Chi Minh City — have collectively earned more than USD 200,000 in scholarships from prestigious universities around the world."
5. **Toplist International Schools in District 2** — "Explore international schools in District 2: curriculum, facilities, faculty, and why many parents choose TAS for their child's holistic development."
6. **TAS International School Curriculum - Full U.S. Learning Path** — "Explore TAS's international school curriculum: Common Core, AP, and Candidate IB PYP & IBDP. A seamless, personalized U.S. pathway led by experienced international teachers."

## Card layout
Small thumbnail image (left or top, `aspect-[4/3] w-40 object-cover rounded-md`) + title (bold, `text-tas-navy`, ~18px) + excerpt (`text-gray-600`, ~14px) to the right/below. Show 1 card per slide (matches the live site's one-large-item-per-view pattern for this carousel, per screenshots showing a single title+excerpt+thumbnail row with arrows to the side).

## Assets
Use real downloaded images from `public/images/` — `public/images/*study-abroad-pathway-at-TAS*` and `public/images/*Annotation-2025*`/`*Screenshot-2025*` are confirmed to exist and fit this SEO-article theme; assign across the 6 slides, reusing images if there aren't 6 distinct close matches.

## Verification
Run `npx tsc --noEmit`.
