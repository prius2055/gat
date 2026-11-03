import { Shield, CheckCircle, FileCheck } from "lucide-react";
import Certificate from "../img/apc-certificate.jpeg";
import "./Endorsements.css";

const ENDORSEMENT = {
  title: "APC National Chairman Recognition",
  authority: "All Progressives Congress (APC)",
  official: "National Chairman",
  description:
    "Official endorsement and certificate of acknowledgement recognizing the Global Alliance for Tinubu Campaign as an authorized grassroots mobilization body supporting President Tinubu's administration.",
  image: Certificate,
};

const CREDENTIALS = [
  "Officially registered campaign organization",
  "Authorized by the APC National Chairman",
  "Recognized by the Presidential administration",
  "Compliant with Nigerian electoral regulations",
  "Transparent and accountable operations",
  "Endorsed for diaspora engagement activities",
];

export default function Endorsements() {
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="endorsements" className="endorse-section section-pad">
      <div className="container-x">
        <div className="section-head">
          <span className="eyebrow"><Shield size={14} /> Official Recognition</span>
          <h2 className="section-title">Officially Endorsed &amp; Recognized</h2>
          <p className="section-lead">
            Our campaign has received official endorsements and certificates of acknowledgement from the
            highest levels of Nigerian political leadership, validating our commitment and legitimacy.
          </p>
        </div>

        <div className="endorse-trust">
          <span className="endorse-trust-icon"><CheckCircle size={30} /></span>
          <h3>Verified &amp; Authorized Campaign Organization</h3>
          <p>
            Operating with full authorization and recognition from the All Progressives Congress
            National Chairman and the Presidency of the Federal Republic of Nigeria.
          </p>
        </div>

        <article className="endorse-card">
          <div className="endorse-cert">
            <img src={ENDORSEMENT.image} alt={ENDORSEMENT.title} loading="lazy" />
          </div>
          <div className="endorse-body">
            <h3>{ENDORSEMENT.title}</h3>
            <p className="endorse-authority">{ENDORSEMENT.authority}</p>
            <p className="endorse-signed">Signed by: {ENDORSEMENT.official}</p>
            <p className="endorse-desc">{ENDORSEMENT.description}</p>
            <span className="endorse-certified"><CheckCircle size={18} /> Certified &amp; Authenticated</span>
          </div>
        </article>

        <div className="endorse-credentials">
          <div className="endorse-credentials-head">
            <FileCheck size={30} />
            <h3>Our Official Credentials</h3>
            <p>
              As an officially recognized organization, we operate with the highest standards of
              legitimacy, transparency, and accountability.
            </p>
          </div>
          <ul className="endorse-credentials-grid">
            {CREDENTIALS.map((c) => (
              <li key={c}><CheckCircle size={18} /> <span>{c}</span></li>
            ))}
          </ul>
        </div>

        <div className="endorse-verify">
          <div>
            <h3>Verify Our Credentials</h3>
            <p>
              Transparency is at the heart of our mission. Our endorsement certificates and official
              documentation are available for verification.
            </p>
          </div>
          <button className="btn btn-gold" onClick={scrollToContact}>Contact for Verification</button>
        </div>
      </div>
    </section>
  );
}
