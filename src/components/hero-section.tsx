import Image from "next/image"
import { cn } from "@/lib/utils"

const HERO_IMAGE_SRC = "/images/cis-hero-banner.jpg"

const buttonBaseClasses =
  "inline-flex items-center justify-center rounded-[10px] px-5 py-3 text-sm font-bold whitespace-nowrap sm:px-7 sm:text-base"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden">
      {/* Background photo */}
      <Image
        src={HERO_IMAGE_SRC}
        alt="Aerial view of the CIS - Canadian International School campus"
        fill
        priority
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      {/* Dark scrim for text legibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/15 to-black/35" />
      <div className="absolute inset-0 -z-10 bg-black/25" />

      {/* Content — reserves space at the top for an overlaid <SiteHeader /> */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-end px-6 pb-24 text-center">
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          <h1 className="hero-rise text-[36px] leading-[1.2] font-sans text-white sm:text-[42px] md:text-[50px]">
            <span className="font-bold">Trường Quốc Tế CIS</span>
            <span className="font-normal"> — Canadian International School</span>
          </h1>

          <div
            className="hero-rise mt-8 flex gap-3 sm:gap-4"
            style={{ animationDelay: "150ms" }}
          >
            <a
              href="#"
              className={cn(
                buttonBaseClasses,
                "btn-tactile bg-tas-crimson text-white hover:bg-tas-crimson-dark"
              )}
            >
              Tư Vấn
            </a>
            <a
              href="#"
              className={cn(
                buttonBaseClasses,
                "btn-tactile border-2 border-white bg-transparent text-white hover:bg-white hover:text-tas-navy"
              )}
            >
              Tìm hiểu thêm
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
