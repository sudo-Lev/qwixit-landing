"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useCallback, useEffect, useState } from "react";

type PaddleEvent = { name?: string };
type PaddleGlobal = {
  Initialize: (options: { token: string; eventCallback: (event: PaddleEvent) => void }) => void;
  Checkout: {
    open: (options: {
      items: { priceId: string; quantity: number }[];
      customData: Record<string, string>;
      settings: { variant: "one-page"; successUrl: string };
    }) => void;
  };
};

declare global {
  interface Window {
    Paddle?: PaddleGlobal;
  }
}

type CheckoutState = "preparing" | "missing" | "ready" | "completed" | "paymentFailed";

const installationIDPattern = /^[A-Za-z0-9_-]{43}$/;

const statusText: Record<CheckoutState, string> = {
  preparing: "Preparing checkout…",
  missing: "Open checkout from Get Advanced in the hotkeygo menu.",
  ready: "",
  completed: "Payment received. Activating Advanced…",
  paymentFailed: "The payment didn’t go through. Try another card or payment method.",
};

function readInstallationID() {
  const value = new URLSearchParams(window.location.hash.slice(1)).get("installation_id") ?? "";
  return installationIDPattern.test(value) ? value : null;
}

function useBlinkingFace(open: string, shut: string) {
  const [face, setFace] = useState(open);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let reopen: number | undefined;
    const interval = window.setInterval(() => {
      setFace(shut);
      reopen = window.setTimeout(() => setFace(open), 170);
    }, 4200);
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(reopen);
    };
  }, [open, shut]);
  return face;
}

export function CheckoutCard({
  token,
  priceId,
  successUrl,
}: {
  token: string;
  priceId: string;
  successUrl: string;
}) {
  const [installationID, setInstallationID] = useState<string | null>(null);
  const [paddleLoaded, setPaddleLoaded] = useState(false);
  const [state, setState] = useState<CheckoutState>("preparing");
  const face = useBlinkingFace("[ ¬_¬ ]", "[ -_- ]");

  useEffect(() => {
    const id = readInstallationID();
    setInstallationID(id);
    if (!id) setState("missing");
  }, []);

  const openCheckout = useCallback(() => {
    if (!installationID || !window.Paddle) return;
    setState("ready");
    window.Paddle.Checkout.open({
      items: [{ priceId, quantity: 1 }],
      customData: { hotkeygo_installation_id: installationID },
      settings: {
        variant: "one-page",
        successUrl: `${successUrl}?installation_id=${encodeURIComponent(installationID)}`,
      },
    });
  }, [installationID, priceId, successUrl]);

  useEffect(() => {
    if (!paddleLoaded || !installationID || !window.Paddle) return;
    window.Paddle.Initialize({
      token,
      eventCallback(event) {
        if (event.name === "checkout.completed") setState("completed");
        if (event.name === "checkout.payment.error") setState("paymentFailed");
      },
    });
    openCheckout();
  }, [paddleLoaded, installationID, token, openCheckout]);

  const canOpen = state !== "preparing" && state !== "missing" && state !== "completed";

  return (
    <div className="checkout-shell">
      <Script
        src="https://cdn.paddle.com/paddle/v2/paddle.js"
        strategy="afterInteractive"
        onLoad={() => setPaddleLoaded(true)}
      />
      <header className="checkout-header">
        <Link href="/" aria-label="hotkeygo home">
          <Image
            src="/brand/hotkeygo/hotkeygo-logo-for-light-bg.svg"
            alt="hotkeygo"
            width={698}
            height={174}
            priority
            unoptimized
          />
        </Link>
      </header>
      <main className="checkout-main">
        <section className="checkout-card" aria-labelledby="checkout-title">
          <div className="checkout-card__top">
            <span className="mono-label">ADVANCED</span>
            <span className="checkout-face" aria-hidden>
              {face}
            </span>
          </div>
          <h1 id="checkout-title" className="checkout-price">
            $10<small>/month</small>
          </h1>
          <p className="checkout-pitch">More room to work. No action counter. Cancel anytime.</p>
          <button
            type="button"
            className="download-button download-button--inverse checkout-button"
            onClick={openCheckout}
            disabled={!canOpen}
          >
            <span className="download-button__inner">
              <span>Get Advanced</span>
              <span aria-hidden>→</span>
            </span>
          </button>
          <p className="checkout-status" role="status">
            {statusText[state]}
          </p>
          <span className="checkout-fineprint">TAXES INCLUDED · BILLED MONTHLY BY PADDLE</span>
        </section>
        <nav className="checkout-links" aria-label="Legal">
          <Link href="/en/terms">Terms</Link>
          <Link href="/en/privacy">Privacy</Link>
          <a href="mailto:support@hotkeygo.app">support@hotkeygo.app</a>
        </nav>
      </main>
    </div>
  );
}
