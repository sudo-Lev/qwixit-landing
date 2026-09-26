import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "uk", "pl"],
  defaultLocale: "en",
  localePrefix: "always",
  localeCookie: { name: "NEXT_LOCALE", maxAge: 60 * 60 * 24 * 365 },
});

export type Locale = (typeof routing.locales)[number];

/** Switcher labels — UA maps to the `uk` locale. */
export const localeLabels: Record<Locale, string> = { en: "EN", uk: "UA", pl: "PL" };
