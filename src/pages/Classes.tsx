import React from "react";
import ClassCard from "../components/ClassCard";
import { classes } from "../data/classes";
import { useSettings } from "../contexts/SettingsContext";

const Classes: React.FC = () => {
  const { t } = useSettings();

  return (
    <section className="section container">
      <span className="eyebrow">{t.nav.classes}</span>
      <h1>{t.classes.title}</h1>
      <p style={{ maxWidth: "700px" }}>{t.classes.intro}</p>
      <div className="grid grid-3" style={{ marginTop: "2rem" }}>
        {classes.map((c) => (
          <ClassCard key={c.id} gymClass={c} />
        ))}
      </div>
    </section>
  );
};

export default Classes;
