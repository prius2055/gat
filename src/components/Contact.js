import {
  Mail,
  Phone,
  MapPin,
  // Facebook,
  // Twitter,
  // Instagram,
  // Linkedin,
  Clock,
  Globe,
} from "lucide-react";

import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            <span className="contact-badge">Get In Touch</span>
            <h2 className="contact-title">Join the Global Alliance</h2>
            <p className="contact-description">
              Ready to be part of something bigger? Connect with us to learn how
              you can contribute to President Tinubu's transformative agenda and
              help build a better Nigeria.
            </p>

            {/* Contact Details */}
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Mail className="contact-icon" />
                </div>
                <div>
                  <h3 className="contact-item-title">Email Us</h3>
                  <p className="contact-item-text">
                    info@globalalliance4tinubu.org
                  </p>
                  <p className="contact-item-text">
                    support@globalalliance4tinubu.org
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Phone className="contact-icon" />
                </div>
                <div>
                  <h3 className="contact-item-title">Call Us</h3>
                  <p className="contact-item-text">+234 (0) 901 743 1825</p>
                  <p className="contact-item-text">+1 647 977 7122</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <MapPin className="contact-icon" />
                </div>
                <div>
                  <h3 className="contact-item-title">Visit Us</h3>
                  <p className="contact-item-text">
                    Global Alliance Campaign Headquarters
                    <br />
                    3 Kumasi Crescent, Aminu Kano way, Wuse 2,
                    <br />
                    Abuja, Federal Capital Territory, Nigeria
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Clock className="contact-icon" />
                </div>
                <div>
                  <h3 className="contact-item-title">Office Hours</h3>
                  <p className="contact-item-text">
                    Monday - Friday: 8:00 AM - 6:00 PM
                  </p>
                  <p className="contact-item-text">
                    Saturday: 9:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            {/* <div className="social-media-section">
              <h3 className="social-title">Follow Our Campaign</h3>
              <div className="social-links">
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
              </div>
            </div> */}
          </div>

          {/* Right Side - Visual Content */}
          <div className="contact-visual">
            {/* Location Card */}
            <div className="location-card">
              <div className="location-header">
                <div className="location-icon-wrapper">
                  <MapPin className="location-icon" />
                </div>
                <div>
                  <h3 className="location-title">Our Headquarters</h3>
                  <p className="location-description">
                    Visit us at our Int'l campaign headquarters in the heart of
                    Abuja
                  </p>
                </div>
              </div>

              {/* Map Embed */}
              <div className="map-wrapper">
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9464087654343!2d7.4878581!3d9.0820357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba8a1fbfe9d%3A0xc49c210f73b97286!2sWuse%202%2C%20Abuja%2C%20Nigeria!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Campaign Headquarters Location"
                  ></iframe>
                </div>
              </div>

              {/* Direction Button */}
              <div className="direction-button-wrapper">
                <a
                  href="https://maps.google.com/?q=Wuse+2+Abuja+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="direction-button"
                >
                  <Globe className="button-icon" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
