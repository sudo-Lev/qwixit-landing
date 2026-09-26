"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { DemoController } from "./controller";
import type { DemoCase } from "./types";

export function useDemoLoop(cases: DemoCase[], active: boolean, reduced: boolean) {
  const [ctl] = useState(() => new DemoController(cases));
  const state = useSyncExternalStore(ctl.subscribe, ctl.getSnapshot, ctl.getSnapshot);

  useEffect(() => {
    ctl.reduced = reduced;
  }, [ctl, reduced]);

  useEffect(() => {
    ctl.setActive(active);
    return () => ctl.setActive(false);
  }, [ctl, active]);

  return { ctl, state };
}
