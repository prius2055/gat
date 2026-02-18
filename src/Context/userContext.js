import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const UserContext = createContext();

// const BASE_URL = `http://localhost:5000/api/v1`;

const BASE_URL = `https://gat-backend-xi05.onrender.com/api/v1`;

export const UserProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState(null);
  const [setLoading] = useState(true);

  // const navigate = useNavigate();

  const getAllUsers = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      console.log("🔵 Getting all users...");

      const response = await fetch(`${BASE_URL}/verify`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setAllUsers(data.user);
      } else {
        console.log("⚠️ Token invalid, clearing...");
        localStorage.removeItem("token");
        setAllUsers(null);
      }
    } catch (error) {
      console.error("❌ Auth check failed:", error);
      localStorage.removeItem("token");
      setAllUsers(null);
    } finally {
      setLoading(false);
    }
  };

  const getSingleUser = () => {
    console.log("Single User");
  };

  return (
    <UserContext.Provider
      value={{
        allUsers,
        getAllUsers,
        getSingleUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
