import { ArrowRight, Users, Heart, TrendingUp, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import "./Hero.css";

const STATS = [
  { icon: Users, value: "50K+", label: "Active Members" },
  { icon: Globe, value: "36", label: "States Covered" },
  { icon: TrendingUp, value: "200+", label: "Global Chapters" },
];

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">United for Progress</span>

          <h1 className="hero-title">
            Global Alliance <span className="hero-title-accent">for Tinubu</span> Campaign
          </h1>

          <p className="hero-description">
            Together, we stand united in support of President Bola Ahmed Tinubu's vision for a
            prosperous, inclusive, and progressive Nigeria. Join thousands of supporters worldwide
            in championing transformation and sustainable development.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="btn btn-primary">
              Join the Movement <ArrowRight className="btn-icon" />
            </Link>
            <button className="btn btn-outline" onClick={() => scrollToSection("about")}>
              Learn More
            </button>
          </div>

          <dl className="hero-stats">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div className="hero-stat" key={label}>
                <Icon className="hero-stat-icon" aria-hidden="true" />
                <dt className="hero-stat-number">{value}</dt>
                <dd className="hero-stat-label">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-image-section">
          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1624383045192-cf512eb9d78c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWdlcmlhbiUyMHByZXNpZGVudCUyMGxlYWRlcnNoaXB8ZW58MXx8fHwxNzcwMzA4NTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Nigerian leadership"
              className="hero-image"
              loading="eager"
            />
          </div>
          <div className="hero-floating-card">
            <span className="hero-floating-icon"><Heart size={20} /></span>
            <div>
              <p className="hero-floating-title">United in Purpose</p>
              <p className="hero-floating-subtitle">Building a better Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
