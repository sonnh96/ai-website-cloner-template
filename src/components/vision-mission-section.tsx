"use client";

import Image from "next/image";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function VisionMissionSection() {
  const imageRevealRef = useScrollReveal<HTMLDivElement>();
  const contentRevealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "url('/images/67b29cf84f50923c6d9ad1cc_wave-1920.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "960px auto",
        }}
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-2 md:items-start">
        <div ref={imageRevealRef} className="scroll-reveal">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md">
            <Image
              src="/images/cis-principal.jpg"
              alt="Portrait of the CIS Head of School"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>

        <div ref={contentRevealRef} className="scroll-reveal flex flex-col gap-6">
          <p className="text-lg font-light text-tas-navy">
            Lời Chào Từ Cô Tổng Hiệu Trưởng
          </p>

          <p className="text-base leading-relaxed text-tas-ink md:text-[17px]">
            Chào mừng quý phụ huynh, học sinh và đối tác đến với CIS!
          </p>

          <div>
            <h3 className="font-heading text-[28px] font-medium text-tas-navy">
              Cam Kết Của Chúng Tôi
            </h3>
            <p className="mt-3 text-base leading-relaxed text-tas-ink md:text-[17px]">
              Suốt những năm qua, CIS luôn cam kết chất lượng học thuật tiên
              tiến, các thành tích thể thao cùng những đóng góp nghệ thuật
              nổi bật. Bên cạnh đó, chúng tôi đề cao tinh thần công dân toàn
              cầu bằng cách giúp học sinh trở thành những cá nhân với lòng
              nhân ái, sự hiểu biết và tinh thần trách nhiệm.
            </p>
          </div>

          <div className="ml-12">
            <h3 className="font-heading text-[28px] font-medium text-tas-navy">
              Hướng Tới Tương Lai
            </h3>
            <p className="mt-3 text-base leading-relaxed text-tas-ink md:text-[17px]">
              Với những học sinh tài năng, đội ngũ giáo viên tận tâm và một
              cộng đồng luôn ủng hộ, tôi tin rằng CIS sẽ trở thành một trong
              những trường quốc tế hàng đầu. Cùng nhau, chúng ta sẽ biến năm
              học này trở thành năm của tinh thần học tập, phát triển để
              vươn tới thành công!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
