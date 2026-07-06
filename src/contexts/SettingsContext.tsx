import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../data/translations";
import type { Language, TranslationShape } from "../data/translations";

export type ThemeName = "fuerza" | "amanecer" | "oceano";
export type FontSize = "small" | "medium" | "normal" | "large" | "extraLarge";

interface SettingsContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  t: TranslationShape;
}

const SettingsContext = createContext<SettingsContextValue | undefined>(undefined);

const STORAGE_KEY = "mtm-gym-settings";

function loadInitial() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    /* ignore malformed storage */
  }
  return null;
}

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const initial = loadInitial();
  const [language, setLanguage] = useState<Language>(initial?.language ?? "es");
  const [theme, setTheme] = useState<ThemeName>(initial?.theme ?? "fuerza");
  const [fontSize, setFontSize] = useState<FontSize>(initial?.fontSize ?? "normal");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-font-size", fontSize);
    document.documentElement.setAttribute("lang", language);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ language, theme, fontSize }));
    } catch {
      /* storage may be unavailable */
    }
  }, [language, theme, fontSize]);

  const t = useMemo(() => translations[language], [language]);

  const value: SettingsContextValue = { language, setLanguage, theme, setTheme, fontSize, setFontSize, t };

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
};

export function useSettings(): SettingsContextValue {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used within a SettingsProvider");
  return ctx;
}
