import { TIMING, sweepDuration, type DemoCase, type Phase } from "./types";

export interface DemoState {
  index: number;
  phase: Phase;
  /** Increments every time a case (re)starts — used as a key and to drop stale callbacks. */
  run: number;
  /** Clock time the transform phase started at, and its duration. */
  sweepStart: number;
  sweepDur: number;
}

/**
 * Drives the demo loop on a pausable clock: time only advances while the demo is
 * on-screen and the tab is visible, so pausing freezes timers and the sweep alike.
 */
export class DemoController {
  state: DemoState = { index: 0, phase: "idle", run: 0, sweepStart: 0, sweepDur: 0 };
  reduced = false;

  private listeners = new Set<() => void>();
  private acc = 0;
  private since: number | null = null;
  private pending: { at: number; fn: () => void } | null = null;
  private handle: ReturnType<typeof setTimeout> | undefined;
  private started = false;

  constructor(private cases: DemoCase[]) {}

  subscribe = (fn: () => void) => {
    this.listeners.add(fn);
    return () => void this.listeners.delete(fn);
  };
  getSnapshot = () => this.state;

  now = () => this.acc + (this.since === null ? 0 : performance.now() - this.since);

  get active() {
    return this.since !== null;
  }

  setActive(on: boolean) {
    if (on && this.since === null) {
      this.since = performance.now();
      if (!this.started) {
        this.started = true;
        this.start(this.state.index);
      } else this.arm();
    } else if (!on && this.since !== null) {
      this.acc += performance.now() - this.since;
      this.since = null;
      clearTimeout(this.handle);
    }
  }

  /** Jump to a case and restart its sequence; autoplay continues from there. */
  goTo(index: number) {
    this.started = true;
    this.start(index);
  }

  /** Called by the sweep renderer when it reaches the end (the timer is the fallback). */
  complete(run: number) {
    if (run === this.state.run && this.state.phase === "transform") this.finish();
  }

  private set(patch: Partial<DemoState>) {
    this.state = { ...this.state, ...patch };
    this.listeners.forEach((fn) => fn());
  }

  private after(ms: number, fn: () => void) {
    this.pending = { at: this.now() + ms, fn };
    this.arm();
  }

  private arm() {
    clearTimeout(this.handle);
    const task = this.pending;
    if (!task || this.since === null) return;
    this.handle = setTimeout(
      () => {
        if (this.pending !== task) return;
        this.pending = null;
        task.fn();
      },
      Math.max(0, task.at - this.now()),
    );
  }

  private start(index: number) {
    const c = this.cases[index]!;
    this.set({ index, phase: "idle", run: this.state.run + 1 });
    this.after(TIMING.idle, () => {
      if (this.reduced) return this.finish();
      this.set({ phase: "lag" });
      this.after(TIMING.lag, () => {
        const dur = sweepDuration(c.before, c.after);
        this.set({ phase: "transform", sweepStart: this.now(), sweepDur: dur });
        this.after(dur + TIMING.fallback, () => this.finish());
      });
    });
  }

  private finish() {
    this.set({ phase: "done" });
    this.after(TIMING.done, () => this.start((this.state.index + 1) % this.cases.length));
  }
}
