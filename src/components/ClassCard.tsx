import React from "react";
import { Link } from "react-router-dom";
import type { GymClass } from "../data/classes";
import { useSettings } from "../contexts/SettingsContext";

const ClassCard: React.FC<{ gymClass: GymClass }> = ({ gymClass }) => {
  const { language, t } = useSettings();

  return (
    <article className="card class-card">
      <img src={gymClass.image} alt={gymClass.name[language]} loading="lazy" />
      <div className="card-body">
        <h3>{gymClass.name[language]}</h3>
        <p>{gymClass.description[language]}</p>
        <span className={`intensity-badge intensity-${gymClass.intensity}`}>
          {t.intensity[gymClass.intensity]}
        </span>
        <div className="class-meta" style={{ marginTop: "0.6rem" }}>
          <span>{gymClass.category[language]}</span>
          <span>{gymClass.duration} {t.classes.minutes}</span>
        </div>
        <p style={{ marginTop: "1rem" }}>
          <Link to={`/clases/${gymClass.id}`} className="btn btn-outline">{t.classes.viewMore}</Link>
        </p>
      </div>
    </article>
  );
};

export default ClassCard;
