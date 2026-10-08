"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useActive } from "@/lib/useActive";

/**
 * Illustrative timings in seconds. Swap in measured numbers here; everything else derives from them.
 * Steps both workflows share (selecting the text) must carry the same duration on both sides.
 */
export const RACE = {
  loop: 28,
  chat: [
    { id: "select", seconds: 1.0, shared: true },
    { id: "copy", seconds: 0.3 },
    { id: "switch", seconds: 2.0, appSwitch: true },
    { id: "paste", seconds: 1.0 },
    { id: "prompt", seconds: 6.0 },
    { id: "wait", seconds: 7.0 },
    { id: "copyBack", seconds: 1.5 },
    { id: "switchBack", seconds: 2.0, appSwitch: true },
    { id: "pasteFix", seconds: 3.0 },
  ],
  qwixit: [
    { id: "select", seconds: 1.0, shared: true },
    { id: "press", seconds: 0.3 },
    { id: "replaced", seconds: 1.1 },
  ],
  heckleDelay: 0.3,
  heckleIn: 0.18,
  heckleOut: 0.22,
  finishFlash: 0.45,
} as const;

type ChatId = (typeof RACE.chat)[number]["id"];
type QwixitId = (typeof RACE.qwixit)[number]["id"];
type HeckleId = Exclude<ChatId, "select" | "copy"> | "end";

export type RaceCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  chatSteps: Record<ChatId, string>;
  qwixitSteps: Record<QwixitId, string>;
  heckles: Record<HeckleId, string>;
  done: string;
  footer: string;
  footerMeta: string;
};

type Step = { id: string; seconds: number; appSwitch?: boolean; shared?: boolean };
type Timed = Step & { start: number; end: number };

function schedule(steps: readonly Step[]): Timed[] {
  let at = 0;
  return steps.map((step) => {
    const start = at;
    at += step.seconds;
    return { ...step, start, end: at };
  });
}

const CHAT = schedule(RACE.chat);
const QWIXIT = schedule(RACE.qwixit);
const CHAT_TOTAL = CHAT[CHAT.length - 1]?.end ?? 0;
const QWIXIT_TOTAL = QWIXIT[QWIXIT.length - 1]?.end ?? 0;
/** Reduced motion freezes here: both clocks finished, the closing heckle showing. */
const FINAL_T = CHAT_TOTAL + 1;

/** One heckle per chat step after Qwixit is done; x is % across the list, dy px, rot deg. */
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
  { name: "Codex", src: "/brand/ai/openai.svg" },
  { name: "Claude", src: "/brand/ai/claude.svg" },
  { name: "DeepSeek", src: "/brand/ai/deepseek.svg" },
];

function clock(seconds: number) {
  const tenths = Math.round(seconds * 10);
  const whole = Math.floor(tenths / 10);
  return `00:${String(whole).padStart(2, "0")}.${tenths % 10}`;
}

type Heckle = { id: HeckleId; row: number; enter: number; exit: number };

function heckleAt(t: number): Heckle | null {
  if (t >= CHAT_TOTAL) {
    return { id: "end", row: CHAT.length, enter: t - CHAT_TOTAL, exit: RACE.loop - t };
  }
  for (let i = 0; i < CHAT.length; i++) {
    const step = CHAT[i];
    if (!step || !(step.id in HECKLES)) continue;
    const appear = Math.max(step.start, QWIXIT_TOTAL + RACE.heckleDelay);
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
  tone: "chat" | "qwixit";
}) {
  return (
    <ol className={`sr-steps sr-steps--${tone}`}>
      {steps.map((step, index) => {
        const state = t >= step.end ? "done" : t >= step.start ? "current" : "pending";
        const progress = state === "current" ? (t - step.start) / step.seconds : 0;
        return (
          <li
            key={step.id}
            className={`sr-step ${step.appSwitch ? "is-switch" : ""} ${step.shared ? "is-shared" : ""}`}
            data-state={state}
            style={{ "--p": progress } as CSSProperties}
          >
            <b>{String(index).padStart(2, "0")}</b>
            <span>{labels[step.id]}</span>
            <em>
              {state === "current" ? "+" : ""}
              {step.seconds.toFixed(1)}s
            </em>
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
    <div className="sr-bubble" style={style} aria-hidden>
      <div className="sr-bubble__inner">
        <b>{face}</b>
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
  const qx = now < QWIXIT_TOTAL ? "running" : now < QWIXIT_TOTAL + RACE.finishFlash ? "finish" : "done";
  const flicker = Math.floor(now * 18) % 2;
  const heckle = heckleAt(now);

  const tileStyle =
    qx === "running"
      ? {
          transform: `translateX(${flicker}px)`,
          filter: flicker
            ? "drop-shadow(0 0 12px rgba(255, 45, 155, 0.45))"
            : "drop-shadow(0 0 10px rgba(0, 171, 199, 0.55))",
        }
      : qx === "finish"
        ? { filter: "drop-shadow(0 0 18px rgba(109, 40, 255, 0.6))" }
        : { filter: "drop-shadow(0 4px 10px rgba(109, 40, 255, 0.25))" };

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
                        <Image src={logo.src} alt="" width={18} height={18} unoptimized />
                      </span>
                    </span>
                    {logo.name}
                  </span>
                ))}
              </div>
              <div className="sr-timer" role="timer" aria-label="Chat app round trip">
                {clock(Math.min(now, CHAT_TOTAL))}
              </div>
              <div className="sr-list">
                <StepList steps={CHAT} labels={copy.chatSteps} t={now} tone="chat" />
                {heckle && (
                  <Bubble
                    key={heckle.id}
                    heckle={heckle}
                    line={copy.heckles[heckle.id]}
                    still={reduced}
                  />
                )}
              </div>
            </div>

            <div className="sr-col sr-col--qwixit" data-qx={qx}>
              <div className="sr-qx-head">
                <span className="sr-tile" style={tileStyle}>
                  <span className="sr-tile__edge">
                    <span className="sr-tile__core">
                      <Image
                        src="/brand/qwixit-mark-white.svg"
                        alt=""
                        width={20}
                        height={20}
                        unoptimized
                      />
                      <i className="sr-tile__scan" aria-hidden />
                    </span>
                  </span>
                </span>
                <b className="sr-qx-name">QWIXIT</b>
                <span className="sr-tag">{qx === "running" ? "LIVE" : "DONE"}</span>
              </div>
              <div
                className="sr-timer sr-timer--ink"
                role="timer"
                aria-label="Qwixit"
                data-glitch={qx === "finish" ? Math.floor(now * 60) % 2 : undefined}
              >
                {clock(Math.min(now, QWIXIT_TOTAL))}
              </div>
              <StepList steps={QWIXIT} labels={copy.qwixitSteps} t={now} tone="qwixit" />
              <p className="sr-done" data-visible={qx !== "running"}>
                <b aria-hidden>[ ^_- ]</b>
                {copy.done}
              </p>
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
