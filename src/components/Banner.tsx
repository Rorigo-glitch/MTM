import React from "react";
import { Link } from "react-router-dom";
import { useSettings } from "../contexts/SettingsContext";

const Banner: React.FC = () => {
  const { t } = useSettings();

  return (
    <div className="banner">
      <div className="banner-inner">
        <span className="eyebrow">Potosí · Bolivia</span>
        <h1>{t.banner.title}</h1>
        <p>{t.banner.subtitle}</p>
        <Link to="/clases" className="btn">{t.banner.cta}</Link>
      </div>
      <div className="tally-stripe" style={{ position: "absolute", bottom: 0, left: 0 }} />
    </div>
  );
};

export default Banner;
