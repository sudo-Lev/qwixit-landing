import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(routing.locales.map((l) => [l, `${SITE_URL}/${l}`]));
  const landing = routing.locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: locale === routing.defaultLocale ? 1 : 0.8,
    alternates: { languages },
  }));
  const agentLanguages = Object.fromEntries(
    routing.locales.map((l) => [l, `${SITE_URL}/${l}/for-agents`]),
  );
  const agents = routing.locales.map((locale) => ({
    url: `${SITE_URL}/${locale}/for-agents`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
    alternates: { languages: agentLanguages },
  }));

  return [...landing, ...agents];
}
