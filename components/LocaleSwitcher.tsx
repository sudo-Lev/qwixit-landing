import { localeLabels, routing, type Locale } from "@/i18n/routing";

/** Plain links: a full navigation lets the middleware persist the choice in NEXT_LOCALE. */
export function LocaleSwitcher({ current, label }: { current: Locale; label: string }) {
  return (
    <nav
      aria-label={label}
      className="flex items-center text-[12px] leading-none font-bold tracking-[.14em]"
    >
      {routing.locales.map((locale, i) => (
        <span key={locale} className="flex items-center">
          {i > 0 && (
            <span aria-hidden className="px-[.45em] text-dim">
              ·
            </span>
          )}
          <a
            href={`/${locale}`}
            hrefLang={locale}
            lang={locale}
            aria-current={locale === current ? "true" : undefined}
            className={
              locale === current
                ? "py-2 text-white"
                : "py-2 text-dim transition-colors hover:text-magenta"
            }
          >
            {localeLabels[locale]}
          </a>
        </span>
      ))}
    </nav>
  );
}
