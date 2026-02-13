/**
 * useTheme.ts — Dark/Light mode toggle
 *
 * Defaults to dark (Brown & Creme).
 * Persists preference in memory (no localStorage in artifacts).
 * Toggles .dark class on <html>.
 */

import { useState, useEffect, useCallback } from "react";

export type Theme = "dark" | "light";

export function useTheme(initial: Theme = "dark") {
  const [theme, setTheme] = useState<Theme>(initial);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  // Set initial class on mount
  useEffect(() => {
    if (initial === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, [initial]);

  const toggle = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggle };
}
