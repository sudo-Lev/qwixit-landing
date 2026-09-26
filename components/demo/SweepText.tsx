"use client";

import { useRef } from "react";
import { easeInOutQuad } from "./types";
import { useFrame } from "./useFrame";

const RADIUS = 7;
const INTENSITY = 2.5;

interface Props {
  before: string;
  after: string;
  /** Elapsed sweep time in ms (pausable clock). */
  elapsed: () => number;
  duration: number;
  running: boolean;
  onComplete: () => void;
}

/**
 * Character sweep: a head travels left→right swapping `before` for `after` with a
 * chromatic tear at the wavefront. Spans are rendered once; each frame mutates them
 * through refs so React doesn't re-render the paragraph 60×/s.
 *
 * The lift uses `position: relative; top` rather than translateY: transforms don't
 * apply to inline boxes, and inline-block glyphs would break word wrapping. Relative
 * offsets don't move neighbours, so there's still no layout shift.
 */
export function SweepText({ before, after, elapsed, duration, running, onComplete }: Props) {
  const n = Math.max(before.length, after.length);
  const spans = useRef<(HTMLSpanElement | null)[]>([]);
  const styled = useRef<boolean[]>([]);
  const doneRef = useRef(false);

  useFrame(running, () => {
    const p = Math.min(1, elapsed() / duration);
    const head = easeInOutQuad(p) * (n + 8);

    for (let i = 0; i < n; i++) {
      const el = spans.current[i];
      if (!el) continue;
      const ch = i < head ? (after[i] ?? "") : (before[i] ?? "");
      if (el.textContent !== ch) el.textContent = ch;

      const d = i - head;
      const k = Math.abs(d) < RADIUS ? 1 - Math.abs(d) / RADIUS : 0;
      const s = el.style;
      if (!k || ch === " " || ch === "") {
        if (styled.current[i]) {
          s.textShadow = s.top = s.opacity = "";
          styled.current[i] = false;
        }
        continue;
      }
      styled.current[i] = true;
      s.textShadow = `${-k * INTENSITY}px 0 rgba(0,216,240,${0.85 * k}), ${k * INTENSITY}px 0 rgba(255,45,155,${0.85 * k})`;
      s.top = `${d > 0 ? -1.4 * k : 1.1 * k}px`;
      s.opacity = d > 0 ? String(1 - 0.55 * k) : "";
    }

    if (p >= 1 && !doneRef.current) {
      doneRef.current = true;
      onComplete();
    }
  });

  return (
    <>
      {Array.from({ length: n }, (_, i) => (
        <span
          key={i}
          ref={(el) => {
            spans.current[i] = el;
          }}
          className="relative"
        >
          {before[i] ?? ""}
        </span>
      ))}
    </>
  );
}
