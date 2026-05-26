import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";

export const clashDisplay = localFont({
  src: [
    { path: "./ClashDisplay-Regular.woff2", weight: "400", style: "normal" },
    { path: "./ClashDisplay-Medium.woff2", weight: "500", style: "normal" },
    { path: "./ClashDisplay-Semibold.woff2", weight: "600", style: "normal" },
    { path: "./ClashDisplay-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

export const generalSans = localFont({
  src: [
    { path: "./GeneralSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "./GeneralSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "./GeneralSans-Semibold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});
