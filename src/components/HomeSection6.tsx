import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

export function HomeSection6() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1272px] mx-auto px-7">
        <ScrollReveal className="relative rounded-3xl overflow-hidden bg-[#941B1A] flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
          <div className="flex-1 text-white z-10">
            <h3 className="text-3xl font-extrabold mb-4">
              Tư vấn tuyển sinh CIS
            </h3>
            <p className="mb-8 opacity-90 max-w-md">
              Đăng ký để đội ngũ tuyển sinh CIS liên hệ tư vấn chương trình học
              phù hợp nhất cho con bạn.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-full border-2 border-white text-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-[#941B1A] active:scale-95 transition"
              >
                Đăng ký tư vấn
              </a>
              <a
                href="#"
                className="rounded-full border-2 border-white text-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-[#941B1A] active:scale-95 transition"
              >
                Tìm hiểu chương trình học
              </a>
            </div>
          </div>
          <div className="flex-1 relative h-[280px] w-full rounded-2xl overflow-hidden">
            <Image
              src="/images/cis/news-1.jpeg"
              alt="CIS"
              fill
              className="object-cover"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
