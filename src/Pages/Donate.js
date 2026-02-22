import { useState } from "react";
import {
  Heart,
  CreditCard,
  Building2,
  Smartphone,
  DollarSign,
  Users,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Shield,
  Lock,
  Info,
  X,
  Home
} from "lucide-react";
import "./Donate.css";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";

export function Donate() {
  const [donationType, setDonationType] = useState("one-time"); // 'one-time' or 'monthly'
  const [amount, setAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card"); // 'card', 'bank', 'ussd'
  const [donorInfo, setDonorInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    anonymous: false,
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Predefined donation amounts
  const donationAmounts = [
    { value: 1000, label: "₦1,000" },
    { value: 5000, label: "₦5,000" },
    { value: 10000, label: "₦10,000" },
    { value: 25000, label: "₦25,000" },
    { value: 50000, label: "₦50,000" },
    { value: 100000, label: "₦100,000" },
  ];

  // Campaign impact examples
  const impactExamples = [
    { amount: 1000, impact: "Provides campaign materials for 5 volunteers" },
    { amount: 5000, impact: "Sponsors a community outreach event" },
    { amount: 10000, impact: "Supports voter registration drive in one ward" },
    { amount: 25000, impact: "Funds a town hall meeting" },
    { amount: 50000, impact: "Covers transportation for campaign team" },
    { amount: 100000, impact: "Sponsors a major campaign rally" },
  ];

  // Handle amount selection
  const handleAmountSelect = (value) => {
    setAmount(value);
    setCustomAmount("");
  };

  // Handle custom amount
  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setCustomAmount(value);
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

  // Get impact message for selected amount
  const getImpactMessage = () => {
    if (!amount) return null;

    const closestImpact = impactExamples
      .filter((item) => item.amount <= amount)
      .sort((a, b) => b.amount - a.amount)[0];

    return closestImpact?.impact;
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

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setShowThankYou(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setShowThankYou(false);
        resetForm();
      }, 5000);
    }, 2000);

    // In production, integrate with payment gateway here
    // Example: Paystack, Flutterwave, etc.
  };

  const resetForm = () => {
    setAmount(null);
    setCustomAmount("");
    setDonorInfo({
      fullName: "",
      email: "",
      phone: "",
      anonymous: false,
    });
    setDonationType("one-time");
    setPaymentMethod("card");
  };

  // Thank You Modal
  if (showThankYou) {
    return (
      <div className="donate-page">
        <div className="donate-container">
          <div className="thank-you-modal">
            <div className="thank-you-content">
              <div className="thank-you-icon-wrapper">
                <CheckCircle className="thank-you-icon" />
              </div>
              <h2 className="thank-you-title">Thank You for Your Support!</h2>
              <p className="thank-you-message">
                Your generous donation of{" "}
                <strong>₦{amount?.toLocaleString()}</strong> has been received.
              </p>
              <p className="thank-you-submessage">
                You are making a real difference in supporting President
                Tinubu's vision for a better Nigeria. A receipt has been sent to
                your email.
              </p>
              <div className="thank-you-actions">
                <button
                  onClick={() => setShowThankYou(false)}
                  className="thank-you-button"
                >
                  Make Another Donation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
                  value={customAmount}
                  onChange={handleCustomAmountChange}
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
          {/* <div className="security-note">
            <Shield className="security-icon" />
            <div>
              <p className="security-title">Secure Donation</p>
              <p className="security-text">
                Your payment is secure and encrypted. We never store your card
                details.
              </p>
            </div>
          </div> */}

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
