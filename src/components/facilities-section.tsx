"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const BUILDING_EXTERIOR_IMG = "/images/cis-staticpage-1.png";
const STUDENTS_WALKING_IMG = "/images/cis-web-home.png";
const GOLF_SIMULATOR_IMG = "/images/cis-news-1.jpeg";
const LIBRARY_MEDIA_IMG = "/images/cis-elementary.jpg";
const GRADUATION_IMG = "/images/cis-program-4.png";

type StatCardProps = {
  value: string;
  label: string;
  className: string;
};

function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "stagger-item flex flex-col justify-center rounded-2xl p-6",
        className,
      )}
    >
      <span className="font-heading text-4xl font-bold leading-none md:text-[40px]">
        {value}
      </span>
      <span className="mt-2 text-base">{label}</span>
    </div>
  );
}

type PhotoCellProps = {
  src: string;
  alt: string;
  className: string;
  sizes?: string;
};

function PhotoCell({ src, alt, className, sizes }: PhotoCellProps) {
  return (
    <div
      className={cn(
        "stagger-item group relative overflow-hidden rounded-2xl",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? "(min-width: 768px) 25vw, 100vw"}
        className="object-cover transition-transform duration-500 [transition-timing-function:var(--ease-out-quart)] group-hover:scale-[1.04]"
      />
    </div>
  );
}

export function FacilitiesSection() {
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-tas-navy md:text-xl">
              Star Students, Star Teachers, Star Facilities
            </h2>
            <button
              type="button"
              className="btn-tactile mt-6 rounded-[10px] bg-tas-navy px-6 py-3 font-bold text-white hover:opacity-90"
            >
              Tìm hiểu thêm
            </button>
          </div>
          <p className="text-tas-ink">
            Không gian hiện đại 50.000m² tại trung tâm Phú Mỹ Hưng, hệ thống
            phòng học tiên tiến và khu thể thao chuyên nghiệp, cùng đội ngũ
            huấn luyện viên và giáo viên nước ngoài xuất sắc, giàu kinh
            nghiệm và có trình độ giáo dục chuyên sâu.
          </p>
        </div>

        <div
          ref={gridRef}
          className="stagger-reveal mt-10 grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[180px]"
        >
          <PhotoCell
            src={BUILDING_EXTERIOR_IMG}
            alt="CIS campus building exterior with swimming pool"
            className="h-[240px] md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-1 md:h-auto"
          />

          <StatCard
            value="50.000 m²"
            label="Không Gian Hiện Đại"
            className="bg-tas-navy text-white md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-1"
          />

          <PhotoCell
            src={STUDENTS_WALKING_IMG}
            alt="Học sinh CIS trong phòng thí nghiệm"
            className="h-[240px] md:col-start-4 md:row-start-1 md:col-span-1 md:row-span-2 md:h-auto"
          />

          <PhotoCell
            src={GOLF_SIMULATOR_IMG}
            alt="Học sinh CIS trong phòng khoa học"
            className="h-[240px] md:col-start-1 md:row-start-2 md:col-span-1 md:row-span-1 md:h-auto"
          />

          <PhotoCell
            src={LIBRARY_MEDIA_IMG}
            alt="Học sinh Tiểu Học CIS"
            className="h-[240px] md:col-start-2 md:row-start-2 md:col-span-2 md:row-span-1 md:h-auto"
          />

          <StatCard
            value="4"
            label="Chứng Nhận Kiểm Định Quốc Tế"
            className="bg-tas-crimson text-white md:col-start-1 md:row-start-3 md:col-span-1 md:row-span-1"
          />

          <PhotoCell
            src={GRADUATION_IMG}
            alt="Lễ tốt nghiệp tại CIS"
            className="h-[240px] md:col-start-2 md:row-start-3 md:col-span-2 md:row-span-1 md:h-auto"
          />

          <StatCard
            value="30+"
            label="Quốc Tịch"
            className="bg-tas-surface text-tas-navy md:col-start-4 md:row-start-3 md:col-span-1 md:row-span-1"
          />
        </div>
      </div>
    </section>
  );
}
