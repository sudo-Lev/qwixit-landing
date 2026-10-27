"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useActive } from "@/lib/useActive";
import { ProductHud } from "./ProductHud";

/**
 * Both lanes start together. HotkeyGo completes at the midpoint of its measured 3–5 second range;
 * the illustrative chat process keeps progressing after it finishes.
 */
export const RACE = {
  loop: 28,
  chatDuration: 24,
  hotkeygoDuration: 4,
  chat: [
    { id: "select", shared: true },
    { id: "copy" },
    { id: "switch", appSwitch: true },
    { id: "paste" },
    { id: "prompt" },
    { id: "wait" },
    { id: "copyBack" },
    { id: "switchBack", appSwitch: true },
    { id: "pasteFix" },
  ],
  hotkeygo: [
    { id: "select", shared: true },
    { id: "press" },
    { id: "replaced" },
  ],
  heckleDelay: 0.3,
  heckleIn: 0.18,
  heckleOut: 0.22,
  finishFlash: 0.45,
} as const;

type ChatId = (typeof RACE.chat)[number]["id"];
type HotkeygoId = (typeof RACE.hotkeygo)[number]["id"];
type HeckleId = Exclude<ChatId, "select" | "copy"> | "end";

export type RaceCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  chatSteps: Record<ChatId, string>;
  chatReasons: Record<HeckleId, string>;
  hotkeygoSteps: Record<HotkeygoId, string>;
  done: string;
  actionTime: string;
  footer: string;
  footerMeta: string;
};

type Step = { id: string; appSwitch?: boolean; shared?: boolean };
type Timed = Step & { start: number; end: number };

function schedule(steps: readonly Step[], duration: number): Timed[] {
  const stepDuration = duration / Math.max(1, steps.length);
  return steps.map((step, index) => ({
    ...step,
    start: index * stepDuration,
    end: (index + 1) * stepDuration,
  }));
}

// The chat duration only paces the illustrative process map; it is not a measured competitor claim.
const CHAT = schedule(RACE.chat, RACE.chatDuration);
const HOTKEYGO = schedule(RACE.hotkeygo, RACE.hotkeygoDuration);
const CHAT_TOTAL = CHAT[CHAT.length - 1]?.end ?? 0;
const HOTKEYGO_TOTAL = HOTKEYGO[HOTKEYGO.length - 1]?.end ?? 0;
/** Reduced motion freezes with both flows complete. */
const FINAL_T = Math.max(CHAT_TOTAL, HOTKEYGO_TOTAL) + 1;

/** One face for each extra chat step after HotkeyGo finishes; x is %, dy px, rot degrees. */
const HECKLES: Record<HeckleId, { face: string; x: number; dy: number; rot: number }> = {
  switch: { face: "[ ¬_¬ ]", x: 36, dy: -8, rot: 2 },
  paste: { face: "[ -__- ]", x: 6, dy: 6, rot: -1 },
  prompt: { face: "[ @@__@@ ]", x: 34, dy: -4, rot: 1.5 },
  wait: { face: "[ x_x ]", x: 12, dy: 8, rot: -2 },
  copyBack: { face: "[ ^o^ ]", x: 38, dy: -2, rot: 1 },
  switchBack: { face: "[ ¬‿¬ ]", x: 4, dy: 4, rot: -1.5 },
  pasteFix: { face: "[ ._. ]", x: 28, dy: -6, rot: 2 },
  end: { face: "[ ^_^ ]", x: 30, dy: 0, rot: -1.5 },
};
const ROW = 37;

const LOGOS = [
  { name: "OpenAI", src: "/brand/ai/openai.svg" },
  { name: "Claude", src: "/brand/ai/claude.svg" },
  { name: "Gemini", mark: "G" },
  { name: "Copilot", mark: "C" },
  { name: "Grok", mark: "X" },
  { name: "DeepSeek", src: "/brand/ai/deepseek.svg" },
  { name: "Perplexity", mark: "P" },
  { name: "Mistral", mark: "M" },
  { name: "Meta AI", mark: "M" },
];

type Heckle = { id: HeckleId; row: number; enter: number; exit: number };

function heckleAt(t: number): Heckle | null {
  if (t >= CHAT_TOTAL) {
    return { id: "end", row: CHAT.length, enter: t - CHAT_TOTAL, exit: RACE.loop - t };
  }
  for (let i = 0; i < CHAT.length; i++) {
    const step = CHAT[i];
    if (!step || !(step.id in HECKLES)) continue;
    const appear = Math.max(step.start, HOTKEYGO_TOTAL + RACE.heckleDelay);
    if (t >= appear && t < step.end) {
      return { id: step.id as HeckleId, row: i, enter: t - appear, exit: step.end - t };
    }
  }
  return null;
}

function StepList({
  steps,
  labels,
  t,
  tone,
}: {
  steps: Timed[];
  labels: Record<string, string>;
  t: number;
  tone: "chat" | "hotkeygo";
}) {
  return (
    <ol className={`sr-steps sr-steps--${tone}`}>
      {steps.map((step, index) => {
        const state = t >= step.end ? "done" : t >= step.start ? "current" : "pending";
        const progress = state === "current" ? (t - step.start) / (step.end - step.start) : 0;
        return (
          <li
            key={step.id}
            className={`sr-step ${step.appSwitch ? "is-switch" : ""} ${step.shared ? "is-shared" : ""}`}
            data-state={state}
            style={{ "--p": progress } as CSSProperties}
          >
            <b>{String(index).padStart(2, "0")}</b>
            <span>{labels[step.id]}</span>
          </li>
        );
      })}
    </ol>
  );
}

function Bubble({ heckle, line, still }: { heckle: Heckle; line: string; still: boolean }) {
  const pop = still ? 1 : Math.min(1, heckle.enter / RACE.heckleIn);
  const fade = still ? 1 : Math.min(1, heckle.exit / RACE.heckleOut);
  const scale = pop < 1 ? 0.85 + 0.15 * pop + 0.06 * Math.sin(Math.PI * pop) : 1;
  const { face, x, dy, rot } = HECKLES[heckle.id];
  const style = {
    "--x": `${x}%`,
    top: `${heckle.row * ROW - 46 + dy}px`,
    "--rot": `${rot}deg`,
    "--scale": scale,
    opacity: Math.min(pop, fade),
  } as CSSProperties;
  return (
    <div className="sr-bubble" style={style}>
      <div className="sr-bubble__inner">
        <b aria-hidden>{face}</b>
        <span>{line}</span>
      </div>
    </div>
  );
}

export function SpeedRace({ copy }: { copy: RaceCopy }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [t, setT] = useState(0);
  const [reduced, setReduced] = useState(false);
  const active = useActive(rootRef);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduced || !active) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      setT((prev) => (prev + dt) % RACE.loop);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, reduced]);

  const now = reduced ? FINAL_T : t;
  const hotkeygoState = now < HOTKEYGO_TOTAL ? "running" : now < HOTKEYGO_TOTAL + RACE.finishFlash ? "finish" : "done";
  const heckle = heckleAt(now);

  return (
    <div ref={rootRef} className="sr-wrap">
      <div className="sr-frame">
        <div className="sr-panel">
          <header className="sr-head">
            <span className="sr-eyebrow">
              <i aria-hidden />
              {copy.eyebrow}
            </span>
            <h2>{copy.title}</h2>
            <p>{copy.lead}</p>
          </header>

          <div className="sr-cols">
            <div className="sr-col sr-col--chat">
              <div className="sr-logos">
                {LOGOS.map((logo) => (
                  <span key={logo.name} className="sr-logo">
                    <span className="sr-logo__tile">
                      <span>
                        {logo.src ? (
                          <Image src={logo.src} alt="" width={18} height={18} unoptimized />
                        ) : (
                          <b aria-hidden>{logo.mark}</b>
                        )}
                      </span>
                    </span>
                    {logo.name}
                  </span>
                ))}
              </div>
              <div className="sr-list">
                <StepList steps={CHAT} labels={copy.chatSteps} t={now} tone="chat" />
                {heckle && <Bubble heckle={heckle} line={copy.chatReasons[heckle.id]} still={reduced} />}
              </div>
            </div>

            <div className="sr-col sr-col--hotkeygo" data-hotkeygo={hotkeygoState}>
              <div className="sr-hotkeygo-head">
                <Image
                  src="/brand/hotkeygo/wordmark-light.svg"
                  alt="hotkeygo"
                  width={698}
                  height={174}
                  unoptimized
                  className="sr-hotkeygo-wordmark"
                />
                <span className="sr-tag">{copy.actionTime}</span>
              </div>
              <StepList steps={HOTKEYGO} labels={copy.hotkeygoSteps} t={now} tone="hotkeygo" />
              {hotkeygoState !== "running" && (
                <div className="sr-done">
                  <ProductHud state="success" />
                  <strong>{copy.done}</strong>
                </div>
              )}
            </div>
          </div>

          <footer className="sr-foot">
            <span className="sr-foot__lead">
              <span className="qx-keys qx-keys--lg" aria-label="Option Command X">
                <span className="qx-keys__inner">
                  <kbd className="qx-key">
                    <span>⌥</span>
                  </kbd>
                  <kbd className="qx-key">
                    <span>⌘</span>
                  </kbd>
                  <kbd className="qx-key qx-key--x">
                    <span>X</span>
                  </kbd>
                </span>
              </span>
              <strong>{copy.footer}</strong>
            </span>
            <span className="sr-foot__meta">{copy.footerMeta}</span>
          </footer>
        </div>
      </div>
    </div>
  );
}
