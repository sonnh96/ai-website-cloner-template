import Image from "next/image";
import { cn } from "@/lib/utils";

const BUILDING_EXTERIOR_IMG =
  "/images/67d3d14a91e70f15828cf659_Annotation-2025-03-14-134835-p-1600.png";
const STUDENTS_WALKING_IMG =
  "/images/68ac10c45060a071261270ab_Day1_UNISMUN-067-p-1600.webp";
const GOLF_SIMULATOR_IMG =
  "/images/68ac1b263153ae0584b01785_Screenshot-2025-08-25-151128.webp";
const LIBRARY_MEDIA_IMG =
  "/images/68f98e0a1e0e678a04a36e03_study-abroad-pathway-at-TAS-p-800.jpg";
const GRADUATION_IMG =
  "/images/68d6081cb33ead41c718f704_Graduation-Grade-12-5843-min-p-1080.jpg";

type StatCardProps = {
  value: string;
  label: string;
  className: string;
};

function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-center rounded-2xl p-6",
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
    <div className={cn("relative overflow-hidden rounded-2xl", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? "(min-width: 768px) 25vw, 100vw"}
        className="object-cover"
      />
    </div>
  );
}

export function FacilitiesSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-tas-navy md:text-xl">
              Explore Our Exceptional Facilities
            </h2>
            <button
              type="button"
              className="mt-6 rounded-[10px] bg-tas-navy px-6 py-3 font-bold text-white transition-opacity hover:opacity-90"
            >
              Learn more
            </button>
          </div>
          <p className="text-tas-ink">
            The new TAS campus, completed in 2020, offers outstanding
            facilities for students from Pre-Nursery to Grade 12. Designed to
            support significant growth, the campus has a capacity of over
            2,000 students, eliminating the need for major future
            construction projects.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[180px]">
          <PhotoCell
            src={BUILDING_EXTERIOR_IMG}
            alt="TAS campus building exterior"
            className="h-[240px] md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-1 md:h-auto"
          />

          <StatCard
            value="100+"
            label="Classrooms"
            className="bg-tas-navy text-white md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-1"
          />

          <PhotoCell
            src={STUDENTS_WALKING_IMG}
            alt="Students walking on the TAS campus"
            className="h-[240px] md:col-start-4 md:row-start-1 md:col-span-1 md:row-span-2 md:h-auto"
          />

          <PhotoCell
            src={GOLF_SIMULATOR_IMG}
            alt="Student practicing at the golf facility"
            className="h-[240px] md:col-start-1 md:row-start-2 md:col-span-1 md:row-span-1 md:h-auto"
          />

          <PhotoCell
            src={LIBRARY_MEDIA_IMG}
            alt="Library and media center at TAS"
            className="h-[240px] md:col-start-2 md:row-start-2 md:col-span-2 md:row-span-1 md:h-auto"
          />

          <StatCard
            value="25,000 m2"
            label="Total Campus Area"
            className="bg-tas-crimson text-white md:col-start-1 md:row-start-3 md:col-span-1 md:row-span-1"
          />

          <PhotoCell
            src={GRADUATION_IMG}
            alt="Graduation ceremony at TAS"
            className="h-[240px] md:col-start-2 md:row-start-3 md:col-span-2 md:row-span-1 md:h-auto"
          />

          <StatCard
            value="2000+"
            label="Student Capacity"
            className="bg-tas-surface text-tas-navy md:col-start-4 md:row-start-3 md:col-span-1 md:row-span-1"
          />
        </div>
      </div>
    </section>
  );
}
