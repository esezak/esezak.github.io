// I18n context provider — manages the active locale and fetches translation JSON files from public/.
"use client";

import {
  createContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { DEFAULT_LOCALE, I18N_NAMESPACES, type I18nNamespace } from "@/config/i18n";

/** Shape of a translations dictionary: namespace → key → value (supports nested objects). */
type TranslationRecord = Record<string, unknown>;

/** Shape of the i18n context value. */
export interface I18nContextValue {
  /** Current locale code (e.g. 'en'). */
  locale: string;
  /** Switch to a different locale by code. */
  setLocale: (code: string) => void;
  /** Loaded translations keyed by namespace. */
  translations: Record<string, TranslationRecord>;
  /** Whether translations are still loading after a locale change. */
  isLoading: boolean;
}

/** React context for i18n. */
export const I18nContext = createContext<I18nContextValue>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  translations: {},
  isLoading: true,
});

/** Storage key used to persist selected locale. */
const LOCALE_STORAGE_KEY = "cv-site-locale";

/**
 * Fetches all namespace JSON files for a given locale from /locales/ in public/.
 * @param localeCode - ISO language code.
 * @returns A record mapping each namespace to its parsed JSON object.
 */
const loadTranslations = async (
  localeCode: string
): Promise<Record<string, TranslationRecord>> => {
  const entries = await Promise.all(
    I18N_NAMESPACES.map(async (ns: I18nNamespace) => {
      try {
        const response = await fetch(`/locales/${localeCode}/${ns}.json`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        return [ns, data] as [string, TranslationRecord];
      } catch {
        console.warn(`Missing translation file: /locales/${localeCode}/${ns}.json`);
        return [ns, {}] as [string, TranslationRecord];
      }
    })
  );
  return Object.fromEntries(entries);
};

/** Props for the I18nProvider component. */
interface I18nProviderProps {
  /** Child components to render inside the provider. */
  children: ReactNode;
}

/**
 * Provides i18n context to the component tree.
 * Fetches translation JSON files for the active locale and persists the selection.
 *
 * @param props - Component props.
 * @returns The provider wrapping its children.
 */
export const I18nProvider = ({ children }: I18nProviderProps) => {
  const [locale, setLocaleState] = useState<string>(DEFAULT_LOCALE);
  const [translations, setTranslations] = useState<Record<string, TranslationRecord>>({});
  const [isLoading, setIsLoading] = useState(true);

  /** Load translations whenever the locale changes. */
  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setIsLoading(true);
      const data = await loadTranslations(locale);
      if (!cancelled) {
        setTranslations(data);
        setIsLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [locale]);

  /** Read persisted locale on mount. */
  useEffect(() => {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored) {
      setLocaleState(stored);
    }
  }, []);

  /** Switch locale and persist the choice. */
  const setLocale = useCallback((code: string) => {
    setLocaleState(code);
    localStorage.setItem(LOCALE_STORAGE_KEY, code);
  }, []);

  return (
    <I18nContext.Provider value={{ locale, setLocale, translations, isLoading }}>
      {children}
    </I18nContext.Provider>
  );
};
