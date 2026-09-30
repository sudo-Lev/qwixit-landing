import Image from "next/image";
import { WaveWord } from "./WaveWord";

const SHELL_SHADOW =
  "shadow-[0_18px_44px_-18px_rgba(109,40,255,.65),0_24px_50px_-24px_rgba(8,4,20,.9)]";
const CARD =
  "relative flex h-full items-center gap-3 rounded-[10px] q-hud-card pr-4 pl-3.5 sm:gap-4 sm:pr-5 sm:pl-4";

function Mark({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/qwixit-mark-dark.svg"
      alt=""
      width={31}
      height={31}
      unoptimized
      className={`block size-[31px] flex-none ${className ?? ""}`}
    />
  );
}

export function ProcessingHud({
  verb,
  now,
  animate,
  running,
}: {
  verb: string;
  now: () => number;
  animate: boolean;
  running: boolean;
}) {
  return (
    <div className={`relative h-full overflow-hidden rounded-status bg-line p-px ${SHELL_SHADOW}`}>
      {/* top-edge sweep */}
      <span aria-hidden className="q-sweep absolute inset-0">
        <span className="absolute top-0 -left-[68px] h-0.5 w-[68px] bg-[linear-gradient(90deg,transparent,#FF2D9B,#fff,#00BFDB,transparent)]" />
      </span>
      <div className={CARD}>
        <span
          data-glow
          aria-hidden
          className="absolute top-3.5 bottom-3.5 left-0 w-0.5 rounded-sm bg-violet-glow shadow-[0_0_10px_#8B5CFF]"
        />
        <div className="relative flex size-[42px] flex-none items-center justify-center overflow-hidden rounded-full border border-[rgba(139,92,255,.55)] bg-bg">
          <Mark className="q-jitter opacity-50" />
          <span aria-hidden className="q-scan-y absolute inset-0">
            <span className="q-scan-line absolute inset-x-0 top-1/2 h-px" />
          </span>
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-[9px]">
          <span className="text-[16px] leading-none font-extrabold tracking-[.1em] whitespace-nowrap text-white sm:text-[18px]">
            <span className="text-cyan">&gt;</span>{" "}
            {animate ? <WaveWord word={verb} now={now} running={running} /> : verb}
          </span>
          <span
            aria-hidden
            className="relative block h-0.5 w-[100px] overflow-hidden rounded-[1px] bg-[rgba(255,255,255,.14)]"
          >
            <span className="q-trace absolute top-0 left-0 h-0.5 w-[42px] bg-[linear-gradient(90deg,transparent,#8B5CFF,#FF2D9B,#00BFDB,transparent)]" />
          </span>
        </div>
        <span className="text-[15px] leading-none font-extrabold tracking-[.1em] text-magenta">
          AI
        </span>
      </div>
    </div>
  );
}

export function SuccessHud({ title, sub }: { title: string; sub: string }) {
  return (
    <div className={`relative h-full rounded-status bg-line p-px ${SHELL_SHADOW}`}>
      <div className={CARD}>
        <span
          data-glow
          aria-hidden
          className="absolute top-3.5 bottom-3.5 left-0 w-0.5 rounded-sm bg-green shadow-[0_0_10px_#2EEB73]"
        />
        <div className="relative size-[42px] flex-none">
          <div className="flex size-[42px] items-center justify-center rounded-full border border-[rgba(255,255,255,.14)] bg-bg">
            <Mark />
          </div>
          <span
            aria-hidden
            className="q-ring absolute inset-0 rounded-full border border-green opacity-0"
          />
        </div>
        <div className="q-slide flex min-w-0 flex-1 flex-col gap-2">
          <span className="text-[16px] leading-none font-extrabold tracking-[.1em] whitespace-nowrap text-green sm:text-[18px]">
            ✓ {title}
          </span>
          <span className="flex items-center gap-2 text-[11px] leading-none font-bold tracking-[.14em] whitespace-nowrap text-dim">
            <span aria-hidden className="h-0.5 w-5 bg-green" />
            {sub}
          </span>
        </div>
        <span className="text-[14px] leading-none font-extrabold tracking-[.1em] text-green">
          OK
        </span>
      </div>
    </div>
  );
}
