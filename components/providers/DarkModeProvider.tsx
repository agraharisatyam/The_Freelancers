"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface DarkModeContextType {
  isDark: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within DarkModeProvider");
  }
  return context;
}

export default function DarkModeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("darkMode");
      const prefersDark =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      const shouldBeDark = stored ? stored === "true" : prefersDark;
      setIsDark(shouldBeDark);
      if (shouldBeDark && typeof document !== "undefined") {
        document.documentElement.classList.add("dark");
      }
    } catch (error) {
      // Fallback to light mode if localStorage is not available
      console.warn("Failed to load dark mode preference:", error);
      setIsDark(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newValue = !isDark;
    setIsDark(newValue);
    try {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("darkMode", String(newValue));
      }
      if (typeof document !== "undefined") {
        if (newValue) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    } catch (error) {
      console.warn("Failed to save dark mode preference:", error);
    }
  };

  // Always provide the context, even before mounting
  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

