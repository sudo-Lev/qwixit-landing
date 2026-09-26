"use client";

import { m } from "motion/react";
import type { ComponentPropsWithoutRef } from "react";
import { showComingSoon } from "@/lib/toast";

type Props = Omit<ComponentPropsWithoutRef<typeof m.a>, "whileTap" | "transition"> & {
  /** Placeholder download: opens the "Coming soon" toast instead of navigating. */
  download?: boolean;
};

const tap = { scale: 0.985, opacity: 0.82 };
const tapTransition = { duration: 0.1, ease: "easeOut" } as const;

export function TapLink({ download, onClick, href, ...rest }: Props) {
  return (
    <m.a
      href={download ? "#" : href}
      whileTap={tap}
      transition={tapTransition}
      onClick={(e) => {
        if (download) {
          e.preventDefault();
          showComingSoon();
        }
        onClick?.(e);
      }}
      {...rest}
    />
  );
}
