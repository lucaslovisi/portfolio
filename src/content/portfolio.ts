/**
 * ================================================================
 *  CONTEÚDO DO PORTFÓLIO
 *  Edite somente este arquivo para atualizar todo o site.
 *  Todos os textos, projetos, links e dados pessoais vivem aqui.
 * ================================================================
 */

import type { Experience, Project, Social, Tool } from "@/types";

export const portfolio = {
  /* -------------------------------------------------------------- */
  /*  SITE                                                          */
  /* -------------------------------------------------------------- */
  site: {
    /** URL pública final (sem barra no fim). Usada em metadata/OG/sitemap. */
    url: "https://lucaslovisi.vercel.app",
    /** Timezone exibido no relógio do hero. */
    timezone: "America/Sao_Paulo",
    timezoneLabel: "São Leopoldo, RS",
  },

  /* -------------------------------------------------------------- */
  /*  PESSOA                                                        */
  /* -------------------------------------------------------------- */
  person: {
    name: "Lucas Lovisi",
    /** Linha de cargo exibida no hero. */
    role: "Designer & Desenvolvedor Web",
    /** Cidade/estado mostrados no Sobre. */
    location: "São Leopoldo, RS",
    /** Frase curta abaixo do nome no hero (≤ 90 caracteres). */
    tagline:
      "Sites, marca e peças sociais — design que conecta clareza, código e resultado.",
    /** Status atual exibido no hero. */
    status: "Disponível para projetos",
    /**
     * Bio completa exibida na seção Sobre.
     * Use \n\n para quebrar parágrafos.
     */
    bio: `Sou Designer Gráfico, Desenvolvedor Web e Editor de vídeos com 5 anos de experiência criando identidades, sites, peças sociais e conteúdo audiovisual.

Trabalho do conceito visual ao produto final — atravessando design gráfico, desenvolvimento em múltiplas plataformas web, motion e edição. Curso Análise e Desenvolvimento de Sistemas na UNISINOS, o que mantém meu trabalho na fronteira entre design e código.`,
    /** Foto principal exibida no Sobre. Coloque em /public/images/. */
    photo: {
      src: "/images/lucas.jpg",
      alt: "Lucas Lovisi",
    },
    /** Áreas de atuação exibidas como tags no Sobre. */
    focusAreas: [
      "Design Gráfico",
      "Web Design",
      "Edição de Vídeo",
      "Motion",
      "Branding",
      "Social Media",
    ],
    /** Estatísticas exibidas no Sobre (até 3 itens). */
    stats: [
      { label: "Anos atuando", value: "5+" },
      { label: "Projetos entregues", value: "30+" },
      { label: "Disciplinas", value: "3" },
    ],
  },

  /* -------------------------------------------------------------- */
  /*  CONTATO                                                       */
  /* -------------------------------------------------------------- */
  contact: {
    /** Número internacional sem símbolos (ex: 5511999999999). */
    whatsappNumber: "5594981130262",
    /** Mensagem pré-preenchida no WhatsApp. */
    whatsappMessage:
      "Olá, Lucas! Vim pelo seu portfólio e gostaria de conversar sobre um projeto.",
    /** E-mail público opcional. */
    email: "lucaslovisi2018@gmail.com",
  },

  /* -------------------------------------------------------------- */
  /*  REDES SOCIAIS                                                 */
  /* -------------------------------------------------------------- */
  socials: [
    { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/notifications/?filter=all" },
    { key: "instagram", label: "Instagram", href: "https://www.instagram.com/lucas_lovisi/" },
    { key: "behance", label: "Behance", href: "https://www.behance.net/lucaslovisi" },
    { key: "email", label: "E-mail", href: "mailto:lucaslovisi2018@gmail.com" },
  ] satisfies Social[],

  /* -------------------------------------------------------------- */
  /*  CARREIRA / EXPERIÊNCIA                                        */
  /* -------------------------------------------------------------- */
  experiences: [
    {
      role: "Head de Design",
      company: "LVX Digital",
      period: "Dez 2025 — Atual",
      description:
        "Liderança criativa e direção visual do estúdio. Estratégia de marca, padrões de qualidade do time e atuação direta nos projetos de maior relevância — do conceito ao acabamento final.",
    },
    {
      role: "Designer Pleno",
      company: "LVX Digital",
      period: "Out 2025 — Dez 2025",
      description:
        "Entrada no estúdio atuando em design gráfico, web e audiovisual. Promovido a Head de Design em dezembro após dois meses contribuindo em projetos de marca, site e conteúdo.",
    },
    {
      role: "Designer & Desenvolvedor Web",
      company: "Mobo Cupons & MyTripMenu",
      period: "2024 — Set 2025",
      description:
        "Sites institucionais e landing pages, identidade aplicada em campanhas e peças contínuas para social media. Atuação ponta a ponta entre design visual e implementação.",
    },
    {
      role: "Designer Gráfico e Web",
      company: "Carmillion",
      period: "2023 — 2024",
      description:
        "Criação de sites, landing pages e materiais visuais para clientes da empresa, com foco em conversão e consistência de marca em todos os pontos de contato.",
    },
    {
      role: "Designer & Web Freelancer",
      company: "Projetos independentes",
      period: "2021 — 2023",
      description:
        "Sites, identidades visuais e peças para social media para pequenos negócios e marcas autorais. Aprendizado direto com cliente — briefing, entrega e ajustes.",
    },
    {
      role: "Iniciando em design",
      company: "Estudos e primeiros projetos",
      period: "2020 — 2021",
      description:
        "Fundamentos de tipografia, layout e design digital. Primeiras peças, autodidatismo e construção do portfólio inicial entre o ensino médio e o ingresso na faculdade.",
    },
  ] satisfies Experience[],

  /* -------------------------------------------------------------- */
  /*  PROJETOS                                                      */
  /* -------------------------------------------------------------- */
  projects: [
    {
      slug: "mobo-cupons",
      title: "Mobo Cupons",
      category: "Web & Identidade",
      year: 2024,
      thumbnail: {
        src: "/images/project-placeholder-1.svg",
        alt: "Mobo Cupons — design e desenvolvimento web",
      },
      summary:
        "Site, landing pages e peças sociais para plataforma de cupons de desconto.",
      description: `Trabalho contínuo de design e desenvolvimento web para a Mobo Cupons. O escopo cobre o site institucional em WordPress, landing pages para campanhas pontuais e um sistema visual aplicado em peças recorrentes de social media.

A meta é manter consistência entre site, landings e mídia paga — uma identidade que funciona em peças longas e em formatos curtos de feed/story sem perder a leitura.`,
      role: "Designer & Desenvolvedor Web",
      stack: ["Figma", "WordPress", "Photoshop", "Illustrator"],
      tags: ["Site", "WordPress", "Social Media", "Landing Page"],
    },
    {
      slug: "mytripmenu",
      title: "MyTripMenu",
      category: "Web & Landing Pages",
      year: 2024,
      thumbnail: {
        src: "/images/project-placeholder-2.svg",
        alt: "MyTripMenu — site e landing pages",
      },
      summary:
        "Site e landing pages para a plataforma digital, com peças de divulgação.",
      description: `Atuação como designer e desenvolvedor web da MyTripMenu, cuidando do site institucional, landing pages de produto e peças de comunicação digital.

O foco é tornar cada página um caminho claro até a conversão — hierarquia visual, ritmo de informação e identidade consistente da home ao checkout.`,
      role: "Designer & Desenvolvedor Web",
      stack: ["Figma", "WordPress", "Photoshop"],
      tags: ["Site", "WordPress", "Landing Page", "UI"],
    },
    {
      slug: "carmillion",
      title: "Carmillion",
      category: "Web & Branding",
      year: 2023,
      thumbnail: {
        src: "/images/project-placeholder-3.svg",
        alt: "Carmillion — sites e identidade visual",
      },
      summary:
        "Sites institucionais e landing pages para clientes da empresa.",
      description: `Atuação como Designer Gráfico e Web na Carmillion, desenvolvendo sites institucionais e landing pages em WordPress junto com peças de identidade aplicada e materiais para campanhas.

Os projetos atravessaram diferentes verticais — cada cliente exigia um sistema visual próprio dentro do mesmo padrão de qualidade e prazo de entrega.`,
      role: "Designer Gráfico e Web",
      stack: ["WordPress", "Figma", "Photoshop", "Illustrator"],
      tags: ["Site", "Branding", "Landing Page"],
    },
  ] satisfies Project[],

  /* -------------------------------------------------------------- */
  /*  FERRAMENTAS & IA                                              */
  /* -------------------------------------------------------------- */
  tools: [
    { key: "photoshop", name: "Adobe Photoshop", brandColor: "#31A8FF" },
    { key: "illustrator", name: "Adobe Illustrator", brandColor: "#FF9A00" },
    { key: "premiere", name: "Adobe Premiere Pro", brandColor: "#9999FF" },
    { key: "aftereffects", name: "Adobe After Effects", brandColor: "#9999FF" },
    { key: "figma", name: "Figma", brandColor: "#F24E1E" },
    { key: "wordpress", name: "WordPress", brandColor: "#21759B" },
    { key: "claude", name: "Claude Code", brandColor: "#D97757" },
    {
      key: "antigravity",
      name: "Antigravity",
      brandColor: "#B6FF3A",
      customIcon: "/icons/antigravity.svg",
    },
  ] satisfies Tool[],

  /* -------------------------------------------------------------- */
  /*  NAVEGAÇÃO (ordem das âncoras)                                 */
  /* -------------------------------------------------------------- */
  nav: [
    { id: "hero", label: "Início" },
    { id: "about", label: "Sobre" },
    { id: "career", label: "Carreira" },
    { id: "projects", label: "Projetos" },
    { id: "tools", label: "Ferramentas" },
    { id: "contact", label: "Contato" },
  ],
} as const;

export type PortfolioData = typeof portfolio;
