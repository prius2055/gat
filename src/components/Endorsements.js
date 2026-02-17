import { Shield, Award, CheckCircle2, FileCheck } from "lucide-react";
import Certificate from "../img/apc-certificate.jpeg";
import "./Endorsements.css";

export default function Endorsements() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const endorsements = [
    {
      title: "APC National Chairman Recognition",
      authority: "All Progressives Congress (APC)",
      official: "National Chairman",
      description:
        "Official endorsement and certificate of acknowledgement recognizing the Global Alliance for Tinubu Campaign as an authorized grassroots mobilization body supporting President Tinubu's administration.",
      icon: Shield,
      color: "endorsement-blue",
      image: Certificate,
    },
    {
      title: "Presidential Acknowledgement",
      authority: "The Presidency, Federal Republic of Nigeria",
      official: "Office of the President",
      description:
        "Signed certificate of acknowledgement from the Presidency, officially recognizing our campaign's efforts and contributions to national unity, development, and the advancement of presidential initiatives.",
      icon: Award,
      color: "endorsement-green",
      image: "",
    },
  ];

  const credentials = [
    "Officially registered campaign organization",
    "Authorized by the APC National Chairman",
    "Recognized by the Presidential administration",
    "Compliant with Nigerian electoral regulations",
    "Transparent and accountable operations",
    "Endorsed for diaspora engagement activities",
  ];

  return (
    <section id="endorsements" className="endorsements-section">
      <div className="endorsements-container">
        {/* Section Header */}
        <div className="endorsements-header">
          <div className="endorsements-badge">
            <Shield className="badge-icon" />
            <span className="badge-text">Official Recognition</span>
          </div>
          <h2 className="endorsements-title">
            Officially Endorsed & Recognized
          </h2>
          <p className="endorsements-description">
            Our campaign has received official endorsements and certificates of
            acknowledgement from the highest levels of Nigerian political
            leadership, validating our commitment and legitimacy.
          </p>
        </div>

        {/* Trust Badge */}
        <div className="trust-badge">
          <div className="trust-badge-content">
            <div className="trust-icon-wrapper">
              <div className="trust-icon-circle">
                <CheckCircle2 className="trust-icon" />
              </div>
            </div>
            <h3 className="trust-title">
              Verified & Authorized Campaign Organization
            </h3>
            <p className="trust-description">
              Operating with full authorization and recognition from the All
              Progressives Congress National Chairman and the Presidency of the
              Federal Republic of Nigeria.
            </p>
          </div>
        </div>

        {/* Endorsements Grid */}
        <div className="endorsements-grid">
          {endorsements.map((endorsement, index) => {
            const Icon = endorsement.icon;
            return (
              <div key={index} className="endorsement-card">
                {/* Certificate Image */}
                <div className="certificate-image-wrapper">
                  <img
                    src={endorsement.image}
                    alt={endorsement.title}
                    className="certificate-image"
                  />
                  <div className="certificate-overlay"></div>
                  <div className={`certificate-icon ${endorsement.color}`}>
                    <Icon className="icon" />
                  </div>
                </div>

                {/* Content */}
                <div className="endorsement-content">
                  <div className="endorsement-header-info">
                    <h3 className="endorsement-title">{endorsement.title}</h3>
                    <p className="endorsement-authority">
                      {endorsement.authority}
                    </p>
                    <p className="endorsement-official">
                      Signed by: {endorsement.official}
                    </p>
                  </div>
                  <p className="endorsement-description">
                    {endorsement.description}
                  </p>
                  <div className="endorsement-certified">
                    <CheckCircle2 className="certified-icon" />
                    <span>Certified & Authenticated</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Credentials Section */}
        <div className="credentials-section">
          <div className="credentials-content">
            <div className="credentials-header">
              <FileCheck className="credentials-icon" />
              <h3 className="credentials-title">Our Official Credentials</h3>
              <p className="credentials-description">
                As an officially recognized organization, we operate with the
                highest standards of legitimacy, transparency, and
                accountability.
              </p>
            </div>

            <div className="credentials-grid">
              {credentials.map((credential, index) => (
                <div key={index} className="credential-card">
                  <div className="credential-icon-wrapper">
                    <CheckCircle2 className="credential-icon" />
                  </div>
                  <p className="credential-text">{credential}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Verification CTA */}
        <div className="verification-cta">
          <div className="verification-content">
            <h3 className="verification-title">Verify Our Credentials</h3>
            <p className="verification-description">
              Transparency is at the heart of our mission. Our endorsement
              certificates and official documentation are available for
              verification.
            </p>
            <div className="verification-buttons">
              <button
                className="verification-button verification-button-secondary"
                onClick={() => scrollToSection("contact")}
              >
                Contact for Verification
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
