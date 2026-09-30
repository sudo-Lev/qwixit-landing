import Image from "next/image";

const rows = [
  {
    name: "FIX",
    hint: "typos, commas, grammar",
    mode: "REPLACE",
    color: "#3DF58A",
    key: "1",
    on: true,
  },
  { name: "TRANSLATE", hint: "auto-detect source", mode: "REPLACE ⇥", color: "#00D8F0", key: "2" },
  { name: "SHORTEN", hint: "same meaning, −40%", mode: "REPLACE", color: "#3DF58A", key: "3" },
];

export function PaletteMock({ label }: { label: string }) {
  return (
    <figure className="m-0">
      <figcaption className="sr-only">{label}</figcaption>
      <div
        aria-hidden
        className="overflow-hidden rounded-panel border border-line bg-[linear-gradient(180deg,#1C1728,#120E1B)] shadow-panel"
      >
        <div className="flex h-[62px] items-center gap-3.5 border-b border-[rgba(255,255,255,.1)] px-5">
          <Image
            src="/brand/qwixit-mark-dark.svg"
            alt=""
            width={31}
            height={31}
            unoptimized
            className="block size-[31px] flex-none"
          />
          <span className="h-[22px] w-0.5 flex-none animate-caret bg-[#3B82F6]" />
          <span className="min-w-0 flex-1 truncate text-[15px] leading-none font-bold text-[#6B6679] sm:text-[17px]">
            Action or instruction…
          </span>
          <span className="hidden text-[11px] leading-none font-bold tracking-[.14em] text-dim sm:inline">
            21 WORDS · EN
          </span>
        </div>
        <div className="flex flex-col gap-1.5 px-3.5 pt-3.5 pb-2.5">
          <div className="px-2 pt-1.5 pb-2 text-[11px] leading-none font-bold tracking-[.2em] text-faint">
            ACTIONS
          </div>
          {rows.map((r) => (
            <div
              key={r.name}
              className={`flex h-12 items-center gap-3 rounded-xl px-3.5 ${
                r.on ? "border-[1.5px] border-[rgba(61,245,138,.6)] bg-[rgba(61,245,138,.1)]" : ""
              }`}
            >
              <span className="h-5 w-[3px] flex-none rounded-sm" style={{ background: r.color }} />
              <span className="text-[15px] leading-none font-extrabold tracking-[.08em] text-white">
                {r.name}
              </span>
              <span className="min-w-0 flex-1 truncate text-[13px] leading-none font-medium text-dim">
                {r.hint}
              </span>
              <span
                className="text-[11px] leading-none font-extrabold tracking-[.08em] whitespace-nowrap"
                style={{ color: r.on ? "#3DF58A" : "#8E8899" }}
              >
                {r.mode}
              </span>
              <span className="inline-flex size-[26px] flex-none items-center justify-center rounded-[7px] border border-[rgba(255,255,255,.2)] text-[12px] leading-none font-bold text-[#CFCAE0]">
                {r.key}
              </span>
            </div>
          ))}
        </div>
        <div className="flex min-h-12 flex-wrap items-center gap-2.5 border-t border-[rgba(255,255,255,.1)] px-5">
          <span className="size-[11px] rounded-[3px] bg-green-bar" />
          <span className="flex-1 text-[12px] leading-[1.4] font-bold tracking-[.04em] text-muted">
            REPLACE · ⌘Z undoes
          </span>
          <span className="text-[12px] leading-none font-bold text-muted">↑↓ · ↵ · ESC</span>
        </div>
      </div>
    </figure>
  );
}
