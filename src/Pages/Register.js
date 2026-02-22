import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import Logo from "../img/logo.png";
import {
  User,
  Mail,
  Phone,
  Lock,
  Globe,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import "./Register.css";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    country: "",
    agreeTerms: false,
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // clear error for that field when typing
    setFieldErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // -----------------------------
  // Validate form
  // -----------------------------
  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) errors.name = "Full name is required";

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) errors.phone = "Phone number is required";

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (!formData.country) errors.country = "Please select your country";

    if (!formData.agreeTerms) errors.agreeTerms = "You must agree to the terms";

    return errors;
  };

  // -----------------------------
  // Submit
  // -----------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setIsLoading(true);

    console.log("Submitting registration with data:", formData);

    const registrationSuccess = await register(formData);

    console.log(registrationSuccess);

    if (registrationSuccess.status) {
      setSuccess(true);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } else {
      setFieldErrors({
        email: "This email may already be registered",
      });
    }

    setIsLoading(false);
  };

  if (success) {
    return (
      <div className="register-page">
        <div className="success-container">
          <div className="success-card">
            <div className="success-content">
              <div className="success-icon-wrapper">
                <CheckCircle className="success-icon" />
              </div>
              <h3 className="success-title">Registration Successful!</h3>
              <p className="success-message">
                Welcome to the Global Alliance for Tinubu Campaign. Redirecting
                to your dashboard...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // -----------------------------
  // UI
  // -----------------------------
  const ErrorText = ({ msg }) =>
    msg ? (
      <p className="field-error">
        <AlertCircle size={14} /> {msg}
      </p>
    ) : null;

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-header">
          <div className="register-logo">
            <img src={Logo} alt="Global Alliance Logo" className="logo-image" />
            <span className="register-text">
              Global Alliance for Tinubu Campaign
            </span>
          </div>
          <h2 className="register-title">Join the Movement</h2>
          <p className="register-subtitle">
            Become a member of the Global Alliance for Tinubu
          </p>
        </div>

        <div className="register-card">
          <div className="card-header">
            <h3 className="register-card-title">Create Account</h3>
            <p className="card-description">
              Register to access exclusive benefits and opportunities
            </p>
          </div>
          <div className="card-content">
            <form onSubmit={handleSubmit} className="register-form">
              <div className="form-field">
                <ErrorText msg={fieldErrors.name} />
                <label htmlFor="name" className="form-label">
                  Full Name *
                </label>
                <div className="input-wrapper">
                  {/* <User className="input-icon" /> */}
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <ErrorText msg={fieldErrors.email} />
                <label htmlFor="email" className="form-label">
                  Email Address *
                </label>
                <div className="input-wrapper">
                  {/* <Mail className="input-icon" /> */}
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="yourname@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <ErrorText msg={fieldErrors.phone} />
                <label htmlFor="phone" className="form-label">
                  Phone Number *
                </label>
                <div className="input-wrapper">
                  {/* <Phone className="input-icon" /> */}
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+234 XXX XXX XXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <ErrorText msg={fieldErrors.password} />
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-wrapper">
                  {/* <Lock className="input-icon" /> */}
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <small className="password-hint">Minimum 8 characters</small>
              </div>

              <div className="form-field">
                <ErrorText msg={fieldErrors.confirmPassword} />
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <div className="input-wrapper">
                  {/* <Lock className="input-icon" /> */}
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <ErrorText msg={fieldErrors.country} />
                <label htmlFor="country" className="form-label">
                  Country/Region *
                </label>
                <div className="input-wrapper">
                  {/* <Globe className="input-icon select-icon" /> */}
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select your country</option>
                    <option value="usa">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="canada">Canada</option>
                    <option value="nigeria">Nigeria</option>
                    <option value="ghana">Ghana</option>
                    <option value="south-africa">South Africa</option>
                    <option value="uae">United Arab Emirates</option>
                    <option value="germany">Germany</option>
                    <option value="france">France</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <ErrorText msg={fieldErrors.agreeTerms} />
                <label htmlFor="agreeTerms" className="checkbox-group">
                  <input
                    id="agreeTerms"
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    required
                  />
                  <div className="terms-text">
                    <p>I Agree</p>
                    <p>to the terms and conditions *</p>
                  </div>
                </label>
              </div>

              <div className="benefits-box">
                <h4 className="benefits-title">Member Benefits:</h4>
                <ul className="benefits-list">
                  <li>✓ Access to the Presidential Corridor</li>
                  <li>✓ Priority Access to Appointments</li>
                  <li>✓ Contract Opportunities</li>
                  <li>✓ Official Certificate of Acknowledgement</li>
                </ul>
              </div>

              <button
                type="submit"
                className={`submit-button ${isLoading ? "button-loading" : ""}`}
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </button>

              <div className="switch-form">
                <Link to="/login" className="switch-button">
                  Already a Member? Login
                </Link>
              </div>
            </form>

           
          </div>
        </div>
      </div>
    </div>
  );
}
