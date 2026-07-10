"use client";

import Image from "next/image";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function VisionMissionSection() {
  const imageRevealRef = useScrollReveal<HTMLDivElement>();
  const contentRevealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "url('/images/67b29cf84f50923c6d9ad1cc_wave-1920.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "960px auto",
        }}
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-2 md:items-start">
        <div ref={imageRevealRef} className="scroll-reveal">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md">
            <Image
              src="/images/67d28153761b6549fe0502cd_Day1_UNISMUN-066.webp"
              alt="Students in blazers walking on campus"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>

        <div ref={contentRevealRef} className="scroll-reveal flex flex-col gap-6">
          <p className="text-lg font-light text-tas-navy">
            Empowering Students to Thrive in a Supportive Environment
          </p>

          <p className="text-base leading-relaxed text-tas-ink md:text-[17px]">
            The American School fosters the growth of the whole child in a
            multicultural environment aligned with American educational
            models.
          </p>

          <div>
            <h3 className="font-heading text-[28px] font-medium text-tas-navy">
              Our Vision
            </h3>
            <p className="mt-3 text-base leading-relaxed text-tas-ink md:text-[17px]">
              To be a passionate and internationally inspired organization
              that is dynamic and evolving, where all members are supported
              in realizing their unique potential and all students may
              pursue endeavors beyond the classroom, while consolidating its
              position as an institution recognized both regionally and
              internationally as a school of academic excellence.
            </p>
          </div>

          <div className="ml-12">
            <h3 className="font-heading text-[28px] font-medium text-tas-navy">
              Our Mission
            </h3>
            <p className="mt-3 text-base leading-relaxed text-tas-ink md:text-[17px]">
              The American School educates the whole child in a
              multicultural environment aligned with educational models in
              support of individualized pathways. We nurture individual
              abilities to produce creative confident, and critical thinkers
              who are self-aware, socially conscious, and prepared for an
              ever-changing society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
