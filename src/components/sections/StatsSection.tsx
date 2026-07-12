"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";

interface StatItem {
  target: number;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  { target: 45, suffix: "k+", label: "Active Students" },
  { target: 120, suffix: "+", label: "Best Instructors" },
];

/** Animates a number from 0 to `target` once `start` flips true. */
function useCountUp(target: number, start: boolean, duration = 1500): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let rafId: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.round(eased * target));

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [start, target, duration]);

  return value;
}

function StatCounter({ target, suffix, label, start }: StatItem & { start: boolean }) {
  const value = useCountUp(target, start);

  return (
    <div>
      <div className="text-5xl font-bold tabular-nums text-white sm:text-6xl">
        {value}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-white/80 sm:text-base">{label}</p>
    </div>
  );
}

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setHasAnimated(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-kd-primary pt-20 pb-16 sm:pt-24 sm:pb-20"
    >
      {/* Dot-pattern texture overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            Thousands of Courses Authored By Industry Experts
          </h2>

          <div className="txaa-slide-down-1 mt-10 grid grid-cols-2 gap-6 sm:gap-12">
            {STATS.map((stat) => (
              <div key={stat.label} className="txaa-slide-down-1-item">
                <StatCounter {...stat} start={hasAnimated} />
              </div>
            ))}
          </div>
        </div>

        {/* Floating "Get In Touch" contact card */}
        <div className="txaa-fade-right relative z-10 mt-14 sm:-mb-24 sm:mt-16">
          <div className="flex flex-col overflow-hidden rounded-2xl bg-[#1c1f3d] shadow-2xl sm:flex-row sm:items-stretch">
            <div className="flex flex-1 flex-col gap-6 p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8">
              <div className="flex items-center gap-4">
                <span className="flex shrink-0 items-center justify-center rounded-full bg-kd-secondary p-3">
                  <Phone className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm text-white/70">Get In Touch</p>
                  <p className="text-lg font-bold text-white">info@example.com</p>
                </div>
              </div>

              <div className="hidden h-12 w-px bg-white/15 sm:block" aria-hidden="true" />

              <div className="flex items-center gap-8">
                <div>
                  <p className="text-2xl font-bold text-white">45k</p>
                  <p className="text-sm text-white/70">Active Students</p>
                </div>
                <div className="h-10 w-px bg-white/15" aria-hidden="true" />
                <div>
                  <p className="text-2xl font-bold text-white">120+</p>
                  <p className="text-sm text-white/70">Best Instructors</p>
                </div>
              </div>
            </div>

            <div className="relative hidden w-48 shrink-0 sm:block">
              <Image
                src="/images/kadu/2024/05/vc-img-2.webp"
                alt="Get in touch"
                fill
                className="object-cover"
                sizes="192px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
