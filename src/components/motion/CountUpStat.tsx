"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function CountUpStat({ value, suffix }: { value: string; suffix: string }) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const target = parseFloat(value);
  const isNumeric = !Number.isNaN(target);
  const decimals = value.includes(".") ? value.split(".")[1].length : 0;

  useEffect(() => {
    const el = numberRef.current;
    if (!el || !isNumeric) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const counter = { n: 0 };
      const tween = gsap.to(counter, {
        n: target,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          el.textContent = counter.n.toFixed(decimals);
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => mm.revert();
  }, [target, decimals, isNumeric]);

  return (
    <div>
      <span ref={numberRef} className="font-heading text-5xl md:text-6xl font-bold text-white">
        {isNumeric ? "0" : value}
      </span>
      <span className="align-top ml-1 text-2xl md:text-3xl font-heading font-bold text-white">
        {suffix}
      </span>
    </div>
  );
}
