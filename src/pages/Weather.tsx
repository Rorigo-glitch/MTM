import React from "react";
import { useSettings } from "../contexts/SettingsContext";
import WeatherWidget from "../components/WeatherWidget";

const Weather: React.FC = () => {
  const { t } = useSettings();

  return (
    <section className="section container">
      <span className="eyebrow">{t.nav.weather}</span>
      <h1>{t.weather.title}</h1>
      <p style={{ maxWidth: "700px" }}>{t.weather.intro}</p>
      <div style={{ marginTop: "2rem" }}>
        <WeatherWidget />
      </div>
      <p style={{ marginTop: "1.5rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
        Fuente: Open-Meteo API (open-meteo.com)
      </p>
    </section>
  );
};

export default Weather;
