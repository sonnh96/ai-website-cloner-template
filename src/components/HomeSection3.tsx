import Image from "next/image";
import {
  GraduationCap,
  Users,
  Building2,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

interface AcronymLine {
  letter: string;
  letterColor: string;
  rest: string;
  translation: string;
  icon: LucideIcon;
}

const acronymLines: AcronymLine[] = [
  {
    letter: "Star",
    letterColor: "#D9660A",
    rest: " Students",
    translation: "Học sinh ưu tú tỏa sáng ở thể thao, nghệ thuật và học thuật",
    icon: GraduationCap,
  },
  {
    letter: "Star",
    letterColor: "#A6432E",
    rest: " Teachers & Coaches",
    translation: "Đội ngũ giáo viên, huấn luyện viên nước ngoài giàu kinh nghiệm",
    icon: Users,
  },
  {
    letter: "Star",
    letterColor: "#941B1A",
    rest: " Facilities",
    translation: "Không gian hiện đại 50.000m² tại trung tâm Phú Mỹ Hưng",
    icon: Building2,
  },
  {
    letter: "Star",
    letterColor: "#4A2C2A",
    rest: " Parents",
    translation: "Cộng đồng phụ huynh đa quốc gia, kết nối và đồng hành",
    icon: HeartHandshake,
  },
];

export function HomeSection3() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1272px] mx-auto px-7">
        <h3 className="text-[36px] font-extrabold text-foreground mb-10">
          Chân dung <span className="text-[#D9660A]">Học sinh CIS</span>
        </h3>
        <div className="flex flex-col md:flex-row gap-12">
          <ScrollReveal className="relative w-full md:w-[440px] shrink-0">
            <Image
              src="/images/cis/secondary.webp"
              alt="Học sinh CIS"
              width={440}
              height={440}
              className="rounded-2xl object-cover w-full h-auto"
            />
          </ScrollReveal>
          <div className="flex-1">
            <p className="text-base leading-[24.8px] text-foreground mb-8">
              CIS tự hào xây dựng một cộng đồng học sinh, giáo viên và phụ
              huynh xuất sắc &mdash; những nhân tố ngôi sao (STAR) cùng nhau
              kiến tạo môi trường học tập hàng đầu.
            </p>
            <ScrollReveal stagger className="space-y-6">
              {acronymLines.map((line) => {
                const Icon = line.icon;
                return (
                  <div
                    key={line.rest}
                    className="flex items-center gap-4"
                  >
                    <Icon className="h-10 w-10 text-[#D9660A] shrink-0" />
                    <p className="text-2xl md:text-3xl font-bold text-foreground">
                      <span
                        style={{ color: line.letterColor }}
                        className="text-4xl md:text-5xl"
                      >
                        {line.letter}
                      </span>
                      {line.rest}
                      {line.translation && (
                        <span className="block text-base font-normal opacity-70">
                          {line.translation}
                        </span>
                      )}
                    </p>
                  </div>
                );
              })}
            </ScrollReveal>
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#"
                className="rounded-full bg-[#D9660A] text-white px-6 py-3 text-sm font-medium hover:brightness-95 active:scale-95 transition"
              >
                Tìm hiểu thêm
              </a>
              <a
                href="#"
                className="rounded-full bg-[#D9660A] text-white px-6 py-3 text-sm font-medium hover:brightness-95 active:scale-95 transition"
              >
                Tư vấn tuyển sinh
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
