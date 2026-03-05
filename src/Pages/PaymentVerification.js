// import { useEffect } from "react";
// import { usePayment } from "../Context/paymentContext";
// import { useNavigate, useSearchParams } from "react-router-dom";

// const VerifyPayment = () => {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const { verifyPayment } = usePayment();

//   useEffect(() => {
//     const reference = searchParams.get("reference");

//     if (!reference) return;

//     const run = async () => {
//       console.log("🟡 reference:", reference);
//       const result = await verifyPayment(reference);
//       console.log("🟡 result:", result);

//       if (result === null) return;
//       if (result === true) {
//         navigate("/donate/success", { replace: true });
//       } else {
//         navigate("/donate?failed=true");
//       }
//     };

//     run();
//   }, []);

//   return <p>Verifying payment, please wait...</p>;
// };

// export default VerifyPayment;

// // ─────────────────────────────────────────────
// // VerifyPayment.js
// // ─────────────────────────────────────────────
// import { useEffect, useRef } from "react";
// import { usePayment } from "../Context/paymentContext";
// import { useNavigate, useSearchParams } from "react-router-dom";

// const VerifyPayment = () => {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const { verifyPayment } = usePayment();
//   const hasRun = useRef(false); // ✅ persists within this mount cycle

//   useEffect(() => {
//     if (hasRun.current) return;
//     hasRun.current = true;

//     const reference = searchParams.get("reference");
//     console.log("1️⃣ reference from URL:", reference);

//     if (!reference) {
//       navigate("/donate?failed=true", { replace: true });
//       return;
//     }

//     const run = async () => {
//       console.log("2️⃣ calling verifyPayment...");
//       const result = await verifyPayment(reference);
//       console.log("3️⃣ result:", result);

//       if (result === true) {
//         console.log("4️⃣ navigating to success...");
//         navigate("/donate/success", { replace: true });
//       } else {
//         console.log("4️⃣ navigating to failed...");
//         navigate("/donate?failed=true", { replace: true });
//       }
//     };

//     run();
//   }, []);

//   return (
//     <div style={{ textAlign: "center", padding: "2rem" }}>
//       <p>Verifying your payment, please wait...</p>
//     </div>
//   );
// };

// export default VerifyPayment;

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

    console.log("1️⃣ window.location.search:", window.location.search);
    console.log("2️⃣ window.location.href:", window.location.href);
    console.log("3️⃣ reference:", reference);

    if (!reference) {
      navigate("/donate?failed=true", { replace: true });
      return;
    }

    const run = async () => {
      const result = await verifyPayment(reference);
      console.log("4️⃣ result:", result);

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
