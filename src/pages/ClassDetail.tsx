import React from "react";
import { Link, useParams } from "react-router-dom";
import { classes } from "../data/classes";
import { useSettings } from "../contexts/SettingsContext";

const ClassDetail: React.FC = () => {
  const { id } = useParams();
  const { language, t } = useSettings();
  const gymClass = classes.find((c) => c.id === id);

  if (!gymClass) {
    return (
      <section className="section container">
        <h1>404</h1>
        <p><Link to="/clases">{t.classes.backToList}</Link></p>
      </section>
    );
  }

  return (
    <section className="section container">
      <p><Link to="/clases">← {t.classes.backToList}</Link></p>
      <div className="detail-hero" style={{ margin: "1rem 0 2rem" }}>
        <img src={gymClass.image} alt={gymClass.name[language]} />
      </div>

      <div className="detail-layout">
        <div>
          <span className="eyebrow">{gymClass.category[language]}</span>
          <h1>{gymClass.name[language]}</h1>
          <p>{gymClass.longDescription[language]}</p>

          <h3>{t.gallery.title}</h3>
          <div className="grid grid-2">
            {gymClass.gallery.map((src, i) => (
              <img key={i} src={src} alt={`${gymClass.name[language]} ${i + 1}`} style={{ borderRadius: "3px" }} />
            ))}
          </div>
        </div>

        <aside className="info-box">
          <dl>
            <dt>{t.classes.duration}</dt>
            <dd>{gymClass.duration} {t.classes.minutes}</dd>
            <dt>{t.classes.intensity}</dt>
            <dd>{t.intensity[gymClass.intensity]}</dd>
          </dl>

          <h4 style={{ marginTop: "1.2rem" }}>{t.classes.scheduleTitle}</h4>
          <ul className="schedule-list">
            {gymClass.schedule.map((s, i) => (
              <li key={i}>
                <span>{s.day[language]}</span>
                <span>{s.time}</span>
              </li>
            ))}
          </ul>

          <Link to="/reservas" className="btn" style={{ marginTop: "1.2rem", width: "100%", justifyContent: "center" }}>
            {t.nav.booking}
          </Link>
        </aside>
      </div>
    </section>
  );
};

export default ClassDetail;
