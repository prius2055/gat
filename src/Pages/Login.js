import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { Lock, Mail, AlertCircle } from "lucide-react";
import Logo from "../img/logo.png";
import { Link, useNavigate } from "react-router-dom";

import "./Login.css";

export default function Login({ onLoginSuccess }) {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  /* =========================
     Handle change
  ========================= */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // clear field error when typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  /* =========================
     Validation
  ========================= */
  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setServerError("");

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);

    console.log("Submitting login with data:", formData);

    const loginSuccess = await login(formData);

    console.log("Login response:", loginSuccess);

    if (loginSuccess.status && loginSuccess.user.role === "admin") {
      setTimeout(() => {
        navigate("/admin");
      }, 2000);
    } else if (loginSuccess.status && loginSuccess.user.role === "member") {
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } else {
      setServerError("Invalid email or password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <div className="login-logo">
            <img src={Logo} alt="Global Alliance Logo" className="login-logo-image" />
            <span className="logo-text">
              Global Alliance for Tinubu Campaign
            </span>
          </div>
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">
            Sign in to your Global Alliance account
          </p>
        </div>

        <div className="login-card">
          <div className="card-header">
            <h3 className="login-card-title">Login</h3>
            <p className="card-description">
              Enter your credentials to access your dashboard
            </p>
          </div>
          <div className="card-content">
            <form onSubmit={handleSubmit} className="login-form">
              {/* server/global error */}
              {serverError && (
                <div className="error-alert">
                  <AlertCircle className="alert-icon" />
                  <p>{serverError}</p>
                </div>
              )}

              <div className="form-field">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                {errors.email && (
                  <p className="field-error">
                    <AlertCircle className="alert-icon" />
                    <span className="field-error">{errors.email}</span>
                  </p>
                )}
                <div className="input-wrapper">
                  {/* <Mail className="input-icon" /> */}
                  <input
                    id="email"
                    type="email"
                    placeholder="yourname@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                {errors.password && (
                  <p className="field-error">
                    <AlertCircle className="alert-icon" />
                    <span className="field-error">{errors.password}</span>
                  </p>
                )}
                <div className="input-wrapper">
                  {/* <Lock className="input-icon" /> */}
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    name="password"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className={`submit-button ${isLoading ? "button-loading" : ""}`}
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </button>

              <div className="switch-form">
                <Link to="/register" className="switch-button">
                  Don't have an account? Register here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
