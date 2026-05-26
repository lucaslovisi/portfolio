"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { portfolio } from "@/content/portfolio";
import { Stagger, staggerItem } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Career() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="career" className="relative scroll-mt-24 py-32 sm:py-40">
      <div className="container-screen">
        <SectionHeader
          index="02"
          label="Carreira"
          title={<>Uma década entre design, marca e direção.</>}
          description="Da prancheta à liderança de times — uma trajetória costurada com curiosidade e ofício."
        />

        <div ref={ref} className="relative mt-16 md:mt-24">
          {/* base line */}
          <div
            aria-hidden
            className="absolute left-3 top-0 h-full w-px bg-[color:var(--color-border)] md:left-1/2"
          />
          {/* progress accent line */}
          <motion.div
            aria-hidden
            style={{ scaleY: lineScale, transformOrigin: "top" }}
            className="absolute left-3 top-0 h-full w-px bg-[color:var(--color-accent)] md:left-1/2"
          />

          <Stagger gap={0.12} className="relative space-y-12 md:space-y-20">
            {portfolio.experiences.map((exp, i) => {
              const isRight = i % 2 === 0;
              return (
                <motion.div
                  key={`${exp.company}-${exp.role}`}
                  variants={staggerItem}
                  className="relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12"
                >
                  {/* node */}
                  <div
                    aria-hidden
                    className="absolute left-3 top-2 z-10 -translate-x-1/2 md:left-1/2"
                  >
                    <div className="relative">
                      <span className="block size-3 rounded-full bg-[color:var(--color-accent)]" />
                      <span className="absolute inset-0 -m-1 rounded-full ring-1 ring-[color:var(--color-accent)]/40" />
                    </div>
                  </div>

                  {/* card */}
                  <div
                    className={
                      isRight
                        ? "md:col-start-2 pl-10 md:pl-12"
                        : "md:col-start-1 pl-10 md:pl-0 md:pr-12 md:text-right"
                    }
                  >
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
                      {exp.period}
                    </p>
                    <h3 className="font-display mt-2 text-2xl text-[color:var(--color-text)] sm:text-3xl">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-base text-[color:var(--color-accent)]">
                      {exp.company}
                    </p>
                    <p className="mt-3 max-w-md text-[color:var(--color-text-muted)] md:max-w-none">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
