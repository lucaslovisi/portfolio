"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/content/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { InteractiveBackground } from "@/components/background/InteractiveBackground";
import { whatsappLink } from "@/lib/whatsapp";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-24 overflow-hidden py-32 sm:py-44"
    >
      <InteractiveBackground variant="ambient" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_50%,rgba(10,11,10,0)_0%,rgba(10,11,10,0.6)_70%,rgba(10,11,10,0.95)_100%)]"
      />

      <div className="relative z-10 container-screen text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
            05 / Contato
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display mx-auto mt-6 max-w-5xl text-balance text-display-lg text-[color:var(--color-text)]">
            Vamos construir algo{" "}
            <span className="text-[color:var(--color-accent)] italic">memorável</span>?
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-xl text-base text-[color:var(--color-text-muted)] sm:text-lg">
            Estou aberto a projetos de branding, produto e direção criativa. Mande uma
            mensagem — começamos por uma conversa.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={whatsappLink()} target="_blank" rel="noopener noreferrer" size="lg" showArrow>
              Conversar no WhatsApp
            </Button>
            <Button
              href={`mailto:${portfolio.contact.email}`}
              variant="outline"
              size="lg"
              showArrow
            >
              {portfolio.contact.email}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {portfolio.socials.map((s) => (
              <motion.a
                key={s.key}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-text-muted)] transition-colors hover:text-[color:var(--color-text)]"
              >
                {s.label}
                <ArrowUpRight className="size-3 opacity-0 transition group-hover:opacity-100" />
              </motion.a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
