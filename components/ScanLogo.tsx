import Image from "next/image";

/** Integrated Tokiri lockup with the scan line — the only motion the logo is allowed. */
export function ScanLogo() {
  return (
    <div className="relative overflow-hidden px-1.5">
      <Image
        src="/brand/tokiri-lockup-integrated-dark.svg"
        alt="Tokiri"
        width={418}
        height={162}
        unoptimized
        className="q-jitter block h-auto w-[190px] flex-none"
      />
      <span aria-hidden className="q-scan-y pointer-events-none absolute inset-0">
        <span className="q-scan-line absolute inset-x-0 top-1/2 h-px" />
      </span>
    </div>
  );
}
