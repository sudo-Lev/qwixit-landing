import Image from "next/image";
import type { Locale } from "@/i18n/routing";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { TapLink } from "./TapLink";
import { HeroWindow, type HeroWindowCopy } from "./HeroWindow";
import { ProductHud } from "./ProductHud";
import { SpeedRace, type RaceCopy } from "./SpeedRace";

type CopyKey =
  | "cta"
  | "navHow"
  | "navPrivacy"
  | "navPricing"
  | "heroStatus"
  | "heroA"
  | "heroB"
  | "heroC"
  | "heroBody"
  | "heroNote"
  | "fastTitle"
  | "fastBody"
  | "privateTitle"
  | "privateBody"
  | "workTitleA"
  | "workTitleB"
  | "workBody"
  | "fixBody"
  | "actionsBody"
  | "peekBody"
  | "privacyTitleA"
  | "privacyTitleB"
  | "privacyBody"
  | "transient"
  | "notLogged"
  | "noAccount"
  | "pricingTitleA"
  | "pricingTitleB"
  | "pricingBody"
  | "freeActions"
  | "unlimitedBody"
  | "finalA"
  | "finalB"
  | "finalBody"
  | "footerAgents"
  | "footerUtility";

export type LandingCopy = Record<CopyKey, string> & { race: RaceCopy };

function Shortcut({ letter, inverse = false }: { letter: string; inverse?: boolean }) {
  return (
    <span
      className={`shortcut ${inverse ? "shortcut--inverse" : ""}`}
      aria-label={`Option Command ${letter}`}
    >
      <span className="shortcut__inner">
        <kbd>⌥</kbd>
        <kbd>⌘</kbd>
        <kbd className="shortcut__letter">{letter}</kbd>
      </span>
    </span>
  );
}

function Download({
  label,
  compact = false,
  inverse = false,
}: {
  label: string;
  compact?: boolean;
  inverse?: boolean;
}) {
  return (
    <TapLink
      download
      className={`download-button ${compact ? "download-button--compact" : ""} ${inverse ? "download-button--inverse" : ""}`}
    >
      <span className="download-button__inner">
        <span>{label}</span>
        <span aria-hidden>→</span>
      </span>
    </TapLink>
  );
}

function Status({
  tone = "ready",
  className = "",
  children,
}: {
  tone?: "ready" | "transform" | "unchanged";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span className={`status status--${tone} ${className}`}>
      <i />
      {children}
    </span>
  );
}

function RoundTrip({ copy }: { copy: LandingCopy }) {
  return (
    <section className="section old-way" id="how-it-works">
      <SpeedRace copy={copy.race} />
      <div className="promise-pair" aria-label="Fast and private by design">
        <article className="promise-card promise-card--fast">
          <span className="promise-code">FAST / WORKFLOW</span>
          <h3>{copy.fastTitle}</h3>
          <p>{copy.fastBody}</p>
          <i aria-hidden />
        </article>
        <article className="promise-card promise-card--private">
          <span className="promise-code">PRIVATE / DESIGN</span>
          <h3>{copy.privateTitle}</h3>
          <p>{copy.privateBody}</p>
          <i aria-hidden />
        </article>
      </div>
    </section>
  );
}

function FixDemo() {
  return (
    <div
      className="fix-demo product-panel"
      role="img"
      aria-label="A Slack message with four typos corrected in place by hotkeygo"
    >
      <div className="fix-head">
        <span className="traffic">
          <i />
          <i />
          <i />
        </span>
        <span>Slack — #launch</span>
        <small>⌥⌘X</small>
      </div>
      <p className="fix-text">
        <del>hey</del>
        <ins>Hey</ins> team, the beta build is almost <del>redy</del>
        <ins>ready</ins>. <del>pls</del>
        <ins>Please</ins> test it and tell me <del>whats</del>
        <ins>what’s</ins> broken<ins>.</ins>
      </p>
      <div className="fix-foot">
        <span>
          <b>5</b> FIXES · <b>0</b> REWRITES
        </span>
        <ProductHud state="success" />
      </div>
    </div>
  );
}

const workflowMockCopy = {
  en: {
    search: "Search…",
    source: "English · 18 words",
    actionFooter: "Replaces selection · ⌘Z undo",
    peekSearch: "Search…",
    peekSource: "Ukrainian · 18 words",
    peekFooter: "↵ copy · ⇥ / 1–7 switch · Esc close",
    actionAria: "hotkeygo Actions palette with numbered language chips and one Casual rewrite choice. Choosing an action replaces the selection.",
    peekAria: "hotkeygo Peek with searchable language chips above an English translation of Ukrainian text. The source remains unchanged.",
  },
  uk: {
    search: "Пошук…",
    source: "Англійська · 18 слів",
    actionFooter: "Замінює виділення · ⌘Z скасувати",
    peekSearch: "Пошук…",
    peekSource: "Українська · 18 слів",
    peekFooter: "↵ копіювати · ⇥ / 1–7 змінити · Esc закрити",
    actionAria: "Палітра Actions hotkeygo з нумерованими мовними чипами й одним стилем Casual. Вибір дії замінює виділений текст.",
    peekAria: "Peek hotkeygo з пошуком і мовними чипами над англійським перекладом українського тексту. Оригінал не змінюється.",
  },
  pl: {
    search: "Szukaj…",
    source: "Angielski · 18 słów",
    actionFooter: "Zastępuje zaznaczenie · ⌘Z cofnij",
    peekSearch: "Szukaj…",
    peekSource: "Ukraiński · 18 słów",
    peekFooter: "↵ kopiuj · ⇥ / 1–7 zmień · Esc zamknij",
    actionAria: "Paleta Actions hotkeygo z ponumerowanymi językami i jednym stylem Casual. Wybór działania zastępuje zaznaczony tekst.",
    peekAria: "Peek hotkeygo z wyszukiwaniem i językami nad angielskim tłumaczeniem ukraińskiego tekstu. Oryginał pozostaje bez zmian.",
  },
} satisfies Record<Locale, {
  search: string;
  source: string;
  actionFooter: string;
  peekSearch: string;
  peekSource: string;
  peekFooter: string;
  actionAria: string;
  peekAria: string;
}>;

function ActionPalette({ locale }: { locale: Locale }) {
  const labels = workflowMockCopy[locale];
  const languages = locale === "pl"
    ? ["Polski", "Українська", "Français", "Русский", "Español", "Português (Brasil)"]
    : ["Українська", "Polski", "Français", "Русский", "Español", "Português (Brasil)"];

  return (
    <div
      className="action-palette product-panel"
      role="img"
      aria-label={labels.actionAria}
    >
      <div className="palette-head">
        <i className="palette-caret" aria-hidden />
        <span className="palette-search">{labels.search}</span>
        <small>{labels.source}</small>
      </div>
      <div className="palette-list">
        <div className="palette-chip-group">
          {languages.map((language, index) => (
            <span
              className={`mock-chip ${index === 0 ? "is-active" : ""}`}
              key={language}
            >
              <span className="mock-chip__inner">
                <b>{language}</b>
                <span>{index === 0 ? "↵" : index + 1}</span>
              </span>
            </span>
          ))}
        </div>
        <div className="palette-separator" />
        <div className="palette-chip-group">
          <span className="mock-chip mock-chip--persona">
            <span className="mock-chip__inner">
              <span className="mock-chip__face" aria-hidden>[ ^‿^ ]</span>
              <b>Casual</b>
              <span>7</span>
            </span>
          </span>
        </div>
      </div>
      <div className="palette-foot">
        <span>{labels.actionFooter}</span>
      </div>
    </div>
  );
}

function PeekCard({ locale }: { locale: Locale }) {
  const labels = workflowMockCopy[locale];
  const languages = ["English", "Українська", "Polski", "Français", "Русский", "Español", "Português (Brasil)"];

  return (
    <div
      className="peek-card product-panel"
      role="img"
      aria-label={labels.peekAria}
    >
      <div className="peek-head">
        <strong className="peek-title">Peek</strong>
        <i className="peek-caret" aria-hidden />
        <span className="peek-search">{labels.peekSearch}</span>
        <small>{labels.peekSource}</small>
        <span className="panel-control" aria-hidden>
          <svg viewBox="0 0 12 12" focusable="false">
            <path d="M3.5 3.5 8.5 8.5M8.5 3.5 3.5 8.5" />
          </svg>
        </span>
      </div>
      <div className="peek-language-group">
        {languages.map((language, index) => (
          <span
            className={`mock-chip ${index === 0 ? "is-active" : ""}`}
            key={language}
          >
            <span className="mock-chip__inner">
              <b>{language}</b>
              <span>{index === 0 ? "↵" : index + 1}</span>
            </span>
          </span>
        ))}
      </div>
      <div className="peek-divider" />
      <div className="peek-body">
        <p>
          Hi everyone — the beta build is almost ready. Please test it and tell me what’s broken.
        </p>
      </div>
      <div className="peek-foot">
        <span>{labels.peekFooter}</span>
      </div>
    </div>
  );
}

function Workflows({ copy, locale }: { copy: LandingCopy; locale: Locale }) {
  return (
    <section className="section workflows" id="workflows">
      <div className="section-heading">
        <h2>
          {copy.workTitleA}
          <br />
          {copy.workTitleB}
        </h2>
        <p>{copy.workBody}</p>
      </div>
      <div className="workflow-list">
        <article className="workflow-row">
          <div className="workflow-copy">
            <Shortcut letter="X" />
            <h3>Fix</h3>
            <p>{copy.fixBody}</p>
            <Status>SMALLEST SAFE EDIT</Status>
          </div>
          <FixDemo />
        </article>
        <article className="workflow-row">
          <div className="workflow-copy">
            <Shortcut letter="A" />
            <h3>Actions</h3>
            <p>{copy.actionsBody}</p>
            <Status tone="transform">INTENTIONAL TRANSFORM</Status>
          </div>
          <ActionPalette locale={locale} />
        </article>
        <article className="workflow-row">
          <div className="workflow-copy">
            <Shortcut letter="Z" />
            <h3>Peek</h3>
            <p>{copy.peekBody}</p>
            <Status tone="unchanged">SOURCE UNCHANGED</Status>
          </div>
          <PeekCard locale={locale} />
        </article>
      </div>
    </section>
  );
}

function Trust({ copy }: { copy: LandingCopy }) {
  const facts = [
    ["TRANSIENT", copy.transient],
    ["NOT LOGGED", copy.notLogged],
    ["NO ACCOUNT", copy.noAccount],
  ];
  return (
    <section className="trust-section" id="privacy">
      <div className="section trust-inner">
        <div className="trust-intro">
          <span className="terminal-face">[ ¬_¬ ]</span>
          <h2>
            {copy.privacyTitleA}
            <br />
            {copy.privacyTitleB}
          </h2>
          <p>{copy.privacyBody}</p>
        </div>
        <div className="trust-terminal">
          <div className="terminal-bar">
            <span>hotkeygo / PRIVACY TRACE</span>
            <i>LIVE</i>
          </div>
          {facts.map(([title, copy], index) => (
            <div className="trust-line" key={title}>
              <b>{String(index + 1).padStart(2, "0")}</b>
              <strong>{title}</strong>
              <span>{copy}</span>
              <i>OK</i>
            </div>
          ))}
          <p className="trust-footnote">
            OPENAI REQUESTS USE <code>STORE: FALSE</code>
          </p>
        </div>
      </div>
    </section>
  );
}

function MenuBarPanel() {
  return (
    <div
      className="menubar-panel product-panel"
      role="img"
      aria-label="hotkeygo menu bar popup, version 1.0, Cloud, Free plan with 20 of 30 actions used, shortcut Option Command X, Accessibility access granted, Preview and Approve off, Settings, Quit, and Onboarding"
    >
      <div className="menubar-top">
        <span className="menubar-info" aria-hidden>
          <svg viewBox="0 0 16 16" focusable="false">
            <circle cx="8" cy="8" r="6.25" />
            <path d="M8 7v4" />
            <circle cx="8" cy="4.75" r=".55" className="menubar-info__dot" />
          </svg>
        </span>
        <span className="menubar-version">v1.0</span>
        <span className="menubar-top-spacer" />
        <span className="menubar-cloud">
          <span>Cloud</span>
          <svg viewBox="0 0 12 12" focusable="false" aria-hidden>
            <path d="m2 4 4 4 4-4" />
          </svg>
        </span>
      </div>
      <div className="menubar-status-row">
        <span className="menubar-face" aria-hidden>[ ^_^ ]</span>
        <span className="menubar-plan">
          <strong>Free</strong>
          <small>20 / 30 used</small>
        </span>
        <span className="menubar-status-spacer" />
        <span className="menubar-shortcut">
          <span>⌥⌘</span>
          <b>X</b>
        </span>
        <span className="menubar-access" aria-hidden>
          <svg viewBox="0 0 16 16" focusable="false">
            <path d="m3.5 8.5 3 3 6-7" />
          </svg>
        </span>
      </div>
      <div className="menubar-review">
        <span className="menubar-review__icon" aria-hidden>
          <svg viewBox="0 0 24 16" focusable="false">
            <path d="M2 8c2.7-4 6-6 10-6s7.3 2 10 6c-2.7 4-6 6-10 6S4.7 12 2 8Z" />
            <circle cx="12" cy="8" r="2.2" />
          </svg>
        </span>
        <span className="menubar-review__copy">
          <strong>Preview &amp; Approve</strong>
          <small>Nothing changes until you approve</small>
        </span>
        <span className="menubar-toggle" aria-hidden>
          <i>−</i>
          <b>OFF</b>
        </span>
      </div>
      <div className="menubar-actions">
        <div className="menubar-actions__top">
          <span className="menubar-action">
            <span className="menubar-action__inner">
              <svg viewBox="0 0 16 16" focusable="false" aria-hidden>
                <path d="M6.7 1.5h2.6l.4 1.8c.5.2.9.4 1.3.8l1.8-.5 1.3 2.3-1.4 1.2a5 5 0 0 1 0 1.5l1.4 1.2-1.3 2.3-1.8-.5c-.4.4-.8.6-1.3.8l-.4 1.8H6.7l-.4-1.8a5 5 0 0 1-1.3-.8l-1.8.5-1.3-2.3 1.4-1.2a5 5 0 0 1 0-1.5L1.9 5.9l1.3-2.3 1.8.5c.4-.4.8-.6 1.3-.8l.4-1.8Z" />
                <circle cx="8" cy="7.9" r="1.8" />
              </svg>
              <b>Settings</b>
            </span>
          </span>
          <span className="menubar-action menubar-action--quit">
            <span className="menubar-action__inner">
              <svg viewBox="0 0 16 16" focusable="false" aria-hidden>
                <path d="M8 1.5v6" />
                <path d="M4.1 3.8a6 6 0 1 0 7.8 0" />
              </svg>
              <b>Quit</b>
            </span>
          </span>
        </div>
        <span className="menubar-action menubar-action--wide">
          <span className="menubar-action__inner">
            <svg viewBox="0 0 16 16" focusable="false" aria-hidden>
              <path d="m8 1 1.5 5.5L15 8l-5.5 1.5L8 15l-1.5-5.5L1 8l5.5-1.5L8 1Z" />
              <path d="m13 1 .6 2.4L16 4l-2.4.6L13 7l-.6-2.4L10 4l2.4-.6L13 1Z" />
            </svg>
            <b>Onboarding</b>
          </span>
        </span>
      </div>
    </div>
  );
}
function Pricing({ copy }: { copy: LandingCopy }) {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="pricing-copy">
        <h2>
          {copy.pricingTitleA}
          <br />
          {copy.pricingTitleB}
        </h2>
        <p>{copy.pricingBody}</p>
        <MenuBarPanel />
      </div>
      <div className="price-table">
        <div>
          <span className="mono-label">FREE</span>
          <strong>30</strong>
          <p>{copy.freeActions}</p>
          <b>FREE · $0</b>
        </div>
        <div className="price-featured">
          <span className="mono-label">UNLIMITED</span>
          <strong>
            $10<small>/month</small>
          </strong>
          <p>{copy.unlimitedBody}</p>
          <Download label={copy.cta} compact inverse />
        </div>
      </div>
    </section>
  );
}

export function LandingPage({
  locale,
  copy,
  heroWindow,
}: {
  locale: Locale;
  copy: LandingCopy;
  heroWindow: HeroWindowCopy;
}) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a href={`/${locale}`} aria-label="hotkeygo home">
          <Image
            src="/brand/hotkeygo/wordmark-light.svg"
            alt="hotkeygo"
            width={698}
            height={174}
            priority
            unoptimized
          />
        </a>
        <nav aria-label="Main navigation">
          <a href="#how-it-works">{copy.navHow}</a>
          <a href="#privacy">{copy.navPrivacy}</a>
          <a href="#pricing">{copy.navPricing}</a>
        </nav>
        <div className="header-actions">
          <LocaleSwitcher current={locale} label="Language" />
          <Download label={copy.cta} compact />
        </div>
      </header>
      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <Status>{copy.heroStatus}</Status>
            <h1>
              {copy.heroA}
              <br />
              <span>{copy.heroB}</span>
              <br />
              {copy.heroC}
            </h1>
            <p>{copy.heroBody}</p>
            <div className="hero-promises" aria-label="Fast and private by design">
              <span className="hero-promise hero-promise--fast">
                <i /> {copy.fastTitle}
              </span>
              <span className="hero-promise hero-promise--private">
                <i /> {copy.privateTitle}
              </span>
            </div>
            <div className="hero-actions">
              <Download label={copy.cta} />
              <Shortcut letter="X" />
            </div>
            <small className="hero-note">{copy.heroNote}</small>
          </div>
          <HeroWindow copy={heroWindow} />
        </section>
        <RoundTrip copy={copy} />
        <Workflows copy={copy} locale={locale} />
        <Trust copy={copy} />
        <Pricing copy={copy} />
        <section className="final-section">
          <Image
            src="/brand/hotkeygo/wordmark-dark.svg"
            alt="hotkeygo"
            width={698}
            height={174}
            unoptimized
          />
          <h2>
            {copy.finalA}
            <br />
            <span>{copy.finalB}</span>
          </h2>
          <p>{copy.finalBody}</p>
          <div className="final-actions">
            <Download label={copy.cta} inverse />
            <Shortcut letter="X" inverse />
          </div>
          <span className="final-face">[ ^_- ] &nbsp; READY WHEN YOU ARE</span>
        </section>
      </main>
      <footer className="site-footer">
        <Image
          src="/brand/hotkeygo/wordmark-light.svg"
          alt="hotkeygo"
          width={698}
          height={174}
          unoptimized
        />
        <span>hotkeygo © 2026</span>
        <a className="agent-footer-link" href={`/${locale}/for-agents`}>
          <span className="agent-footer-face" aria-hidden>
            [ ^_- ]
          </span>
          <span>{copy.footerAgents}</span>
          <span aria-hidden>→</span>
        </a>
        <span>{copy.footerUtility}</span>
      </footer>
    </div>
  );
}
