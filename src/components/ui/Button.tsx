"use client";

import { ArrowUpRight } from "lucide-react";
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "./MagneticButton";

type Variant = "primary" | "ghost" | "outline";

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  showArrow?: boolean;
  magnetic?: boolean;
  size?: "sm" | "md" | "lg";
}

type AsAnchor = CommonProps & { href: string } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "href"
  >;
type AsButton = CommonProps & { href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>;
type Props = AsAnchor | AsButton;

const sizes: Record<NonNullable<CommonProps["size"]>, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-7 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-[color:var(--color-accent)] text-black hover:bg-[color:var(--color-accent)]/90 [&_svg]:text-black",
  ghost:
    "bg-transparent text-[color:var(--color-text)] hover:bg-[color:var(--color-surface)]",
  outline:
    "bg-transparent text-[color:var(--color-text)] border border-[color:var(--color-border)] hover:border-[color:var(--color-text-muted)]",
};

export function Button({
  children,
  variant = "primary",
  className,
  showArrow,
  magnetic = true,
  size = "md",
  ...rest
}: Props) {
  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-200 will-change-transform",
    sizes[size],
    variants[variant],
    className
  );

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowUpRight
          aria-hidden
          className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (!magnetic) {
    if ("href" in rest && rest.href) {
      const anchorRest = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
      return (
        <a className={classes} {...anchorRest}>
          {content}
        </a>
      );
    }
    const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button className={classes} {...buttonRest}>
        {content}
      </button>
    );
  }

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as AsAnchor;
    return (
      <MagneticButton href={href} className={classes} {...anchorRest}>
        {content}
      </MagneticButton>
    );
  }
  const buttonRest = rest as AsButton;
  return (
    <MagneticButton className={classes} {...buttonRest}>
      {content}
    </MagneticButton>
  );
}
