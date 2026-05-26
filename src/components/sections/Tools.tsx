"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { portfolio } from "@/content/portfolio";
import { Reveal, Stagger, staggerItem } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ToolIcon } from "@/components/ui/ToolIcon";
import { Marquee } from "@/components/ui/Marquee";
import { EASE_OUT_EXPO } from "@/lib/motion";

export function Tools() {
  return (
    <section id="tools" className="relative scroll-mt-24 py-32 sm:py-40">
      <div className="container-screen">
        <SectionHeader
          index="04"
          label="Ferramentas & IA"
          title={<>O que está sob a mesa.</>}
          description="Da prancha digital aos copilotos de IA — as ferramentas que moldam o ofício hoje."
        />

        <Stagger
          gap={0.07}
          className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4"
        >
          {portfolio.tools.map((tool) => (
            <motion.div key={tool.key} variants={staggerItem}>
              <ToolCard tool={tool} />
            </motion.div>
          ))}
        </Stagger>

        <Reveal delay={0.2} className="mt-20">
          <p className="label-mono mb-4 text-center">Mesa de trabalho</p>
          <Marquee speed={42}>
            {portfolio.tools.map((t) => (
              <span
                key={`mq-${t.key}`}
                className="font-display whitespace-nowrap text-3xl text-[color:var(--color-text-muted)] sm:text-5xl"
              >
                {t.name}
                <span className="mx-6 text-[color:var(--color-accent)]">●</span>
              </span>
            ))}
          </Marquee>
        </Reveal>
      </div>
    </section>
  );
}

function ToolCard({ tool }: { tool: (typeof portfolio.tools)[number] }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      data-cursor="hover"
      className="group relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 transition-colors duration-300 hover:border-[color:var(--color-text-muted)]"
    >
      <motion.div
        animate={{ scale: hover ? 1.12 : 1, y: hover ? -4 : 0 }}
        transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
        className="text-[color:var(--color-text-muted)] transition-colors duration-300 group-hover:text-[color:var(--color-text)]"
      >
        <ToolIcon tool={tool} colored={hover} size={48} />
      </motion.div>
      <motion.p
        animate={{ opacity: hover ? 1 : 0.7, y: hover ? 0 : 4 }}
        transition={{ duration: 0.3 }}
        className="mt-6 text-center text-sm font-medium text-[color:var(--color-text)]"
      >
        {tool.name}
      </motion.p>
      <motion.div
        aria-hidden
        animate={{ opacity: hover ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(60% 50% at 50% 30%, ${tool.brandColor}1f, transparent 70%)`,
        }}
      />
    </div>
  );
}
