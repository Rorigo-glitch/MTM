import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSettings } from "../contexts/SettingsContext";
import SettingsPanel from "./SettingsPanel";

const Header: React.FC = () => {
  const { t } = useSettings();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/clases", label: t.nav.classes },
    { to: "/galeria", label: t.nav.gallery },
    { to: "/entrenadores", label: t.nav.trainers },
    { to: "/planes", label: t.nav.plans },
    { to: "/nosotros", label: t.nav.about },
    { to: "/clima", label: t.nav.weather },
    { to: "/reservas", label: t.nav.booking },
    { to: "/blog", label: t.nav.blog },
    { to: "/preguntas", label: t.nav.faq },
    { to: "/contacto", label: t.nav.contact },
  ];

  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">{t.nav.skipToContent}</a>
      <nav className="navbar">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true" />
          MTM
        </NavLink>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} onClick={() => setOpen(false)} end={link.to === "/"}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-controls">
          <SettingsPanel />
          <button className="nav-toggle" aria-label={t.nav.menuLabel} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
