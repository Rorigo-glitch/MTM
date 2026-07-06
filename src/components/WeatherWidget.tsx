import React, { useEffect, useState } from "react";
import { useSettings } from "../contexts/SettingsContext";

interface CityWeather {
  city: string;
  temperature: number | null;
  windSpeed: number | null;
  time: string | null;
}

const CITIES: { city: string; lat: number; lng: number }[] = [
  { city: "Potosí", lat: -19.5836, lng: -65.7531 },
  { city: "Sucre", lat: -19.0433, lng: -65.2593 },
  { city: "La Paz", lat: -16.5, lng: -68.15 },
];

const WeatherWidget: React.FC = () => {
  const { t } = useSettings();
  const [data, setData] = useState<CityWeather[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchAll() {
      const results = await Promise.all(
        CITIES.map(async (c): Promise<CityWeather> => {
          try {
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${c.lat}&longitude=${c.lng}&current_weather=true`;
            const res = await fetch(url);
            if (!res.ok) throw new Error("network error");
            const json = await res.json();
            return {
              city: c.city,
              temperature: json?.current_weather?.temperature ?? null,
              windSpeed: json?.current_weather?.windspeed ?? null,
              time: json?.current_weather?.time ?? null,
            };
          } catch {
            return { city: c.city, temperature: null, windSpeed: null, time: null };
          }
        })
      );
      if (isMounted) {
        if (results.every((r) => r.temperature === null)) {
          setError(true);
        } else {
          setData(results);
        }
        setLoading(false);
      }
    }

    fetchAll();
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <p role="status">{t.weather.loading}</p>;
  if (error) return <p className="alert-error" role="alert">{t.weather.error}</p>;

  return (
    <div className="weather-grid">
      {data.map((c) => (
        <div className="weather-card" key={c.city}>
          <h3>{c.city}</h3>
          <div className="weather-temp">{c.temperature !== null ? `${c.temperature}°C` : "—"}</div>
          <p>{t.weather.windSpeed}: {c.windSpeed !== null ? `${c.windSpeed} km/h` : "—"}</p>
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{t.weather.updated}: {c.time ?? "—"}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherWidget;
