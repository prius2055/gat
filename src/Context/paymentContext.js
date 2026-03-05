// import { createContext, useContext, useState, useMemo, useRef } from "react";

// const PaymentContext = createContext();

// const BASE_URL = `http://localhost:5000/api/v1`;
// // const BASE_URL = `https://vtu-backend-wjn6.onrender.com/api/v1`;

// export const PaymentProvider = ({ children }) => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const verifyingRef = useRef(false);

//   const makePayment = async (payload) => {
//     try {
//       setLoading(true);

//       const res = await fetch(`${BASE_URL}/donate`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();
//       // console.log(data);

//       if (data.status !== "success") {
//         throw new Error(data.message || "Payment initialization failed");
//       }

//       // 🔴 Redirect user to Paystack checkout
//       window.location.href = data.authorization_url;
//     } catch (error) {
//       // console.error("Fund wallet error:", error.message);
//       setError(error.message);
//     }
//   };

//   const verifyPayment = async (reference) => {
//     if (verifyingRef.current) return null;
//     verifyingRef.current = true;

//     setLoading(true);
//     setError(null);

//     try {
//       const res = await fetch(
//         `${BASE_URL}/donate/verify?reference=${reference}`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         },
//       );

//       console.log("🔵 res.ok:", res.ok);
//       console.log("🔵 res.status:", res.status);

//       const data = await res.json();

//       console.log("🔵 full response data:", data);

//       if (!res.ok) throw new Error(data.message);

//       return true;
//     } catch (error) {
//       console.log("🔴 error caught:", error.message);
//       setError(error.message);
//       return false;
//     } finally {
//       setLoading(false);
//       verifyingRef.current = false;
//     }
//   };

//   return (
//     <PaymentContext.Provider
//       value={{
//         makePayment,
//         verifyPayment,
//       }}
//     >
//       {children}
//     </PaymentContext.Provider>
//   );
// };

// export const usePayment = () => useContext(PaymentContext);


// ─────────────────────────────────────────────
// PaymentContext.js
// ─────────────────────────────────────────────
import { createContext, useContext, useState, useRef } from "react";

const PaymentContext = createContext();

const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/v1";

export const PaymentProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const makePayment = async (payload) => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(`${BASE_URL}/donate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || data.status !== "success") {
        throw new Error(data.message || "Payment initialization failed");
      }

      // Redirect to Paystack — app unmounts here, remounts after redirect
      window.location.href = data.authorization_url;
    } catch (err) {
      setError(err.message);
      setLoading(false);
      return false;
    }
  };

  const verifyPayment = async (reference) => {
    setLoading(true);
    setError(null);

    try {
      // ✅ GET request — we're just fetching verification result
      // reference is in the query string, no body needed
      const res = await fetch(
        `${BASE_URL}/donate/verify?reference=${reference}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("🔵 res.status:", res.status);

      const data = await res.json();

      console.log("🔵 verify response:", data);

      if (!res.ok || data.status !== "success") {
        throw new Error(data.message || "Verification failed");
      }

      return true;
    } catch (err) {
      console.log("🔴 verify error:", err.message);
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return (
    <PaymentContext.Provider value={{ makePayment, verifyPayment, loading, error }}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => useContext(PaymentContext);