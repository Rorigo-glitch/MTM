import React from "react";
import { useSettings } from "../contexts/SettingsContext";
import ScheduleForm from "../components/ScheduleForm";

const Booking: React.FC = () => {
  const { t } = useSettings();

  return (
    <section className="section container">
      <span className="eyebrow">{t.nav.booking}</span>
      <h1>{t.booking.title}</h1>
      <p style={{ maxWidth: "700px" }}>{t.booking.intro}</p>
      <div style={{ maxWidth: "720px", marginTop: "2rem" }}>
        <ScheduleForm />
      </div>
    </section>
  );
};

export default Booking;
