import { Star } from "lucide-react";
import { Marquee } from "@/components/marquee";

const TICKER_ITEMS = [
  "Trường Quốc Tế CIS - Canadian International School",
  "Chương Trình Tú Tài Quốc Tế IB Diploma",
  "100% Tỷ Lệ Tốt Nghiệp",
];

export function AchievementsSection() {
  return (
    <section className="w-full">
      {/* Part A — Achievements content */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left column */}
          <div>
            <h2 className="font-heading text-tas-navy text-[32px] font-bold leading-[1.15] md:text-[36px]">
              Những Con Số Ấn Tượng
            </h2>
            <p className="text-tas-ink mt-5 max-w-md text-base leading-relaxed">
              Học sinh CIS được hưởng lợi từ các chương trình giảng dạy được
              quốc tế công nhận, bao gồm cả Bằng Tú tài Quốc tế (IB Diploma),
              giúp các em chuẩn bị cho các trường đại học hàng đầu trên thế
              giới.
            </p>
            <button
              type="button"
              className="bg-tas-crimson mt-8 rounded-[10px] px-6 py-3 font-bold text-white transition-opacity hover:opacity-90"
            >
              Tìm hiểu thêm
            </button>
          </div>

          {/* Right column — asymmetric stat card grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 — 100% graduation rate */}
            <div className="bg-tas-navy flex min-h-[140px] flex-col justify-end rounded-[10px] p-6 text-white">
              <span className="text-[40px] font-bold leading-none">100%</span>
              <span className="mt-2 text-base">Tỷ Lệ Tốt Nghiệp</span>
            </div>

            {/* Card 2 — IBDP average score vs world (taller, spans full stack) */}
            <div className="bg-tas-navy relative col-start-2 row-start-1 row-span-3 flex flex-col justify-end rounded-[10px] p-6 text-white">
              <Star className="absolute right-5 top-5 h-5 w-5 fill-white text-white" />
              <span className="text-[40px] font-bold leading-none">
                33/30.2
              </span>
              <span className="mt-2 text-base">
                Điểm Trung Bình IBDP So Với Thế Giới
              </span>
            </div>

            {/* Card 3 — 45+ extracurricular clubs */}
            <div className="bg-tas-crimson relative flex min-h-[140px] flex-col justify-end rounded-[10px] p-6 text-white">
              <Star className="absolute right-5 top-5 h-5 w-5 fill-white text-white" />
              <span className="text-[40px] font-bold leading-none">45+</span>
              <span className="mt-2 text-base">Câu Lạc Bộ Ngoại Khóa</span>
            </div>

            {/* Card 4 — small navy corner card, 30+ nationalities */}
            <div className="bg-tas-navy flex min-h-[80px] items-center rounded-[10px] p-6 text-white">
              <span className="text-base font-bold">30+ Quốc Tịch</span>
            </div>
          </div>
        </div>
      </div>

      {/* Part B — Awards marquee ticker (full-bleed) */}
      <div className="bg-tas-surface w-full py-6">
        <Marquee direction="left" durationSeconds={28}>
          <div className="flex items-center whitespace-nowrap">
            {TICKER_ITEMS.map((text) => (
              <span key={text} className="flex items-center">
                <span className="text-tas-navy mx-6 text-xl font-bold">
                  {text}
                </span>
                <Star className="mx-6 h-4 w-4 shrink-0 fill-[#df214d] text-[#df214d]" />
              </span>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
