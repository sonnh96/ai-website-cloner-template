import { Marquee } from "@/components/marquee";
import { cn } from "@/lib/utils";

// CIS's "Hệ Thống Trường Đại Học" section shows a world map with 4 numbered
// pins for university-pathway regions. No individual partner-university
// logos were available to download, so each region renders as a styled
// text wordmark, matching the real map's labeled regions.
const ROW_ONE_UNIVERSITIES = ["Bắc Mỹ (Hoa Kỳ & Canada)", "Vương Quốc Anh & Ireland"];

const ROW_TWO_UNIVERSITIES = ["Đông Á (Hàn Quốc & Nhật Bản)", "Úc"];

function UniversityWordmark({ name }: { name: string }) {
  return (
    <span
      className={cn(
        "flex h-10 items-center whitespace-nowrap font-heading text-lg font-bold uppercase tracking-wide text-tas-navy",
        "opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0",
        "md:h-12 md:text-xl"
      )}
    >
      {name}
    </span>
  );
}

export function GraduatesSection() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="max-w-[480px] font-heading text-[40px] font-bold leading-[1.1] tracking-tight text-tas-crimson">
          Hệ Thống Trường Đại Học
        </h2>
        <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-tas-ink md:text-lg">
          Chương trình Tú tài Quốc tế (IB Diploma) tại CIS mở ra cánh cửa vào
          hệ thống các trường đại học hàng đầu tại Bắc Mỹ, Vương quốc Anh,
          Đông Á và Úc.
        </p>
        <button
          type="button"
          className="mt-8 rounded-[10px] bg-tas-crimson px-6 py-3 font-bold text-white transition hover:brightness-110"
        >
          Tìm hiểu thêm
        </button>
      </div>

      <div className="relative w-full overflow-hidden bg-tas-surface py-16">
        {/* No dotted world-map asset (e.g. "*map*") was found in
            `public/images/`, so the background graphic is skipped per spec. */}
        <div className="flex flex-col gap-10">
          <Marquee direction="left" durationSeconds={35}>
            <div className="flex items-center gap-16">
              {ROW_ONE_UNIVERSITIES.map((name) => (
                <UniversityWordmark key={name} name={name} />
              ))}
            </div>
          </Marquee>
          <Marquee direction="right" durationSeconds={45}>
            <div className="flex items-center gap-16">
              {ROW_TWO_UNIVERSITIES.map((name) => (
                <UniversityWordmark key={name} name={name} />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
