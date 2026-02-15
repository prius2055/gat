import { ArrowRight, Users, Heart, TrendingUp } from "lucide-react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-content">
            <div className="hero-badge-wrapper">
              <span className="hero-badge">United for Progress</span>
            </div>

            <h1 className="hero-title">
              Global Alliance{" "}
              <span className="hero-title-accent">for Tinubu</span> Campaign
            </h1>

            <p className="hero-description">
              Together, we stand united in support of President Bola Ahmed
              Tinubu's vision for a prosperous, inclusive, and progressive
              Nigeria. Join thousands of supporters worldwide in championing
              transformation and sustainable development.
            </p>

            <div className="hero-buttons">
              <button className="hero-button hero-button-primary">
                Join the Movement
                <ArrowRight className="button-icon" />
              </button>
              <button className="hero-button hero-button-secondary">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-header">
                  <Users className="stat-icon" />
                  <span className="stat-number">50K+</span>
                </div>
                <p className="stat-label">Active Members</p>
              </div>
              <div className="stat-item">
                <div className="stat-header">
                  <Heart className="stat-icon" />
                  <span className="stat-number">36</span>
                </div>
                <p className="stat-label">States Covered</p>
              </div>
              <div className="stat-item">
                <div className="stat-header">
                  <TrendingUp className="stat-icon" />
                  <span className="stat-number">200+</span>
                </div>
                <p className="stat-label">Global Chapters</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hero-image-section">
            <div className="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1624383045192-cf512eb9d78c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWdlcmlhbiUyMHByZXNpZGVudCUyMGxlYWRlcnNoaXB8ZW58MXx8fHwxNzcwMzA4NTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Leadership"
                className="hero-image"
              />
              <div className="hero-image-overlay"></div>
            </div>

            {/* Floating Card */}
            <div className="hero-floating-card">
              <div className="floating-card-content">
                <div className="floating-card-icon">
                  <Heart className="card-icon" />
                </div>
                <div>
                  <p className="floating-card-title">United in Purpose</p>
                  <p className="floating-card-subtitle">
                    Building a better Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
