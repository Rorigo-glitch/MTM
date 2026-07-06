import React from "react";
import { plans } from "../data/gymInfo";
import { useSettings } from "../contexts/SettingsContext";
import { PlanCard } from "../components/UiBits";

const Plans: React.FC = () => {
  const { t } = useSettings();

  return (
    <section className="section container">
      <span className="eyebrow">{t.nav.plans}</span>
      <h1>{t.plans.title}</h1>
      <p style={{ maxWidth: "700px" }}>{t.plans.intro}</p>
      <div className="grid grid-3" style={{ marginTop: "2.5rem" }}>
        {plans.map((p) => (
          <PlanCard key={p.id} plan={p} />
        ))}
      </div>
    </section>
  );
};

export default Plans;
