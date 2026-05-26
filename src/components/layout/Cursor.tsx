"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { EASE_OUT_EXPO } from "@/lib/motion";

export function Cursor() {
  const isTouch = useMediaQuery("(pointer: coarse)");
  const reduced = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 380, damping: 32, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 380, damping: 32, mass: 0.4 });
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isTouch || reduced) return;
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = t.closest(
        'a, button, [role="button"], [data-cursor="hover"], input, textarea, select'
      );
      setHover(!!interactive);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("mouseover", onOver);
    };
  }, [x, y, isTouch, reduced]);

  if (isTouch || reduced) return null;

  return (
    <>
      <motion.div
        ref={ref}
        aria-hidden
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[120] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{
            scale: hover ? 2.6 : 1,
            backgroundColor: hover
              ? "rgba(182,255,58,0.12)"
              : "rgba(237,239,236,0)",
            borderColor: hover
              ? "rgba(182,255,58,0.9)"
              : "rgba(237,239,236,0.6)",
            opacity: visible ? 1 : 0,
          }}
          transition={{ duration: 0.22, ease: EASE_OUT_EXPO }}
          className="size-8 rounded-full border backdrop-blur-[2px]"
        />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[121] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: hover ? 0 : 1, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.18 }}
          className="size-1.5 rounded-full bg-[color:var(--color-accent)]"
        />
      </motion.div>
    </>
  );
}
