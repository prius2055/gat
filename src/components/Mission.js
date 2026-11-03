import { Target, Globe, Lightbulb, Shield } from "lucide-react";
import "./Mission.css";

const PILLARS = [
  { icon: Target, title: "Vision Alignment", text: "Align grassroots efforts with the president's strategic vision for economic growth, infrastructure development, and national prosperity." },
  { icon: Globe, title: "Global Mobilization", text: "Unite Nigerians at home and in the diaspora to build a powerful, coordinated movement supporting progressive policies and reforms, through the re-election of President Tinubu." },
  { icon: Lightbulb, title: "Youth Engagement", text: "Empower young Nigerians through education, technology, and entrepreneurship initiatives that drive innovation and job creation." },
  { icon: Shield, title: "National Unity", text: "Foster inclusivity and bridge divides across regions, ethnicities, and backgrounds to build a stronger, more united Nigeria." },
];

export default function Mission() {
  return (
    <section id="mission" className="mission-section section-pad">
      <div className="container-x">
        <div className="section-head">
          <span className="eyebrow">Our Mission</span>
          <h2 className="section-title">Championing Progress and Unity</h2>
          <p className="section-lead">
            The Global Alliance for Tinubu Campaign is dedicated to mobilizing support for President
            Tinubu's transformative agenda, fostering unity, and promoting sustainable development
            across Nigeria and beyond.
          </p>
        </div>

        <div className="mission-grid">
          {PILLARS.map(({ icon: Icon, title, text }) => (
            <article className="mission-card" key={title}>
              <span className="mission-icon"><Icon size={24} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <figure className="mission-quote">
          <blockquote>
            "Nigeria's future is bright, and together we will build a nation where every citizen has
            the opportunity to thrive and succeed."
          </blockquote>
          <figcaption>— President Bola Ahmed Tinubu</figcaption>
        </figure>
      </div>
    </section>
  );
}
