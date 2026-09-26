const cap =
  "inline-flex h-11 min-w-11 items-center justify-center rounded-key border border-b-[3px] font-mono text-[18px] leading-none";

export function Keycaps() {
  return (
    <span
      className="flex h-full items-center justify-center gap-2"
      role="img"
      aria-label="Option Command X"
    >
      <kbd aria-hidden className={`${cap} border-[#DEDAE8] bg-white font-bold text-[#39344A]`}>
        ⌥
      </kbd>
      <kbd aria-hidden className={`${cap} border-[#DEDAE8] bg-white font-bold text-[#39344A]`}>
        ⌘
      </kbd>
      <kbd aria-hidden className={`${cap} border-violet bg-[#FBF8FF] font-extrabold text-violet`}>
        X
      </kbd>
    </span>
  );
}
