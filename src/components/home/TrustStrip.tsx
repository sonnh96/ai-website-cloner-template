import Image from "next/image";

const ACCREDITATIONS = [
  { src: "/images/partners/ib-world-school.png", alt: "IB World School" },
  { src: "/images/partners/collegeboard-ap.png", alt: "College Board AP" },
  { src: "/images/partners/cis-accredited.png", alt: "CIS Accredited" },
  { src: "/images/partners/cognia.png", alt: "Cognia" },
  { src: "/images/partners/wasc.png", alt: "WASC" },
];

export function TrustStrip() {
  return (
    <div className="relative z-20 -mt-10 px-4 md:-mt-14 md:px-6">
      <div
        className="enter-rise mx-auto flex max-w-[1040px] flex-wrap items-center justify-center gap-x-8 gap-y-5 rounded-lg bg-white px-6 py-6 shadow-2xl md:justify-between md:gap-x-10 md:px-10"
        style={{ "--i": 2 } as React.CSSProperties}
      >
        {ACCREDITATIONS.map((logo) => (
          <Image
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            width={90}
            height={48}
            className="h-8 w-auto object-contain md:h-10"
          />
        ))}
      </div>
    </div>
  );
}
