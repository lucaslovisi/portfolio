import { portfolio } from "@/content/portfolio";

export function whatsappLink(message?: string): string {
  const m = message ?? portfolio.contact.whatsappMessage;
  return `https://wa.me/${portfolio.contact.whatsappNumber}?text=${encodeURIComponent(m)}`;
}
