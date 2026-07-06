import React, { useState } from "react";
import { classes } from "../data/classes";
import { plans } from "../data/gymInfo";
import { useSettings } from "../contexts/SettingsContext";

const ScheduleForm: React.FC = () => {
  const { t, language } = useSettings();
  const [selectedClassId, setSelectedClassId] = useState(classes[0].id);
  const [schedule, setSchedule] = useState<string[]>([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "", plan: plans[0].id, notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const addClass = () => {
    if (!schedule.includes(selectedClassId)) {
      setSchedule([...schedule, selectedClassId]);
    }
  };

  const removeClass = (id: string) => {
    setSchedule(schedule.filter((c) => c !== id));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const className = (id: string) => {
    const c = classes.find((cl) => cl.id === id);
    return c ? c.name[language] : id;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">{t.booking.nameLabel}</label>
          <input id="name" name="name" required value={form.name} onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="email">{t.booking.emailLabel}</label>
          <input id="email" type="email" name="email" required value={form.email} onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="phone">{t.booking.phoneLabel}</label>
          <input id="phone" name="phone" value={form.phone} onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="plan">{t.booking.planLabel}</label>
          <select id="plan" name="plan" value={form.plan} onChange={handleChange}>
            {plans.map((p) => (
              <option key={p.id} value={p.id}>{p.name[language]}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="class">{t.booking.classLabel}</label>
        <div style={{ display: "flex", gap: "0.7rem", flexWrap: "wrap" }}>
          <select
            id="class"
            value={selectedClassId}
            onChange={(e) => setSelectedClassId(e.target.value)}
            style={{ flex: 1, minWidth: "200px" }}
          >
            {classes.map((c) => (
              <option key={c.id} value={c.id}>{c.name[language]}</option>
            ))}
          </select>
          <button type="button" className="btn btn-outline" onClick={addClass}>{t.booking.addClass}</button>
        </div>
      </div>

      <div className="field">
        <label>{t.booking.selectedTitle}</label>
        {schedule.length === 0 ? (
          <p>{t.booking.emptyList}</p>
        ) : (
          <ul className="itinerary-list">
            {schedule.map((id) => (
              <li key={id}>
                {className(id)}
                <button type="button" onClick={() => removeClass(id)}>{t.booking.remove}</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="field">
        <label htmlFor="notes">{t.booking.notesLabel}</label>
        <textarea id="notes" name="notes" value={form.notes} onChange={handleChange} />
      </div>

      <button type="submit" className="btn">{t.booking.submit}</button>
      {submitted && <p className="alert-success">{t.booking.successMessage}</p>}
    </form>
  );
};

export default ScheduleForm;
