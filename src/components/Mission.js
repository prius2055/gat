import { Target, Globe, Lightbulb, Shield } from "lucide-react";

import "./Mission.css";

const Mission = () => {
  return (
    <section id="mission" className="mission-section">
      <div className="mission-container">
        {/* Header */}
        <div className="mission-header">
          <span className="mission-tag">Our Mission</span>

          <h2 className="mission-title">Championing Progress and Unity</h2>

          <p className="mission-subtitle">
            The Global Alliance for Tinubu Campaign is dedicated to mobilizing
            support for President Tinubu's transformative agenda, fostering
            unity, and promoting sustainable development across Nigeria and
            beyond.
          </p>
        </div>

        {/* Cards */}
        <div className="mission-grid">
          <div className="mission-card">
            <div className="mission-icon">
              <Target size={26} />
            </div>
            <h3>Vision Alignment</h3>
            <p>
              Align grassroots efforts with the president's strategic vision for
              economic growth, infrastructure development, and national
              prosperity.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">
              <Globe size={26} />
            </div>
            <h3>Global Mobilization</h3>
            <p>
              Unite Nigerians at home and in the diaspora to build a powerful,
              coordinated movement supporting progressive policies and reforms,
              through the re-election of President Tinubu.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">
              <Lightbulb size={26} />
            </div>
            <h3>Youth Engagement</h3>
            <p>
              Empower young Nigerians through education, technology, and
              entrepreneurship initiatives that drive innovation and job
              creation.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">
              <Shield size={26} />
            </div>
            <h3>National Unity</h3>
            <p>
              Foster inclusivity and bridge divides across regions, ethnicities,
              and backgrounds to build a stronger, more united Nigeria.
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="mission-quote">
          <blockquote>
            "Nigeria's future is bright, and together we will build a nation
            where every citizen has the opportunity to thrive and succeed."
          </blockquote>
          <p>— President Bola Ahmed Tinubu</p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
