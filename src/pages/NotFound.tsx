import React from "react";
import { Link } from "react-router-dom";
import { useSettings } from "../contexts/SettingsContext";

const NotFound: React.FC = () => {
  const { t } = useSettings();
  return (
    <section className="section container" style={{ textAlign: "center" }}>
      <h1>404</h1>
      <p>Página no encontrada / Page not found</p>
      <Link to="/" className="btn">{t.nav.home}</Link>
    </section>
  );
};

export default NotFound;
