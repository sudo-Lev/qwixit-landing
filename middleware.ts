import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Everything except API/internals and files with an extension (assets, icons, robots, sitemap).
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
