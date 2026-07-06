import React from "react";
import { trainers } from "../data/gymInfo";
import { useSettings } from "../contexts/SettingsContext";
import { TrainerCard } from "../components/UiBits";

const Trainers: React.FC = () => {
  const { t } = useSettings();

  return (
    <section className="section container">
      <span className="eyebrow">{t.nav.trainers}</span>
      <h1>{t.trainers.title}</h1>
      <p style={{ maxWidth: "700px" }}>{t.trainers.intro}</p>
      <div className="grid grid-4" style={{ marginTop: "2rem" }}>
        {trainers.map((tr) => (
          <TrainerCard key={tr.id} trainer={tr} />
        ))}
      </div>
    </section>
  );
};

export default Trainers;
