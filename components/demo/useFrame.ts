"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

/** requestAnimationFrame loop that runs only while `running` is true. */
export function useFrame(running: boolean, fn: () => void) {
  const cb = useRef(fn);
  useLayoutEffect(() => {
    cb.current = fn;
  });

  useEffect(() => {
    if (!running) return;
    let raf = 0;
    const tick = () => {
      cb.current();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [running]);
}
