"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";

/** Scroll reveal for product mocks — opacity only. */
export function FadeIn({ duration, children }: { duration: number; children: ReactNode }) {
  return (
    <m.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: duration / 1000, ease: "easeOut" }}
    >
      {children}
    </m.div>
  );
}
