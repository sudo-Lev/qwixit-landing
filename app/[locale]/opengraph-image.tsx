import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export const alt = "Qwixit — Don't rewrite it. Qwixit.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: requested } = await params;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: "meta" });
  const root = process.cwd();
  const [unbounded, mono, tower] = await Promise.all([
    readFile(join(root, "assets/fonts/Unbounded-Black.ttf")),
    readFile(join(root, "assets/fonts/JetBrainsMono-Bold.ttf")),
    readFile(join(root, "assets/qwixit-tower-white-4x.png")),
  ]);
  const towerSrc = `data:image/png;base64,${tower.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: 72,
        padding: "0 96px",
        backgroundColor: "#0B0812",
        backgroundImage:
          "radial-gradient(ellipse 900px 520px at 50% -120px, rgba(109,40,255,.38), transparent)",
        color: "#fff",
      }}
    >
      <img src={towerSrc} width={244} height={339} alt="" />
      <div style={{ display: "flex", flex: 1, flexDirection: "column", gap: 28 }}>
        <div
          style={{
            display: "flex",
            fontFamily: "JetBrains Mono",
            fontSize: 22,
            letterSpacing: "0.2em",
            color: "#00D8F0",
          }}
        >
          {"> AI ON THE GO · ⌥⌘X"}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Unbounded",
            fontSize: 68,
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
          }}
        >
          <span style={{ color: "#8E8899" }}>{t("ogHeadline")}</span>
          <span style={{ textShadow: "5px 0 #FF2D9B, -5px 0 #00D8F0" }}>QWIXIT.</span>
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "JetBrains Mono",
            fontSize: 20,
            letterSpacing: "0.14em",
            color: "#A39EB2",
          }}
        >
          FOR MACOS · qwixit.app
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Unbounded", data: unbounded, weight: 900, style: "normal" },
        { name: "JetBrains Mono", data: mono, weight: 700, style: "normal" },
      ],
    },
  );
}
