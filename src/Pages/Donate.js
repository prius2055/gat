import { useState } from "react";
import {
  Heart,

  ArrowRight,
  ArrowLeft,
  Shield,
  Lock,

  Home,
} from "lucide-react";

import "./Donate.css";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import { usePayment } from "../Context/paymentContext";

export default function Donate() {
  // const [donationType, setDonationType] = useState("one-time"); // 'one-time' or 'monthly'
  const [amount, setAmount] = useState("");

  // const [paymentMethod, setPaymentMethod] = useState("card"); // 'card', 'bank', 'ussd'
  const [donorInfo, setDonorInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    anonymous: false,
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const { makePayment } = usePayment();



  // Handle custom amount
  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setAmount(value ? parseInt(value) : null);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDonorInfo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  const resetForm = () => {
    setAmount("");
    setDonorInfo({
      fullName: "",
      email: "",
      phone: "",
      anonymous: false,
    });
  };

  // Handle donation submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!amount || amount < 100) {
      alert("Minimum donation amount is ₦100");
      return;
    }

    if (!donorInfo.fullName || !donorInfo.email || !donorInfo.phone) {
      alert("Please fill in all required fields");
      return;
    }

    setIsProcessing(true);

    const payload = {
      amount: amount,
      fullName: donorInfo.fullName,
      email: donorInfo.email,
      phone: donorInfo.phone,
    };

    console.log(payload);

    const result = await makePayment(payload);

    if (!result) {
      setIsProcessing(false);
      resetForm();
    }

    console.log(result);
  };

  return (
    <div className="donate-page">
      <div className="donate-container">
        {/* Header Section */}
        <div className="donate-header">
          <div className="donate-header-icon">
            <Heart className="header-icon" />
          </div>
          <h1 className="donate-title">Support the Movement</h1>
          <p className="donate-subtitle">
            Join thousands of Nigerians supporting President Tinubu's vision for
            a renewed hope. Every contribution makes a difference.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="donate-form">
          {/* Amount Selection */}
          <div className="form-section">
            {/* <h3 className="section-title">Select Amount</h3>
            <div className="amount-grid">
              {donationAmounts.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  className={`amount-button ${amount === item.value ? "selected" : ""}`}
                  onClick={() => handleAmountSelect(item.value)}
                >
                  {item.label}
                </button>
              ))}
            </div> */}

            {/* Custom Amount */}
            <div className="custom-amount-wrapper">
              <label className="custom-amount-label">Enter Amount</label>
              <div className="custom-amount-input-wrapper">
                <span className="currency-symbol">₦</span>
                <input
                  type="text"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={handleAmountChange}
                  className="custom-amount-input"
                />
              </div>
            </div>

            {/* Impact Message */}
            {/* {amount && (
              <div className="impact-message">
                <CheckCircle className="impact-icon" />
                <p>
                  {getImpactMessage() ||
                    `Your donation of ₦${amount.toLocaleString()} will make a significant impact!`}
                </p>
              </div>
            )} */}
          </div>

          {/* Donor Information */}
          <div className="form-section">
            <h3 className="section-title">Your Information</h3>
            <div className="donor-info-grid">
              <div className="form-field">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={donorInfo.fullName}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-field">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={donorInfo.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="form-field">
                <label className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={donorInfo.phone}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="080XXXXXXXX"
                  required
                />
              </div>
            </div>
          </div>

          {/* Security Note */}
          <div className="security-note">
            <Shield className="security-icon" />
            <div>
              <span className="security-title">Secure Donation - </span>
              <span className="security-text">
                Your payment is secure and encrypted. We never store your card
                details.
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <div className="donate-btn-group">
            <Link to="/" className="donate-home-btn">
              <ArrowLeft className="button-icon" />
              <span> Back to Home</span>
              <Home className="button-icon" />
            </Link>
            <button
              type="submit"
              className="donate-submit-button"
              disabled={isProcessing || !amount}
            >
              {isProcessing ? (
                <>
                  <div className="spinner"></div>
                  Processing...
                </>
              ) : (
                <>
                  <Lock className="button-icon" />
                  Proceed to pay{" "}
                  {amount ? `₦${amount.toLocaleString()}` : "now"}
                  <ArrowRight className="button-icon" />
                </>
              )}
            </button>
          </div>

          {/* Disclaimer */}
          <p className="disclaimer">
            By clicking "Donate", you agree to our terms and conditions.
            Donations are non-refundable and go directly to supporting campaign
            activities.
          </p>
        </form>
      </div>
    </div>
  );
}
