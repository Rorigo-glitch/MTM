import React from "react";
import { useSettings } from "../contexts/SettingsContext";
import MapView from "../components/MapView";

const About: React.FC = () => {
  const { t } = useSettings();

  return (
    <section className="section container">
      <span className="eyebrow">{t.nav.about}</span>
      <h1>{t.about.title}</h1>
      <p style={{ maxWidth: "760px" }}>{t.about.intro}</p>

      <div className="grid grid-2" style={{ marginTop: "2rem" }}>
        <div className="card">
          <div className="card-body">
            <h3>{t.about.missionTitle}</h3>
            <p>{t.about.missionText}</p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h3>{t.about.visionTitle}</h3>
            <p>{t.about.visionText}</p>
          </div>
        </div>
      </div>

      <h2 style={{ marginTop: "3rem" }}>{t.about.mapTitle}</h2>
      <p>{t.contact.address}</p>
      <MapView markers={[{ id: "mtm", lat: -19.5836, lng: -65.7531, label: "MTM Training Club" }]} zoom={15} />
    </section>
  );
};

export default About;
