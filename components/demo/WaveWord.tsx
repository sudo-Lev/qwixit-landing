"use client";

import { useRef } from "react";
import { easeInOutQuad } from "./types";
import { useFrame } from "./useFrame";

const CYCLE = 560;
const MOVE = 0.75;
const R = 2.35;

/** Per-letter wave: passes over the word in the first 75% of each 560ms cycle, then rests. */
export function WaveWord({
  word,
  now,
  running,
}: {
  word: string;
  now: () => number;
  running: boolean;
}) {
  const spans = useRef<(HTMLSpanElement | null)[]>([]);
  const chars = [...word];

  useFrame(running, () => {
    const c = (now() % CYCLE) / CYCLE;
    const head = c < MOVE ? -R + easeInOutQuad(c / MOVE) * (chars.length - 1 + 2 * R) : -99;
    for (let i = 0; i < chars.length; i++) {
      const el = spans.current[i];
      if (!el) continue;
      const d = i - head;
      const k = Math.max(0, 1 - Math.abs(d) / R);
      el.style.transform = `perspective(48px) translateY(${d > 0 ? -2.3 * k : 1.1 * k}px) rotateY(${(d > 0 ? 1 : -1) * 34 * k}deg)`;
      el.style.textShadow = k
        ? `${-1.8 * k}px 0 rgba(0,216,240,${0.78 * k}), ${1.8 * k}px 0 rgba(255,45,155,${0.78 * k})`
        : "none";
    }
  });

  return (
    <span>
      <span className="sr-only">{word}</span>
      {chars.map((ch, i) => (
        <span
          key={i}
          aria-hidden
          ref={(el) => {
            spans.current[i] = el;
          }}
          className="inline-block whitespace-pre"
        >
          {ch}
        </span>
      ))}
    </span>
  );
}
