import React, { useMemo, useState } from "react";
import { classes } from "../data/classes";
import { useSettings } from "../contexts/SettingsContext";
import GalleryLightbox from "../components/GalleryLightbox";

interface Photo {
  src: string;
  title: string;
  category: string;
  tags: string[];
}

const Gallery: React.FC = () => {
  const { language, t } = useSettings();
  const [filter, setFilter] = useState<string>("all");
  const [active, setActive] = useState<Photo | null>(null);

  const photos: Photo[] = useMemo(
    () =>
      classes.flatMap((c) => [
        { src: c.image, title: c.name[language], category: c.category[language], tags: c.tags },
        ...c.gallery.map((src) => ({ src, title: c.name[language], category: c.category[language], tags: c.tags })),
      ]),
    [language]
  );

  const allTags = useMemo(() => Array.from(new Set(classes.flatMap((c) => c.tags))), []);
  const filtered = filter === "all" ? photos : photos.filter((p) => p.tags.includes(filter));

  return (
    <section className="section container">
      <span className="eyebrow">{t.nav.gallery}</span>
      <h1>{t.gallery.title}</h1>
      <p style={{ maxWidth: "700px" }}>{t.gallery.intro}</p>

      <div className="filter-bar">
        <button className={`filter-chip ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>
          {t.gallery.filterAll}
        </button>
        {allTags.map((tag) => (
          <button key={tag} className={`filter-chip ${filter === tag ? "active" : ""}`} onClick={() => setFilter(tag)}>
            {tag}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filtered.map((p, i) => (
          <div
            className="gallery-item"
            key={i}
            role="button"
            tabIndex={0}
            onClick={() => setActive(p)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActive(p);
              }
            }}
          >
            <img src={p.src} alt={p.title} loading="lazy" />
            <div className="gallery-caption">{p.title}</div>
          </div>
        ))}
      </div>

      {active && (
        <GalleryLightbox src={active.src} title={active.title} meta={active.category} onClose={() => setActive(null)} />
      )}
    </section>
  );
};

export default Gallery;
