"use client";

import { useEffect, useState } from "react";

type Direction = "up" | "down" | "idle";

export function useScrollDirection(threshold = 8): {
  direction: Direction;
  scrolled: boolean;
} {
  const [direction, setDirection] = useState<Direction>("idle");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const diff = y - last;
      if (Math.abs(diff) > threshold) {
        setDirection(diff > 0 && y > 80 ? "down" : "up");
        last = y;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { direction, scrolled };
}
