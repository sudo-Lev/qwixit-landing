import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Unbounded } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "../globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-jetbrains",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-unbounded",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "hotkeygo Advanced",
  robots: { index: false, follow: false },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#F9F8FC",
  colorScheme: "light",
};

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrains.variable} ${unbounded.variable}`}>
      <body>{children}</body>
    </html>
  );
}
