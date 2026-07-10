import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  direction?: "left" | "right";
  durationSeconds?: number;
  className?: string;
}

export function Marquee({
  children,
  direction = "left",
  durationSeconds = 30,
  className,
}: MarqueeProps) {
  return (
    <div className={cn("marquee-row overflow-hidden whitespace-nowrap", className)}>
      <div
        className={cn(
          "flex w-max items-center",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        )}
        style={{ animationDuration: `${durationSeconds}s` }}
      >
        <div className="flex items-center">{children}</div>
        <div className="flex items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
