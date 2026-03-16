import { useEffect, useRef } from "react";
import { usePayment } from "../Context/paymentContext";
import { useNavigate, useLocation } from "react-router-dom";

const VerifyPayment = () => {
  const navigate = useNavigate();
  const { verifyPayment } = usePayment();
  const { search } = useLocation(); // ✅ reads ?reference=xxx from hash URL
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
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <p>Verifying your payment, please wait...</p>
    </div>
  );
};

export default VerifyPayment;
