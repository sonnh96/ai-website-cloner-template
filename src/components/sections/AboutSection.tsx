import Image from "next/image";
import { CheckCircleIcon } from "@/components/icons";

const FEATURES = [
  "Top Instructors",
  "6,000+ Membership",
] as const;

const STATS = [
  { number: "3020+", label: "Online Courses" },
  { number: "850+", label: "Online Certifications" },
] as const;

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center gap-12 md:gap-16 lg:flex-row lg:items-center lg:gap-10">
          {/* Text content */}
          <div className="w-full lg:w-[55%]">
            <p className="kd-reveal font-script text-2xl text-kd-primary md:text-3xl">
              Online courses from experts.
            </p>

            <h2 className="kd-split-text kd-title-ani mt-4 font-sans text-[40px] font-black leading-[1.15] tracking-tight md:text-[48px]">
              <span className="block text-kd-heading">
                Online Learning Wherever
              </span>
              <span className="block text-kd-primary">And Whenever.</span>
            </h2>

            <p className="kd-reveal mt-6 max-w-xl text-base leading-relaxed text-kd-paragraph md:text-lg">
              We don&apos;t just work with concrete and steel. We work with
              people, with even our highest work work with concrete and
              steel. We work with people{" "}
              <span className="font-bold text-kd-heading">
                We are Approachable
              </span>
            </p>

            <ul className="kd-reveal mt-8 flex flex-col gap-5 sm:flex-row sm:gap-10">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-kd-primary/10 text-kd-primary">
                    <CheckCircleIcon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="font-sans text-lg font-bold text-kd-heading">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image group */}
          <div className="relative w-full lg:w-[45%]">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Certified rotating badge */}
              <div className="absolute -left-4 -top-4 z-20 hidden items-center gap-3 md:flex lg:-left-8 lg:-top-6">
                <div className="txaa-roteted-1 relative h-20 w-20 lg:h-24 lg:w-24">
                  <Image
                    src="/images/kadu/2024/05/kd-a1-certified.webp"
                    alt="Certified badge"
                    fill
                    sizes="96px"
                    className="object-contain"
                  />
                </div>
                <span className="max-w-[7rem] font-sans text-sm font-bold leading-snug text-kd-heading">
                  Guaranteed &amp; certified
                </span>
              </div>

              {/* Decorative accents */}
              <div className="absolute -right-3 top-8 z-0 hidden h-10 w-10 opacity-80 md:block lg:-right-6">
                <Image
                  src="/images/kadu/2024/05/kd-a1-img-3.webp"
                  alt=""
                  fill
                  sizes="40px"
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute -left-6 bottom-1/3 z-0 hidden h-8 w-8 opacity-80 lg:block">
                <Image
                  src="/images/kadu/2024/05/kd-a1-img-4.webp"
                  alt=""
                  fill
                  sizes="32px"
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute right-10 -top-6 z-0 hidden h-7 w-7 opacity-80 lg:block">
                <Image
                  src="/images/kadu/2024/05/kd-a1-img-5.webp"
                  alt=""
                  fill
                  sizes="28px"
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>

              {/* Main photo */}
              <div className="kd-img-ani-1 relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/kadu/2024/05/kd-a1-img-1.webp"
                  alt="Student learning online"
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Secondary circular photo */}
              <div className="kd-img-ani-1 absolute -bottom-8 -left-6 z-10 h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-lg sm:h-36 sm:w-36 lg:-bottom-10 lg:-left-10 lg:h-40 lg:w-40">
                <Image
                  src="/images/kadu/2024/05/kd-a1-img-2.webp"
                  alt="Instructor portrait"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>

              {/* Decorative accent near secondary photo */}
              <div className="absolute -bottom-2 left-1/3 z-0 hidden h-9 w-9 opacity-80 md:block">
                <Image
                  src="/images/kadu/2024/05/kd-a1-img-6.webp"
                  alt=""
                  fill
                  sizes="36px"
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>

              {/* Stat badge: Online Courses */}
              <div className="absolute -right-4 top-1/4 z-20 hidden rounded-xl bg-white px-5 py-4 shadow-lg sm:right-0 md:flex md:flex-col">
                <span className="font-sans text-2xl font-black text-kd-heading">
                  {STATS[0].number}
                </span>
                <span className="text-sm font-medium text-kd-paragraph">
                  {STATS[0].label}
                </span>
              </div>

              {/* Stat badge: Online Certifications */}
              <div className="absolute -right-2 bottom-6 z-20 hidden rounded-xl bg-white px-5 py-4 shadow-lg sm:-right-6 md:flex md:flex-col lg:-right-10">
                <span className="font-sans text-2xl font-black text-kd-heading">
                  {STATS[1].number}
                </span>
                <span className="text-sm font-medium text-kd-paragraph">
                  {STATS[1].label}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
