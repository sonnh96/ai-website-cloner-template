"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/**
 * Other components on this page mount/resize after their own effects run —
 * most notably Hero's GSAP ScrollTrigger `pin`, which inserts a large
 * `pin-spacer` div (2000+px) into the document. If a ScrollReveal below it
 * computes its trigger's pixel position before that spacer exists, its
 * "start" point goes stale and the reveal never fires. Refresh once, after
 * the whole page (images, video metadata, fonts, all other effects) has
 * settled, so every ScrollTrigger recalculates against final layout.
 */
let hasScheduledRefresh = false;
function scheduleGlobalRefresh() {
  if (hasScheduledRefresh || typeof window === "undefined") return;
  hasScheduledRefresh = true;
  if (document.readyState === "complete") {
    ScrollTrigger.refresh();
  } else {
    window.addEventListener("load", () => ScrollTrigger.refresh(), {
      once: true,
    });
  }
}

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /**
   * Passed straight through to the wrapping <div>. Useful when the wrapped
   * element also needs its own inline styles (e.g. a carousel track's own
   * `transform: translateX(...)`) — use `stagger` in that case so this
   * component only ever touches the *children's* transform, never the
   * container's, avoiding any conflict with a style like this one.
   */
  style?: CSSProperties;
  /** Animate each direct child with a stagger instead of the container as one block. */
  stagger?: boolean;
  /** Starting vertical offset in px before the fade-up settles at y: 0. */
  y?: number;
  /** Extra delay in seconds before the tween starts. */
  delay?: number;
}

/**
 * Fades + slides content up into place the first time it scrolls into view.
 * Renders a single wrapping <div> in place of `children` — pass `className`
 * through as if this were that element directly (e.g. a grid container can
 * become `<ScrollReveal stagger className="grid ...">`, no extra nesting).
 */
export function ScrollReveal({
  children,
  className,
  style,
  stagger = false,
  y = 40,
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const targets = stagger ? Array.from(el.children) : el;
      if (stagger && (targets as Element[]).length === 0) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(targets, { opacity: 0, y });

      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(targets, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: stagger ? 0.12 : 0,
            delay,
          });
        },
      });

      scheduleGlobalRefresh();
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
