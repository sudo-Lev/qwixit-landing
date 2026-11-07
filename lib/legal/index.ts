import type { Locale } from "@/i18n/routing";
import { en } from "./en";
import { pl } from "./pl";
import { uk } from "./uk";
import type { LegalLocale } from "./types";

export const legalCopy: Record<Locale, LegalLocale> = { en, pl, uk };
