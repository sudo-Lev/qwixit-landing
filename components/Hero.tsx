import { getLocale, getTranslations } from "next-intl/server";
import { DemoWindow } from "./demo/DemoWindow";
import type { DemoCase } from "./demo/types";
import { PauseOffscreen } from "./PauseOffscreen";
import { TapLink } from "./TapLink";

export async function Hero() {
  const t = await getTranslations("hero");
  const d = await getTranslations("demo");
  const cases = d.raw("cases") as DemoCase[];
  // UA/PL line 1 is a single 10-letter word; let it shrink further so it never overflows on phones.
  const longWord = (await getLocale()) !== "en";

  return (
    <PauseOffscreen
      aria-labelledby="hero-title"
      className="relative mx-auto max-w-[1120px] px-7 pt-[70px] pb-10"
    >
      <p className="m-0 flex items-center gap-2.5 text-[12px] leading-none font-bold tracking-[.2em] text-cyan">
        <span aria-hidden>&gt;</span>
        <span>{t("eyebrow")}</span>
        <span aria-hidden className="h-[15px] w-[9px] animate-caret bg-cyan" />
      </p>
      <h1
        id="hero-title"
        className={`q-glitch mt-[26px] mb-0 font-display ${longWord ? "text-[clamp(30px,10vw,128px)]" : "text-[clamp(52px,10vw,128px)]"} leading-[.92] font-black tracking-[-.03em] text-white uppercase split-4`}
      >
        <span className="text-dim [text-shadow:none]">{t("h1a")}</span>
        <br />
        {t("h1b")}
      </h1>
      <div className="mt-[34px] flex flex-wrap items-end justify-between gap-7">
        <p className="m-0 max-w-[500px] text-[16px] leading-[1.6] font-medium text-pretty text-muted">
          <span className="text-white">{t("subLead")}</span>
          <br />
          {t("subBody")}
          <br />
          <span className="text-cyan">{t("subAction")}</span>
        </p>
        <div className="flex flex-wrap gap-2.5">
          <TapLink
            download
            className="inline-flex h-[52px] items-center gap-3 rounded-cta bg-white px-[22px] text-[14px] leading-none font-extrabold tracking-[.1em] text-bg shadow-[0_0_0_1px_#fff,5px_0_0_0_#FF2D9B,-5px_0_0_0_#00D8F0]"
          >
            {t("ctaDownload")} <span className="font-medium">↵</span>
          </TapLink>
          <TapLink
            href="#modes"
            className="inline-flex h-[52px] items-center rounded-cta border border-[rgba(255,255,255,.16)] px-5 text-[14px] leading-none font-bold tracking-[.1em] text-text transition-colors hover:text-magenta"
          >
            {t("ctaHow")}
          </TapLink>
        </div>
      </div>

      <DemoWindow
        cases={cases}
        labels={{ live: d("live"), label: d("label"), tabsLabel: d("tabsLabel") }}
      />
    </PauseOffscreen>
  );
}
