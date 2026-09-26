import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Modes } from "@/components/Modes";
import { Cta } from "@/components/Cta";
import { ComingSoonToast } from "@/components/ComingSoonToast";
import { MotionProvider } from "@/components/MotionProvider";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations("toast");

  return (
    <MotionProvider>
      <div className="relative min-h-screen overflow-hidden bg-bg text-text">
        <div aria-hidden className="q-scanlines" />
        <div
          aria-hidden
          className="pointer-events-none absolute top-[-320px] left-1/2 h-[700px] w-[1100px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(109,40,255,.28),transparent)]"
        />
        <Header />
        <main>
          <Hero />
          <Modes />
          <Cta />
        </main>
        <ComingSoonToast title={t("title")} body={t("body")} />
      </div>
    </MotionProvider>
  );
}
