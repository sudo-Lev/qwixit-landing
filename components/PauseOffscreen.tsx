"use client";

import { useRef, type ComponentPropsWithoutRef } from "react";
import { useActive } from "@/lib/useActive";

/** A <section> whose CSS animations pause while it's off-screen or the tab is hidden. */
export function PauseOffscreen(props: ComponentPropsWithoutRef<"section">) {
  const ref = useRef<HTMLElement>(null);
  const active = useActive(ref);
  return <section ref={ref} data-paused={active ? "false" : "true"} {...props} />;
}
