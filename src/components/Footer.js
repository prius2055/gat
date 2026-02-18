import {
  // Facebook,
  // Twitter,
  // Instagram,
  // Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Logo from "../img/logo.png";

import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-about">
            <div className="footer-logo">
              <img src={Logo} alt="GAT Logo" className="logo-image" />
              <div>
                <div className="footer-logo-title">Global Alliance</div>
                <div className="logo-subtitle">For Tinubu Campaign</div>
              </div>
            </div>
            <p className="footer-description">
              United in support of President Bola Ahmed Tinubu's vision for a
              prosperous, inclusive, and progressive Nigeria. Together, we
              champion transformation and sustainable development.
            </p>
            {/* <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook className="social-icon" />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter className="social-icon" />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram className="social-icon" />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin className="social-icon" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="links-list">
              <li>
                <a href="#home" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#mission" className="footer-link">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#about" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#diaspora" className="footer-link">
                  Diaspora
                </a>
              </li>
              <li>
                <a href="#endorsements" className="footer-link">
                  Endorsements
                </a>
              </li>
              <li>
                <a href="#initiatives" className="footer-link">
                  Key Initiatives
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3 className="footer-heading">Contact</h3>
            <ul className="contact-list">
              <li className="contact-item">
                <Mail className="contact-icon" />
                <div className="contact-text">
                  <p>info@globalalliance4tinubu.org</p>
                </div>
              </li>
              <li className="contact-item">
                <Phone className="contact-icon" />
                <div className="contact-text">
                  <p>+234 (0) 800 TINUBU-1</p>
                </div>
              </li>
              <li className="contact-item">
                <MapPin className="contact-icon" />
                <div className="contact-text">
                  <p>
                    3 Kumasi Crescent, Off Aminu kano Way, Wuse 2<br />
                    Abuja, FCT, Nigeria
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Global Alliance for Tinubu Campaign. All rights
              reserved.
            </p>
            {/* <div className="footer-legal">
              <a href="#" className="legal-link">
                Privacy Policy
              </a>
              <a href="#" className="legal-link">
                Terms of Service
              </a>
              <a href="#" className="legal-link">
                Disclaimer
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
