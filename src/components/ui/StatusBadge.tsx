import { portfolio } from "@/content/portfolio";

export function StatusBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/60 px-3 py-1.5 text-xs text-[color:var(--color-text)] backdrop-blur">
      <span className="relative flex size-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-accent)] opacity-70" />
        <span className="relative inline-flex size-2 rounded-full bg-[color:var(--color-accent)]" />
      </span>
      <span className="font-medium">{portfolio.person.status}</span>
    </div>
  );
}
