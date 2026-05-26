import { portfolio } from "@/content/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-[color:var(--color-border)] bg-[color:var(--color-bg)]">
      <div className="container-screen flex flex-col gap-6 py-10 text-sm text-[color:var(--color-text-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs uppercase tracking-[0.18em]">
          © {year} — {portfolio.person.name}. Todos os direitos reservados.
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.18em]">
          Feito com intenção. <span className="text-[color:var(--color-text)]">PT-BR</span>
        </p>
      </div>
    </footer>
  );
}
