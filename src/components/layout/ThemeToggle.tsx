// ThemeToggle — sun/moon icon button that toggles dark and light themes.
"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "@/hooks/useTheme";

/**
 * Renders a toggle button with a sun (dark mode) or moon (light mode) icon.
 * Clicking it switches the active theme.
 *
 * @returns A themed icon button.
 */
export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </button>
  );
};
