import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Pin the workspace root (a stray lockfile higher up confuses inference).
  outputFileTracingRoot: process.cwd(),
};

export default withNextIntl(nextConfig);
