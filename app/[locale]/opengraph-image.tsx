import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { routing } from "@/i18n/routing";

export const alt = "Tokiri — Your words. Sharper.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage() {
  const ogImage = await readFile(join(process.cwd(), "public/og-image.png"));
  const ogImageSrc = `data:image/png;base64,${ogImage.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
      }}
    >
      <img src={ogImageSrc} width={1200} height={630} alt="Tokiri — Your words. Sharper." />
    </div>,
    size,
  );
}
