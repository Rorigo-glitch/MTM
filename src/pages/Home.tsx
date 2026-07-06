import React from "react";
import Banner from "../components/Banner";
import ClassCard from "../components/ClassCard";
import { classes } from "../data/classes";
import { useSettings } from "../contexts/SettingsContext";
import { StatBox, TestimonialCard } from "../components/UiBits";

const testimonials = [
  { quote: "Bajé 8 kilos en 4 meses gracias a Cross Training y el seguimiento de los coaches.", name: "Fernanda Ríos", role: "Socia desde 2023" },
  { quote: "El plan de nutrición del plan Elite cambió por completo mi relación con la comida.", name: "Ariel Mendoza", role: "Socio Elite" },
  { quote: "Las clases de yoga son el mejor cierre de semana después del cross training.", name: "Lucía Paredes", role: "Socia desde 2022" },
];

const Home: React.FC = () => {
  const { t } = useSettings();
  const featured = classes.slice(0, 6);

  return (
    <>
      <Banner />

      <section className="section container">
        <span className="eyebrow">MTM Training Club</span>
        <h2>{t.home.introTitle}</h2>
        <p style={{ maxWidth: "760px" }}>{t.home.introText}</p>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>{t.home.statsTitle}</h2>
          <div className="grid grid-4" style={{ marginTop: "1.5rem" }}>
            <StatBox number="30+" label={t.home.stat1} />
            <StatBox number="10" label={t.home.stat2} />
            <StatBox number="600+" label={t.home.stat3} />
            <StatBox number="8" label={t.home.stat4} />
          </div>
        </div>
      </section>

      <section className="section container">
        <h2>{t.home.featuredTitle}</h2>
        <div className="grid grid-3" style={{ marginTop: "1.5rem" }}>
          {featured.map((c) => (
            <ClassCard key={c.id} gymClass={c} />
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>{t.home.testimonialsTitle}</h2>
          <div className="grid grid-3" style={{ marginTop: "1.5rem" }}>
            {testimonials.map((tm) => (
              <TestimonialCard key={tm.name} {...tm} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
