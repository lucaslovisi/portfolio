# Portfólio — Head de Design

Site de portfólio pessoal de uma só página, construído com Next.js 16 + React 19, Tailwind v4, Motion e Lenis. Dark, técnico, com verde neon como acento e um background animado em Canvas como assinatura.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript** (strict)
- **Tailwind CSS v4** (tokens via `@theme` em `globals.css`)
- **Motion** (`motion/react`) — animações declarativas e scroll-triggered
- **Lenis** — scroll suave
- **next/font** — Clash Display + General Sans auto-hospedadas, JetBrains Mono via Google Fonts
- **simple-icons** + SVGs em `/public/icons` — logos de marcas

## Rodando localmente

```bash
npm install
npm run dev
# http://localhost:3000
```

Outros comandos:

```bash
npm run build   # build de produção (SSG)
npm run start   # servir build
npm run lint    # ESLint
```

## Como editar o conteúdo

**Tudo que aparece no site vive em um único arquivo:**

```
src/content/portfolio.ts
```

Lá ficam:

- Nome, cargo, bio, status, foto, áreas de atuação
- Número de WhatsApp + mensagem pré-preenchida, e-mail, redes sociais
- Experiências (timeline da Carreira)
- Projetos (com galeria, descrição, papel, stack, link)
- Ferramentas / IAs exibidas na seção Ferramentas
- Ordem da navegação
- URL pública, timezone do relógio

Cada campo é tipado e comentado. **Edite só esse arquivo** para atualizar o site.

### Imagens

Coloque-as em `public/images/` e referencie pelo caminho relativo (ex.: `/images/aurora-capa.jpg`).
Os placeholders SVG ficam em `public/images/project-placeholder-*.svg`.

### Ícones de ferramentas

- Os logos Figma, Google Gemini e Claude vêm do pacote `simple-icons`.
- Os logos da Adobe (Ps/Ai/Pr/Ae) e o Antigravity ficam em `public/icons/`. Substitua pelos SVGs oficiais quando tiver acesso.

## Estrutura

```
src/
  app/                # App Router, layout, page, sitemap, robots, globals.css
  components/
    background/       # InteractiveBackground (Canvas 2D)
    layout/           # Nav, Footer, SmoothScroll, Cursor
    sections/         # Hero, About, Career, Projects, Tools, Contact
    ui/               # Button, Tag, Modal, Marquee, Reveal, MagneticButton...
  content/portfolio.ts
  fonts/              # .woff2 + index.ts (next/font/local)
  hooks/              # useReducedMotion, useMediaQuery, useScrollDirection
  lib/                # cn(), whatsapp(), constantes de motion
  types/              # Project, Experience, Tool, Social
public/
  icons/              # SVGs de marcas
  images/             # placeholders e fotos
```

## Acessibilidade & Performance

- HTML semântico, foco visível (anel verde), `aria` em modal/menus.
- Respeito a `prefers-reduced-motion`: desliga cursor, background canvas e parallax.
- Tipografia auto-hospedada com `display: swap`.
- Imagens via `next/image`, com `priority` no Hero/Modal.
- Build estático (SSG); todas as rotas pré-renderizadas.

## Deploy na Vercel

1. Suba este projeto num repositório GitHub.
2. Importe na Vercel — ela detecta Next.js automaticamente.
3. Antes de publicar, atualize `site.url` em `src/content/portfolio.ts` com o domínio final (afeta OG, sitemap e metadata).

Pronto: o subdomínio `.vercel.app` é gerado no momento do deploy.
