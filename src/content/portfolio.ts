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
    { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/lucas-lovisi-44a441241/" },
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
      slug: "kyvo",
      title: "Kyvo",
      category: "Web & Produto",
      year: 2025,
      thumbnail: {
        src: "/images/kyvo.png",
        alt: "Kyvo — CRM contábil com IA",
      },
      summary:
        "Identidade e landing page para um CRM contábil com agente de IA.",
      description: `O Kyvo é uma plataforma de CRM, atendimento e automação feita sob medida para escritórios contábeis — com agente de IA, gestão de WhatsApp e Instagram em um único painel, pipeline visual e automações de qualificação e follow-up.

Conduzi a identidade visual e a landing page institucional: paleta carvão + laranja, sistema tipográfico, hierarquia das seções (proposta, agente de IA, pipeline, planos) e construção do site com deploy na Vercel.`,
      role: "Designer & Desenvolvedor Web",
      stack: ["Next.js", "Figma", "Tailwind CSS"],
      url: "https://kyvo.app.br/",
      tags: ["Site", "Produto", "SaaS", "Landing"],
      preview: "browser",
    },
    {
      slug: "clarice-rezende",
      title: "Dra. Clarice Rezende",
      category: "Identidade Visual",
      year: 2025,
      thumbnail: {
        src: "/images/clarice-rezende-card.jpg",
        alt: "Identidade visual da Dra. Clarice Rezende — cartão",
      },
      summary:
        "Identidade visual completa para a advogada Dra. Clarice Rezende — logotipo, sistema de marca e peças sociais.",
      description: `Identidade visual completa para a advogada Dra. Clarice Rezende. O projeto cobre logotipo, sistema gráfico, paleta, tipografia, papelaria e desdobramentos para social media.

O sistema busca um equilíbrio entre confiança e contemporaneidade — uma marca sóbria, mas com personalidade, capaz de transitar entre peças institucionais e formatos digitais.`,
      role: "Direção de identidade e design",
      stack: ["Illustrator", "Photoshop"],
      url: "https://www.behance.net/gallery/235090809/Identidade-Visual-Dra-Clarice-Rezende",
      tags: ["Branding", "Identidade", "Logo", "Social Media"],
    },
    /**
     * ⬇️  TERCEIRO PROJETO — A DECIDIR
     * Quando definir, descomente o bloco abaixo, ajuste os campos
     * e troque o thumbnail (coloque a imagem em /public/images/).
     *
     * {
     *   slug: "novo-projeto",
     *   title: "Novo Projeto",
     *   category: "Categoria",
     *   year: 2025,
     *   thumbnail: {
     *     src: "/images/novo-projeto.jpg",
     *     alt: "Descrição da imagem",
     *   },
     *   summary: "Resumo de 1-2 frases.",
     *   description: `Descrição completa do projeto.\n\nSegundo parágrafo.`,
     *   role: "Seu papel",
     *   stack: ["Ferramenta 1", "Ferramenta 2"],
     *   url: "https://link-externo.com",
     *   tags: ["Tag 1", "Tag 2"],
     * },
     */
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
    { key: "n8n", name: "n8n", brandColor: "#EA4B71" },
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
