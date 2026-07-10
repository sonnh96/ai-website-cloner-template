import type { HomeContent, Locale } from "@/types/content";
import { vi } from "./vi";
import { en } from "./en";
import { kr } from "./kr";
import { zh } from "./zh";

export const LOCALES: Locale[] = ["vi", "en", "kr", "zh"];

const CONTENT_MAP: Record<Locale, HomeContent> = { vi, en, kr, zh };

export function getHomeContent(locale: Locale): HomeContent {
  return CONTENT_MAP[locale];
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as string[]).includes(value);
}
