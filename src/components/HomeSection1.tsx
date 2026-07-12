"use client";

import { useState } from "react";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

export function HomeSection1() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-16 md:py-24">
      <div className="flex flex-col md:flex-row gap-x-12 max-w-[1272px] mx-auto px-7 pb-[50px]">
        <ScrollReveal className="w-full md:w-[598px] shrink-0">
          <h3 className="text-[36px] font-extrabold leading-[46.8px] text-foreground">
            Chào mừng đến với <strong className="text-[#941B1A]">Trường Quốc tế Canada</strong> (CIS)
          </h3>

          <div
            className="flex items-center gap-6 mt-6"
            role="img"
            aria-label="Các chứng nhận kiểm định của CIS"
          >
            <Image
              src="/images/cis/partner-ib.png"
              alt="IB World School"
              width={64}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <Image
              src="/images/cis/partner-ap.png"
              alt="AP CollegeBoard"
              width={64}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <Image
              src="/images/cis/partner-cognia.png"
              alt="Cognia"
              width={64}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <Image
              src="/images/cis/partner-wasc.png"
              alt="WASC"
              width={64}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </div>

          <div className="mt-6">
            <div
              className="relative overflow-hidden transition-[max-height] duration-300 ease-out"
              style={{ maxHeight: expanded ? "600px" : "76px" }}
            >
              <p className="text-base leading-[24.8px] text-foreground">
                Chào mừng quý phụ huynh, học sinh và đối tác đến với CIS! Suốt
                những năm qua, CIS luôn cam kết{" "}
                <b>chất lượng học thuật tiên tiến</b>, các thành tích thể thao
                cùng những đóng góp nghệ thuật nổi bật. Bên cạnh đó, chúng tôi
                đề cao tinh thần công dân toàn cầu bằng cách giúp học sinh trở
                thành những cá nhân với lòng nhân ái, sự hiểu biết và tinh thần
                trách nhiệm. Với những học sinh tài năng, đội ngũ giáo viên tận
                tâm và một cộng đồng luôn ủng hộ, chúng tôi tin rằng{" "}
                <b>CIS sẽ trở thành một trong những trường quốc tế hàng đầu</b>.
              </p>
              {!expanded && (
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-background to-transparent"
                  aria-hidden="true"
                />
              )}
            </div>
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="mt-2 text-sm font-semibold text-[#D9660A] hover:underline"
            >
              {expanded ? "Thu gọn" : "Xem thêm"}
            </button>
          </div>

          <a
            href="#"
            className="mt-8 inline-block rounded-full bg-[#D9660A] text-white px-6 py-3 text-sm font-medium hover:brightness-95 active:scale-95 transition"
          >
            Tìm hiểu về CIS
          </a>
        </ScrollReveal>

        <ScrollReveal
          className="flex-1 relative mt-10 md:mt-0"
          delay={0.15}
        >
          <Image
            src="/images/cis/principal.jpg"
            alt="Hiệu trưởng CIS"
            width={598}
            height={598}
            className="w-full h-auto rounded-2xl object-cover"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
