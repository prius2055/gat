import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Tshirt from "../img/t-shirt.png";
import Cufflinks from "../img/cufflinks.png";
import Band from "../img/wristband.png";

import {
  Heart,
  Users,
  ShoppingBag,
  Share2,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  MessageCircle,
  UserPlus,
} from "lucide-react";

import "./Support.css";

export default function Support() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const images = [
    { src: Tshirt, alt: "t-shirt for sale" },
    { src: Cufflinks, alt: "Cufflinks for sale" },
    { src: Band, alt: "Wrist band for sale" },
  ];

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  // optional auto slide
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      //   setIsOpen(false);
    }
  };

  const supportWays = [
    {
      icon: Heart,
      title: "Make a Donation",
      description:
        "Contribute financially to support campaign activities, grassroots mobilization, and community outreach programs.",
      cta: "Donate Now",
      action: () => {
        navigate("/donate");
      },
      color: "red",
      highlights: [
        "Tax-deductible contributions",
        "Secure payment options",
        "Monthly giving available",
      ],
    },
    {
      icon: UserPlus,
      title: "Join as Member",
      description:
        "Become an official member of the Global Alliance and gain access to exclusive benefits and networking opportunities.",
      cta: "Join Us",
      action: () => {
        navigate("/register");
      },
      color: "green",
      highlights: [
        "Member certificate",
        "Presidential corridor access",
        "Networking events",
      ],
    },
    {
      icon: ShoppingBag,
      title: "Buy Merchandise",
      description:
        "Show your support with official campaign merchandise. Wear your pride and help spread the message of renewed hope.",
      cta: "Contact Us",
      action: () => scrollToSection("contact"),
      color: "purple",
      badge: "New",
      highlights: [
        "T-shirts, caps & more",
        "Premium quality items",
        "All proceeds support campaign",
      ],
    },
  ];

  //   const handleShare = (e) => {
  //     e.preventDefault();

  //     if (navigator.share) {
  //       navigator.share({
  //         title: "Global Alliance for Tinubu Campaign",
  //         text: "Join me in supporting President Tinubu's vision for a better Nigeria!",
  //         url: window.location.href,
  //       });
  //     } else {
  //       // Fallback - show social media options
  //       const shareText = encodeURIComponent(
  //         "Join me in supporting President Tinubu's vision for a better Nigeria!",
  //       );
  //       const shareUrl = encodeURIComponent(window.location.href);

  //       const socialOptions = [
  //         {
  //           name: "WhatsApp",
  //           url: `https://wa.me/?text=${shareText}%20${shareUrl}`,
  //         },
  //         {
  //           name: "Facebook",
  //           url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
  //         },
  //         {
  //           name: "Twitter",
  //           url: `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`,
  //         },
  //       ];

  //       // Open first social option (WhatsApp) as default
  //       window.open(socialOptions[0].url, "_blank");
  //     }
  //   };

  //   const handleCTAClick = (link) => {
  //     if (link === "#share") {
  //       return handleShare;
  //     }
  //     return () => (window.location.href = link);
  //   };

  return (
    <section id="support" className="ways-to-support">
      <div className="support-container">
        {/* Section Header */}
        <div className="support-header">
          <div className="header-badge">Get Involved</div>
          <h2 className="support-title">Ways to Support the Campaign</h2>
          <p className="support-subtitle">
            Every action counts. Choose how you want to contribute to President
            Tinubu's vision for a renewed Nigeria and be part of this historic
            movement.
          </p>
        </div>

        {/* <div div className="support-grid">
          <img src={Tshirt} alt="t-shirt for sale" className="support-item" />
          <img
            src={Cufflinks}
            alt="Cufflinks for sale"
            className="support-item"
          />
          <img src={Band} alt="Wrist band for sale" className="support-item" />
        </div> */}

        <div className="support-carousel">
          <button onClick={prev} className="nav-btn">
            <ArrowLeft className="cta-icon" />
          </button>

          <img
            src={images[index].src}
            alt={images[index].alt}
            className="support-item"
          />

          <button onClick={next} className="nav-btn">
            <ArrowRight className="cta-icon" />
          </button>
        </div>

        {/* Support Cards Grid */}
        <div className="support-grid">
          {supportWays.map((way, index) => {
            const Icon = way.icon;

            return (
              <div
                key={index}
                className={`support-card support-card-${way.color}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Badge for new items */}
                {way.badge && <div className="card-badge">{way.badge}</div>}

                {/* Icon */}
                <div className={`card-icon-wrapper icon-${way.color}`}>
                  <Icon className="card-icon" />
                </div>

                {/* Content */}
                <div className="card-content">
                  <h3 className="card-title">{way.title}</h3>
                  <p className="card-description">{way.description}</p>

                  {/* Highlights */}
                  <ul className="card-highlights">
                    {way.highlights.map((highlight, i) => (
                      <li key={i}>
                        <CheckCircle className="highlight-icon" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  className={`card-cta cta-${way.color}`}
                  onClick={way.action}
                >
                  {way.cta}
                  <ArrowRight className="cta-icon" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Section - Additional Actions */}
        {/* <div className="additional-support">
          <div className="additional-card">
            <Users className="additional-icon" />
            <div className="additional-content">
              <h4>Volunteer Your Time</h4>
              <p>
                Join our team of dedicated volunteers making a difference in
                communities across Nigeria.
              </p>
              <a href="/volunteer" className="additional-link">
                Learn More <ArrowRight className="link-icon" />
              </a>
            </div>
          </div>

          <div className="additional-card">
            <MessageCircle className="additional-icon" />
            <div className="additional-content">
              <h4>Host an Event</h4>
              <p>
                Organize a town hall, fundraiser, or community gathering to
                engage voters in your area.
              </p>
              <a href="/contact" className="additional-link">
                Get Started <ArrowRight className="link-icon" />
              </a>
            </div>
          </div>
        </div> */}

        {/* Impact Stats */}
        {/* <div className="impact-stats">
          <div className="stat-item">
            <div className="stat-number">15,000+</div>
            <div className="stat-label">Active Members</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">₦45M+</div>
            <div className="stat-label">Funds Raised</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Volunteers</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">36</div>
            <div className="stat-label">States Covered</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
