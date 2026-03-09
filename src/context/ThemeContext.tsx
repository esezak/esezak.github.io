// Theme context provider — manages dark/light theme and persists selection.
"use client";

import {
  createContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

/** Supported theme values. */
export type Theme = "dark" | "light";

/** Shape of the theme context value. */
export interface ThemeContextValue {
  /** The current active theme. */
  theme: Theme;
  /** Toggle between dark and light themes. */
  toggleTheme: () => void;
}

/** React context for the theme. */
export const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
});

/** Storage key used to persist the theme preference. */
const THEME_STORAGE_KEY = "cv-site-theme";

/** Props for the ThemeProvider component. */
interface ThemeProviderProps {
  /** Child components to render inside the provider. */
  children: ReactNode;
}

/**
 * Provides theme context to the component tree.
 * Reads OS preference on first load, persists selection in localStorage,
 * and sets the `data-theme` attribute on `<html>`.
 *
 * @param props - Component props.
 * @returns The provider wrapping its children.
 */
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>("dark");

  /** Read stored or OS theme preference on mount. */
  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    if (stored === "dark" || stored === "light") {
      setTheme(stored);
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light");
    }
  }, []);

  /** Apply the data-theme attribute whenever the theme changes. */
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  /** Toggle between dark and light and persist the choice. */
  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem(THEME_STORAGE_KEY, next);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
