import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "../img/logo.png";
import "./Footer.css";

const QUICK_LINKS = [
  { id: "home", label: "Home" },
  { id: "mission", label: "Our Mission" },
  { id: "about", label: "About Us" },
  { id: "diaspora", label: "Diaspora" },
  { id: "endorsements", label: "Endorsements" },
  { id: "support", label: "Get Involved" },
  { id: "contact", label: "Contact Us" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const go = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container-x">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="footer-logo">
              <img src={Logo} alt="GAT Logo" />
              <div>
                <div className="footer-logo-title">Global Alliance</div>
                <div className="footer-logo-sub">For Tinubu Campaign</div>
              </div>
            </div>
            <p>
              United in support of President Bola Ahmed Tinubu's vision for a prosperous, inclusive,
              and progressive Nigeria. Together, we champion transformation and sustainable development.
            </p>
          </div>

          <nav className="footer-links" aria-label="Footer">
            <h3 className="footer-heading">Quick Links</h3>
            <ul>
              {QUICK_LINKS.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} onClick={(e) => go(e, l.id)}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-contact">
            <h3 className="footer-heading">Contact</h3>
            <ul>
              <li>
                <Mail size={18} />
                <div>
                  <a href="mailto:info@globalalliancecampaign.com">info@globalalliancecampaign.com</a>
                  <a href="mailto:support@globalalliancecampaign.com">support@globalalliancecampaign.com</a>
                </div>
              </li>
              <li>
                <Phone size={18} />
                <div>
                  <a href="tel:+2348039411592">+234 (0) 803 941 1592</a>
                  <a href="tel:+2348023155118">+234 (0) 802 315 5118</a>
                  <a href="tel:+16479777122">+1 647 977 7122</a>
                </div>
              </li>
              <li>
                <MapPin size={18} />
                <div>
                  <strong>Nigeria</strong>
                  <span>3 Kumasi Crescent, Off Aminu Kano Way, Wuse 2 Abuja, FCT</span>
                  <span>27 Yaya Abatan Road Ogba-Ikeja, Lagos</span>
                  <span>5 Eguadase Street, Off Akpakpava Road, Benin City, Edo State</span>
                  <strong>Canada</strong>
                  <span>2288-100 City Centre Drive Mississauga (GTA), Ontario, L5B 3C8</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Global Alliance for Tinubu Campaign. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
