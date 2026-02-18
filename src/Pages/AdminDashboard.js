import { useState, useMemo, useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import { useUser } from "../Context/userContext";
import {
  Shield,
  LogOut,
  Users,
  Search,
  Download,
  Filter,
  UserCheck,
  Award,
  Briefcase,
  User as UserIcon,
} from "lucide-react";

import "./AdminDashboard.css";

export default function AdminDashboard({ onLogout }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const { user, logout } = useAuth();
  const { getAllUsers, allUsers } = useUser();

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  const handleLogout = () => {
    logout();
    onLogout();
  };

  const getMembershipColor = (status) => {
    switch (status) {
      case "Partner":
        return "badge-purple";
      case "Premium Member":
        return "badge-amber";
      case "Member":
        return "badge-green";
      case "Supporter":
        return "badge-blue";
      default:
        return "badge-gray";
    }
  };

  const getMembershipIcon = (status) => {
    switch (status) {
      case "Partner":
        return <Briefcase className="tier-icon" />;
      case "Premium Member":
        return <Award className="tier-icon" />;
      case "Member":
        return <UserCheck className="tier-icon" />;
      default:
        return <UserIcon className="tier-icon" />;
    }
  };

  const filteredUsers = useMemo(() => {
    let filtered = allUsers;

    if (searchQuery) {
      filtered = filtered.filter(
        (u) =>
          u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          u.phone.includes(searchQuery) ||
          u.country.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    if (filterStatus !== "all") {
      filtered = filtered.filter((u) => u.membershipStatus === filterStatus);
    }

    return filtered;
  }, [allUsers, searchQuery, filterStatus]);

  const stats = useMemo(() => {
    const total = allUsers.length;
    const partners = allUsers.filter(
      (u) => u.membershipStatus === "Partner",
    ).length;
    const premiumMembers = allUsers.filter(
      (u) => u.membershipStatus === "Premium Member",
    ).length;
    const members = allUsers.filter(
      (u) => u.membershipStatus === "Member",
    ).length;
    const supporters = allUsers.filter(
      (u) => u.membershipStatus === "Supporter",
    ).length;
    return { total, partners, premiumMembers, members, supporters };
  }, [allUsers]);

  const exportToCSV = () => {
    const headers = [
      "Name",
      "Email",
      "Phone",
      "Country",
      "Membership Status",
      "Member Since",
      "Certificate Number",
    ];
    const rows = filteredUsers.map((u) => [
      u.name,
      u.email,
      u.phone,
      u.country,
      u.membershipStatus,
      new Date(u.membershipDate).toLocaleDateString(),
      u.certificateNumber || "N/A",
    ]);
    const csvContent = [headers, ...rows]
      .map((row) => row.join(","))
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `gat-members-${new Date().toISOString().split("T")[0]}.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  /* ── Access Denied ── */
  if (!user || !user.isAdmin) {
    return (
      <div className="access-denied-page">
        <div className="access-denied-card">
          <div className="access-denied-content">
            <div className="access-denied-icon-wrapper">
              <Shield className="access-denied-icon" />
            </div>
            <h3 className="access-denied-title">Access Denied</h3>
            <p className="access-denied-message">
              You do not have administrator privileges to access this page.
            </p>
            <button onClick={handleLogout} className="access-denied-button">
              Return to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      {/* ── Header ── */}
      <div className="admin-header">
        <div className="admin-header-container">
          <div className="admin-header-content">
            <div className="admin-logo-section">
              <div className="admin-logo">
                <span className="logo-text">GAT</span>
              </div>
              <div>
                <h1 className="admin-main-title">Admin Dashboard</h1>
                <p className="admin-subtitle">
                  Global Alliance for Tinubu Campaign
                </p>
              </div>
            </div>
            <div className="admin-header-actions">
              <span className="admin-badge">
                <Shield className="admin-badge-icon" />
                Administrator
              </span>
              <button onClick={handleLogout} className="logout-button">
                <LogOut className="button-icon" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="admin-main">
        {/* ── Stats ── */}
        <div className="stats-grid">
          <div className="stat-card stat-card-green">
            <div className="stat-card-content">
              <div>
                <p className="stat-label">Total Members</p>
                <p className="stat-value stat-value-gray">{stats.total}</p>
              </div>
              <div className="stat-icon-wrapper stat-icon-green">
                <Users className="stat-icon" />
              </div>
            </div>
          </div>

          <div className="stat-card stat-card-purple">
            <div className="stat-card-content">
              <div>
                <p className="stat-label">Partners</p>
                <p className="stat-value stat-value-purple">{stats.partners}</p>
              </div>
              <div className="stat-icon-wrapper stat-icon-purple">
                <Briefcase className="stat-icon" />
              </div>
            </div>
          </div>

          <div className="stat-card stat-card-amber">
            <div className="stat-card-content">
              <div>
                <p className="stat-label">Premium</p>
                <p className="stat-value stat-value-amber">
                  {stats.premiumMembers}
                </p>
              </div>
              <div className="stat-icon-wrapper stat-icon-amber">
                <Award className="stat-icon" />
              </div>
            </div>
          </div>

          <div className="stat-card stat-card-green">
            <div className="stat-card-content">
              <div>
                <p className="stat-label">Members</p>
                <p className="stat-value stat-value-green">{stats.members}</p>
              </div>
              <div className="stat-icon-wrapper stat-icon-green">
                <UserCheck className="stat-icon" />
              </div>
            </div>
          </div>

          <div className="stat-card stat-card-blue">
            <div className="stat-card-content">
              <div>
                <p className="stat-label">Supporters</p>
                <p className="stat-value stat-value-blue">{stats.supporters}</p>
              </div>
              <div className="stat-icon-wrapper stat-icon-blue">
                <UserIcon className="stat-icon" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Members Table Card ── */}
        <div className="table-card">
          {/* Card Header */}
          <div className="table-card-header">
            <div className="table-card-header-left">
              <h3 className="table-card-title">
                <Users className="title-icon" />
                All Members
              </h3>
              <p className="table-card-description">
                View and manage all registered campaign members
              </p>
            </div>
            <button onClick={exportToCSV} className="export-button">
              <Download className="button-icon" />
              Export CSV
            </button>
          </div>

          {/* Filters */}
          <div className="table-card-body">
            <div className="filters-row">
              <div className="search-wrapper">
                <Search className="search-icon" />
                <input
                  type="text"
                  placeholder="Search by name, email, phone, or country..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
              </div>
              <div className="filter-wrapper">
                <Filter className="filter-icon" />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">All Members</option>
                  <option value="Partner">Partners</option>
                  <option value="Premium Member">Premium Members</option>
                  <option value="Member">Members</option>
                  <option value="Supporter">Supporters</option>
                </select>
              </div>
            </div>

            {/* Table */}
            <div className="table-wrapper">
              <table className="members-table">
                <thead>
                  <tr className="table-head-row">
                    <th className="th">Name</th>
                    <th className="th">Email</th>
                    <th className="th">Phone</th>
                    <th className="th">Country</th>
                    <th className="th">Status</th>
                    <th className="th">Member Since</th>
                    <th className="th">Certificate No.</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="td-empty">
                        {searchQuery || filterStatus !== "all"
                          ? "No members found matching your criteria"
                          : "No members registered yet"}
                      </td>
                    </tr>
                  ) : (
                    filteredUsers.map((member) => (
                      <tr key={member.id} className="table-row">
                        <td className="td td-name">{member.name}</td>
                        <td className="td td-muted">{member.email}</td>
                        <td className="td td-muted">{member.phone}</td>
                        <td className="td td-muted capitalize">
                          {member.country}
                        </td>
                        <td className="td">
                          <span
                            className={`tier-badge ${getMembershipColor(member.membershipStatus)}`}
                          >
                            {getMembershipIcon(member.membershipStatus)}
                            {member.membershipStatus}
                          </span>
                        </td>
                        <td className="td td-muted">
                          {new Date(member.membershipDate).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            },
                          )}
                        </td>
                        <td className="td td-mono">
                          {member.certificateNumber || "N/A"}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Results count */}
            {filteredUsers.length > 0 && (
              <p className="results-count">
                Showing {filteredUsers.length} of {allUsers.length} members
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
