"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { portfolio } from "@/content/portfolio";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { EASE_OUT_EXPO } from "@/lib/motion";

export function Nav() {
  const { direction, scrolled } = useScrollDirection();
  const [active, setActive] = useState<string>("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = portfolio.nav.map((n) => n.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const hidden = direction === "down" && scrolled && !open;

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          aria-label="Principal"
          className={cn(
            "flex w-full max-w-[1180px] items-center justify-between rounded-full border border-[color:var(--color-border)]/80 px-3 py-2 backdrop-blur-xl transition-colors duration-300",
            scrolled
              ? "bg-[color:var(--color-bg)]/70"
              : "bg-[color:var(--color-bg)]/40"
          )}
        >
          <a
            href="#hero"
            className="ml-2 flex items-center gap-2 font-display text-sm font-semibold tracking-tight"
          >
            <span
              aria-hidden
              className="inline-block size-2 rounded-full bg-[color:var(--color-accent)] accent-glow"
            />
            <span>{portfolio.person.name.split(" ")[0] || "Portfólio"}</span>
            <span className="text-[color:var(--color-text-muted)] font-mono text-[10px] uppercase tracking-[0.2em]">
              / {portfolio.person.role}
            </span>
          </a>
          <ul className="hidden items-center gap-1 md:flex">
            {portfolio.nav.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={cn(
                      "relative inline-flex h-9 items-center rounded-full px-3.5 text-sm transition-colors duration-200",
                      isActive
                        ? "text-[color:var(--color-text)]"
                        : "text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text)]"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
                        className="absolute inset-0 rounded-full bg-[color:var(--color-surface)] ring-1 ring-[color:var(--color-border)]"
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 items-center rounded-full bg-[color:var(--color-accent)] px-4 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.03] md:inline-flex"
          >
            Vamos conversar
          </a>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-[color:var(--color-border)] md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col bg-[color:var(--color-bg)]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex-1 px-6 pt-28 pb-10">
              <ul className="flex flex-col gap-1">
                {portfolio.nav.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.4, ease: EASE_OUT_EXPO }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="block py-3 font-display text-4xl tracking-tight text-[color:var(--color-text)]"
                    >
                      <span className="text-[color:var(--color-text-muted)] font-mono text-xs align-top mr-3">
                        0{portfolio.nav.indexOf(item) + 1}
                      </span>
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-12">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-12 items-center rounded-full bg-[color:var(--color-accent)] px-6 text-base font-medium text-black"
                >
                  Vamos conversar
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
