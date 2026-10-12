"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useActive } from "@/lib/useActive";
import { ProductHud, type HudLabels } from "./ProductHud";

/** EDITING → SELECTED → PROCESSING → POLISHED, in milliseconds. */
const PHASE_MS = [1300, 900, 1500, 2600] as const;
const NOISE = "#%&@$/<>*+=01アカサ";
const STAGGER = 120;
const GLITCH = 420;
const SETTLE = 560;
const CLOCK_END = 1400;

type Phase = 0 | 1 | 2 | 3;
export type HeroEdit = { draft: string; polished: string; kind: "typo" | "meaning" };

export type HeroWindowCopy = {
  ariaLabel: string;
  title: string;
  date: string;
  time: string;
  status: {
    editing: string;
    selected: string;
    processing: string;
    polished: string;
  };
  hud: HudLabels;
  titlePrefix: string;
  titleConnector: string;
  bodyLead: string;
  bodyMiddle: string;
  bodyTail: string;
  bullet1Tail: string;
  bullet2: string;
  bullet3Tail: string;
  thanks: string;
  footer: {
    select: string;
    replaced: string;
  };
  edits: HeroEdit[];
};

function scramble(phrase: string, revealed: number) {
  let out = phrase.slice(0, revealed);
  for (let i = revealed; i < phrase.length; i++) {
    out += phrase[i] === " " ? " " : NOISE[Math.floor(Math.random() * NOISE.length)];
  }
  return out;
}

function setEdit(
  el: HTMLSpanElement,
  index: number,
  localTime: number,
  edits: readonly HeroEdit[],
) {
  const edit = edits[index] ?? edits[0];
  if (!edit) return;
  const { draft, polished } = edit;
  if (localTime < 0) {
    el.dataset.state = "draft";
    el.textContent = draft;
    delete el.dataset.width;
    el.style.width = "";
  } else if (localTime < GLITCH) {
    if (!el.dataset.width) {
      el.dataset.state = "measure";
      el.textContent = polished;
      el.dataset.width = String(el.getBoundingClientRect().width);
    }
    el.style.width = `${el.dataset.width}px`;
    el.dataset.state = "glitch";
    el.dataset.flip = Math.floor(localTime / 55) % 2 ? "1" : "0";
    el.textContent = scramble(polished, Math.floor((localTime / GLITCH) * polished.length));
  } else {
    el.dataset.state = localTime < SETTLE ? "settle" : "polished";
    el.textContent = polished;
    el.style.width = "";
  }
}

export function HeroWindow({ copy }: { copy: HeroWindowCopy }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const editRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [phase, setPhase] = useState<Phase>(0);
  const [reduced, setReduced] = useState(false);
  const active = useActive(rootRef);
  const edits = copy.edits;
  const status = [
    copy.status.editing,
    copy.status.selected,
    copy.status.processing,
    copy.status.polished,
  ][phase];

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduced) {
      setPhase(3);
      return;
    }
    if (!active) return;
    const id = window.setTimeout(() => setPhase((p) => ((p + 1) % 4) as Phase), PHASE_MS[phase]);
    return () => window.clearTimeout(id);
  }, [phase, active, reduced]);

  useEffect(() => {
    const elements = editRefs.current;
    if (phase !== 3) {
      elements.forEach((element, index) => element && setEdit(element, index, -1, edits));
      return;
    }
    if (reduced) {
      elements.forEach((element, index) => element && setEdit(element, index, SETTLE, edits));
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      elements.forEach(
        (element, index) => element && setEdit(element, index, elapsed - index * STAGGER, edits),
      );
      if (elapsed < CLOCK_END) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [edits, phase, reduced]);

  const edit = (index: number) => (
    <span
      ref={(element) => {
        editRefs.current[index] = element;
      }}
      className="qx-edit"
      data-state="draft"
      data-kind={edits[index]?.kind}
      suppressHydrationWarning
    >
      {edits[index]?.draft}
    </span>
  );

  const row = (children: ReactNode, bullet = false) => (
    <p className={`qx-row ${bullet ? "qx-row--bullet" : ""}`}>
      {bullet && <b aria-hidden>—</b>}
      <span className="qx-row__text">
        <span className="qx-sel">{children}</span>
      </span>
    </p>
  );

  return (
    <div
      ref={rootRef}
      className="qx-window-wrap"
      data-phase={phase}
      role="img"
      aria-label={copy.ariaLabel}
    >
      <div className="qx-window">
        <div className="qx-window__inner">
          <div className="qx-titlebar">
            <span className="traffic qx-traffic" aria-hidden>
              <i />
              <i />
              <i />
            </span>
            <span className="qx-titlebar__title">{copy.title}</span>
            <span className="qx-status">
              <i />
              {status}
            </span>
          </div>
          <div className="qx-body">
            <div className="qx-meta">
              <span>{copy.date}</span>
              <span>{copy.time}</span>
            </div>
            <div className="qx-doc">
              <p className="qx-row qx-row--title">
                <span className="qx-row__text">
                  <span className="qx-sel">
                    {copy.titlePrefix}
                    {edit(0)}
                    {copy.titleConnector}
                    {edit(1)}
                  </span>
                </span>
              </p>
              {row(
                <>
                  {copy.bodyLead}
                  {edit(2)}
                  {copy.bodyMiddle}
                  {edit(3)}
                  {copy.bodyTail}
                </>,
              )}
              {row(
                <>
                  {edit(4)}
                  {copy.bullet1Tail}
                </>,
                true,
              )}
              {row(<>{copy.bullet2}</>, true)}
              {row(
                <>
                  {edit(5)}
                  {copy.bullet3Tail}
                </>,
                true,
              )}
              {row(<>{copy.thanks}</>)}
            </div>
            <div className="qx-bottom">
              <span className="qx-keys" aria-hidden>
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
              <ProductHud
                state={phase === 3 ? "success" : "processing"}
                className="qx-window__hud"
                labels={copy.hud}
              />
            </div>
          </div>
          <div className="qx-footer" aria-hidden>
            <span className="qx-step qx-step--select">
              <i />
              {copy.footer.select}
            </span>
            <i className="qx-link qx-link--1" />
            <span className="qx-step qx-step--keys">
              <i />
              ⌥⌘X
            </span>
            <i className="qx-link qx-link--2" />
            <span className="qx-step qx-step--replaced">
              <i />
              {copy.footer.replaced}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
