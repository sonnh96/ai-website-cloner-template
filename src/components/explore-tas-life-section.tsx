import Image from "next/image";
import { Play } from "lucide-react";

export function ExploreTasLifeSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-heading text-tas-navy text-xl font-bold">
          Explore the TAS Life
        </h2>
        <button
          type="button"
          className="bg-tas-navy rounded-[10px] px-6 py-3 font-bold text-white transition-colors hover:bg-tas-navy-dark"
        >
          See More
        </button>
      </div>

      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src="/images/67d91bd9b014cf7efb7a4046_Untitled_1-poster-00001.jpg"
          alt="Students walking toward The American School campus entrance"
          fill
          className="object-cover"
          sizes="(min-width: 1280px) 1280px, 100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4 text-center">
          <div className="relative h-16 w-full max-w-md sm:h-20 sm:max-w-xl">
            <Image
              src="/images/67e242f6b9fea32fa11da24e_38a1b495a53a5c8d3ae3db0df69da99f_Logo-White-Landscape.webp"
              alt="The American School — Developing Academic Excellence and Strength of Character"
              fill
              className="object-contain"
              sizes="(min-width: 640px) 576px, 90vw"
            />
          </div>

          <div className="flex size-16 items-center justify-center rounded-full bg-white/20 backdrop-blur">
            <Play className="size-6 fill-white text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
