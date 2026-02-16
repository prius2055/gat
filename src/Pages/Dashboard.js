import { useRef, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import {
  User,
  Mail,
  Phone,
  Globe,
  Award,
  Calendar,
  LogOut,
  Shield,
  Printer,
  TrendingUp,
  CheckCircle,
  X,
} from "lucide-react";
import Logo from "../img/logo.png";

import "./Dashboard.css";

export default function Dashboard({ onLogout }) {
  const { user, logout, upgradeMembership } = useAuth();
  const membershipCardRef = useRef(null);
  const [upgradeDialogOpen, setUpgradeDialogOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState(null);
  const [isUpgrading, setIsUpgrading] = useState(false);
  const [upgradeSuccess, setUpgradeSuccess] = useState(false);

  if (!user) {
    return null;
  }

  console.log("User data in Dashboard:", user);

  const handleLogout = () => {
    logout();
    onLogout();
  };

  const handlePrintCard = () => {
    if (membershipCardRef.current) {
      const printWindow = window.open("", "", "width=800,height=600");
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Membership Card - ${user.name}</title>
              <style>
                body {
                  margin: 0;
                  padding: 20px;
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  min-height: 100vh;
                }
                @media print {
                  body {
                    padding: 0;
                  }
                }
              </style>
            </head>
            <body>
              ${membershipCardRef.current.innerHTML}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    }
  };

  const membershipDate = new Date(user.createdAt);
  const formattedDate = membershipDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const getMembershipColor = (status) => {
    switch (status) {
      case "partner":
        return {
          badge: "badge-purple",
          bg: "bg-purple",
          border: "border-purple",
          cardBg: "card-purple",
        };
      case "premium_member":
        return {
          badge: "badge-amber",
          bg: "bg-amber",
          border: "border-amber",
          cardBg: "card-amber",
        };
      case "member":
        return {
          badge: "badge-green",
          bg: "bg-green",
          border: "border-green",
          cardBg: "card-green",
        };
      case "supporter":
        return {
          badge: "badge-blue",
          bg: "bg-blue",
          border: "border-blue",
          cardBg: "card-blue",
        };
      default:
        return {
          badge: "badge-gray",
          bg: "bg-gray",
          border: "border-gray",
          cardBg: "card-gray",
        };
    }
  };

  const colors = getMembershipColor(user.role);

  // const benefits = [
  //   {
  //     icon: UserCheck,
  //     title: "Policy Engagement & Dialogue",
  //     description:
  //       "Participate in structured forums, town halls, and strategy sessions where members can share ideas, policy feedback, and recommendations that support national development.",
  //     color: "blue",
  //     badgeColor: "badge-outline-blue",
  //     iconBg: "icon-bg-blue",
  //     iconColor: "icon-blue",
  //   },
  //   {
  //     icon: Award,
  //     title: "Leadership & Volunteer Opportunities",
  //     description:
  //       "Serve in committees, regional teams, and project groups that contribute directly to campaign initiatives and community impact programs",
  //     color: "green",
  //     badgeColor: "badge-outline-green",
  //     iconBg: "icon-bg-green",
  //     iconColor: "icon-green",
  //   },
  //   {
  //     icon: Briefcase,
  //     title: "Professional Networking",
  //     description:
  //       "Connect with like-minded professionals, entrepreneurs, and diaspora leaders to collaborate on projects that promote economic growth and innovation across Nigeria.",
  //     color: "purple",
  //     badgeColor: "badge-outline-purple",
  //     iconBg: "icon-bg-purple",
  //     iconColor: "icon-purple",
  //   },
  //   {
  //     icon: UserCheck,
  //     title: "Capacity Building & Training",
  //     description:
  //       "Access webinars, workshops, and mentorship programs focused on leadership, governance, entrepreneurship, and civic engagement.",
  //     color: "blue",
  //     badgeColor: "badge-outline-blue",
  //     iconBg: "icon-bg-blue",
  //     iconColor: "icon-blue",
  //   },
  //   {
  //     icon: Award,
  //     title: "Events & Special Invitations",
  //     description:
  //       "Receive priority invitations to conferences, town halls, fundraising dinners, and official campaign events.",
  //     color: "green",
  //     badgeColor: "badge-outline-green",
  //     iconBg: "icon-bg-green",
  //     iconColor: "icon-green",
  //   },
  //   {
  //     icon: Briefcase,
  //     title: "Recognition & Visibility",
  //     description:
  //       "Active members may be recognized for their contributions and impact within the movement and community initiatives.",
  //     color: "purple",
  //     badgeColor: "badge-outline-purple",
  //     iconBg: "icon-bg-purple",
  //     iconColor: "icon-purple",
  //   },
  // ];

  const handleUpgrade = async () => {
    if (selectedTier) {
      setIsUpgrading(true);
      try {
        const success = await upgradeMembership(selectedTier);
        if (success) {
          setUpgradeSuccess(true);
          setUpgradeDialogOpen(false);
          setTimeout(() => {
            setUpgradeSuccess(false);
            setSelectedTier(null);
          }, 3000);
        }
      } catch (error) {
        console.error("Upgrade failed:", error);
      } finally {
        setIsUpgrading(false);
      }
    }
  };

  return (
    <div className="dashboard-page">
      {/* Header */}
      <div className="dashboard-header">
        <div className="dashboard-header-container">
          <div className="dashboard-header-content">
            <div className="dashboard-logo-section">
              <div className="dashboard-logo">
                <img
                  src={Logo}
                  alt="Global Alliance Logo"
                  className="logo-image"
                />
              </div>
              <div>
                <h1 className="dashboard-main-title">Member Dashboard</h1>
                <p className="dashboard-subtitle">
                  Global Alliance for Tinubu Campaign
                </p>
              </div>
            </div>
            <button onClick={handleLogout} className="logout-button">
              <LogOut className="button-icon" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="dashboard-main">
        {/* Status Banner */}
        <div className={`status-banner ${colors.bg}`}>
          <div className="status-banner-content">
            <div>
              <h2 className="welcome-title">Welcome, {user.name}!</h2>

              <p className="status-text">
                Your membership tier:
                <span className="status-value">{user.role.toUpperCase()}</span>
              </p>
            </div>
            <div className="status-icon-section">
              <Shield className="status-icon" />
              <span className={`status-badge ${colors.badge}`}>
                {user.role}
              </span>
            </div>
          </div>
        </div>

        <div className="dashboard-grid">
          {/* Profile Information */}
          <div className="profile-section">
            {/* Membership Card */}
            <div className={`card membership-card-container ${colors.border}`}>
              <div className="card-header">
                <div className="card-header-with-button">
                  <h3 className="card-title">
                    <Award className="title-icon" />
                    Membership Card
                  </h3>
                  <button onClick={handlePrintCard} className="print-button">
                    <Printer className="button-icon" />
                    Print Card
                  </button>
                </div>
                <p className="card-description">
                  Official identification card for campaign members
                </p>
              </div>
              <div className="card-content">
                <div ref={membershipCardRef}>
                  <div className={`membership-card ${colors.cardBg}`}>
                    {/* Decorative elements */}
                    <div className="card-decoration card-decoration-1"></div>
                    <div className="card-decoration card-decoration-2"></div>

                    {/* Card Content */}
                    <div className="card-content-inner">
                      {/* Header */}
                      <div className="card-header-section">
                        <div className="card-logo-section">
                          <div className="card-logo">
                            <img
                              src={Logo}
                              alt="Global Alliance Logo"
                              className="logo-image"
                            />
                          </div>
                          <div>
                            <div className="card-org-name">Global Alliance</div>
                            <div className="card-org-subtitle">
                              For Tinubu Campaign
                            </div>
                          </div>
                        </div>
                        <span className="card-tier-badge">{user.role}</span>
                      </div>

                      {/* Member Info */}
                      <div className="card-member-info">
                        <div>
                          <div className="card-label">MEMBER NAME</div>

                          <div className="card-value-large">{user.name}</div>
                        </div>

                        <div className="card-info-grid">
                          <div>
                            <div className="card-label">MEMBER ID</div>
                            <div className="card-value-mono">
                              {user.memberShipNumber}
                            </div>
                          </div>
                          <div>
                            <div className="card-label">MEMBER SINCE</div>
                            <div className="card-value">
                              {new Date(user.createdAt).getFullYear()}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="card-footer-section">
                        <div className="card-valid-date">
                          Valid from{" "}
                          {new Date(user.createdAt).toLocaleDateString()}
                        </div>
                        <div className="card-verified">
                          <Shield className="card-verified-icon" />
                          <span>Verified Member</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Card - continues in next section due to length */}
            <div className="card profile-card">
              <div className="card-header">
                <h3 className="card-title">
                  <User className="title-icon" />
                  Profile Information
                </h3>
                <p className="card-description">
                  Your account details and membership information
                </p>
              </div>
              <div className="card-content">
                <div className="profile-grid">
                  <div className="profile-field">
                    <div className="field-label">
                      <User className="field-icon" />
                      <span>Full Name</span>
                    </div>
                    <p className="field-value">{user.name}</p>
                  </div>

                  <div className="profile-field">
                    <div className="field-label">
                      <Mail className="field-icon" />
                      <span>Email Address</span>
                    </div>
                    <p className="field-value">{user.email}</p>
                  </div>

                  <div className="profile-field">
                    <div className="field-label">
                      <Phone className="field-icon" />
                      <span>Phone Number</span>
                    </div>
                    <p className="field-value">{user.phone}</p>
                  </div>

                  <div className="profile-field">
                    <div className="field-label">
                      <Globe className="field-icon" />
                      <span>Country/Region</span>
                    </div>
                    <p className="field-value capitalize">{user.country}</p>
                  </div>

                  <div className="profile-field">
                    <div className="field-label">
                      <Calendar className="field-icon" />
                      <span>Member Since</span>
                    </div>
                    <p className="field-value">{formattedDate}</p>
                  </div>
                </div>

                <div className="separator"></div>

                <div
                  className={`membership-status-box ${colors.border} ${colors.bg}-light`}
                >
                  <h4 className="membership-status-title">
                    <Shield className="membership-icon" />
                    Membership Status
                  </h4>
                  <div className="membership-status-content">
                    <span className="status-label">Current Tier:</span>
                    <span className={`status-badge-small ${colors.badge}`}>
                      {user.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Member Benefits */}
            {/* <div className="card benefits-card">
              <div className="card-header">
                <h3 className="card-title">
                  <Award className="title-icon" />
                  Member Benefits
                </h3>
                <p className="card-description">
                  Exclusive privileges for Global Alliance members
                </p>
              </div>
              <div className="card-content">
                <div className="benefits-list">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={index} className="benefit-item-full">
                        <div className={`benefit-icon ${benefit.iconBg}`}>
                          <Icon className={`icon ${benefit.iconColor}`} />
                        </div>
                        <div className="benefit-content">
                          <div className="benefit-header">
                            <h4 className="benefit-title">{benefit.title}</h4>
                            <span
                              className={`benefit-badge ${benefit.badgeColor}`}
                            >
                              {benefit.color}
                            </span>
                          </div>
                          <p className="benefit-description">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div> */}
          </div>

          {/* Quick Actions Sidebar */}
          <div className="sidebar-section">
            <div className="card actions-card">
              <div className="card-header">
                <h3 className="card-title">Quick Actions</h3>
              </div>
              <div className="card-content">
                {/* {user.membershipStatus !== "Partner" && (
                  <button
                    onClick={() => setUpgradeDialogOpen(true)}
                    className="action-button action-upgrade"
                  >
                    <TrendingUp className="button-icon" />
                    Upgrade Membership
                  </button>
                )} */}

                <button
                  onClick={() => setUpgradeDialogOpen(true)}
                  className="action-button action-upgrade"
                >
                  <TrendingUp className="button-icon" />
                  Upgrade Membership
                </button>
                {/* 
                <button className="action-button action-primary">
                  <FileText className="button-icon" />
                  Download Certificate
                </button> */}
                {/* <button
                  onClick={handlePrintCard}
                  className="action-button action-secondary"
                >
                  <Printer className="button-icon" />
                  Print Membership Card
                </button> */}
                {/* <button className="action-button action-secondary">
                  <Calendar className="button-icon" />
                  Book Appointment
                </button> */}
                {/* <button className="action-button action-secondary">
                  <Users className="button-icon" />
                  View Events
                </button> */}
                <button className="action-button action-secondary">
                  <User className="button-icon" />
                  Update Profile
                </button>
              </div>
            </div>

            <div className="card tier-info-card">
              <div className="card-header">
                <h3 className="card-title tier-title">
                  <Award className="title-icon" />
                  Membership Tier
                </h3>
              </div>
              <div className="card-content">
                <div className="tier-info">
                  <div className="tier-current">
                    <span className="tier-label">Current:</span>
                    <span className={`status-badge-small ${colors.badge}`}>
                      {user.role}
                    </span>
                  </div>
                  <div className="tier-separator"></div>
                  <p className="tier-description">
                    As a {user.role.toLowerCase()} you have access to exclusive
                    campaign resources, networking opportunities, and events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upgrade Dialog */}
      {upgradeDialogOpen && (
        <div
          className="dialog-overlay"
          onClick={() => setUpgradeDialogOpen(false)}
        >
          <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
            <div className="dialog-header">
              <h3 className="dialog-title">Upgrade Membership</h3>
              <p className="dialog-description">
                Choose a membership tier to upgrade to.
              </p>
            </div>
            <div className="dialog-body">
              <div
                className={`upgrade-option ${selectedTier === "Premium Member" ? "selected" : ""}`}
                onClick={() => setSelectedTier("Premium Member")}
              >
                <div className="upgrade-icon icon-bg-amber">
                  <TrendingUp className="icon icon-amber" />
                </div>
                <div className="upgrade-content">
                  <div className="upgrade-header">
                    <h4 className="upgrade-title">Premium Member</h4>
                    <span className="benefit-badge badge-outline-amber">
                      Premium
                    </span>
                  </div>
                  <p className="upgrade-description">
                    Access to exclusive campaign resources, networking
                    opportunities, and events.
                  </p>
                </div>
              </div>
              <div
                className={`upgrade-option ${selectedTier === "Partner" ? "selected" : ""}`}
                onClick={() => setSelectedTier("Partner")}
              >
                <div className="upgrade-icon icon-bg-purple">
                  <CheckCircle className="icon icon-purple" />
                </div>
                <div className="upgrade-content">
                  <div className="upgrade-header">
                    <h4 className="upgrade-title">Partner</h4>
                    <span className="benefit-badge badge-outline-purple">
                      Partner
                    </span>
                  </div>
                  <p className="upgrade-description">
                    Leadership and volunteer opportunities, professional
                    networking, and recognition.
                  </p>
                </div>
              </div>
            </div>
            <div className="dialog-footer">
              <button
                onClick={() => setUpgradeDialogOpen(false)}
                className="dialog-button dialog-button-cancel"
              >
                <X className="button-icon" />
                Cancel
              </button>
              <button
                onClick={handleUpgrade}
                className="dialog-button dialog-button-confirm"
                disabled={isUpgrading || !selectedTier}
              >
                {isUpgrading ? (
                  <div className="spinner"></div>
                ) : (
                  <TrendingUp className="button-icon" />
                )}
                {isUpgrading ? "Upgrading..." : "Upgrade"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upgrade Success Alert */}
      {upgradeSuccess && (
        <div className="success-alert">
          <CheckCircle className="alert-icon" />
          <p className="alert-message">
            Your membership has been successfully upgraded to {selectedTier}.
          </p>
        </div>
      )}
    </div>
  );
}
