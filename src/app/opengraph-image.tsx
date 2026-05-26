import { ImageResponse } from "next/og";
import { portfolio } from "@/content/portfolio";

export const runtime = "edge";
export const alt = `${portfolio.person.name} — ${portfolio.person.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(80% 60% at 80% 20%, rgba(182,255,58,0.18), transparent 70%), radial-gradient(60% 40% at 20% 90%, rgba(125,179,39,0.12), transparent 70%), #0a0b0a",
          color: "#edefec",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: 6,
            color: "#8a8f88",
            textTransform: "uppercase",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "#b6ff3a",
              }}
            />
            Portfólio
          </span>
          <span>{portfolio.person.location}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 130,
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: -4,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>{portfolio.person.name}.</span>
            <span style={{ color: "#b6ff3a" }}>
              {portfolio.person.role.toLowerCase()}.
            </span>
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#8a8f88",
              maxWidth: 900,
            }}
          >
            {portfolio.person.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 20,
            letterSpacing: 4,
            color: "#8a8f88",
            textTransform: "uppercase",
          }}
        >
          <span>{portfolio.person.status}</span>
          <span style={{ color: "#edefec" }}>
            {new URL(portfolio.site.url).host}
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
