import React from "react";
import { useSettings } from "../contexts/SettingsContext";

const posts = [
  {
    title: { es: "5 errores comunes al empezar en el gimnasio", en: "5 common mistakes when starting at the gym" },
    excerpt: {
      es: "Evita lesiones y mejora tus resultados desde la primera semana con estos consejos básicos.",
      en: "Avoid injuries and improve your results from the first week with these basic tips.",
    },
    date: "2026-06-02",
    img: "https://picsum.photos/seed/mtm-blog-errores/700/450",
  },
  {
    title: { es: "¿Cardio o pesas primero? La ciencia detrás del orden", en: "Cardio or weights first? The science behind the order" },
    excerpt: {
      es: "Qué dice la evidencia sobre el orden ideal de tu rutina según tu objetivo principal.",
      en: "What the evidence says about the ideal order of your routine based on your main goal.",
    },
    date: "2026-05-14",
    img: "https://picsum.photos/seed/mtm-blog-cardio/700/450",
  },
  {
    title: { es: "Recuperación activa: por qué descansar también es entrenar", en: "Active recovery: why resting is also training" },
    excerpt: {
      es: "La importancia del sueño, la movilidad y los días de descarga en tu progreso físico.",
      en: "The importance of sleep, mobility, and deload days in your physical progress.",
    },
    date: "2026-04-20",
    img: "https://picsum.photos/seed/mtm-blog-recuperacion/700/450",
  },
];

const Blog: React.FC = () => {
  const { language, t } = useSettings();

  return (
    <section className="section container">
      <span className="eyebrow">{t.nav.blog}</span>
      <h1>{t.nav.blog}</h1>
      <div className="grid grid-3" style={{ marginTop: "2rem" }}>
        {posts.map((p) => (
          <article className="card blog-card" key={p.date}>
            <img src={p.img} alt={p.title[language]} loading="lazy" />
            <div className="card-body">
              <p className="blog-meta">{p.date}</p>
              <h3>{p.title[language]}</h3>
              <p>{p.excerpt[language]}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
