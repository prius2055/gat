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