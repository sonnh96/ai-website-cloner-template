import Image from "next/image";
import type { HomeContent } from "@/types/content";

export function PrincipalSection({
  content,
}: {
  content: HomeContent["principal"];
}) {
  return (
    <section className="relative bg-primary py-16 md:py-24">
      <div className="mx-auto grid max-w-[1170px] grid-cols-1 items-center gap-6 px-6 md:grid-cols-2 md:gap-12">
        <div className="reveal relative order-1 h-[320px] md:h-[500px]">
          <svg
            className="absolute -top-3 -left-3 z-10"
            width="60"
            height="60"
            viewBox="0 0 130 130"
            fill="none"
            aria-hidden="true"
          >
            <path d="M129 1L1 1L1 129" stroke="white" strokeWidth="2" />
          </svg>
          <svg
            className="absolute -bottom-3 -right-3 z-10"
            width="60"
            height="60"
            viewBox="0 0 130 130"
            fill="none"
            aria-hidden="true"
          >
            <path d="M1 129L129 129L129 1" stroke="white" strokeWidth="2" />
          </svg>
          <Image
            src={content.photoSrc}
            alt={content.heading}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="reveal order-2">
          <h2 className="font-heading text-2xl font-bold uppercase leading-tight text-white md:text-4xl">
            {content.heading}
          </h2>
          <span
            aria-hidden="true"
            className="block font-serif text-8xl leading-none text-white/20"
          >
            &ldquo;
          </span>
          <div className="space-y-4">
            {content.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="font-sans text-lg font-semibold leading-relaxed text-white"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
