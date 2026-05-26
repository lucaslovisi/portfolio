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
    url: "https://portfolio-head.vercel.app",
    /** Timezone exibido no relógio do hero. */
    timezone: "America/Sao_Paulo",
    timezoneLabel: "São Paulo, BR",
  },

  /* -------------------------------------------------------------- */
  /*  PESSOA                                                        */
  /* -------------------------------------------------------------- */
  person: {
    name: "[Seu Nome Aqui]",
    /** Linha de cargo exibida no hero. */
    role: "Head de Design",
    /** Cidade/estado mostrados no Sobre. */
    location: "São Paulo, Brasil",
    /** Frase curta abaixo do nome no hero (≤ 90 caracteres). */
    tagline:
      "Construindo marcas e produtos com identidade, intenção e acabamento.",
    /** Status atual exibido no hero. */
    status: "Disponível para projetos",
    /**
     * Bio completa exibida na seção Sobre.
     * Use \n\n para quebrar parágrafos.
     */
    bio: `Sou Head de Design em uma agência de marketing focada em performance e marca. Lidero o time criativo na concepção de identidades visuais, campanhas e experiências digitais que conectam estratégia, estética e resultado.

Meu trabalho atravessa branding, direção de arte, motion e produto. Acredito que design é uma ferramenta de clareza — e que toda decisão visual carrega uma intenção.`,
    /** Foto principal exibida no Sobre. Coloque em /public/images/. */
    photo: {
      src: "/images/profile-placeholder.svg",
      alt: "Retrato do designer",
    },
    /** Áreas de atuação exibidas como tags no Sobre. */
    focusAreas: [
      "Branding",
      "Direção de Arte",
      "UI / Produto",
      "Motion",
      "Estratégia de Marca",
    ],
  },

  /* -------------------------------------------------------------- */
  /*  CONTATO                                                       */
  /* -------------------------------------------------------------- */
  contact: {
    /** Número internacional sem símbolos (ex: 5511999999999). */
    whatsappNumber: "5511999999999",
    /** Mensagem pré-preenchida no WhatsApp. */
    whatsappMessage:
      "Olá! Vim pelo seu portfólio e gostaria de conversar sobre um projeto.",
    /** E-mail público opcional. */
    email: "contato@exemplo.com",
  },

  /* -------------------------------------------------------------- */
  /*  REDES SOCIAIS                                                 */
  /* -------------------------------------------------------------- */
  socials: [
    { key: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/seu-perfil" },
    { key: "instagram", label: "Instagram", href: "https://instagram.com/seu-perfil" },
    { key: "behance", label: "Behance", href: "https://behance.net/seu-perfil" },
    { key: "email", label: "E-mail", href: "mailto:contato@exemplo.com" },
  ] satisfies Social[],

  /* -------------------------------------------------------------- */
  /*  CARREIRA / EXPERIÊNCIA                                        */
  /* -------------------------------------------------------------- */
  experiences: [
    {
      role: "Head de Design",
      company: "Agência [Nome]",
      period: "2023 — Atual",
      description:
        "Liderança do time de design (8 pessoas), direção de arte de campanhas integradas e construção do design system interno da agência.",
    },
    {
      role: "Design Lead",
      company: "Estúdio [Nome]",
      period: "2020 — 2023",
      description:
        "Projetos de branding e identidade para clientes de varejo, tecnologia e cultura. Atuação ponta a ponta — da estratégia ao acabamento.",
    },
    {
      role: "Designer Sênior",
      company: "[Empresa Anterior]",
      period: "2018 — 2020",
      description:
        "UI, motion e direção visual para produtos digitais e campanhas de marca em larga escala.",
    },
    {
      role: "Designer",
      company: "[Primeira Agência]",
      period: "2015 — 2018",
      description:
        "Atuação como generalista — peças sociais, landing pages, papelarias e direção de fotografia.",
    },
  ] satisfies Experience[],

  /* -------------------------------------------------------------- */
  /*  PROJETOS                                                      */
  /* -------------------------------------------------------------- */
  projects: [
    {
      slug: "marca-aurora",
      title: "Aurora",
      category: "Branding",
      year: 2025,
      thumbnail: {
        src: "/images/project-placeholder-1.svg",
        alt: "Capa do projeto Aurora",
      },
      gallery: [
        { src: "/images/project-placeholder-1.svg", alt: "Aurora — capa" },
        { src: "/images/project-placeholder-2.svg", alt: "Aurora — aplicações" },
      ],
      summary:
        "Identidade e sistema visual para uma marca de skincare premium.",
      description: `Aurora nasceu da necessidade de uma marca de cuidados com a pele se diferenciar em um mercado saturado de minimalismo genérico. O sistema combina uma tipografia editorial customizada, paleta dessaturada e uma linguagem fotográfica de luz natural.

Liderei a estratégia visual, a construção do logotipo e o desenvolvimento do guia de marca completo, incluindo motion e diretrizes de campanha.`,
      role: "Direção criativa e identidade visual",
      stack: ["Illustrator", "Figma", "After Effects"],
      tags: ["Branding", "Identidade", "Sistema visual"],
    },
    {
      slug: "campanha-norte",
      title: "Norte / Verão 25",
      category: "Campanha",
      year: 2025,
      thumbnail: {
        src: "/images/project-placeholder-2.svg",
        alt: "Campanha Norte Verão 25",
      },
      summary:
        "Campanha integrada para o lançamento de coleção de verão de uma marca de moda.",
      description: `Direção de arte e conceito da campanha de verão da marca Norte. O trabalho envolveu pré-produção, direção do shooting fotográfico, e desdobramentos em vídeo, social, OOH e e-commerce.`,
      role: "Direção de arte e direção criativa",
      stack: ["Photoshop", "Premiere Pro", "Figma"],
      tags: ["Campanha", "Moda", "Direção de arte"],
    },
    {
      slug: "produto-meridian",
      title: "Meridian",
      category: "UI / Produto",
      year: 2024,
      thumbnail: {
        src: "/images/project-placeholder-3.svg",
        alt: "Produto Meridian",
      },
      summary: "Design de produto e sistema para uma plataforma B2B de logística.",
      description: `Repensamos a experiência completa do produto Meridian — do onboarding ao painel operacional. O sistema de design foi construído do zero, com tokens, componentes e padrões de interação documentados.`,
      role: "Lead designer",
      stack: ["Figma", "Claude Code"],
      tags: ["Produto", "UI", "Design System"],
    },
    {
      slug: "filme-veredas",
      title: "Veredas",
      category: "Motion",
      year: 2024,
      thumbnail: {
        src: "/images/project-placeholder-4.svg",
        alt: "Filme Veredas",
      },
      summary: "Filme institucional animado para uma marca de cafés especiais.",
      description: `Roteiro visual, storyboard e animação de um filme institucional de 90s. A peça mistura ilustração vetorial e tipografia animada para contar a origem de cada grão.`,
      role: "Direção de motion e animação",
      stack: ["After Effects", "Illustrator", "Premiere Pro"],
      tags: ["Motion", "Animação", "Filme"],
    },
    {
      slug: "festival-orla",
      title: "Festival Orla",
      category: "Identidade de Evento",
      year: 2023,
      thumbnail: {
        src: "/images/project-placeholder-5.svg",
        alt: "Festival Orla",
      },
      summary: "Identidade visual de um festival multidisciplinar de design.",
      description: `Sistema visual flexível para um festival com 3 dias, 12 palcos e 80+ atrações. O conceito gira em torno de camadas e sobreposição — uma identidade que funciona em peças impressas grandes e em telas verticais.`,
      role: "Direção criativa",
      stack: ["Illustrator", "Photoshop"],
      tags: ["Identidade", "Festival", "Tipografia"],
    },
    {
      slug: "rebrand-corvo",
      title: "Corvo",
      category: "Rebranding",
      year: 2023,
      thumbnail: {
        src: "/images/project-placeholder-6.svg",
        alt: "Rebrand Corvo",
      },
      summary:
        "Reposicionamento e nova identidade para uma marca centenária de tipografia.",
      description: `Acompanhei o reposicionamento completo da Corvo, revisitando seu repertório histórico para construir uma identidade contemporânea sem apagar a herança da marca.`,
      role: "Direção criativa e identidade",
      stack: ["Illustrator", "Figma", "Photoshop"],
      tags: ["Rebranding", "Tipografia", "Heritage"],
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
    { key: "gemini", name: "Google Gemini", brandColor: "#8AB4F8" },
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
