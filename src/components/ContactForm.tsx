import React, { useState } from "react";
import { useSettings } from "../contexts/SettingsContext";

const ContactForm: React.FC = () => {
  const { t } = useSettings();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">{t.contact.nameLabel}</label>
          <input id="name" name="name" required value={form.name} onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="email">{t.contact.emailLabel}</label>
          <input id="email" type="email" name="email" required value={form.email} onChange={handleChange} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="subject">{t.contact.subjectLabel}</label>
        <input id="subject" name="subject" required value={form.subject} onChange={handleChange} />
      </div>
      <div className="field">
        <label htmlFor="message">{t.contact.messageLabel}</label>
        <textarea id="message" name="message" required value={form.message} onChange={handleChange} />
      </div>
      <button type="submit" className="btn">{t.contact.submit}</button>
      {submitted && <p className="alert-success">{t.contact.successMessage}</p>}
    </form>
  );
};

export default ContactForm;
