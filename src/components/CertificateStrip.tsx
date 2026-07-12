import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

interface PartnerLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const logos: PartnerLogo[] = [
  {
    src: "/images/cis/partner-ib.png",
    alt: "IB World School",
    width: 41,
    height: 40,
  },
  {
    src: "/images/cis/partner-ap.png",
    alt: "AP CollegeBoard",
    width: 39,
    height: 40,
  },
  {
    src: "/images/cis/partner-cis-accredited.png",
    alt: "Council of International Schools",
    width: 40,
    height: 40,
  },
  {
    src: "/images/cis/partner-cognia.png",
    alt: "Cognia",
    width: 40,
    height: 40,
  },
  {
    src: "/images/cis/partner-wasc.png",
    alt: "WASC",
    width: 117,
    height: 40,
  },
];

const marqueeLogos = [...logos, ...logos];

export function CertificateStrip() {
  return (
    <section className="py-12" style={{ backgroundColor: "var(--secondary)" }}>
      <ScrollReveal className="max-w-[1272px] mx-auto px-7 text-center">
        <h3 className="text-2xl font-bold text-foreground mb-8">
          Liên kết Quốc Tế
        </h3>
        <div className="overflow-hidden">
          <div className="flex gap-16 items-center w-max animate-marquee">
            {marqueeLogos.map((logo, index) => (
              <Image
                key={`${logo.src}-${index}`}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                style={{ width: "auto", height: "40px" }}
                className="object-contain shrink-0"
              />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
