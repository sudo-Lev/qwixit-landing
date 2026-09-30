import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { TapLink } from "./TapLink";

export async function Header() {
  const t = await getTranslations("header");
  const locale = (await getLocale()) as Locale;

  return (
    <header className="relative mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-7 py-[22px]">
      <a href={`/${locale}`} aria-label={t("home")} className="flex items-center gap-3.5">
        <Image
          src="/brand/qwixit-lockup-dark.svg"
          alt=""
          width={134}
          height={36}
          priority
          unoptimized
          className="block h-9 w-auto flex-none"
        />
        <span className="hidden text-[11px] leading-none font-medium tracking-[.14em] text-faint-text sm:inline">
          {t("forMacos")}
        </span>
      </a>
      <div className="flex items-center gap-3.5 sm:gap-[22px]">
        <a
          href="#modes"
          className="hidden text-[12px] leading-none font-bold tracking-[.14em] text-dim transition-colors hover:text-magenta sm:inline"
        >
          {t("modes")}
        </a>
        <LocaleSwitcher current={locale} label={t("language")} />
        <TapLink
          download
          className="inline-flex h-[38px] items-center gap-2.5 rounded-key bg-white px-4 text-[12px] leading-none font-extrabold tracking-[.1em] text-bg"
        >
          {t("download")} <span className="font-medium">↵</span>
        </TapLink>
      </div>
    </header>
  );
}
