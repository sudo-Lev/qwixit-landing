"use client";

import { useEffect, useState, type RefObject } from "react";
import { useInView } from "motion/react";

/** True while the element is on-screen and the browser tab is visible. */
export function useActive(ref: RefObject<Element | null>, amount = 0.05) {
  const inView = useInView(ref, { amount });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const sync = () => setVisible(document.visibilityState === "visible");
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, []);

  return inView && visible;
}
