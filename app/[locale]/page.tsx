import { getMessages, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { LandingPage, type LandingCopy } from "@/components/LandingPage";
import type { HeroWindowCopy } from "@/components/HeroWindow";
import { ComingSoonToast } from "@/components/ComingSoonToast";
import { MotionProvider } from "@/components/MotionProvider";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const messages = await getMessages();
  const landingCopy = messages.landing as unknown as LandingCopy;
  const heroWindowCopy = messages.heroWindow as unknown as HeroWindowCopy;
  const toast = messages.toast as unknown as { title: string; body: string };

  return (
    <MotionProvider>
      <LandingPage locale={locale as Locale} copy={landingCopy} heroWindow={heroWindowCopy} />
      <ComingSoonToast title={toast.title} body={toast.body} />
    </MotionProvider>
  );
}
