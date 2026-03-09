// Header — sticky navigation bar with site name, nav links, language switcher, and theme toggle.
"use client";

import { useState, useCallback } from "react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { NAV_ITEMS } from "@/config/navigation";
import { useTranslation } from "@/hooks/useTranslation";

/**
 * Renders the fixed header with desktop navigation, mobile hamburger menu,
 * language switcher, and theme toggle.
 *
 * @returns The header element.
 */
export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation("common");

  /** Smooth-scroll to a section and close the mobile menu. */
  const scrollToSection = useCallback(
    (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setMobileOpen(false);
    },
    []
  );

  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo / site name */}
        <button
          className="header-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          Ege<span className="accent-dot">.</span>
        </button>

        {/* Desktop nav */}
        <nav className="nav-desktop" aria-label="Main navigation">
          <div className="nav-links">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.sectionId}
                className="nav-link"
                onClick={() => scrollToSection(item.sectionId)}
              >
                {t(item.labelKey)}
              </button>
            ))}
          </div>
          <div className="nav-actions">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile actions + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div className="nav-actions" style={{ display: "none" }}>
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
          <button
            className={`nav-mobile-toggle ${mobileOpen ? "active" : ""}`}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div className={`nav-mobile-overlay ${mobileOpen ? "open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.sectionId}
            className="nav-mobile-link"
            onClick={() => scrollToSection(item.sectionId)}
          >
            {t(item.labelKey)}
          </button>
        ))}
        <div className="nav-mobile-actions">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
