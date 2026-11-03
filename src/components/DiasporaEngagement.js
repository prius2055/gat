import { Globe, Briefcase, Award, UserCheck, ArrowRight, CheckCircle, Users, CalendarCheck, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import "./DiasporaEngagement.css";

const BENEFITS = [
  { icon: UserCheck, title: "Policy Engagement & Dialogue", text: "Participate in structured forums, town halls, and strategy sessions where members can share ideas, policy feedback, and recommendations that support national development." },
  { icon: Award, title: "Leadership & Volunteer Opportunities", text: "Serve in committees, regional teams, and project groups that contribute directly to campaign initiatives and community impact programs." },
  { icon: Briefcase, title: "Professional Networking", text: "Connect with like-minded professionals, entrepreneurs, and diaspora leaders to collaborate on projects that promote economic growth and innovation across Nigeria." },
  { icon: GraduationCap, title: "Capacity Building & Training", text: "Access webinars, workshops, and mentorship programs focused on leadership, governance, entrepreneurship, and civic engagement." },
  { icon: CalendarCheck, title: "Events & Special Invitations", text: "Receive priority invitations to conferences, town halls, fundraising dinners, and official campaign events." },
  { icon: Users, title: "Recognition & Visibility", text: "Active members may be recognized for their contributions and impact within the movement and community initiatives." },
];

const COUNTRIES = ["United States", "United Kingdom", "Canada", "Germany", "France", "Italy", "Spain", "Netherlands", "Belgium", "Switzerland", "South Africa", "Ghana", "Kenya", "UAE", "Saudi Arabia"];

const REASONS = [
  "Contribute your international expertise to national projects",
  "Bridge connections between Nigeria and global markets",
  "Participate in policy discussions that shape Nigeria's future",
  "Access exclusive networking opportunities with government officials",
];

export default function DiasporaEngagement() {
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="diaspora" className="diaspora-section section-pad">
      <div className="container-x">
        <div className="section-head">
          <span className="eyebrow"><Globe size={14} /> Nigerian Diaspora</span>
          <h2 className="section-title">Join the Movement from Abroad</h2>
          <p className="section-lead">
            Nigerians in the diaspora are integral to our nation's transformation. As a member of the
            Global Alliance for Tinubu Campaign, you gain exclusive benefits and opportunities to
            contribute to Nigeria's progress.
          </p>
        </div>

        <div className="diaspora-banner">
          <img
            src="https://images.unsplash.com/photo-1672380135241-c024f7fbfa13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBwYXJ0bmVyc2hpcCUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NzA0MzgyMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Global partnership"
            loading="lazy"
          />
        </div>

        <h3 className="diaspora-subhead">Exclusive Benefits for Members</h3>
        <p className="diaspora-subtext">
          By joining our campaign, you unlock unprecedented opportunities to participate in Nigeria's
          governance and economic transformation.
        </p>

        <div className="diaspora-benefits">
          {BENEFITS.map(({ icon: Icon, title, text }) => (
            <article className="diaspora-benefit" key={title}>
              <span className="diaspora-benefit-icon"><Icon size={22} /></span>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="diaspora-why">
          <div className="diaspora-why-copy">
            <h3>Why Diaspora Participation Matters</h3>
            <p>
              The Nigerian diaspora represents a powerful force for national development. Your
              expertise, resources, and global perspective are invaluable assets in building the
              Nigeria of our dreams.
            </p>
            <ul>
              {REASONS.map((r) => (
                <li key={r}><CheckCircle size={20} /> <span>{r}</span></li>
              ))}
            </ul>
          </div>
          <div className="diaspora-why-image">
            <img
              src="https://images.unsplash.com/photo-1726276262265-b615e46cab5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWdlcmlhbiUyMGRpYXNwb3JhJTIwY29tbXVuaXR5fGVufDF8fHx8MTc3MDQzODIzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Nigerian diaspora community"
              loading="lazy"
            />
          </div>
        </div>

        <div className="diaspora-reach">
          <h3>Our Global Reach</h3>
          <p>
            We have active diaspora members and coordinators in over 45 countries worldwide, creating a
            truly global movement for Nigeria's development.
          </p>
          <ul className="diaspora-countries">
            {COUNTRIES.map((c) => (
              <li key={c}><Globe size={14} /> {c}</li>
            ))}
          </ul>
          <p className="diaspora-reach-note">...and many more countries across Africa, Europe, Asia, and the Americas</p>
        </div>

        <div className="diaspora-cta">
          <h3>Ready to Make an Impact?</h3>
          <p>
            Join thousands of diaspora Nigerians who are actively participating in Nigeria's
            transformation. Register today and unlock your benefits.
          </p>
          <div className="diaspora-cta-buttons">
            <Link to="/register" className="btn btn-gold">
              Register as Diaspora Member <ArrowRight className="btn-icon" />
            </Link>
            <button className="btn btn-ghost-light" onClick={scrollToContact}>
              Contact Diaspora Coordinator
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
