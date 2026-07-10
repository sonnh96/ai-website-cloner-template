"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Testimonial {
  quote: string;
  name: string;
  cohort: string;
  avatar: string;
  avatarPosition: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "CIS không chỉ là một trường học, đó là nơi con tôi yêu thích. Nhà trường tạo ra một môi trường an toàn và hỗ trợ, nơi trẻ em biết rằng chúng có thể tìm kiếm sự giúp đỡ khi cần thiết.",
    name: "Stefan K.",
    cohort: "Phụ huynh CIS",
    avatar: "/images/cis-elementary.jpg",
    avatarPosition: "50% 20%",
  },
  {
    quote:
      "CIS như ngôi nhà thứ hai của con tôi, bé rất thích đi học và mỗi ngày không ngừng kể cho tôi nghe những câu chuyện thầy cô trường lớp và bạn bè. Con tôi mỗi ngày học tiến bộ hơn rõ rệt, bé học cách đối mặt với thách thức, tư duy logic và sáng tạo ứng dụng kiến thức được học. Niềm hạnh phúc của con khi đến trường CIS làm tôi vững tin về lựa chọn đúng đắn của mình.",
    name: "Emily",
    cohort: "Phụ huynh CIS",
    avatar: "/images/cis-secondary.webp",
    avatarPosition: "50% 15%",
  },
  {
    quote:
      "Ngoài việc chú trọng trau dồi kiến thức, CIS còn khuyến khích sự sáng tạo khai phá tiềm năng bản thân. Con tôi trở nên tự tin hơn với nền tảng kiến thức vững chắc. CIS thực sự là môi trường giáo dục tốt cho thế hệ công dân toàn cầu tương lai.",
    name: "John",
    cohort: "Phụ huynh CIS",
    avatar: "/images/cis-program-4.png",
    avatarPosition: "50% 15%",
  },
];

const SLIDE_COUNT = TESTIMONIALS.length;

/**
 * Click-driven testimonials carousel. Reuses the same transform-based
 * slide mechanism as the shared `Carousel` primitive (translateX per
 * index) but keeps its own local state, since this section needs its
 * prev/next arrows pinned to the far left/right edges of the section,
 * vertically centered — a placement the primitive's default
 * below-content arrow row doesn't support.
 */
export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const go = (delta: number) => {
    setIndex((prev) => (prev + delta + SLIDE_COUNT) % SLIDE_COUNT);
  };

  return (
    <section className="relative overflow-hidden bg-tas-tint py-20 sm:py-24">
      <button
        type="button"
        aria-label="Previous testimonial"
        onClick={() => go(-1)}
        className={cn(
          "btn-tactile border-tas-navy text-tas-navy hover:bg-tas-navy absolute top-1/2 left-4 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border hover:text-white"
        )}
      >
        <ChevronLeft className="size-4" />
      </button>
      <button
        type="button"
        aria-label="Next testimonial"
        onClick={() => go(1)}
        className={cn(
          "btn-tactile border-tas-navy text-tas-navy hover:bg-tas-navy absolute top-1/2 right-4 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border hover:text-white"
        )}
      >
        <ChevronRight className="size-4" />
      </button>

      <div className="mx-auto max-w-5xl px-16 sm:px-24">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 [transition-timing-function:var(--ease-out-quart)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.name} className="w-full shrink-0">
                <figure className="mx-auto flex max-w-3xl flex-col items-center text-center">
                  <blockquote className="font-heading text-tas-navy text-[28px] leading-snug font-medium sm:text-[32px]">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 flex flex-col items-center gap-3">
                    <div className="relative size-14 overflow-hidden rounded-full ring-2 ring-tas-crimson/40 ring-offset-2 ring-offset-tas-tint">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                        style={{ objectPosition: testimonial.avatarPosition }}
                      />
                    </div>
                    <div>
                      <div className="text-tas-navy font-body text-base font-bold">
                        {testimonial.name}
                      </div>
                      <div className="font-body text-sm text-gray-500">
                        {testimonial.cohort}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
