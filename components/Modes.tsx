import { getTranslations } from "next-intl/server";
import { FadeIn } from "./FadeIn";
import { PaletteMock } from "./PaletteMock";
import { PauseOffscreen } from "./PauseOffscreen";
import { PeekMock } from "./PeekMock";

export async function Modes() {
  const t = await getTranslations("modes");

  return (
    <PauseOffscreen
      id="modes"
      aria-labelledby="modes-title"
      className="relative mx-auto max-w-[1120px] scroll-mt-4 px-7 pt-[110px] pb-10"
    >
      <h2
        id="modes-title"
        className="mt-0 mb-12 font-display text-[clamp(34px,5.5vw,64px)] leading-[.95] font-black tracking-[-.03em] text-white uppercase"
      >
        {t("h2a")}
        <br />
        <span className="split-3">{t("h2b")}</span>
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] gap-[22px]">
        <article className="flex flex-col gap-[22px]">
          <div className="flex flex-wrap items-baseline gap-3.5">
            <kbd className="rounded-tag bg-green-bar px-[9px] py-1.5 font-mono text-[13px] leading-none font-extrabold tracking-[.1em] text-bg">
              ⌥⌘X
            </kbd>
            <h3 className="m-0 text-[22px] leading-none font-extrabold tracking-[.08em]">
              {t("fixTitle")}
            </h3>
          </div>
          <p className="m-0 text-[14px] leading-[1.65] font-medium text-pretty text-muted">
            {t("fixCopy")}
          </p>
          <FadeIn duration={140}>
            <PaletteMock label={t("fixMockLabel")} />
          </FadeIn>
        </article>
        <article className="flex flex-col gap-[22px]">
          <div className="flex flex-wrap items-baseline gap-3.5">
            <kbd className="rounded-tag bg-cyan px-[9px] py-1.5 font-mono text-[13px] leading-none font-extrabold tracking-[.1em] text-bg">
              ⌥⌘L
            </kbd>
            <h3 className="m-0 text-[22px] leading-none font-extrabold tracking-[.08em]">
              {t("peekTitle")}
            </h3>
          </div>
          <p className="m-0 text-[14px] leading-[1.65] font-medium text-pretty text-muted">
            {t("peekCopy")}
          </p>
          <FadeIn duration={150}>
            <PeekMock label={t("peekMockLabel")} />
          </FadeIn>
        </article>
      </div>
    </PauseOffscreen>
  );
}
