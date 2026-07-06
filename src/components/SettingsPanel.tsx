import React from "react";
import { useSettings } from "../contexts/SettingsContext";
import type { ThemeName, FontSize } from "../contexts/SettingsContext";
import type { Language } from "../data/translations";

const SettingsPanel: React.FC = () => {
  const { language, setLanguage, theme, setTheme, fontSize, setFontSize, t } = useSettings();

  return (
    <div className="settings-panel" role="group" aria-label={t.settings.language}>
      <select aria-label={t.settings.language} value={language} onChange={(e) => setLanguage(e.target.value as Language)}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>

      <select aria-label={t.settings.theme} value={theme} onChange={(e) => setTheme(e.target.value as ThemeName)}>
        <option value="fuerza">{t.settings.themeFuerza}</option>
        <option value="amanecer">{t.settings.themeAmanecer}</option>
        <option value="oceano">{t.settings.themeOceano}</option>
      </select>

      <select aria-label={t.settings.fontSize} value={fontSize} onChange={(e) => setFontSize(e.target.value as FontSize)}>
        <option value="small">{t.settings.small}</option>
        <option value="medium">{t.settings.medium}</option>
        <option value="normal">{t.settings.normal}</option>
        <option value="large">{t.settings.large}</option>
        <option value="extraLarge">{t.settings.extraLarge}</option>
      </select>
    </div>
  );
};

export default SettingsPanel;
