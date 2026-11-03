import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Tshirt from "../img/t-shirt.png";
import Cufflinks from "../img/cufflinks.png";
import Band from "../img/wristband.png";
import { Heart, ShoppingBag, ArrowRight, ArrowLeft, CheckCircle, UserPlus } from "lucide-react";

import "./Support.css";

const IMAGES = [
  { src: Tshirt, alt: "Official campaign t-shirt" },
  { src: Cufflinks, alt: "Official campaign cufflinks" },
  { src: Band, alt: "Official campaign wristband" },
];

export default function Support() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const navigate = useNavigate();

  const next = useCallback(() => setIndex((p) => (p + 1) % IMAGES.length), []);
  const prev = () => setIndex((p) => (p - 1 + IMAGES.length) % IMAGES.length);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next, paused]);

  const scrollToSection = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const supportWays = [
    {
      icon: Heart,
      title: "Make a Donation",
      description: "Contribute financially to support campaign activities, grassroots mobilization, and community outreach programs.",
      cta: "Donate Now",
      action: () => navigate("/donate"),
      tone: "gold",
      highlights: ["Tax-deductible contributions", "Secure payment options", "Monthly giving available"],
    },
    {
      icon: UserPlus,
      title: "Join as Member",
      description: "Become an official member of the Global Alliance and gain access to exclusive benefits and networking opportunities.",
      cta: "Join Us",
      action: () => navigate("/register"),
      tone: "green",
      highlights: [
        "Membership Cards and Certificates",
        "Priority Access to Programs, Events and Initiatives Globally",
        "Exclusive Invitation to Programs and Events Globally",
      ],
    },
    {
      icon: ShoppingBag,
      title: "Buy Merchandise",
      description: "Show your support with official campaign merchandise. Wear your pride and help spread the message of renewed hope.",
      cta: "Contact Us",
      action: () => scrollToSection("contact"),
      tone: "ink",
      badge: "New",
      highlights: ["T-shirts, caps & more", "Premium quality items", "All proceeds support campaign"],
    },
  ];

  return (
    <section id="support" className="support-section section-pad">
      <div className="container-x">
        <div className="section-head">
          <span className="eyebrow">Get Involved</span>
          <h2 className="section-title">Ways to Support the Campaign</h2>
          <p className="section-lead">
            Every action counts. Choose how you want to contribute to President Tinubu's vision for a
            renewed Nigeria and be part of this historic movement.
          </p>
        </div>

        <div
          className="support-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-roledescription="carousel"
          aria-label="Campaign merchandise"
        >
          <button onClick={prev} className="support-nav-btn" aria-label="Previous item"><ArrowLeft size={20} /></button>
          <div className="support-slide">
            <img key={index} src={IMAGES[index].src} alt={IMAGES[index].alt} />
          </div>
          <button onClick={next} className="support-nav-btn" aria-label="Next item"><ArrowRight size={20} /></button>
          <div className="support-dots" role="tablist">
            {IMAGES.map((img, i) => (
              <button key={img.alt} className={i === index ? "active" : ""} onClick={() => setIndex(i)} aria-label={`Show item ${i + 1}`} />
            ))}
          </div>
        </div>

        <div className="support-grid">
          {supportWays.map((way) => {
            const Icon = way.icon;
            return (
              <article key={way.title} className={`support-card tone-${way.tone}`}>
                {way.badge && <span className="support-badge">{way.badge}</span>}
                <span className="support-card-icon"><Icon size={26} /></span>
                <h3>{way.title}</h3>
                <p className="support-card-desc">{way.description}</p>
                <ul>
                  {way.highlights.map((h) => (
                    <li key={h}><CheckCircle size={17} /> <span>{h}</span></li>
                  ))}
                </ul>
                <button className="btn support-card-cta" onClick={way.action}>
                  {way.cta} <ArrowRight className="btn-icon" />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
