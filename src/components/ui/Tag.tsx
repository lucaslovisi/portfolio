import { cn } from "@/lib/utils";

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/60 px-3 py-1 text-xs font-medium text-[color:var(--color-text-muted)]",
        className
      )}
    >
      {children}
    </span>
  );
}
