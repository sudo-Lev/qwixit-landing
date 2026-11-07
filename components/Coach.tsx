"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { advanceCoachMotion, type CoachMotion, type CoachPoint } from "@/lib/coach-motion";

export type CoachCopy = {
  hero: { draft: string; polished: string };
  race: string;
  fix: string;
  actions: string;
  peek: string;
  privacy: string;
  pricing: string;
  final: string;
};

type Face = "hello" | "ready" | "pay" | "upsell" | "lost" | "boot" | "wow" | "proud" | "curious" | "glance";

const FACES: Record<Face, string> = {
  hello: "^_^",
  ready: "^_-",
  pay: "^o^",
  upsell: "¬_¬",
  lost: "?_?",
  boot: "o_o",
  wow: "°o°",
  proud: "^‿^",
  curious: "o_O",
  glance: ">_>",
};

type Placement = "below-left" | "left-middle" | "inside-right-middle" | "straddle-bottom-right" | "below";

type Beat = {
  key: string;
  message: string;
  faces: Face[];
  placement: Placement;
  focus: boolean;
};

type Stop = "hero" | "race" | "fix" | "actions" | "peek" | "privacy" | "pricing" | "final";

const REACTION_MS = 820;
const FLIGHT_MS = 760;
const EDGE = 15;
const GAP = 12;
const NARROW = 720;

type MobileAnchor = {
  id: string;
  stop: Stop;
  selector: string;
  edge: "above" | "below" | "inside-bottom";
  right: boolean;
};

const MOBILE_ANCHORS: MobileAnchor[] = [
  { id: "hero-intro", stop: "hero", selector: ".hero-copy > .status", edge: "below", right: false },
  { id: "hero-demo", stop: "hero", selector: '[data-coach="hero"]', edge: "below", right: true },
  { id: "race-intro", stop: "race", selector: ".sr-head", edge: "inside-bottom", right: false },
  { id: "race-result", stop: "race", selector: ".sr-wrap", edge: "below", right: true },
  { id: "fix-intro", stop: "fix", selector: '[data-coach="fix"]', edge: "above", right: false },
  { id: "fix-result", stop: "fix", selector: '[data-coach="fix"]', edge: "below", right: true },
  { id: "actions-intro", stop: "actions", selector: '[data-coach="actions"]', edge: "above", right: true },
  { id: "actions-result", stop: "actions", selector: '[data-coach="actions"]', edge: "below", right: false },
  { id: "peek-intro", stop: "peek", selector: '[data-coach="peek"]', edge: "above", right: false },
  { id: "peek-result", stop: "peek", selector: '[data-coach="peek"]', edge: "below", right: true },
  { id: "privacy-intro", stop: "privacy", selector: '[data-coach="privacy"]', edge: "above", right: true },
  { id: "privacy-result", stop: "privacy", selector: '[data-coach="privacy"]', edge: "below", right: false },
  { id: "pricing-preview", stop: "pricing", selector: '[data-coach="pricing"]', edge: "below", right: false },
  { id: "pricing-plans", stop: "pricing", selector: ".price-table", edge: "below", right: true },
  { id: "final-action", stop: "final", selector: '[data-coach="final"]', edge: "below", right: true },
  { id: "final-goodbye", stop: "final", selector: ".final-face", edge: "below", right: false },
];

function mobileAnchorY(anchor: MobileAnchor, rect: DOMRect, height: number) {
  if (anchor.edge === "above") return rect.top - height - GAP;
  if (anchor.edge === "inside-bottom") return rect.bottom - height - GAP;
  return rect.bottom + GAP;
}

function beatFor(stop: Stop, heroPolished: boolean, copy: CoachCopy): Beat {
  switch (stop) {
    case "hero":
      return heroPolished
        ? { key: "hero-polished", message: copy.hero.polished, faces: ["wow", "proud"], placement: "below-left", focus: false }
        : { key: "hero-draft", message: copy.hero.draft, faces: ["glance", "hello"], placement: "below-left", focus: false };
    case "race":
      return { key: stop, message: copy.race, faces: ["upsell"], placement: "inside-right-middle", focus: false };
    case "fix":
      return { key: stop, message: copy.fix, faces: ["wow", "proud"], placement: "left-middle", focus: true };
    case "actions":
      return { key: stop, message: copy.actions, faces: ["curious", "hello"], placement: "left-middle", focus: true };
    case "peek":
      return { key: stop, message: copy.peek, faces: ["lost", "ready"], placement: "left-middle", focus: true };
    case "privacy":
      return { key: stop, message: copy.privacy, faces: ["glance", "upsell"], placement: "straddle-bottom-right", focus: true };
    case "pricing":
      return { key: stop, message: copy.pricing, faces: ["pay"], placement: "below-left", focus: true };
    case "final":
      return { key: stop, message: copy.final, faces: ["hello", "ready"], placement: "below", focus: false };
  }
}

function place(rect: DOMRect, placement: Placement, size: { width: number; height: number }, viewport: number) {
  const { width, height } = size;
  const top = rect.top + window.scrollY;
  const bottom = rect.bottom + window.scrollY;
  let x: number;
  let y: number;
  if (viewport < NARROW) {
    x = rect.left + rect.width / 2 - width / 2;
    y = placement === "below" || placement === "below-left" ? bottom + GAP : bottom - height * 0.4;
  } else {
    switch (placement) {
      case "below-left":
        x = rect.left;
        y = bottom + GAP;
        break;
      case "left-middle":
        x = rect.left - width - 28;
        y = top + rect.height / 2 - height / 2;
        break;
      case "inside-right-middle":
        x = rect.right - width - 56;
        y = top + rect.height * 0.58 - height / 2;
        break;
      case "straddle-bottom-right":
        x = rect.right - width * 0.8;
        y = bottom - height * 0.4;
        break;
      case "below":
        x = rect.left + rect.width / 2 - width / 2;
        y = bottom + GAP;
        break;
    }
  }
  return { x: Math.min(Math.max(x, EDGE), viewport - width - EDGE), y: Math.max(y, EDGE) };
}

function activeStop(current: Stop | null, viewport: number): HTMLElement | null {
  const probe = window.innerHeight * 0.45;
  if (viewport < NARROW && current) {
    const currentTarget = document.querySelector<HTMLElement>(`[data-coach="${current}"]`);
    const currentRect = currentTarget?.getBoundingClientRect();
    const hysteresis = window.innerHeight * 0.06;
    if (currentTarget && currentRect && currentRect.bottom >= probe - hysteresis && currentRect.top <= probe + hysteresis) {
      return currentTarget;
    }
  }
  let best: HTMLElement | null = null;
  let bestDistance = Infinity;
  document.querySelectorAll<HTMLElement>("[data-coach]").forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.height === 0) return;
    const distance = probe < rect.top ? rect.top - probe : probe > rect.bottom ? probe - rect.bottom : 0;
    if (distance < bestDistance) {
      bestDistance = distance;
      best = element;
    }
  });
  return best;
}

export function Coach({ copy }: { copy: CoachCopy }) {
  const coachRef = useRef<HTMLDivElement>(null);
  const mobileMotion = useRef<{
    current: CoachMotion | null;
    target: CoachPoint | null;
    bounds: { minY: number; maxY: number; maxX: number };
    frame: number;
    time: number;
  }>({ current: null, target: null, bounds: { minY: 0, maxY: 0, maxX: 0 }, frame: 0, time: 0 });
  const bubbleRef = useRef<HTMLDivElement>(null);
  const focusedRef = useRef<HTMLElement | null>(null);
  const stopRef = useRef<Stop | null>(null);
  const [stop, setStop] = useState<Stop | null>(null);
  const [mobileAnchor, setMobileAnchor] = useState<string | null>(null);
  const mobileAnchorRef = useRef<string | null>(null);
  const [heroPolished, setHeroPolished] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [flying, setFlying] = useState(false);
  const [faceIndex, setFaceIndex] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [narrow, setNarrow] = useState(false);
  const [motionLayout, setMotionLayout] = useState<boolean | null>(null);

  const beat = useMemo(() => (stop ? beatFor(stop, heroPolished, copy) : null), [stop, heroPolished, copy]);

  useLayoutEffect(() => {
    const motion = mobileMotion.current;
    cancelAnimationFrame(motion.frame);
    motion.frame = 0;
    motion.time = 0;
    motion.current = null;
    motion.target = null;
    return () => cancelAnimationFrame(motion.frame);
  }, [narrow, reduced]);

  const moveMobile = useCallback((target: CoachPoint) => {
    const node = coachRef.current;
    if (!node) return;
    const motion = mobileMotion.current;
    motion.target = target;
    const paint = (point: CoachPoint) => {
      node.style.transform = `translate3d(${point.x}px, ${point.y}px, 0)`;
    };
    if (!motion.current || reduced || motionLayout !== true) {
      if (!motion.current) setPosition(target);
      motion.current = { ...target, vx: 0, vy: 0 };
      paint(target);
      return;
    }
    if (motion.frame) return;
    const tick = (time: number) => {
      if (!motion.current || !motion.target) return;
      const dt = motion.time ? (time - motion.time) / 1000 : 1 / 60;
      motion.time = time;
      const next = advanceCoachMotion(motion.current, motion.target, dt);
      const { minY, maxY, maxX } = motion.bounds;
      const x = Math.max(EDGE, Math.min(next.x, maxX));
      const y = Math.max(minY, Math.min(next.y, maxY));
      motion.current = { x, y, vx: x === next.x ? next.vx : 0, vy: y === next.y ? next.vy : 0 };
      paint(motion.current);
      if (Math.hypot(x - motion.target.x, y - motion.target.y) < 0.35 && Math.hypot(next.vx, next.vy) < 3) {
        motion.current = { ...motion.target, vx: 0, vy: 0 };
        paint(motion.target);
        motion.frame = 0;
        motion.time = 0;
      } else {
        motion.frame = requestAnimationFrame(tick);
      }
    };
    motion.frame = requestAnimationFrame(tick);
  }, [motionLayout, reduced]);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrowQuery = window.matchMedia(`(max-width: ${NARROW - 1}px)`);
    const sync = () => setReduced(query.matches);
    const syncNarrow = () => setNarrow(narrowQuery.matches);
    sync();
    syncNarrow();
    query.addEventListener("change", sync);
    narrowQuery.addEventListener("change", syncNarrow);
    return () => {
      query.removeEventListener("change", sync);
      narrowQuery.removeEventListener("change", syncNarrow);
    };
  }, []);

  useEffect(() => {
    // A breakpoint changes coordinate systems (page vs viewport). Settle the new
    // position before enabling travel, so it cannot fly in from an offscreen point.
    let settledFrame = 0;
    const frame = requestAnimationFrame(() => {
      settledFrame = requestAnimationFrame(() => setMotionLayout(narrow));
    });
    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(settledFrame);
    };
  }, [narrow]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const viewport = document.documentElement.clientWidth;
      let next: Stop | null;
      if (viewport < NARROW) {
        const distanceToEnd = document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
        const probe = window.innerHeight * (distanceToEnd < 48 ? 0.8 : 0.45);
        const height = bubbleRef.current?.offsetHeight ?? 76;
        const candidates = MOBILE_ANCHORS.flatMap((anchor) => {
          const element = document.querySelector<HTMLElement>(anchor.selector);
          if (!element || !element.getClientRects().length) return [];
          const center = mobileAnchorY(anchor, element.getBoundingClientRect(), height) + height / 2;
          return [{ anchor, distance: Math.abs(center - probe) }];
        }).sort((a, b) => a.distance - b.distance);
        const current = candidates.find(({ anchor }) => anchor.id === mobileAnchorRef.current);
        const nearest = candidates[0];
        // A small dead band keeps neighboring landing spots from flickering.
        const selected = current && nearest && current.distance <= nearest.distance + 32 ? current : nearest;
        next = selected?.anchor.stop ?? null;
        const id = selected?.anchor.id ?? null;
        if (id !== mobileAnchorRef.current) {
          mobileAnchorRef.current = id;
          setMobileAnchor(id);
        }
      } else {
        const element = activeStop(stopRef.current, viewport);
        next = (element?.dataset.coach as Stop | undefined) ?? null;
        mobileAnchorRef.current = null;
        setMobileAnchor(null);
      }
      if (next !== stopRef.current) {
        stopRef.current = next;
        setStop(next);
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>('[data-coach="hero"]');
    if (!hero) return;
    const sync = () => setHeroPolished(hero.dataset.phase === "3");
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(hero, { attributes: true, attributeFilter: ["data-phase"] });
    return () => observer.disconnect();
  }, []);

  const reposition = useCallback(() => {
    const bubble = bubbleRef.current;
    if (!stop || !beat || !bubble) return;
    const target = document.querySelector<HTMLElement>(`[data-coach="${stop}"]`);
    if (!target) return;
    const shell = bubble.parentElement?.offsetParent as HTMLElement | null;
    const shellTop = shell ? shell.getBoundingClientRect().top + window.scrollY : 0;
    const viewport = document.documentElement.clientWidth;
    let next: { x: number; y: number };
    if (viewport < NARROW) {
      const landing = MOBILE_ANCHORS.find((anchor) => anchor.id === mobileAnchor)
        ?? MOBILE_ANCHORS.find((anchor) => anchor.stop === stop);
      const anchor = landing && document.querySelector<HTMLElement>(landing.selector);
      if (!landing || !anchor) return;
      const rect = anchor.getBoundingClientRect();
      const x = landing.right ? rect.right - bubble.offsetWidth : rect.left;
      const visualViewport = window.visualViewport;
      const viewTop = visualViewport?.offsetTop ?? 0;
      const viewHeight = visualViewport?.height ?? window.innerHeight;
      // Keep both ends of every flight on screen, even between distant anchors.
      // Extra height allows a longer message to arrive without clipping mid-flight.
      const flightHeight = Math.max(bubble.offsetHeight, 112);
      const minY = viewTop + EDGE;
      const maxY = Math.max(minY, viewTop + viewHeight - flightHeight - 32);
      mobileMotion.current.bounds = { minY, maxY, maxX: Math.max(EDGE, viewport - bubble.offsetWidth - EDGE) };
      next = {
        x: Math.max(EDGE, Math.min(x, viewport - bubble.offsetWidth - EDGE)),
        y: Math.max(minY, Math.min(mobileAnchorY(landing, rect, bubble.offsetHeight), maxY)),
      };
      moveMobile(next);
      return;
    } else {
      next = place(
        target.getBoundingClientRect(),
        beat.placement,
        { width: bubble.offsetWidth, height: bubble.offsetHeight },
        viewport,
      );
    }
    const y = viewport < NARROW ? next.y : next.y - shellTop;
    setPosition((current) =>
      current && Math.abs(current.x - next.x) < 1 && Math.abs(current.y - y) < 1
        ? current
        : { x: next.x, y },
    );
  }, [stop, beat, mobileAnchor, moveMobile]);

  useLayoutEffect(() => {
    reposition();
  }, [reposition, beat?.message, narrow]);

  useEffect(() => {
    let frame = 0;
    const follow = () => {
      if (window.innerWidth >= NARROW || frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        reposition();
      });
    };
    const observer = new ResizeObserver(() => reposition());
    observer.observe(document.body);
    if (bubbleRef.current) observer.observe(bubbleRef.current);
    window.addEventListener("scroll", follow, { passive: true });
    window.addEventListener("resize", reposition);
    window.visualViewport?.addEventListener("resize", reposition);
    window.visualViewport?.addEventListener("scroll", follow);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", follow);
      window.removeEventListener("resize", reposition);
      window.visualViewport?.removeEventListener("resize", reposition);
      window.visualViewport?.removeEventListener("scroll", follow);
    };
  }, [reposition]);

  useEffect(() => {
    if (!stop || reduced) return;
    setFlying(true);
    const id = window.setTimeout(() => setFlying(false), FLIGHT_MS);
    return () => window.clearTimeout(id);
  }, [stop, mobileAnchor, reduced]);

  useEffect(() => {
    const target = beat?.focus && stop ? document.querySelector<HTMLElement>(`[data-coach="${stop}"]`) : null;
    if (focusedRef.current !== target) {
      focusedRef.current?.classList.remove("is-coached");
      target?.classList.add("is-coached");
      focusedRef.current = target;
    }
  }, [beat?.focus, stop]);

  useEffect(() => () => focusedRef.current?.classList.remove("is-coached"), []);

  const faces = beat?.faces;
  const beatKey = beat?.key;
  useEffect(() => {
    if (!faces) return;
    if (reduced) {
      setFaceIndex(faces.length - 1);
      return;
    }
    setFaceIndex(0);
    const timers = faces.slice(1).map((_, index) =>
      window.setTimeout(() => setFaceIndex(index + 1), REACTION_MS * (index + 1)),
    );
    return () => timers.forEach((id) => window.clearTimeout(id));
  }, [beatKey, faces, mobileAnchor, reduced]);

  const face: Face = faces?.[Math.min(faceIndex, faces.length - 1)] ?? "hello";

  return (
    <div
      ref={coachRef}
      className="coach"
      aria-hidden
      data-visible={beat && position ? "1" : "0"}
      data-flying={flying ? "1" : "0"}
      data-layout={narrow ? "mobile" : "desktop"}
      data-travel={motionLayout === narrow ? "1" : "0"}
      data-stop={stop ?? undefined}
      data-anchor={narrow ? mobileAnchor ?? undefined : undefined}
      style={position && !narrow ? { transform: `translate3d(${position.x}px, ${position.y}px, 0)` } : undefined}
    >
      <div ref={bubbleRef} className="coach__bubble">
        <i className="coach__layer coach__layer--frame" />
        <i className="coach__layer coach__layer--plate" />
        <span className="coach__face" key={`${beatKey}-${face}`}>
          <b>{FACES[face]}</b>
        </span>
        <span className="coach__message" key={beatKey}>
          {beat?.message}
        </span>
      </div>
    </div>
  );
}
