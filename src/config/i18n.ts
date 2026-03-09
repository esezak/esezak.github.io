// Internationalization configuration — supported locales and default language.
import { Locale } from "@/types";

/** All supported locales. To add a new language, add an entry here and create the locale folder. */
export const SUPPORTED_LOCALES: Locale[] = [
  { code: "en", label: "English", flagIcon: "/flags/gb.svg" },
  { code: "tr", label: "Türkçe", flagIcon: "/flags/tr.svg" },
];

/** The default locale used on first visit. */
export const DEFAULT_LOCALE = "en";

/** All available i18n namespaces (one JSON file per namespace per locale). */
export const I18N_NAMESPACES = [
  "common",
  "hero",
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "contact",
] as const;

/** Type-safe namespace union. */
export type I18nNamespace = (typeof I18N_NAMESPACES)[number];
