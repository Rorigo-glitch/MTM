import React from "react";
import { faqs } from "../data/gymInfo";
import { useSettings } from "../contexts/SettingsContext";
import { FAQItem } from "../components/UiBits";

const Faq: React.FC = () => {
  const { t } = useSettings();

  return (
    <section className="section container">
      <span className="eyebrow">{t.nav.faq}</span>
      <h1>{t.faq.title}</h1>
      <p style={{ maxWidth: "700px" }}>{t.faq.intro}</p>
      <div style={{ maxWidth: "720px", marginTop: "2rem" }}>
        {faqs.map((f, i) => (
          <FAQItem key={i} faq={f} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
