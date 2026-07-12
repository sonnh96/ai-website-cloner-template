import Image from "next/image";

interface ClientLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const clientLogos: ClientLogo[] = [
  {
    src: "/images/kadu/2024/06/clients_logo_1.png",
    alt: "Partner university logo",
    width: 140,
    height: 56,
  },
  {
    src: "/images/kadu/2024/06/clients_logo_2.png",
    alt: "Partner university logo",
    width: 140,
    height: 56,
  },
  {
    src: "/images/kadu/2024/06/clients_logo_3.png",
    alt: "Partner university logo",
    width: 140,
    height: 56,
  },
  {
    src: "/images/kadu/2024/06/clients_logo_5.webp",
    alt: "Partner university logo",
    width: 140,
    height: 56,
  },
  {
    src: "/images/kadu/2024/06/clients_logo_6.webp",
    alt: "Partner university logo",
    width: 140,
    height: 56,
  },
  {
    src: "/images/kadu/2024/06/clients_logo_7.webp",
    alt: "Partner university logo",
    width: 140,
    height: 56,
  },
];

export function ClientsSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <h2 className="text-center text-lg font-medium text-kd-paragraph md:text-xl">
          Leading Universities And Companies
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:justify-between">
          {clientLogos.map((logo) => (
            <div key={logo.src} className="relative h-12 w-auto">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-12 w-auto object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
