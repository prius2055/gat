import { Link } from "react-router-dom";
import { CheckCircle, Home, ArrowLeft } from "lucide-react";

import "./Donate.css";

export default function ThankYou() {
  const handleGoHome = () => {
    // Clears the query params and navigates to home hash route
    window.location.replace(window.location.origin);
  };

  return (
    <div className="donate-page">
      <div className="donate-container thank-you-content">
        <CheckCircle size={70} />
        <h2>Thank You for Your Support ❤️</h2>
        <p>Your donation has been received successfully.</p>
        <button onClick={handleGoHome} className="donate-home-btn">
          <ArrowLeft className="button-icon" />
          <span> Back to Home</span>
          <Home className="button-icon" />
        </button>
      </div>
    </div>
  );
}
