export type SocialKey =
  | "linkedin"
  | "instagram"
  | "behance"
  | "dribbble"
  | "x"
  | "email";

export interface Social {
  label: string;
  href: string;
  key: SocialKey;
}

export interface Experience {
  role: string;
  company: string;
  /** Ex: "2023 — Atual" */
  period: string;
  description: string;
  /** Em formato YYYY-MM para ordenação opcional */
  start?: string;
  end?: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  /** Razão larg/alt opcional, ex: "16/10" */
  aspect?: string;
}

export interface Project {
  /** slug curto, p/ ancoragem */
  slug: string;
  title: string;
  /** Categoria curta: "Branding", "Campanha", "UI/UX" etc. */
  category: string;
  year: number | string;
  /** thumbnail do card */
  thumbnail: ProjectImage;
  /** Galeria opcional p/ o modal */
  gallery?: ProjectImage[];
  /** Resumo curto (1-2 frases). Aparece no card no hover. */
  summary: string;
  /** Descrição completa (modal). Suporta múltiplos parágrafos via \n\n. */
  description: string;
  /** Papel / contribuição do dono no projeto. */
  role: string;
  /** Ferramentas/Stack usados nesse projeto. */
  stack?: string[];
  /** Link externo opcional para "Ver projeto". */
  url?: string;
  /** Tags livres. */
  tags?: string[];
}

export type ToolKey =
  | "photoshop"
  | "illustrator"
  | "premiere"
  | "aftereffects"
  | "figma"
  | "gemini"
  | "claude"
  | "antigravity";

export interface Tool {
  key: ToolKey;
  name: string;
  /** Cor de marca usada no hover (hex). */
  brandColor: string;
  /** caminho do SVG em /public/icons quando não houver no simple-icons. */
  customIcon?: string;
}
