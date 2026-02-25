// import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Linkedin, Mail, Award, Users2, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Paul from "../img/paul.jpeg";
import Jimoh from "../img/drjimoh.png";

import "./AboutUs.css";

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Bevis Paul Igbinoba",
      role: "Director General",
      role_description: "Global Convener",
      image: Paul,
      bio: "A seasoned political strategist with over 25 years of experience in grassroots mobilization and campaign management across Nigeria.",
    },
    {
      name: " Abubakar Ateiza Jimoh",
      role: "Organising Director",
      role_description: "National Cordinator - Nigeria",
      image: Jimoh,
      bio: "Our Chief strategist, he is an astute Grassroot mobilizer and prolific writer who is passionate about the ideals, vision, and mission of President Tinubu.",
    },
  ];

  const stats = [
    {
      icon: Users2,
      value: "200+",
      label: "Campaign Staff",
      color: "stat-blue",
    },
    {
      icon: Target,
      value: "20+",
      label: "National Coordinators",
      color: "stat-blue",
    },
    {
      icon: Target,
      value: "36",
      label: "State Coordinators",
      color: "stat-green",
    },
    {
      icon: Award,
      value: "15+",
      label: "Years Combined Experience",
      color: "stat-purple",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Section Header */}
        <div className="about-header">
          <span className="about-badge">About Us</span>
          <h2 className="about-title">Meet the Leadership Team</h2>
          <p className="about-description">
            Our dedicated team brings together decades of experience in
            political strategy, grassroots mobilization, and community
            engagement. We are united by our commitment to President Tinubu's
            vision for a better Nigeria.
          </p>
        </div>

        {/* Organization Stats */}
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="stat-card">
                <div className={`stat-icon ${stat.color}`}>
                  <Icon className="icon" />
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="mission-card">
          <div className="mission-content">
            <h3 className="mission-title">Our Commitment</h3>
            <p className="mission-text">
              The Global Alliance for Tinubu Campaign was founded on the
              principles of unity, transparency, and unwavering dedication to
              Nigeria's progress. We work tirelessly to mobilize support,
              coordinate grassroots efforts, and amplify the voices of Nigerians
              who believe in President Tinubu's transformative agenda.
            </p>
            <p className="mission-text">
              From local communities to the diaspora, we are building a
              nationwide movement that transcends regional, ethnic, and
              religious boundaries—because Nigeria's success is our collective
              responsibility.
            </p>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="team-section">
          <h3 className="team-section-title">Leadership Team</h3>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                {/* Photo */}
                <div className="team-photo-wrapper">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-photo"
                  />
                  <div className="team-photo-overlay"></div>
                </div>

                {/* Content */}
                <div className="team-content">
                  <h4 className="team-name">{member.name}</h4>
                  <p className="team-role">{member.role}</p>
                  <p className="team-role-description">
                    ({member.role_description})
                  </p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join the Team CTA */}
        <div className="cta-section">
          <h3 className="cta-title"> Support Our Mission</h3>
          <p className="cta-description">
            If you believe in the growth, unity, and progress of our nation,
            your support can help strengthen grassroots engagement and community
            coordination efforts. Every contribution, no matter the size, makes
            a meaningful difference. Kindly consider making a donation today.
          </p>

          <div className="cta-buttons">
            <Link to="/donate" className="cta-button cta-button-primary">
              Support this campaign
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
