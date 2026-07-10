"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ScrollScaleImage({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const media = container.firstElementChild as HTMLElement | null;
    if (!media) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.set(media, { transformOrigin: "50% 50%", willChange: "transform" });

      const entrance = gsap.fromTo(
        media,
        { scale: 0.86, opacity: 0.55, filter: "brightness(0.75)" },
        {
          scale: 1,
          opacity: 1,
          filter: "brightness(1)",
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top 90%",
            end: "top 35%",
            scrub: true,
          },
        },
      );

      const exit = gsap.to(media, {
        scale: 1.08,
        opacity: 0.4,
        filter: "brightness(0.6)",
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "bottom 55%",
          end: "bottom -15%",
          scrub: true,
        },
      });

      return () => {
        entrance.scrollTrigger?.kill();
        exit.scrollTrigger?.kill();
        entrance.kill();
        exit.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      {children}
    </div>
  );
}
