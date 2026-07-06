import React from "react";
import { Link } from "react-router-dom";
import { useSettings } from "../contexts/SettingsContext";

const Footer: React.FC = () => {
  const { t } = useSettings();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>MTM Training Club</h4>
            <p>{t.footer.about}</p>
          </div>
          <div>
            <h4>{t.footer.linksTitle}</h4>
            <ul>
              <li><Link to="/clases">{t.nav.classes}</Link></li>
              <li><Link to="/planes">{t.nav.plans}</Link></li>
              <li><Link to="/reservas">{t.nav.booking}</Link></li>
              <li><Link to="/preguntas">{t.nav.faq}</Link></li>
            </ul>
          </div>
          <div>
            <h4>{t.footer.contactTitle}</h4>
            <ul>
              <li>{t.contact.address}</li>
              <li>{t.contact.phone}</li>
              <li>{t.contact.email}</li>
            </ul>
          </div>
        </div>
        <div className="tally-stripe thin" />
        <p className="footer-bottom">© {new Date().getFullYear()} MTM Training Club. {t.footer.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;
