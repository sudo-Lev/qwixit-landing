import { getTranslations } from "next-intl/server";
import { Footer } from "./Footer";
import { PauseOffscreen } from "./PauseOffscreen";
import { ScanLogo } from "./ScanLogo";
import { TapLink } from "./TapLink";

export async function Cta() {
  const t = await getTranslations("cta");

  return (
    <PauseOffscreen
      id="get"
      aria-label="Qwixit"
      className="relative mx-auto flex max-w-[1120px] flex-col items-center gap-[26px] px-7 pt-[120px] pb-10 text-center"
    >
      <ScanLogo />
      <p className="m-0 max-w-[480px] text-[13px] leading-[1.7] font-medium tracking-[.04em] text-dim">
        {t("privacy")}
      </p>
      <TapLink
        download
        className="inline-flex h-[52px] items-center gap-3 rounded-cta bg-white px-6 text-[14px] leading-none font-extrabold tracking-[.1em] text-bg shadow-split"
      >
        {t("download")} <span className="font-medium">↵</span>
      </TapLink>
      <Footer />
    </PauseOffscreen>
  );
}
