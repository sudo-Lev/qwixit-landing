import { getTranslations } from "next-intl/server";

export async function Footer() {
  const t = await getTranslations("footer");
  return (
    <footer className="mt-20 flex w-full flex-wrap justify-between gap-3 border-t border-line-soft py-[22px] text-[11px] leading-none font-bold tracking-[.14em] text-faint-text">
      <span>{t("copyright")}</span>
      <span>{t("credit")}</span>
      <span>{t("requirements")}</span>
    </footer>
  );
}
