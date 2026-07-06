import React from "react";
import { useSettings } from "../contexts/SettingsContext";
import ContactForm from "../components/ContactForm";
import MapView from "../components/MapView";

const Contact: React.FC = () => {
  const { t } = useSettings();

  return (
    <section className="section container">
      <span className="eyebrow">{t.nav.contact}</span>
      <h1>{t.contact.title}</h1>
      <p style={{ maxWidth: "700px" }}>{t.contact.intro}</p>

      <div className="detail-layout" style={{ marginTop: "2rem" }}>
        <div>
          <ContactForm />
        </div>
        <aside className="info-box">
          <h3>{t.contact.officeTitle}</h3>
          <dl>
            <dt>Address</dt>
            <dd>{t.contact.address}</dd>
            <dt>Tel.</dt>
            <dd>{t.contact.phone}</dd>
            <dt>Email</dt>
            <dd>{t.contact.email}</dd>
            <dt>Hours</dt>
            <dd>{t.contact.hours}</dd>
          </dl>
          <div style={{ marginTop: "1rem" }}>
            <MapView markers={[{ id: "mtm", lat: -19.5836, lng: -65.7531, label: "MTM Training Club" }]} zoom={14} />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
