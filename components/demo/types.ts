export type CaseId = "fix" | "translate" | "shorten" | "formal";

export interface DemoCase {
  id: CaseId;
  app: string;
  before: string;
  after: string;
  verb: string;
  done: string;
  sub: string;
}

export type Phase = "idle" | "lag" | "transform" | "done";

export const TABS: Record<CaseId, { name: string; color: string }> = {
  fix: { name: "FIX", color: "#3DF58A" },
  translate: { name: "TRANSLATE", color: "#00D8F0" },
  shorten: { name: "SHORTEN", color: "#3DF58A" },
  formal: { name: "MAKE FORMAL", color: "#A77BFF" },
};

export const TIMING = { idle: 1800, lag: 900, done: 2200, fallback: 140 } as const;

export function sweepDuration(before: string, after: string) {
  const chars = Math.max(before.length, after.length);
  return Math.min(1400, Math.max(560, 300 + chars * 9));
}

export const easeInOutQuad = (p: number) => (p < 0.5 ? 2 * p * p : 1 - (-2 * p + 2) ** 2 / 2);
