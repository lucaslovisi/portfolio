"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { portfolio } from "@/content/portfolio";
import type { Project } from "@/types";
import { Modal } from "@/components/ui/Modal";
import { Stagger, staggerItem } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/utils";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative scroll-mt-24 py-32 sm:py-40">
      <div className="container-screen">
        <SectionHeader
          index="03"
          label="Projetos"
          title={
            <>
              Uma seleção recente.{" "}
              <span className="text-[color:var(--color-text-muted)]">
                ({portfolio.projects.length})
              </span>
            </>
          }
          description="Trabalhos em branding, produto, motion e direção de arte. Clique em qualquer cartão para ver detalhes."
        />

        <Stagger gap={0.1} className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
          {portfolio.projects.map((project, i) => (
            <motion.button
              key={project.slug}
              variants={staggerItem}
              type="button"
              onClick={() => setActive(project)}
              aria-label={`Abrir projeto ${project.title}`}
              data-cursor="hover"
              className={cn(
                "group relative flex flex-col text-left transition-transform duration-500",
                // staggered column spans for varied grid
                i % 5 === 0
                  ? "md:col-span-7"
                  : i % 5 === 1
                  ? "md:col-span-5"
                  : i % 5 === 2
                  ? "md:col-span-5"
                  : i % 5 === 3
                  ? "md:col-span-7"
                  : "md:col-span-6"
              )}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]">
                <Image
                  src={project.thumbnail.src}
                  alt={project.thumbnail.alt}
                  fill
                  sizes="(max-width: 768px) 92vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--color-bg)]/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="pointer-events-none absolute inset-x-4 bottom-4 flex translate-y-2 items-end justify-between opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="max-w-[80%] text-balance text-sm text-[color:var(--color-text)]">
                    {project.summary}
                  </p>
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-[color:var(--color-accent)] text-black">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="font-display text-2xl text-[color:var(--color-text)] sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-[color:var(--color-text-muted)]">
                    {project.category}
                  </p>
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
                  {project.year}
                </span>
              </div>
            </motion.button>
          ))}
        </Stagger>
      </div>

      <ProjectModal
        project={active}
        onClose={() => setActive(null)}
      />
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const gallery = project?.gallery ?? (project ? [project.thumbnail] : []);
  const current = gallery[galleryIndex] ?? project?.thumbnail;
  const headingId = project ? `project-${project.slug}-title` : undefined;

  const next = () => setGalleryIndex((i) => (i + 1) % Math.max(gallery.length, 1));
  const prev = () => setGalleryIndex((i) => (i - 1 + gallery.length) % Math.max(gallery.length, 1));

  return (
    <Modal open={!!project} onClose={() => { setGalleryIndex(0); onClose(); }} labelledBy={headingId}>
      {project && current && (
        <article>
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[color:var(--color-bg)]">
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 70vw"
              className="object-cover"
            />
            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Imagem anterior"
                  className="absolute left-3 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-bg)]/80 backdrop-blur hover:border-[color:var(--color-accent)]"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Próxima imagem"
                  className="absolute right-3 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-bg)]/80 backdrop-blur hover:border-[color:var(--color-accent)]"
                >
                  <ChevronRight className="size-4" />
                </button>
                <div className="absolute bottom-3 left-1/2 inline-flex -translate-x-1/2 gap-1.5 rounded-full bg-[color:var(--color-bg)]/70 px-2.5 py-1 backdrop-blur">
                  {gallery.map((_, i) => (
                    <span
                      key={i}
                      className={cn(
                        "block h-1.5 rounded-full transition-all",
                        i === galleryIndex
                          ? "w-5 bg-[color:var(--color-accent)]"
                          : "w-1.5 bg-[color:var(--color-border)]"
                      )}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="p-6 sm:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                  {project.category}
                </p>
                <h3 id={headingId} className="font-display mt-2 text-3xl text-[color:var(--color-text)] sm:text-5xl">
                  {project.title}
                </h3>
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
                {project.year}
              </span>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-12">
              <div className="md:col-span-8 space-y-5 text-base leading-relaxed text-[color:var(--color-text)] sm:text-lg">
                {project.description.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <aside className="md:col-span-4 space-y-6 border-t border-[color:var(--color-border)] pt-6 md:border-t-0 md:border-l md:pl-6 md:pt-0">
                <Field label="Papel">{project.role}</Field>
                {project.stack && project.stack.length > 0 && (
                  <Field label="Stack">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((s) => (
                        <Tag key={s}>{s}</Tag>
                      ))}
                    </div>
                  </Field>
                )}
                {project.tags && project.tags.length > 0 && (
                  <Field label="Tags">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </Field>
                )}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
                  >
                    Ver projeto
                    <ArrowUpRight className="size-4" />
                  </a>
                )}
              </aside>
            </div>
          </div>
        </article>
      )}
    </Modal>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="label-mono mb-2">{label}</p>
      <div className="text-[color:var(--color-text)]">{children}</div>
    </div>
  );
}
