"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { portfolio } from "@/content/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { EASE_OUT_EXPO } from "@/lib/motion";

export function About() {
  const paragraphs = portfolio.person.bio.split("\n\n");
  return (
    <section id="about" className="relative scroll-mt-24 py-32 sm:py-40">
      <div className="container-screen">
        <SectionHeader index="01" label="Sobre" title={<>Design com intenção. Direção com clareza.</>} />

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-5 lg:col-span-4">
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
                className="relative aspect-[4/5] overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]"
              >
                <Image
                  src={portfolio.person.photo.src}
                  alt={portfolio.person.photo.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 33vw"
                  className="object-cover grayscale transition duration-700 hover:grayscale-0"
                />
                <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--color-bg)]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
                  <span>{portfolio.person.location}</span>
                  <span className="text-[color:var(--color-accent)]">●</span>
                </div>
              </motion.div>
              <span className="absolute -bottom-3 -right-3 hidden rounded-md bg-[color:var(--color-accent)] px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-widest text-black md:inline-block">
                P / 01
              </span>
            </div>
          </Reveal>

          <div className="md:col-span-7 lg:col-span-8 lg:col-start-6">
            <div className="space-y-6">
              {paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.08 * i}>
                  <p className="text-balance text-lg leading-relaxed text-[color:var(--color-text)] sm:text-xl">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2} className="mt-10">
              <p className="label-mono mb-4">Áreas de atuação</p>
              <div className="flex flex-wrap gap-2">
                {portfolio.person.focusAreas.map((area) => (
                  <Tag key={area} className="bg-[color:var(--color-surface)]/80 text-[color:var(--color-text)]">
                    {area}
                  </Tag>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3} className="mt-10 grid grid-cols-2 gap-6 border-t border-[color:var(--color-border)] pt-8 sm:grid-cols-3">
              <Stat label="Anos atuando" value="10+" />
              <Stat label="Projetos entregues" value="120+" />
              <Stat label="Liderança de time" value="8 pessoas" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="label-mono">{label}</p>
      <p className="font-display mt-1 text-3xl text-[color:var(--color-text)]">{value}</p>
    </div>
  );
}
