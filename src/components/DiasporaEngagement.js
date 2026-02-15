// import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Globe,
  Briefcase,
  Award,
  UserCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import "./DiasporaEngagement.css";

export default function DiasporaEngagement() {
  const benefits = [
    {
      icon: UserCheck,
      title: "Policy Engagement & Dialogue",
      description:
        "Participate in structured forums, town halls, and strategy sessions where members can share ideas, policy feedback, and recommendations that support national development.",
      color: "benefit-blue",
    },
    {
      icon: Award,
      title: "Leadership & Volunteer Opportunities",
      description:
        "Serve in committees, regional teams, and project groups that contribute directly to campaign initiatives and community impact programs",

      color: "benefit-green",
    },
    {
      icon: Briefcase,
      title: "Professional Networking",
      description:
        "Connect with like-minded professionals, entrepreneurs, and diaspora leaders to collaborate on projects that promote economic growth and innovation across Nigeria.",
      color: "benefit-purple",
    },
    {
      icon: UserCheck,
      title: "Capacity Building & Training",
      description:
        "Access webinars, workshops, and mentorship programs focused on leadership, governance, entrepreneurship, and civic engagement.",
      color: "benefit-blue",
    },

    {
      icon: Award,
      title: "Events & Special Invitations",
      description:
        "Receive priority invitations to conferences, town halls, fundraising dinners, and official campaign events.",

      color: "benefit-green",
    },
    {
      icon: Briefcase,
      title: "Recognition & Visibility",
      description:
        "Active members may be recognized for their contributions and impact within the movement and community initiatives.",
      color: "benefit-purple",
    },
  ];

  const countries = [
    "United States",
    "United Kingdom",
    "Canada",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Netherlands",
    "Belgium",
    "Switzerland",
    "South Africa",
    "Ghana",
    "Kenya",
    "UAE",
    "Saudi Arabia",
  ];

  return (
    <section id="diaspora" className="diaspora-section">
      <div className="diaspora-container">
        {/* Section Header */}
        <div className="diaspora-header">
          <div className="diaspora-badge">
            <Globe className="badge-icon" />
            <span className="badge-text">Nigerian Diaspora</span>
          </div>
          <h2 className="diaspora-title">Join the Movement from Abroad</h2>
          <p className="diaspora-description">
            Nigerians in the diaspora are integral to our nation's
            transformation. As a member of the Global Alliance for Tinubu
            Campaign, you gain exclusive benefits and opportunities to
            contribute to Nigeria's progress.
          </p>
        </div>

        {/* Hero Image */}
        <div className="diaspora-hero-image">
          <img
            src="https://images.unsplash.com/photo-1672380135241-c024f7fbfa13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBwYXJ0bmVyc2hpcCUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NzA0MzgyMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Global partnership"
            className="hero-image"
          />
        </div>

        {/* Benefits Grid */}
        <div className="benefits-section">
          <h3 className="benefits-title">Exclusive Benefits for Members</h3>
          <p className="benefits-subtitle">
            By joining our campaign, you unlock unprecedented opportunities to
            participate in Nigeria's governance and economic transformation.
          </p>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="benefit-card">
                  <div className={`benefit-icon ${benefit.color}`}>
                    <Icon className="icon" />
                  </div>
                  <h4 className="benefit-card-title">{benefit.title}</h4>
                  <p className="benefit-card-description">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Join Section */}
        <div className="why-join-section">
          <div className="why-join-grid">
            <div className="why-join-content">
              <h3 className="why-join-title">
                Why Diaspora Participation Matters
              </h3>
              <p className="why-join-text">
                The Nigerian diaspora represents a powerful force for national
                development. Your expertise, resources, and global perspective
                are invaluable assets in building the Nigeria of our dreams.
              </p>
              <ul className="why-join-list">
                <li className="list-item">
                  <CheckCircle2 className="list-icon" />
                  <span className="list-text">
                    Contribute your international expertise to national projects
                  </span>
                </li>
                <li className="list-item">
                  <CheckCircle2 className="list-icon" />
                  <span className="list-text">
                    Bridge connections between Nigeria and global markets
                  </span>
                </li>
                <li className="list-item">
                  <CheckCircle2 className="list-icon" />
                  <span className="list-text">
                    Participate in policy discussions that shape Nigeria's
                    future
                  </span>
                </li>
                <li className="list-item">
                  <CheckCircle2 className="list-icon" />
                  <span className="list-text">
                    Access exclusive networking opportunities with government
                    officials
                  </span>
                </li>
              </ul>
            </div>
            <div className="why-join-image">
              <img
                src="https://images.unsplash.com/photo-1726276262265-b615e46cab5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWdlcmlhbiUyMGRpYXNwb3JhJTIwY29tbXVuaXR5fGVufDF8fHx8MTc3MDQzODIzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Nigerian diaspora community"
                className="why-join-photo"
              />
            </div>
          </div>
        </div>

        {/* Global Reach */}
        <div className="global-reach-section">
          <div className="global-reach-header">
            <h3 className="global-reach-title">Our Global Reach</h3>
            <p className="global-reach-description">
              We have active diaspora members and coordinators in over 45
              countries worldwide, creating a truly global movement for
              Nigeria's development.
            </p>
          </div>

          <div className="countries-grid">
            {countries.map((country, index) => (
              <div key={index} className="country-card">
                <Globe className="country-icon" />
                <p className="country-name">{country}</p>
              </div>
            ))}
          </div>

          <div className="global-reach-footer">
            <p className="footer-text">
              ...and many more countries across Africa, Europe, Asia, and the
              Americas
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="diaspora-cta">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Make an Impact?</h3>
            <p className="cta-description">
              Join thousands of diaspora Nigerians who are actively
              participating in Nigeria's transformation. Register today and
              unlock your benefits.
            </p>
            <div className="cta-buttons">
              <button className="cta-button cta-button-primary">
                Register as Diaspora Member
                <ArrowRight className="button-icon" />
              </button>
              <button className="cta-button cta-button-secondary">
                Contact Diaspora Coordinator
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
