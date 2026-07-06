import React, { useState } from "react";
import { Link } from "react-router-dom";
import type { Trainer, Plan, FAQ } from "../data/gymInfo";
import { useSettings } from "../contexts/SettingsContext";

export const TrainerCard: React.FC<{ trainer: Trainer }> = ({ trainer }) => {
  const { language } = useSettings();
  return (
    <div className="card trainer-card">
      <img src={trainer.image} alt={trainer.name} loading="lazy" />
      <div className="card-body">
        <h3>{trainer.name}</h3>
        <p className="eyebrow">{trainer.specialty[language]}</p>
        <p>{trainer.bio[language]}</p>
      </div>
    </div>
  );
};

export const PlanCard: React.FC<{ plan: Plan }> = ({ plan }) => {
  const { language, t } = useSettings();
  return (
    <div className={`card plan-card ${plan.highlight ? "highlight" : ""}`}>
      {plan.highlight && <span className="plan-badge">{t.plans.mostPopular}</span>}
      <div className="card-body">
        <h3>{plan.name[language]}</h3>
        <div className="plan-price">
          Bs {plan.price} <span>/ {plan.period[language]}</span>
        </div>
        <strong>{t.plans.includesTitle}</strong>
        <ul>
          {plan.features[language].map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <Link to="/reservas" className="btn" style={{ width: "100%", justifyContent: "center" }}>
          {t.plans.cta}
        </Link>
      </div>
    </div>
  );
};

export const FAQItem: React.FC<{ faq: FAQ }> = ({ faq }) => {
  const { language } = useSettings();
  const [openState, setOpenState] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpenState((o) => !o)} aria-expanded={openState}>
        {faq.question[language]}
        <span aria-hidden="true">{openState ? "−" : "+"}</span>
      </button>
      {openState && <p className="faq-answer">{faq.answer[language]}</p>}
    </div>
  );
};

export const TestimonialCard: React.FC<{ quote: string; name: string; role: string }> = ({ quote, name, role }) => (
  <div className="testimonial-card">
    <p>&ldquo;{quote}&rdquo;</p>
    <p className="testimonial-name">{name}</p>
    <p className="testimonial-role">{role}</p>
  </div>
);

export const StatBox: React.FC<{ number: string; label: string }> = ({ number, label }) => (
  <div className="stat-box">
    <div className="stat-number">{number}</div>
    <div className="stat-label">{label}</div>
  </div>
);
