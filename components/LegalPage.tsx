import Image from "next/image";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { legalCopy } from "@/lib/legal";
import type { LegalKind } from "@/lib/legal/types";
import { LocaleSwitcher } from "./LocaleSwitcher";

const routes: Record<LegalKind, string> = { privacy: "/privacy", terms: "/terms" };
const referencesLabel: Record<Locale, string> = {
  en: "Provider and regulator references",
  pl: "Informacje dostawców i organu ochrony danych",
  uk: "Інформація провайдерів та органу захисту даних",
};

export function legalMetadata(locale: Locale, kind: LegalKind): Metadata {
  const document = legalCopy[locale].documents[kind];
  const path = routes[kind];
  return {
    title: `${document.title} | hotkeygo`,
    description: document.intro,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: Object.fromEntries(routing.locales.map((item) => [item, `/${item}${path}`])),
    },
    openGraph: {
      title: `${document.title} | hotkeygo`,
      description: document.intro,
      url: `/${locale}${path}`,
    },
    robots: { index: false, follow: false },
  };
}

export function LegalPage({ locale, kind }: { locale: Locale; kind: LegalKind }) {
  setRequestLocale(locale);
  const copy = legalCopy[locale];
  const document = copy.documents[kind];
  const other = kind === "privacy" ? "terms" : "privacy";
  const [contactLead, contactTail] = copy.contact.split("support@hotkeygo.app");

  return (
    <div className="legal-shell">
      <header className="legal-header">
        <a href={`/${locale}`} aria-label={copy.back}>
          <Image
            src="/brand/hotkeygo/hotkeygo-logo-for-light-bg.svg"
            alt="hotkeygo"
            width={698}
            height={174}
            priority
            unoptimized
          />
        </a>
        <div className="legal-header__actions">
          <LocaleSwitcher current={locale} label={copy.language} path={routes[kind]} />
          <a className="legal-back" href={`/${locale}`}>
            <span aria-hidden>←</span> {copy.back}
          </a>
        </div>
      </header>
      <main className="legal-layout">
        <aside className="legal-index" aria-label={copy.contents}>
          <strong>{copy.contents}</strong>
          <nav>
            {document.sections.map((section) => (
              <a href={`#${section.id}`} key={section.id}>
                {section.title}
              </a>
            ))}
          </nav>
        </aside>
        <article className="legal-document">
          <header className="legal-intro">
            <h1>{document.title}</h1>
            <p>{document.intro}</p>
            <span className="legal-effective">{copy.effective}</span>
          </header>
          <div className="legal-draft" role="note">
            {copy.draft}
          </div>
          <details className="legal-mobile-index">
            <summary>{copy.contents}</summary>
            <nav aria-label={copy.contents}>
              {document.sections.map((section) => (
                <a href={`#${section.id}`} key={section.id}>
                  {section.title}
                </a>
              ))}
            </nav>
          </details>
          {document.sections.map((section) => (
            <section className="legal-section" id={section.id} key={section.id}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
          {kind === "privacy" && (
            <section className="legal-references" aria-label={referencesLabel[locale]}>
              <h2>{referencesLabel[locale]}</h2>
              <div>
                <a href="https://developers.openai.com/api/docs/guides/your-data">OpenAI ↗</a>
                <a href="https://privacy.anthropic.com/">Anthropic ↗</a>
                <a href="https://www.cloudflare.com/privacypolicy/">Cloudflare ↗</a>
                <a href="https://vercel.com/docs/analytics/privacy-policy">Vercel ↗</a>
                <a href="https://www.paddle.com/legal/privacy">Paddle ↗</a>
                <a href="https://uodo.gov.pl/">UODO ↗</a>
              </div>
            </section>
          )}
          <footer className="legal-end">
            <p>
              {contactLead}
              <a href="mailto:support@hotkeygo.app">support@hotkeygo.app</a>
              {contactTail}
            </p>
            <a className="legal-other" href={`/${locale}${routes[other]}`}>
              {copy.other[kind]} <span aria-hidden>→</span>
            </a>
          </footer>
        </article>
      </main>
    </div>
  );
}
