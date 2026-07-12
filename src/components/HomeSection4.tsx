"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";
import { ScrollReveal } from "@/components/ScrollReveal";

interface Campus {
  photo: string;
  logo: string;
  name: string;
  address: string;
}

const CAMPUSES: Campus[] = [
  {
    photo: "/images/cis/elementary.jpg",
    logo: "/images/cis/logo.png",
    name: "Tiểu học CIS",
    address: "Chương trình lớp 1 - 6, phát triển toàn diện kiến thức và kỹ năng nền tảng",
  },
  {
    photo: "/images/cis/secondary.webp",
    logo: "/images/cis/logo.png",
    name: "Trung học CIS",
    address:
      "Chương trình lớp 7 - 12 và Tú tài Quốc tế (IBDP), chuẩn bị hành trang vào đại học hàng đầu thế giới",
  },
  {
    photo: "/images/cis/hero-banner.jpg",
    logo: "/images/cis/logo.png",
    name: "Cơ sở CIS Phú Mỹ Hưng",
    address: "07 Đường Số 23, Phường Tân Mỹ, TP. Hồ Chí Minh",
  },
];

const MOBILE_BREAKPOINT = "(min-width: 768px)";

export function HomeSection4() {
  const [visibleCount, setVisibleCount] = useState(1);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_BREAKPOINT);

    const update = () => setVisibleCount(mql.matches ? 2 : 1);
    update();

    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  const maxIndex = Math.max(0, CAMPUSES.length - visibleCount);
  const currentIndex = Math.min(index, maxIndex);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1272px] mx-auto px-7">
        <h3 className="text-[36px] font-extrabold text-foreground">
          Hành trình học tập
          <br />
          <span className="font-handwriting text-[#D9660A] text-[40px]">
            Từ Tiểu học đến Tú tài Quốc tế
          </span>
        </h3>

        <div className="relative mt-10 overflow-hidden">
          <ScrollReveal
            stagger
            className="flex gap-8 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
          >
            {CAMPUSES.map((campus) => (
              <div
                key={campus.name}
                className="shrink-0 w-full md:w-[calc(50%-16px)] rounded-3xl overflow-hidden bg-white shadow-sm"
              >
                <div className="relative h-[280px]">
                  <Image
                    src={campus.photo}
                    alt={campus.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 h-16 w-16 rounded-full bg-white p-2 shadow flex items-center justify-center">
                    <Image
                      src={campus.logo}
                      alt={`${campus.name} logo`}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-bold text-foreground">{campus.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {campus.address}
                  </p>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            type="button"
            aria-label="Xem cơ sở trước"
            disabled={currentIndex === 0}
            onClick={() => setIndex(Math.max(0, currentIndex - 1))}
            className="h-11 w-11 rounded-full flex items-center justify-center bg-muted text-muted-foreground transition active:scale-95 disabled:opacity-50 disabled:active:scale-100"
          >
            <ArrowRightIcon className="rotate-180 h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Xem cơ sở tiếp theo"
            disabled={currentIndex >= maxIndex}
            onClick={() => setIndex(Math.min(maxIndex, currentIndex + 1))}
            className="h-11 w-11 rounded-full flex items-center justify-center bg-[#D9660A] text-white transition hover:brightness-95 active:scale-95 disabled:opacity-50 disabled:active:scale-100"
          >
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
