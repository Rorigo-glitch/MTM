import React, { useEffect } from "react";
import { useSettings } from "../contexts/SettingsContext";

interface Props {
  src: string;
  title: string;
  meta: string;
  onClose: () => void;
}

const GalleryLightbox: React.FC<Props> = ({ src, title, meta, onClose }) => {
  const { t } = useSettings();
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <button className="lightbox-close" onClick={onClose} aria-label={t.gallery.close}>×</button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={title} />
        <div className="lightbox-info">
          <h3>{title}</h3>
          <p>{meta}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryLightbox;
