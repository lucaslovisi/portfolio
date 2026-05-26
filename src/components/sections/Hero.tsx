"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { portfolio } from "@/content/portfolio";
import { InteractiveBackground } from "@/components/background/InteractiveBackground";
import { LiveClock } from "@/components/ui/LiveClock";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { EASE_OUT_EXPO } from "@/lib/motion";

const lineVariants = {
  hidden: { y: "115%" },
  show: (i: number) => ({
    y: "0%",
    transition: { delay: 0.15 + i * 0.09, duration: 0.95, ease: EASE_OUT_EXPO },
  }),
};

export function Hero() {
  const nameParts = portfolio.person.name.trim().split(" ");
  const lines = nameParts.length > 1
    ? [nameParts.slice(0, -1).join(" "), nameParts.slice(-1).join(" ")]
    : nameParts;

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen w-full flex-col overflow-hidden pt-28 sm:pt-32"
    >
      <InteractiveBackground variant="full" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(10,11,10,0)_0%,rgba(10,11,10,0.55)_70%,rgba(10,11,10,0.9)_100%)]" />

      <div className="relative z-10 container-screen flex flex-1 flex-col">
        {/* Topbar mini */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex items-center justify-between"
        >
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
            P / 25 — Portfólio
          </span>
          <LiveClock />
        </motion.div>

        {/* Center */}
        <div className="flex flex-1 flex-col justify-center pt-12 pb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 sm:mb-8"
          >
            <StatusBadge />
          </motion.div>

          <h1 className="font-display text-display-xl text-[color:var(--color-text)] -ml-[0.06em]">
            {lines.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  variants={lineVariants}
                  custom={i}
                  initial="hidden"
                  animate="show"
                  className="block will-change-transform"
                >
                  {line}
                </motion.span>
              </span>
            ))}
            <span className="block overflow-hidden">
              <motion.span
                variants={lineVariants}
                custom={lines.length}
                initial="hidden"
                animate="show"
                className="block text-[color:var(--color-accent)] will-change-transform"
              >
                {portfolio.person.role.toLowerCase()}.
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: EASE_OUT_EXPO }}
            className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10"
          >
            <p className="md:col-start-7 md:col-end-13 max-w-xl text-balance text-base text-[color:var(--color-text-muted)] sm:text-lg">
              {portfolio.person.tagline}
            </p>
          </motion.div>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.6 }}
          className="flex flex-col gap-4 border-t border-[color:var(--color-border)]/70 py-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <a
            href="#about"
            className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text)]"
          >
            <span className="inline-flex size-9 items-center justify-center rounded-full border border-[color:var(--color-border)] transition-colors group-hover:border-[color:var(--color-accent)]">
              <ArrowDown className="size-4 transition-transform duration-500 group-hover:translate-y-0.5" />
            </span>
            Role para explorar
          </a>
          <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
            <span>{portfolio.person.location}</span>
            <span className="hidden sm:inline">/</span>
            <span className="hidden text-[color:var(--color-text)] sm:inline">
              {portfolio.projects.length} projetos selecionados
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
