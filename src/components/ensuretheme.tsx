// components/EnsureTheme.tsx
"use client";
import { useEffect } from "react";

export default function EnsureTheme(): null {
  useEffect(() => {
    try {
      const t = localStorage.getItem("theme");
      const apply = (theme: "dark" | "light") => {
        if (theme === "dark") {
          document.documentElement.style.setProperty("--background", "#000");
          document.documentElement.style.setProperty("--foreground", "#ededed");
        } else {
          document.documentElement.style.setProperty("--background", "#fff");
          document.documentElement.style.setProperty("--foreground", "#000");
        }
        document.documentElement.setAttribute("data-theme", theme);
      };

      if (!t) {
        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        const system = systemPrefersDark ? "dark" : "light";
        localStorage.setItem("theme", system);
        apply(system);
      } else if (t === "dark" || t === "light") {
        apply(t);
      } else {
        // unexpected value: normalize
        localStorage.setItem("theme", "light");
        apply("light");
      }
    } catch (e) {
      // ignore storage errors
    }
  }, []);

  return null;
}
