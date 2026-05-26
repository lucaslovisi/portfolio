"use client";

import { useEffect, useState } from "react";
import { portfolio } from "@/content/portfolio";

export function LiveClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("pt-BR", {
      timeZone: portfolio.site.timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
      <span aria-hidden className="inline-block size-1.5 rounded-full bg-[color:var(--color-accent)]" />
      <span suppressHydrationWarning>{time || "--:--:--"}</span>
      <span className="text-[color:var(--color-border)]">/</span>
      <span>{portfolio.site.timezoneLabel}</span>
    </div>
  );
}
