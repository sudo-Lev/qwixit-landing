import Image from "next/image";
import type { Locale } from "@/i18n/routing";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { TapLink } from "./TapLink";
import { HeroWindow } from "./HeroWindow";
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
          <span className="promise-code">FAST / 01</span>
          <h3>{copy.fastTitle}</h3>
          <p>{copy.fastBody}</p>
          <i aria-hidden />
        </article>
        <article className="promise-card promise-card--private">
          <span className="promise-code">SECURE / 02</span>
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
      aria-label="A Slack message with four typos corrected in place by Qwixit"
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

function ActionPalette() {
  return (
    <div className="action-palette product-panel" role="img" aria-label="Qwixit actions palette">
      <div className="palette-head">
        <Image src="/brand/qwixit-mark-light.svg" alt="" width={27} height={27} unoptimized />
        <span>Action or instruction…</span>
        <small>38 CHARS · EN</small>
      </div>
      <div className="palette-list">
        <div className="palette-row is-active">
          <i />
          <b>Translate</b>
          <span className="palette-langs">
            <em>UKRAINIAN</em>
            <em>ENGLISH</em>
          </span>
          <small>REPLACE</small>
        </div>
        <div className="palette-row">
          <i />
          <b>Slack style</b>
          <span>Clear, concise, human</span>
          <small>REPLACE</small>
        </div>
        <div className="palette-row">
          <i />
          <b>Make formal</b>
          <span>Polished professional tone</span>
          <small>REPLACE</small>
        </div>
      </div>
      <div className="palette-foot">
        <span>↑↓ MOVE · 1–3 RUN · ⌘Z UNDO</span>
        <span>
          <kbd>↵</kbd> RUN <kbd>esc</kbd> CLOSE
        </span>
      </div>
    </div>
  );
}

function PeekCard() {
  return (
    <div
      className="peek-card product-panel"
      role="img"
      aria-label="Qwixit Peek card showing a Polish translation"
    >
      <div className="peek-head">
        <Image src="/brand/qwixit-mark-light.svg" alt="" width={20} height={20} unoptimized />
        <span className="peek-source">EN →</span>
        <span className="peek-lang">UA</span>
        <span className="peek-lang is-active">PL</span>
        <span className="peek-lang">DE</span>
        <span className="peek-lang">EN</span>
        <span className="panel-control" aria-hidden>
          ×
        </span>
      </div>
      <div className="peek-body">
        <h4>Przegląd kwartalny przenosimy na czwartek</h4>
        <p>
          Dwóch liderów jest w podróży, więc przegląd odbędzie się w czwartek. Prześlijcie
          zaktualizowane liczby do środy do południa — dział finansów potrzebuje czasu, by je zebrać
          przed spotkaniem.
        </p>
        <ul>
          <li>Slajdy są opcjonalne.</li>
          <li>Każdy zespół dodaje podsumowanie w jednym zdaniu.</li>
        </ul>
      </div>
      <div className="peek-foot">
        <span>42 words · Esc</span>
        <span className="peek-foot-spacer" />
        <span className="panel-button">Pin</span>
        <span className="panel-button panel-button--violet">
          Copy <b>⌘C</b>
        </span>
      </div>
    </div>
  );
}

function Workflows({ copy }: { copy: LandingCopy }) {
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
          <ActionPalette />
        </article>
        <article className="workflow-row">
          <div className="workflow-copy">
            <Shortcut letter="Z" />
            <h3>Peek</h3>
            <p>{copy.peekBody}</p>
            <Status tone="unchanged">SOURCE UNCHANGED</Status>
          </div>
          <PeekCard />
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
            <span>QWIXIT / PRIVACY TRACE</span>
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
      aria-label="Qwixit menu bar panel showing 12 of 30 free actions used"
    >
      <div className="menubar-top">
        <span>QWIXIT 1.4.2</span>
        <span className="cloud-state">
          <i />
          Cloud
        </span>
      </div>
      <div className="menubar-main">
        <Image
          src="/brand/qwixit-lockup-light.svg"
          alt="Qwixit"
          width={186}
          height={50}
          unoptimized
        />
        <span className="shortcut-chip">⌥⌘X</span>
        <span className="access-badge">
          <i />
          ACCESS
        </span>
      </div>
      <div className="menubar-usage">
        <span>FREE PLAN</span>
        <b>12/30 ACTIONS</b>
      </div>
      <div className="menubar-foot">
        <span>Settings</span>
        <i />
        <span>Onboarding</span>
        <i />
        <span>Quit</span>
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

export function LandingPage({ locale, copy }: { locale: Locale; copy: LandingCopy }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a href={`/${locale}`} aria-label="Qwixit home">
          <Image
            src="/brand/qwixit-lockup-light.svg"
            alt="Qwixit"
            width={186}
            height={50}
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
          <HeroWindow />
        </section>
        <RoundTrip copy={copy} />
        <Workflows copy={copy} />
        <Trust copy={copy} />
        <Pricing copy={copy} />
        <section className="final-section">
          <Image src="/brand/qwixit-mark-dark.svg" alt="" width={52} height={74} unoptimized />
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
          src="/brand/qwixit-lockup-light.svg"
          alt="Qwixit"
          width={186}
          height={50}
          unoptimized
        />
        <span>QWIXIT © 2026</span>
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
