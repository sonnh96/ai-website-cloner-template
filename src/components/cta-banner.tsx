import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface CTABannerProps {
  variant: "crimson" | "navy";
  eyebrow?: string;
  heading: string;
  description: string;
  buttonLabel: string;
  buttonHref?: string;
}

// Set these once a matching downloaded asset exists in public/images/.
// Until then the crimson variant falls back to a soft CSS gradient wash
// and the navy variant simply omits the watermark, per spec.
const WAVE_OVERLAY_SRC: string | null = null;
const MUSTANG_WATERMARK_SRC: string | null = null;

export function CTABanner({
  variant,
  eyebrow,
  heading,
  description,
  buttonLabel,
  buttonHref = "#",
}: CTABannerProps) {
  const isCrimson = variant === "crimson";

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden px-6 py-20",
        isCrimson ? "bg-tas-crimson" : "bg-tas-navy"
      )}
    >
      {isCrimson ? (
        WAVE_OVERLAY_SRC ? (
          <Image
            src={WAVE_OVERLAY_SRC}
            alt=""
            fill
            aria-hidden="true"
            className="absolute inset-0 -z-0 object-cover opacity-15"
          />
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.18),_transparent_60%),radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.12),_transparent_55%)]"
          />
        )
      ) : MUSTANG_WATERMARK_SRC ? (
        <Image
          src={MUSTANG_WATERMARK_SRC}
          alt=""
          width={640}
          height={640}
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-1/2 -z-0 h-auto w-[28rem] -translate-y-1/2 select-none opacity-10 object-contain"
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(223,33,77,0.25),_transparent_55%),radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08),_transparent_60%)]"
        />
      )}

      <div
        className={cn(
          "relative z-10 text-left",
          isCrimson ? "max-w-3xl" : "max-w-2xl"
        )}
      >
        {eyebrow && (
          <p className="mb-3 font-heading text-sm font-bold uppercase tracking-wider text-white/80">
            {eyebrow}
          </p>
        )}
        <h2 className="font-heading text-[40px] font-bold leading-tight text-white">
          {heading}
        </h2>
        <p className="mt-4 font-body text-base text-white/90">
          {description}
        </p>
        <Link
          href={buttonHref}
          className={cn(
            "btn-tactile mt-8 inline-flex items-center justify-center rounded-[10px] border-2 border-white px-6 py-3 font-bold text-white",
            isCrimson
              ? "hover:bg-white hover:text-tas-crimson"
              : "hover:bg-white hover:text-tas-navy"
          )}
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
