import Image from "next/image";
import { CheckCircleIcon } from "@/components/icons";

interface Feature {
  title: string;
  description: string;
}

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Skilled Lecturers",
    description:
      "Awesome hexagon themed stream pack, you can change hexagon",
  },
  {
    title: "Learn With Effectivey",
    description:
      "Awesome hexagon themed stream pack, you can change hexagon",
  },
];

const serviceCards: ServiceCard[] = [
  {
    icon: "/images/kadu/2024/05/s1-icon-1.webp",
    title: "Arts & Design",
    description:
      "Awesome hexagon themed stream pack, you can change hexagon stream pack,",
  },
  {
    icon: "/images/kadu/2024/05/s1-icon-3.webp",
    title: "Arts & Design",
    description:
      "Awesome hexagon themed stream pack, you can change hexagon stream pack,",
  },
  {
    icon: "/images/kadu/2024/05/s1-icon-2.webp",
    title: "Health & Fitness",
    description:
      "Awesome hexagon themed stream pack, you can change hexagon stream pack,",
  },
  {
    icon: "/images/kadu/2024/05/s1-icon-4.webp",
    title: "Health & Fitness",
    description:
      "Awesome hexagon themed stream pack, you can change hexagon stream pack,",
  },
];

export function ChooseUsSection() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column: illustration + copy + features */}
          <div className="kd-reveal">
            <span className="font-script text-2xl text-kd-primary sm:text-3xl">
              Get To Know Us
            </span>
            <h2 className="mt-3 text-3xl font-black leading-tight text-kd-heading sm:text-4xl lg:text-[42px]">
              Don&apos;t Know How To Start Quiklearn Courses
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-kd-paragraph">
              We don&apos;t just work with concrete and steel. We work with
              people <strong className="font-bold text-kd-heading">We are Approachable</strong>, with
              even our highest work
            </p>

            {/* Illustration */}
            <div className="relative mx-auto mt-10 w-full max-w-md">
              <Image
                src="/images/kadu/2024/06/c-us-1-bg-shape-1.webp"
                alt=""
                width={520}
                height={520}
                aria-hidden="true"
                className="absolute inset-0 -z-10 h-full w-full scale-110 object-contain opacity-90"
              />
              <Image
                src="/images/kadu/2024/06/c-us-1-img-1.webp"
                alt="Quiklearn students getting started with courses"
                width={480}
                height={480}
                className="relative z-10 h-auto w-full object-contain"
              />
              <span className="absolute -left-4 top-6 z-20 flex h-16 w-16 items-center justify-center rounded-full bg-white p-2 shadow-[0_10px_30px_rgba(0,0,0,0.12)] sm:h-20 sm:w-20">
                <Image
                  src="/images/kadu/2024/06/c-us-1-icon-1.webp"
                  alt=""
                  width={56}
                  height={56}
                  aria-hidden="true"
                  className="h-auto w-full object-contain"
                />
              </span>
              <span className="absolute -right-2 bottom-10 z-20 flex h-16 w-16 items-center justify-center rounded-full bg-white p-2 shadow-[0_10px_30px_rgba(0,0,0,0.12)] sm:h-20 sm:w-20">
                <Image
                  src="/images/kadu/2024/06/c-us-1-icon-2.webp"
                  alt=""
                  width={56}
                  height={56}
                  aria-hidden="true"
                  className="h-auto w-full object-contain"
                />
              </span>
            </div>

            {/* Feature rows */}
            <div className="mt-10 space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-kd-primary/10 text-kd-primary">
                    <CheckCircleIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-kd-heading">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-kd-paragraph">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-kd-secondary px-8 py-5 text-sm font-extrabold uppercase text-[#22281e] transition-colors duration-300 ease-[cubic-bezier(.57,.21,.69,1.25)] hover:bg-kd-primary hover:text-white"
              >
                <span className="relative overflow-hidden">
                  <span className="block transition-transform duration-500 group-hover:-translate-y-full group-hover:opacity-0">
                    Find Out More
                  </span>
                  <span className="absolute inset-0 block translate-y-full opacity-0 transition-transform duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    Let&apos;s Talk
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Right column: 2x2 service card grid */}
          <div className="kd-reveal grid grid-cols-2 gap-4 sm:gap-6">
            {serviceCards.map((card, index) => (
              <div
                key={`${card.title}-${index}`}
                className="rounded-2xl bg-white p-5 shadow-[0_0_15px_rgba(0,0,0,0.08)] sm:p-7"
              >
                <Image
                  src={card.icon}
                  alt=""
                  width={48}
                  height={48}
                  aria-hidden="true"
                  className="h-12 w-12 object-contain"
                />
                <h3 className="mt-4 text-base font-bold text-kd-heading sm:text-lg">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-kd-paragraph">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
