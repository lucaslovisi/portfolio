import type { Metadata, Viewport } from "next";
import "./globals.css";
import { clashDisplay, generalSans, jetbrainsMono } from "@/fonts";
import { cn } from "@/lib/utils";
import { portfolio } from "@/content/portfolio";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Cursor } from "@/components/layout/Cursor";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(portfolio.site.url),
  title: {
    default: `${portfolio.person.name} — ${portfolio.person.role}`,
    template: `%s — ${portfolio.person.name}`,
  },
  description: portfolio.person.tagline,
  applicationName: portfolio.person.name,
  authors: [{ name: portfolio.person.name }],
  creator: portfolio.person.name,
  keywords: [
    "Head de Design",
    "Portfólio",
    "Design",
    "Marketing",
    "Branding",
    "UI/UX",
    portfolio.person.name,
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: portfolio.site.url,
    title: `${portfolio.person.name} — ${portfolio.person.role}`,
    description: portfolio.person.tagline,
    siteName: portfolio.person.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolio.person.name} — ${portfolio.person.role}`,
    description: portfolio.person.tagline,
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0b0a",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={cn(
        clashDisplay.variable,
        generalSans.variable,
        jetbrainsMono.variable,
        "h-full"
      )}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <Cursor />
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
