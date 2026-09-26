"use client";

import { AnimatePresence, MotionConfig, m, useReducedMotion } from "motion/react";
import { useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { useActive } from "@/lib/useActive";
import { Keycaps } from "./Keycaps";
import { ProcessingHud, SuccessHud } from "./StatusHud";
import { SweepText } from "./SweepText";
import { TABS, type DemoCase } from "./types";
import { useDemoLoop } from "./useDemoLoop";

const HIGHLIGHT: CSSProperties = {
  background: "rgba(109,40,255,.18)",
  boxShadow: "0 0 0 2px rgba(109,40,255,.18)",
  borderRadius: 3,
  boxDecorationBreak: "clone",
  WebkitBoxDecorationBreak: "clone",
};

const fade = { duration: 0.08, ease: "easeOut" } as const;

const hudMotion = {
  keys: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: fade },
    exit: { opacity: 0, transition: fade },
  },
  proc: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: fade },
    exit: { opacity: 0, scale: 1.015, transition: { duration: 0.13, ease: [0.2, 0.9, 0.3, 1] } },
  },
  done: {
    initial: { opacity: 0, scale: 0.97 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        opacity: { duration: 0.13, ease: "easeOut" },
        scale: { type: "spring", stiffness: 700, damping: 45 },
      },
    },
    exit: { opacity: 0, transition: fade },
  },
} as const;

const TEXT_BOX =
  "px-6 pt-10 pb-[140px] font-sys text-[clamp(20px,2.4vw,26px)] leading-[1.5] tracking-[-.015em] break-words whitespace-pre-wrap sm:px-12";

interface Labels {
  live: string;
  label: string;
  tabsLabel: string;
}

export function DemoWindow({ cases, labels }: { cases: DemoCase[]; labels: Labels }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const active = useActive(rootRef);
  const reduced = useReducedMotion() ?? false;
  const { ctl, state } = useDemoLoop(cases, active, reduced);
  const c = cases[state.index]!;
  const { phase, run } = state;

  // The window height follows max(before, after) of the current case, so it only
  // changes between cases — with a 200ms transition.
  const measureRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>();
  useLayoutEffect(() => {
    const el = measureRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setHeight(el.offsetHeight));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const hud = phase === "idle" ? "keys" : phase === "done" ? "done" : "proc";

  let live: React.ReactNode;
  if (phase === "transform") {
    live = (
      <SweepText
        key={run}
        before={c.before}
        after={c.after}
        elapsed={() => ctl.now() - state.sweepStart}
        duration={state.sweepDur}
        running={active}
        onComplete={() => ctl.complete(run)}
      />
    );
  } else if (phase === "done") {
    live = c.after;
  } else {
    live = <span style={HIGHLIGHT}>{c.before}</span>;
  }

  return (
    <MotionConfig reducedMotion="user">
      <div
        ref={rootRef}
        data-paused={active ? "false" : "true"}
        className="mt-16 flex flex-col gap-3.5"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 text-[12px] leading-none font-bold tracking-[.14em] text-muted">
            <span
              data-glow
              aria-hidden
              className="size-2 rounded-full bg-green shadow-[0_0_10px_#2EEB73]"
            />
            {labels.live}
          </div>
          <div role="group" aria-label={labels.tabsLabel} className="flex flex-wrap gap-1.5">
            {cases.map((x, i) => {
              const tab = TABS[x.id];
              const on = i === state.index;
              return (
                <m.button
                  key={x.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => ctl.goTo(i)}
                  whileTap={{ scale: 0.985, opacity: 0.82 }}
                  transition={{ duration: 0.1 }}
                  style={{
                    borderColor: on ? tab.color : "rgba(255,255,255,.12)",
                    background: on ? "rgba(255,255,255,.08)" : "transparent",
                  }}
                  className="flex h-[34px] cursor-pointer items-center gap-2 rounded-lg border px-3 text-[12px] leading-none font-extrabold tracking-[.08em] text-white"
                >
                  <span
                    aria-hidden
                    className="h-3.5 w-[3px] rounded-sm"
                    style={{ background: tab.color }}
                  />
                  {tab.name}
                </m.button>
              );
            })}
          </div>
        </div>

        <section
          aria-label={labels.label}
          className="overflow-hidden rounded-doc bg-doc shadow-[var(--shadow-doc)]"
        >
          <div className="flex h-10 items-center gap-2 border-b border-[#EAE7F0] bg-white px-4">
            <span aria-hidden className="size-[11px] rounded-full bg-[#FF5F57]" />
            <span aria-hidden className="size-[11px] rounded-full bg-[#FEBC2E]" />
            <span aria-hidden className="size-[11px] rounded-full bg-[#28C840]" />
            <span className="ml-2.5 font-sys text-[12px] leading-none font-medium text-[#726D80]">
              {c.app}
            </span>
          </div>

          <div
            className="relative min-h-[280px] overflow-hidden transition-[height] duration-200 ease-out"
            style={{ height }}
          >
            {/* Sizer: both states overlaid, invisible. The live layer is absolute so the
                mid-sweep mix can never push the box around. */}
            <div ref={measureRef} className={`grid min-h-[280px] ${TEXT_BOX}`}>
              <span aria-hidden className="invisible [grid-area:1/1]">
                {c.before}
              </span>
              <span aria-hidden className="invisible [grid-area:1/1]">
                {c.after}
              </span>
            </div>
            <p className={`absolute inset-x-0 top-0 m-0 text-ink ${TEXT_BOX}`}>{live}</p>

            <div className="absolute bottom-[30px] left-1/2 h-[66px] w-[min(400px,calc(100%-32px))] -translate-x-1/2">
              <AnimatePresence mode="popLayout" initial={false}>
                <m.div
                  key={`${hud}-${run}`}
                  className="absolute inset-0"
                  initial={hudMotion[hud].initial}
                  animate={hudMotion[hud].animate}
                  exit={hudMotion[hud].exit}
                >
                  {hud === "keys" && <Keycaps />}
                  {hud === "proc" && (
                    <ProcessingHud
                      verb={c.verb}
                      now={ctl.now}
                      animate={!reduced}
                      running={active}
                    />
                  )}
                  {hud === "done" && <SuccessHud title={c.done} sub={c.sub} />}
                </m.div>
              </AnimatePresence>
            </div>
          </div>
        </section>
      </div>
    </MotionConfig>
  );
}
