import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

import Logo from "../img/logo.png";
import "./Navigation.css";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const { isAuthenticated } = useAuth();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="navigation">
      <div className="navigation-container">
        <div className="navigation-content">
          {/* Logo */}
          <div className="logo-container">
            <div className="logo-icon">
              <img src={Logo} alt="GAT Logo" className="logo-image" />
            </div>
            <div>
              <div className="logo-title">Global Alliance</div>
              <div className="logo-subtitle">For Tinubu Campaign</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-desktop">
            <button
              onClick={() => scrollToSection("home")}
              className="nav-link"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("mission")}
              className="nav-link"
            >
              Mission
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="nav-link"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("diaspora")}
              className="nav-link"
            >
              Diaspora
            </button>
            <button
              onClick={() => scrollToSection("endorsements")}
              className="nav-link"
            >
              Endorsements
            </button>
            <button
              onClick={() => scrollToSection("initiatives")}
              className="nav-link"
            >
              Initiatives
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link"
            >
              Contact
            </button>
            {isAuthenticated ? (
              <Link to="/dashboard" className="nav-button">
                Dashboard
              </Link>
            ) : (
              <Link to="/login" className="nav-button">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="menu-icon" />
            ) : (
              <Menu className="menu-icon" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="nav-mobile">
            <div className="nav-mobile-content">
              <button
                onClick={() => scrollToSection("home")}
                className="nav-mobile-link"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("mission")}
                className="nav-mobile-link"
              >
                Mission
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="nav-mobile-link"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("diaspora")}
                className="nav-mobile-link"
              >
                Diaspora
              </button>
              <button
                onClick={() => scrollToSection("endorsements")}
                className="nav-mobile-link"
              >
                Endorsements
              </button>
              <button
                onClick={() => scrollToSection("initiatives")}
                className="nav-mobile-link"
              >
                Initiatives
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="nav-mobile-link"
              >
                Contact
              </button>
              {isAuthenticated ? (
                <Link to="/dashboard" className="nav-button nav-button-mobile">
                  Dashboard
                </Link>
              ) : (
                <Link to="/login" className="nav-button nav-button-mobile">
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
