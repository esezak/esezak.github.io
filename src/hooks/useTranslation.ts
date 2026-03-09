// Custom hook for accessing translations by namespace.
"use client";

import { useContext, useCallback } from "react";
import { I18nContext } from "@/context/I18nContext";

/**
 * Provides a translation function `t(key)` that resolves dot-notated keys
 * within a given i18n namespace.
 *
 * @param namespace - The i18n namespace to read from (e.g. 'hero', 'common').
 * @returns An object with a `t` function and the current `locale`.
 *
 * @example
 * ```tsx
 * const { t } = useTranslation("hero");
 * return <h1>{t("name")}</h1>;
 * ```
 */
export const useTranslation = (namespace: string) => {
  const { translations, locale, isLoading } = useContext(I18nContext);

  /**
   * Retrieve a translated string by dot-notated key.
   * Falls back to the raw key if no translation is found.
   *
   * @param key - Dot-notated path within the namespace (e.g. 'nav.about').
   * @param replacements - Optional key/value pairs for template interpolation.
   * @returns The translated string, or the raw key if missing.
   */
  const t = useCallback(
    (key: string, replacements?: Record<string, string>): string => {
      const nsData = translations[namespace];
      if (!nsData) return key;

      const parts = key.split(".");
      let result: unknown = nsData;

      for (const part of parts) {
        if (result && typeof result === "object" && part in result) {
          result = (result as Record<string, unknown>)[part];
        } else {
          return key;
        }
      }

      if (typeof result !== "string") return key;

      /* Interpolate {placeholder} tokens. */
      if (replacements) {
        return Object.entries(replacements).reduce(
          (str, [k, v]) => str.replace(`{${k}}`, v),
          result
        );
      }

      return result;
    },
    [translations, namespace]
  );

  return { t, locale, isLoading };
};
