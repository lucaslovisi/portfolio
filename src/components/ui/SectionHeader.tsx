import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface Props {
  index: string;
  label: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
}

export function SectionHeader({ index, label, title, description, className }: Props) {
  return (
    <div className={cn("grid grid-cols-1 gap-8 md:grid-cols-12", className)}>
      <Reveal className="md:col-span-3 lg:col-span-3 flex items-start gap-3 md:flex-col md:gap-2">
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
          {index}
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
          / {label}
        </span>
      </Reveal>
      <div className="md:col-span-9 lg:col-span-9">
        <Reveal>
          <h2 className="font-display text-display-md text-balance text-[color:var(--color-text)]">
            {title}
          </h2>
        </Reveal>
        {description && (
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-base text-[color:var(--color-text-muted)] sm:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </div>
  );
}
