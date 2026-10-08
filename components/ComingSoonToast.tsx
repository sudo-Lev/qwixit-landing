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
            className="qwixit-toast"
          >
            <span className="toast-rail" />
            <strong>{title}</strong>
            <span>{body}</span>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
