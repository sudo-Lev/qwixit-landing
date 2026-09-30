import Image from "next/image";

/** Brand mark with the scan line — the only motion the logo is allowed. */
export function ScanLogo() {
  return (
    <div className="relative overflow-hidden px-1.5">
      <Image
        src="/brand/qwixit-mark-dark.svg"
        alt="Qwixit"
        width={110}
        height={110}
        unoptimized
        className="q-jitter block size-[110px] flex-none"
      />
      <span aria-hidden className="q-scan-y pointer-events-none absolute inset-0">
        <span className="q-scan-line absolute inset-x-0 top-1/2 h-px" />
      </span>
    </div>
  );
}
