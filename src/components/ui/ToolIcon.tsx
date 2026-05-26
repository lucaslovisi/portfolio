"use client";

import { siFigma, siGooglegemini, siClaude } from "simple-icons";
import type { Tool, ToolKey } from "@/types";

interface SimpleIconData {
  title: string;
  slug: string;
  hex: string;
  path: string;
}

const SIMPLE_ICONS: Partial<Record<ToolKey, SimpleIconData>> = {
  figma: siFigma as unknown as SimpleIconData,
  gemini: siGooglegemini as unknown as SimpleIconData,
  claude: siClaude as unknown as SimpleIconData,
};

const CUSTOM: Partial<Record<ToolKey, string>> = {
  photoshop: "/icons/photoshop.svg",
  illustrator: "/icons/illustrator.svg",
  premiere: "/icons/premiere.svg",
  aftereffects: "/icons/aftereffects.svg",
  antigravity: "/icons/antigravity.svg",
};

interface Props {
  tool: Tool;
  /** Render in brand color (true) or monochrome currentColor (false). */
  colored?: boolean;
  size?: number;
  className?: string;
}

export function ToolIcon({ tool, colored = false, size = 36, className }: Props) {
  const si = SIMPLE_ICONS[tool.key];
  const custom = CUSTOM[tool.key] ?? tool.customIcon;

  if (si) {
    return (
      <svg
        role="img"
        aria-label={tool.name}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        style={colored ? { color: `#${si.hex}` } : undefined}
      >
        <path d={si.path} fill="currentColor" />
      </svg>
    );
  }

  if (custom) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={custom}
        alt={tool.name}
        width={size}
        height={size}
        className={className}
        style={{ width: size, height: size }}
      />
    );
  }

  return null;
}
