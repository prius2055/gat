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
                <a href="#involve" className="footer-link">
                  Get Involved
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
                  <p>info@globalalliancecampaign.com</p>
                  <p>support@globalalliancecampaign.com</p>
                </div>
              </li>
              <li className="contact-item">
                <Phone className="contact-icon" />
                <div className="contact-text">
                  <p> +234 (0) 803 941 1592</p>
                  <p> +234 (0) 802 315 5118</p>
                  <p>+1 647 977 7122</p>
                </div>
              </li>

              <li className="contact-item">
                <MapPin className="contact-icon" />
                <div className="contact-text">
                  <div className="contact-detail">
                    <h4>Nigeria</h4>
                    <div className="address">
                      <div className="address-text">
                        3 Kumasi Crescent, Off Aminu kano Way,
                        <br /> Wuse 2 Abuja, FCT, Nigeria
                      </div>

                      <div className="address-text">
                        27 Yaya Abatan Road Ogba-Ikeja, Lagos,Nigeria
                      </div>

                      <div className="address-text">
                        Benin City Office: 5 Eguadase Street <br />
                        Off Akpakpava Road Benin City, Edo State,Nigeria
                      </div>
                    </div>
                  </div>

                  <div className="contact-detail">
                    <h4>Canada</h4>
                    <div className="address-text">
                      2288-100 City Centre Drive Mississauga <br />
                      (Greater Toronto Area) Ontario, L5B 3C8 Canada
                    </div>
                  </div>
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
