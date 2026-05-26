"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { forwardRef, useRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

type BaseProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

type AnchorProps = BaseProps & { href: string } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "href" | "ref"
  >;

type ButtonProps = BaseProps & {
  href?: undefined;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "ref">;

type Props = AnchorProps | ButtonProps;

export const MagneticButton = forwardRef<HTMLElement, Props>(function MagneticButton(
  props,
  forwardedRef
) {
  const { children, className, strength = 0.35, ...rest } = props;
  const ref = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.5 });

  const handleMove = (e: React.MouseEvent) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const setRef = (el: HTMLElement | null) => {
    ref.current = el;
    if (typeof forwardedRef === "function") forwardedRef(el);
    else if (forwardedRef) {
      (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = el;
    }
  };

  // motion's component types diverge from React's HTML event-handler types
  // (onAnimationStart in particular). Spread props via a typed escape hatch.
  const restProps = rest as Record<string, unknown>;

  if ("href" in props && props.href !== undefined) {
    const MotionA = motion.a as unknown as React.ComponentType<
      Record<string, unknown>
    >;
    return (
      <MotionA
        ref={setRef as (el: HTMLAnchorElement | null) => void}
        href={props.href}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ x: sx, y: sy }}
        className={cn("inline-flex", className)}
        {...restProps}
      >
        {children}
      </MotionA>
    );
  }

  const MotionButton = motion.button as unknown as React.ComponentType<
    Record<string, unknown>
  >;
  return (
    <MotionButton
      ref={setRef as (el: HTMLButtonElement | null) => void}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={cn("inline-flex", className)}
      {...restProps}
    >
      {children}
    </MotionButton>
  );
});
