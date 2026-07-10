import Image from "next/image";
import { Play } from "lucide-react";

export function ExploreTasLifeSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-heading text-tas-navy text-xl font-bold">
          Khám Phá CIS Qua Tour 360°
        </h2>
        <button
          type="button"
          className="bg-tas-navy rounded-[10px] px-6 py-3 font-bold text-white transition-colors hover:bg-tas-navy-dark"
        >
          Xem Thêm
        </button>
      </div>

      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src="/images/cis-hero-banner.jpg"
          alt="Toàn cảnh khuôn viên trường Quốc Tế CIS"
          fill
          className="object-cover"
          sizes="(min-width: 1280px) 1280px, 100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4 text-center">
          <div className="relative h-16 w-full max-w-md rounded-lg bg-white/95 p-3 sm:h-20 sm:max-w-xl">
            <Image
              src="/images/cis-logo.png"
              alt="CIS - The Canadian International School, a member of EQuest Education"
              fill
              className="object-contain"
              sizes="(min-width: 640px) 576px, 90vw"
            />
          </div>

          <div className="flex size-16 items-center justify-center rounded-full bg-white/20 backdrop-blur">
            <Play className="size-6 fill-white text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
