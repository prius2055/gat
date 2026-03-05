import { useState, useMemo, useEffect, useCallback } from "react";
import { useAuth } from "../Context/authContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
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

// const BASE_URL = `http://localhost:5000/api/v1`;

const BASE_URL = `https://gat-backend-xi05.onrender.com/api/v1`;

export default function AdminDashboard({ onLogout }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user, logout } = useAuth();
  // const { getAllUsers } = useUser();

  const getAllUsers = useCallback(async () => {
    const token = localStorage.getItem("token");

    if (!token) return;

    setLoading(true);

    try {
      console.log("🔵 Getting all users...");

      const response = await fetch(`${BASE_URL}/admin/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        setAllUsers(data.users || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  const handleLogout = () => {
    logout();
  };

  const getMembershipColor = (status) => {
    switch (status) {
      case "partner":
        return "badge-purple";
      case "premium_member":
        return "badge-amber";
      case "member":
        return "badge-green";
      default:
        return "badge-gray";
    }
  };

  const getMembershipIcon = (status) => {
    switch (status) {
      case "partner":
        return <Briefcase className="tier-icon" />;
      case "premium_member":
        return <Award className="tier-icon" />;
      case "member":
        return <UserCheck className="tier-icon" />;
      default:
        return <UserIcon className="tier-icon" />;
    }
  };

  console.log("All Users:", allUsers);

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
      filtered = filtered.filter((u) => u.role === filterStatus);
    }

    return filtered;
  }, [allUsers, searchQuery, filterStatus]);

  const stats = useMemo(() => {
    const total = allUsers.length;
    const partners = allUsers.filter((u) => u.role === "partner").length;
    const premiumMembers = allUsers.filter(
      (u) => u.role === "premium_member",
    ).length;
    const members = allUsers.filter((u) => u.role === "member").length;

    return { total, partners, premiumMembers, members };
  }, [allUsers]);

  const exportToCSV = () => {
    const headers = [
      "Name",
      "Email",
      "Phone",
      "Country",
      "Membership Status",
      "Member Since",
      "Membership Number",
    ];
    const rows = filteredUsers.map((u) => [
      u.name,
      u.email,
      u.phone,
      u.country,
      u.role,
      new Date(u.membershipDate).toLocaleDateString(),
      u.membershipNumber || "N/A",
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

  if (loading) return <div>Loading...</div>;

  /* ── Access Denied ── */
  if (!user || !user.role === "admin") {
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
            <Link to="/login" className="access-denied-button">
              Return to Login
            </Link>
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
              <img src={Logo} alt="GAT Logo" className="admin-logo-image" />
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
                  <option value="partner">Partners</option>
                  <option value="premium_member">Premium Members</option>
                  <option value="member">Members</option>
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
                    <th className="th">Membership Status</th>
                    <th className="th">Member Since</th>
                    <th className="th">Membership No.</th>
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
                            className={`tier-badge ${getMembershipColor(member.role)}`}
                          >
                            {getMembershipIcon(member.role)}
                            {member.role}
                          </span>
                        </td>
                        <td className="td td-muted">
                          {new Date(member.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            },
                          )}
                        </td>
                        <td className="td td-mono">
                          {member.memberShipNumber || "N/A"}
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
