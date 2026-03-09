// Custom hook for accessing the theme context.
"use client";

import { useContext } from "react";
import { ThemeContext, type ThemeContextValue } from "@/context/ThemeContext";

/**
 * Provides access to the current theme and the toggle function.
 *
 * @returns The theme context value containing `theme` and `toggleTheme`.
 *
 * @example
 * ```tsx
 * const { theme, toggleTheme } = useTheme();
 * ```
 */
export const useTheme = (): ThemeContextValue => {
  return useContext(ThemeContext);
};
