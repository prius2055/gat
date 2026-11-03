import { Award, Users, Target, Flag } from "lucide-react";
import { Link } from "react-router-dom";
import Paul from "../img/paul.jpeg";
import Jimoh from "../img/drjimoh.png";

import "./AboutUs.css";

const TEAM = [
  {
    name: "Bevis Paul Igbinoba",
    role: "Director General",
    roleDescription: "Global Convener",
    image: Paul,
    bio: "A seasoned political strategist with over 25 years of experience in grassroots mobilization and campaign management across Nigeria.",
  },
  {
    name: "Abubakar Ateiza Jimoh",
    role: "Organising Director",
    roleDescription: "National Coordinator - Nigeria",
    image: Jimoh,
    bio: "Our Chief strategist, he is an astute Grassroot mobilizer and prolific writer who is passionate about the ideals, vision, and mission of President Tinubu.",
  },
];

const STATS = [
  { icon: Users, value: "200+", label: "Campaign Staff" },
  { icon: Target, value: "20+", label: "National Coordinators" },
  { icon: Flag, value: "36", label: "State Coordinators" },
  { icon: Award, value: "15+", label: "Years Combined Experience" },
];

export default function AboutUs() {
  return (
    <section id="about" className="about-section section-pad">
      <div className="container-x">
        <div className="section-head">
          <span className="eyebrow">About Us</span>
          <h2 className="section-title">Meet the Leadership Team</h2>
          <p className="section-lead">
            Our dedicated team brings together decades of experience in political strategy, grassroots
            mobilization, and community engagement. We are united by our commitment to President
            Tinubu's vision for a better Nigeria.
          </p>
        </div>

        <div className="about-stats">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="about-stat">
              <span className="about-stat-icon"><Icon size={20} /></span>
              <div className="about-stat-value">{value}</div>
              <div className="about-stat-label">{label}</div>
            </div>
          ))}
        </div>

        <div className="about-commitment">
          <h3>Our Commitment</h3>
          <div className="about-commitment-text">
            <p>
              The Global Alliance for Tinubu Campaign was founded on the principles of unity,
              transparency, and unwavering dedication to Nigeria's progress. We work tirelessly to
              mobilize support, coordinate grassroots efforts, and amplify the voices of Nigerians who
              believe in President Tinubu's transformative agenda.
            </p>
            <p>
              From local communities to the diaspora, we are building a nationwide movement that
              transcends regional, ethnic, and religious boundaries—because Nigeria's success is our
              collective responsibility.
            </p>
          </div>
        </div>

        <h3 className="about-team-heading">Leadership Team</h3>
        <div className="about-team-grid">
          {TEAM.map((m) => (
            <article key={m.name} className="about-team-card">
              <div className="about-team-photo">
                <img src={m.image} alt={m.name} loading="lazy" />
              </div>
              <div className="about-team-body">
                <h4>{m.name}</h4>
                <p className="about-team-role">{m.role}</p>
                <p className="about-team-sub">{m.roleDescription}</p>
                <p className="about-team-bio">{m.bio}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="about-cta">
          <h3>Support Our Mission</h3>
          <p>
            If you believe in the growth, unity, and progress of our nation, your support can help
            strengthen grassroots engagement and community coordination efforts. Every contribution,
            no matter the size, makes a meaningful difference. Kindly consider making a donation today.
          </p>
          <Link to="/donate" className="btn btn-gold">Support this campaign</Link>
        </div>
      </div>
    </section>
  );
}
