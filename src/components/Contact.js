import { Mail, Phone, MapPin, Clock, Globe } from "lucide-react";
import "./Contact.css";

const OFFICES = [
  { name: "Head Office - Abuja", lines: ["3 Kumasi Crescent, Aminu Kano way,", "Wuse 2, Abuja, FCT, Nigeria"] },
  { name: "Lagos Office", lines: ["27 Yaya Abatan Road Ogba-Ikeja,", "Lagos, Nigeria"] },
  { name: "Benin City Office", lines: ["5 Eguadase Street Off Akpakpava Road", "Benin City, Edo State, Nigeria"] },
  { name: "Canadian Office", lines: ["2288-100 City Centre Drive Mississauga", "(Greater Toronto Area)", "Ontario, L5B 3C8 Canada"] },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section section-pad">
      <div className="container-x contact-grid">
        <div className="contact-info">
          <span className="eyebrow">Get In Touch</span>
          <h2 className="section-title">Join the Global Alliance</h2>
          <p className="section-lead">
            Ready to be part of something bigger? Connect with us to learn how you can contribute to
            President Tinubu's transformative agenda and help build a better Nigeria.
          </p>

          <ul className="contact-details">
            <li>
              <span className="contact-icon"><Mail size={20} /></span>
              <div>
                <h3>Email Us</h3>
                <a href="mailto:info@globalalliancecampaign.com">info@globalalliancecampaign.com</a>
                <a href="mailto:support@globalalliancecampaign.com">support@globalalliancecampaign.com</a>
              </div>
            </li>
            <li>
              <span className="contact-icon"><Phone size={20} /></span>
              <div>
                <h3>Call Us</h3>
                <a href="tel:+2348039411592">+234 (0) 803 941 1592 (Nigeria)</a>
                <a href="tel:+2348023155118">+234 (0) 802 315 5118 (Nigeria)</a>
                <a href="tel:+16479777122">+1 647 977 7122 (Canada)</a>
              </div>
            </li>
            <li>
              <span className="contact-icon"><Clock size={20} /></span>
              <div>
                <h3>Office Hours</h3>
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="contact-visual">
          <div className="contact-offices">
            <h3><MapPin size={20} /> Our Offices</h3>
            <div className="contact-offices-grid">
              {OFFICES.map((o) => (
                <address key={o.name}>
                  <strong>{o.name}</strong>
                  {o.lines.map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </address>
              ))}
            </div>
          </div>

          <div className="contact-map">
            <div className="contact-map-head">
              <h3>Our Headquarters</h3>
              <p>Visit us at our Int'l campaign headquarters in the heart of Abuja</p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9464087654343!2d7.4878581!3d9.0820357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba8a1fbfe9d%3A0xc49c210f73b97286!2sWuse%202%2C%20Abuja%2C%20Nigeria!5e0!3m2!1sen!2s!4v1234567890"
              title="Campaign Headquarters Location"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <a href="https://maps.google.com/?q=Wuse+2+Abuja+Nigeria" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <Globe className="btn-icon" /> Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
