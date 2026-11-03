import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

import Logo from "../img/logo.png";
import "./Navigation.css";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "mission", label: "Mission" },
  { id: "about", label: "About Us" },
  { id: "diaspora", label: "Diaspora" },
  { id: "endorsements", label: "Endorsements" },
  { id: "support", label: "Get Involved" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const authLink = isAuthenticated ? (
    <Link to="/dashboard" className="btn btn-primary nav-cta" onClick={() => setIsOpen(false)}>
      Dashboard
    </Link>
  ) : (
    <Link to="/login" className="btn btn-outline nav-cta" onClick={() => setIsOpen(false)}>
      Login
    </Link>
  );

  return (
    <header className={`navigation ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="navigation-container" aria-label="Main">
        <button className="logo-container" onClick={() => scrollToSection("home")} aria-label="Go to top">
          <img src={Logo} alt="GAT Logo" className="nav-logo-image" />
          <span className="logo-text-block">
            <span className="logo-title">Global Alliance</span>
            <span className="nav-logo-subtitle">For Tinubu Campaign</span>
          </span>
        </button>

        <div className="nav-desktop">
          {LINKS.map((l) => (
            <button key={l.id} onClick={() => scrollToSection(l.id)} className="nav-link">
              {l.label}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <Link to="/donate" className="btn btn-gold nav-cta">Donate</Link>
          {authLink}
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="nav-mobile">
          <div className="nav-mobile-content">
            {LINKS.map((l) => (
              <button key={l.id} onClick={() => scrollToSection(l.id)} className="nav-mobile-link">
                {l.label}
              </button>
            ))}
            <div className="nav-mobile-actions">
              <Link to="/donate" className="btn btn-gold" onClick={() => setIsOpen(false)}>Donate</Link>
              {authLink}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
