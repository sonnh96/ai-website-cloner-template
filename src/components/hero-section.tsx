import { cn } from "@/lib/utils"

const VIDEO_BASE = "67d91bd9b014cf7efb7a4046_Untitled_1-transcode"
const POSTER_SRC = "/images/67d91bd9b014cf7efb7a4046_Untitled_1-poster-00001.jpg"

const buttonBaseClasses =
  "inline-flex items-center justify-center rounded-[10px] px-5 py-3 text-sm font-bold whitespace-nowrap transition-colors sm:px-7 sm:text-base"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={POSTER_SRC}
      >
        <source src={`/videos/${VIDEO_BASE}.webm`} type="video/webm" />
        <source src={`/videos/${VIDEO_BASE}.mp4`} type="video/mp4" />
      </video>

      {/* Dark scrim for text legibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/15 to-black/35" />
      <div className="absolute inset-0 -z-10 bg-black/25" />

      {/* Content — reserves space at the top for an overlaid <SiteHeader /> */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-end px-6 pb-24 text-center">
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          <h1 className="text-[36px] leading-[1.2] font-sans text-white sm:text-[42px] md:text-[50px]">
            <span className="font-normal">Inspiring </span>
            <span className="font-bold">Academic Excellence</span>
            <span className="font-normal"> in a </span>
            <span className="font-bold">Dynamic American Educational Program</span>
          </h1>

          <div className="mt-8 flex gap-3 sm:gap-4">
            <a
              href="#"
              className={cn(
                buttonBaseClasses,
                "bg-tas-crimson text-white hover:bg-tas-crimson-dark"
              )}
            >
              Enroll Now
            </a>
            <a
              href="#"
              className={cn(
                buttonBaseClasses,
                "border-2 border-white bg-transparent text-white hover:bg-white hover:text-tas-navy"
              )}
            >
              Learn more about us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
