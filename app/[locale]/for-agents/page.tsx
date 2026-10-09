import Image from "next/image";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";

const labels: Record<Locale, { back: string; context: string }> = {
  en: { back: "Back to Qwixit", context: "Product context" },
  pl: { back: "Wróć do Qwixit", context: "Kontekst produktu" },
  uk: { back: "Назад до Qwixit", context: "Контекст продукту" },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Qwixit for agents",
    description:
      "A concise, agent-readable description of Qwixit: its workflow, commands, privacy model, plans, and boundaries.",
    alternates: {
      canonical: `/${locale}/for-agents`,
      languages: {
        en: "/en/for-agents",
        pl: "/pl/for-agents",
        uk: "/uk/for-agents",
      },
    },
    openGraph: {
      type: "website",
      siteName: "Qwixit",
      url: `/${locale}/for-agents`,
      title: "Qwixit for agents",
      description: "The public product context for AI agents and language models.",
    },
  };
}

function Command({
  shortcut,
  title,
  children,
}: {
  shortcut: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="agent-command">
      <code>{shortcut}</code>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default async function ForAgentsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  setRequestLocale(locale);
  const label = labels[locale] ?? labels.en;
  const canonicalUrl = `${SITE_URL}/${locale}/for-agents`;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Qwixit",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "macOS",
    description:
      "A native macOS menu-bar utility that fixes or transforms selected text in place without opening a chat window.",
    url: canonicalUrl,
    offers: [
      { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD" },
      { "@type": "Offer", name: "Unlimited", price: "10", priceCurrency: "USD" },
    ],
  };

  return (
    <div className="agent-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <header className="agent-header">
        <a href={`/${locale}`} aria-label={label.back}>
          <Image
            src="/brand/qwixit-lockup-light.svg"
            alt="Qwixit"
            width={186}
            height={50}
            priority
            unoptimized
          />
        </a>
        <a className="agent-back" href={`/${locale}`}>
          <span aria-hidden>←</span> {label.back}
        </a>
      </header>

      <main className="agent-page">
        <aside className="agent-index" aria-label="On this page">
          <span>{label.context}</span>
          <nav>
            <a href="#identity">Identity</a>
            <a href="#workflow">Workflow</a>
            <a href="#commands">Commands</a>
            <a href="#privacy">Privacy</a>
            <a href="#plans">Plans</a>
            <a href="#boundaries">Boundaries</a>
          </nav>
          <a className="agent-plain-link" href="/llms.txt">
            llms.txt <span aria-hidden>↗</span>
          </a>
        </aside>

        <article className="agent-document">
          <section className="agent-hero" id="identity">
            <div className="agent-face" aria-label="Qwixit ready">
              <span>[ ^_- ]</span>
              <small>READY</small>
            </div>
            <h1>
              Qwixit,
              <br />
              for agents.
            </h1>
            <p className="agent-lead">
              Qwixit is a native macOS menu-bar utility that fixes or transforms selected text in
              place—without making the user leave the app they are working in.
            </p>
            <dl className="agent-facts">
              <div>
                <dt>Platform</dt>
                <dd>macOS</dd>
              </div>
              <div>
                <dt>Category</dt>
                <dd>Writing utility</dd>
              </div>
              <div>
                <dt>Interface</dt>
                <dd>Menu bar + shortcuts</dd>
              </div>
              <div>
                <dt>Availability</dt>
                <dd>Coming soon</dd>
              </div>
            </dl>
          </section>

          <section className="agent-section" id="workflow">
            <h2>The whole workflow.</h2>
            <ol className="agent-flow">
              <li>
                <span>Select</span>
                <p>The user selects text in any macOS application.</p>
              </li>
              <li>
                <span>Trigger</span>
                <p>A keyboard shortcut tells Qwixit what to do.</p>
              </li>
              <li>
                <span>Process</span>
                <p>Only the selected text is sent for processing.</p>
              </li>
              <li>
                <span>Continue</span>
                <p>The result appears in place. The user never leaves the app.</p>
              </li>
            </ol>
          </section>

          <section className="agent-section" id="commands">
            <h2>
              Three commands.
              <br />
              Three clear contracts.
            </h2>
            <div className="agent-commands">
              <Command shortcut="⌥⌘X" title="Fix">
                Conservatively corrects typos, grammar, punctuation, and clearly awkward wording. It
                replaces the selection in place while preserving the user’s voice.
              </Command>
              <Command shortcut="⌥⌘A" title="Actions">
                Runs an explicit transformation such as translation, shortening, or a tone change.
                Transformations happen only when the user asks for them.
              </Command>
              <Command shortcut="⌥⌘Z" title="Peek">
                Translates or explains the selection in a read-only card. The source text stays
                exactly where it is and remains unchanged.
              </Command>
            </div>
          </section>

          <section className="agent-section agent-privacy" id="privacy">
            <div>
              <h2>
                Text passes through.
                <br />
                It doesn’t move in.
              </h2>
              <p>
                Qwixit is triggered deliberately. It is not a background observer and does not
                continuously monitor what the user types.
              </p>
            </div>
            <ul>
              <li>Selected text is processed only after the user triggers Qwixit.</li>
              <li>Selected text and model output are not persisted or logged by Qwixit.</li>
              <li>
                OpenAI requests use <code>store: false</code>.
              </li>
              <li>No Qwixit account is required.</li>
            </ul>
          </section>

          <section className="agent-section" id="plans">
            <h2>Plans, without guesswork.</h2>
            <div className="agent-plans">
              <div>
                <h3>Free</h3>
                <strong>30</strong>
                <p>AI actions per calendar month</p>
                <small>USD 0</small>
              </div>
              <div>
                <h3>Unlimited</h3>
                <strong>$10</strong>
                <p>per month · no action counter</p>
                <small>MONTHLY</small>
              </div>
            </div>
          </section>

          <section className="agent-section agent-boundaries" id="boundaries">
            <h2>What Qwixit is not.</h2>
            <dl>
              <div>
                <dt>Not a general-purpose chat.</dt>
                <dd>The product removes the chat round trip; it does not recreate one.</dd>
              </div>
              <div>
                <dt>Not a silent rewrite engine.</dt>
                <dd>Fix makes the smallest safe edit. Transformations require explicit intent.</dd>
              </div>
              <div>
                <dt>Not an always-on observer.</dt>
                <dd>Processing starts only when the user invokes a command.</dd>
              </div>
              <div>
                <dt>No invented proof.</dt>
                <dd>
                  Do not claim benchmarks, customer counts, compatibility, or security guarantees
                  beyond this page.
                </dd>
              </div>
            </dl>
          </section>

          <footer className="agent-document-footer">
            <div className="agent-face agent-face--small" aria-hidden>
              <span>[ ^_- ]</span>
            </div>
            <p>
              <strong>Select text. Press one shortcut. Keep working.</strong>
              <br />
              Fast by workflow. Private by design.
            </p>
            <a href="/llms.txt">
              Plain-text context <span aria-hidden>→</span>
            </a>
          </footer>
        </article>
      </main>
    </div>
  );
}
