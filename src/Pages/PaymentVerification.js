import { useEffect, useRef } from "react";
import { usePayment } from "../Context/paymentContext";
import { useNavigate } from "react-router-dom";
import "./Donate.css";

const VerifyPayment = () => {
  const navigate = useNavigate();
  const { verifyPayment } = usePayment();
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    // ✅ Read from the FULL URL, not just the hash portion
    const params = new URLSearchParams(window.location.search);
    const reference = params.get("reference");

    if (!reference) {
      navigate("/donate?failed=true", { replace: true });
      return;
    }

    const run = async () => {
      const result = await verifyPayment(reference);

      if (result === true) {
        navigate("/donate/success", { replace: true });
      } else {
        navigate("/donate?failed=true", { replace: true });
      }
    };

    run();
  }, []);

  return (
    <div className="donate-status">
      <div className="thank-you-content">
        <div className="verify-spinner" aria-hidden="true"></div>
        <p>Verifying your payment, please wait...</p>
      </div>
    </div>
  );
};

export default VerifyPayment;
