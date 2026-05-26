"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  speed = 40,
  reverse = false,
  className,
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={cn("group relative flex overflow-hidden mask-fade-x", className)}
      style={{ ["--mq-duration" as string]: `${speed}s` }}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className={cn(
            "flex shrink-0 items-center gap-12 px-6",
            "animate-[mq_var(--mq-duration)_linear_infinite]",
            reverse && "[animation-direction:reverse]",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
        >
          {children}
        </div>
      ))}
      <style>{`@keyframes mq { from { transform: translateX(0) } to { transform: translateX(-100%) } }`}</style>
    </div>
  );
}
