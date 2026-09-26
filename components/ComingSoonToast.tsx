"use client";

import { AnimatePresence, m } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { TOAST_EVENT } from "@/lib/toast";

export function ComingSoonToast({ title, body }: { title: string; body: string }) {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const show = () => {
      setOpen(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setOpen(false), 2400);
    };
    window.addEventListener(TOAST_EVENT, show);
    return () => {
      window.removeEventListener(TOAST_EVENT, show);
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4"
    >
      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.13, ease: "easeOut" }}
            className="flex items-center gap-3 rounded-status border border-line bg-card py-3 pr-4 pl-3.5 shadow-[0_18px_44px_-18px_rgba(109,40,255,.65),0_24px_50px_-24px_rgba(8,4,20,.9)]"
          >
            <span data-glow className="h-5 w-0.5 rounded-sm bg-cyan shadow-[0_0_10px_#00D8F0]" />
            <span className="text-[13px] leading-none font-extrabold tracking-[.1em] text-white">
              {title}
            </span>
            <span className="text-[12px] leading-none font-medium text-muted">{body}</span>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
