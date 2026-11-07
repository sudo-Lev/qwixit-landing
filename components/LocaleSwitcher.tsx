import { localeLabels, routing, type Locale } from "@/i18n/routing";

/** Plain links: a full navigation lets the middleware persist the choice in NEXT_LOCALE. */
export function LocaleSwitcher({
  current,
  label,
  path = "",
}: {
  current: Locale;
  label: string;
  path?: string;
}) {
  return (
    <nav aria-label={label} className="locale-switcher">
      {routing.locales.map((locale, i) => (
        <span key={locale}>
          {i > 0 && (
            <span aria-hidden className="locale-divider">
              ·
            </span>
          )}
          <a
            href={`/${locale}${path}`}
            hrefLang={locale}
            lang={locale}
            aria-current={locale === current ? "true" : undefined}
            className={locale === current ? "is-current" : undefined}
          >
            {localeLabels[locale]}
          </a>
        </span>
      ))}
    </nav>
  );
}
