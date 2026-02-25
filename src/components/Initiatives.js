import {
  BookOpen,
  Briefcase,
  HeartHandshake,
  Building2,
  Sprout,
  Wifi,
} from "lucide-react";
import "./Initiatives.css";
import { Link } from "react-router-dom";

export default function Initiatives() {
  const initiatives = [
    {
      icon: BookOpen,
      title: "Education Reform",
      description:
        "Supporting policies that improve access to quality education, vocational training, and digital literacy for all Nigerians.",
      color: "initiative-blue",
    },
    {
      icon: Briefcase,
      title: "Economic Growth",
      description:
        "Advocating for business-friendly policies, entrepreneurship programs, and initiatives that create jobs and reduce poverty.",
      color: "initiative-green",
    },
    {
      icon: Building2,
      title: "Infrastructure Development",
      description:
        "Championing investments in roads, railways, airports, and digital infrastructure to connect communities nationwide.",
      color: "initiative-purple",
    },
    {
      icon: HeartHandshake,
      title: "Healthcare Access",
      description:
        "Promoting universal healthcare coverage, improved medical facilities, and accessible health services for every Nigerian.",
      color: "initiative-red",
    },
    {
      icon: Sprout,
      title: "Agricultural Innovation",
      description:
        "Supporting modern farming techniques, food security initiatives, and rural development programs across the nation.",
      color: "initiative-emerald",
    },
    {
      icon: Wifi,
      title: "Digital Transformation",
      description:
        "Advancing technology adoption, digital economy growth, and ensuring Nigeria's competitiveness in the global market.",
      color: "initiative-indigo",
    },
  ];

  return (
    <section id="initiatives" className="initiatives-section">
      <div className="initiatives-container">
        {/* Section Header */}
        <div className="initiatives-header">
          <span className="initiatives-badge">Key Initiatives</span>
          <h2 className="initiatives-title">Driving Transformative Change</h2>
          <p className="initiatives-description">
            Our campaign focuses on strategic initiatives that align with
            President Tinubu's Renewed Hope Agenda, addressing Nigeria's most
            pressing challenges and opportunities.
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="initiatives-grid">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon;
            return (
              <div key={index} className="initiative-card">
                <div className="initiative-content">
                  <div className={`initiative-icon ${initiative.color}`}>
                    <Icon className="icon" />
                  </div>
                  <h3 className="initiative-title">{initiative.title}</h3>
                  <p className="initiative-description">
                    {initiative.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
