import Image from "next/image";

const tabs = [
  { name: "TRANSLATE", key: "1", color: "#00D8F0", on: true },
  { name: "SUMMARY", key: "2", color: "#FF2D9B" },
  { name: "CLARIFY", key: "3", color: "#A77BFF" },
];

export function PeekMock({ label }: { label: string }) {
  return (
    <figure className="m-0">
      <figcaption className="sr-only">{label}</figcaption>
      <div
        aria-hidden
        className="overflow-hidden rounded-panel border border-line bg-[linear-gradient(180deg,#1C1728,#120E1B)] shadow-panel"
      >
        <div className="flex h-[66px] items-center gap-1.5 overflow-hidden border-b border-[rgba(255,255,255,.1)] px-4">
          <Image
            src="/brand/qwixit-mark-dark.svg"
            alt=""
            width={31}
            height={31}
            unoptimized
            className="mr-2 hidden size-[31px] flex-none sm:block"
          />
          {tabs.map((t) => (
            <span
              key={t.name}
              className={`flex h-10 items-center gap-2 rounded-key text-[12px] leading-none font-extrabold tracking-[.06em] whitespace-nowrap sm:text-[13px] ${
                t.on ? "bg-[rgba(255,255,255,.07)] px-3 text-white" : "px-2.5 text-[#CFCAE0]"
              }`}
            >
              <span className="h-4 w-[3px] rounded-sm" style={{ background: t.color }} />
              {t.name} <span className="hidden text-faint sm:inline">{t.key}</span>
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 border-b border-[rgba(255,255,255,.1)] px-5 py-[22px]">
          <div className="flex min-w-0 flex-1 flex-col gap-2.5">
            <span className="text-[13px] leading-none font-extrabold tracking-[.08em] text-cyan">
              UA → EN
            </span>
            <span className="text-[15px] leading-[1.6] font-medium text-pretty text-text">
              Hi everyone — the beta build is almost ready. Please test it and tell me what&apos;s
              broken.
              <span className="ml-1 inline-block h-4 w-2 animate-caret bg-cyan align-[-3px]" />
            </span>
          </div>
          <div className="flex flex-none overflow-hidden rounded-key border border-line text-[13px] leading-none font-extrabold">
            <span className="bg-[rgba(255,255,255,.04)] px-3.5 py-3 text-dim">UA</span>
            <span className="bg-cyan px-3.5 py-3 text-bg">EN</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 px-5 py-3.5">
          <span className="text-[12px] leading-none font-bold tracking-[.08em] text-muted">
            TAB / ↔ CHANGE
          </span>
          <span className="inline-flex h-10 items-center gap-2.5 rounded-key bg-white px-4 text-[13px] leading-none font-extrabold tracking-[.06em] text-bg">
            COPY <span className="font-medium">⌘C</span>
          </span>
        </div>
      </div>
    </figure>
  );
}
