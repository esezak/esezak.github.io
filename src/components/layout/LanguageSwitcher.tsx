// LanguageSwitcher — flag icon buttons for switching between supported locales.
"use client";

import { useContext } from "react";
import { I18nContext } from "@/context/I18nContext";
import { SUPPORTED_LOCALES } from "@/config/i18n";

/**
 * Renders a row of flag-icon buttons — one per supported locale.
 * The active locale's button has a highlighted border.
 * Designed to be obvious enough that anyone can understand how to switch languages.
 *
 * @returns A language switcher UI with flag buttons.
 */
export const LanguageSwitcher = () => {
  const { locale, setLocale } = useContext(I18nContext);

  return (
    <div className="language-switcher" role="group" aria-label="Language switcher">
      {SUPPORTED_LOCALES.map((loc) => (
        <button
          key={loc.code}
          className={`language-btn ${locale === loc.code ? "active" : ""}`}
          onClick={() => setLocale(loc.code)}
          aria-label={`Switch language to ${loc.label}`}
          title={loc.label}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={loc.flagIcon} alt={`${loc.label} flag`} width={24} height={16} />
        </button>
      ))}
    </div>
  );
};
