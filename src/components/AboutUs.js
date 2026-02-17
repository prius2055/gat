// import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Linkedin, Mail, Award, Users2, Target } from "lucide-react";
import "./AboutUs.css";
import { Link } from "react-router-dom";

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Paul Belvis",
      role: "Global Campaign Convener",
      image: "https://i.postimg.cc/X7vqqpnd/paul.png",
      bio: "A seasoned political strategist with over 25 years of experience in grassroots mobilization and campaign management across Nigeria.",
      linkedin: "#",
      email: "adewale.ogunlesi@example.com",
    },
    {
      name: "Mrs. Funmilayo Adeyemi",
      role: "Diaspora Engagement Lead",
      image:
        "https://images.unsplash.com/photo-1746104718762-fb421954cc1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWdlcmlhbiUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwMzU1OTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "International relations specialist coordinating efforts across 45+ countries, connecting diaspora communities with the campaign's vision.",
      linkedin: "#",
      email: "aisha.mohammed@example.com",
    },
    {
      name: "Barr. Aisha Bello Mohammed",
      role: "Legal Advisor & Compliance",
      image:
        "https://images.unsplash.com/photo-1642929295388-81948818c28f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Senior legal practitioner specializing in electoral law and constitutional matters, ensuring campaign compliance with Nigerian electoral regulations.",
      linkedin: "#",
      email: "funmilayo.adeyemi@example.com",
    },
    {
      name: "Barr. Chinedu Eze",
      role: "Communications Director",
      image:
        "https://images.unsplash.com/photo-1624234505035-e72442ce1f4d?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Award-winning media strategist and public relations expert with extensive experience in political communications and digital media campaigns.",
      linkedin: "#",
      email: "chinedu.eze@example.com",
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
                  <p className="team-bio">{member.bio}</p>

                  {/* Social Links */}
                  <div className="team-social">
                    <a
                      href={member.linkedin}
                      className="social-link"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="social-icon" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="social-link"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="social-icon" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join the Team CTA */}
        <div className="cta-section">
          <h3 className="cta-title">Join Our Team</h3>
          <p className="cta-description">
            We're always looking for passionate, dedicated individuals to join
            our campaign. Whether you're interested in volunteering,
            coordinating events, or taking on a leadership role, we want to hear
            from you.
          </p>
          <div className="cta-buttons">
            <Link to="/register" className="cta-button cta-button-primary">
              Join Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
