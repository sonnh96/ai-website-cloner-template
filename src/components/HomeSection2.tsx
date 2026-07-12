import { GraduationCap, TrendingUp, Users, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

interface StatCardData {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
}

const stats: StatCardData[] = [
  {
    icon: GraduationCap,
    value: "100%",
    label: "Tỷ lệ tốt nghiệp",
    description: "học sinh CIS tốt nghiệp thành công mỗi năm học",
  },
  {
    icon: TrendingUp,
    value: "33/30.2",
    label: "Điểm trung bình IBDP",
    description: "so với điểm trung bình thế giới của chương trình IBDP",
  },
  {
    icon: Users,
    value: "45+",
    label: "Câu lạc bộ ngoại khóa",
    description: "đa dạng lĩnh vực thể thao, nghệ thuật và học thuật",
  },
  {
    icon: Globe,
    value: "30+",
    label: "Quốc tịch",
    description: "học sinh đến từ hơn 30 quốc gia trên thế giới",
  },
];

function StatCard({ icon: Icon, value, label, description }: StatCardData) {
  return (
    <div className="stat-card flex flex-col items-start gap-2">
      <Icon className="h-16 w-16 text-[#D9660A]" strokeWidth={1.5} />
      <p className="text-4xl font-extrabold text-[#D9660A]">{value}</p>
      <p className="text-lg font-semibold text-muted-foreground">{label}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export function HomeSection2() {
  return (
    <section className="py-16 md:py-24">
      <div className="flex flex-col md:flex-row gap-12 max-w-[1272px] mx-auto px-7">
        <ScrollReveal className="w-full md:w-[400px] shrink-0">
          <h3 className="text-[36px] font-extrabold leading-[46.8px] text-foreground">
            Những con số
            <br />
            ấn tượng
          </h3>
          <p className="mt-4 text-base leading-[24.8px] text-muted-foreground">
            CIS tự hào về những thành tích học thuật, thể thao và nghệ thuật
            nổi bật cùng một cộng đồng học sinh đa quốc gia giàu bản sắc.
          </p>
        </ScrollReveal>
        <ScrollReveal
          stagger
          className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10"
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
