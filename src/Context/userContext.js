import { createContext, useContext } from "react";
// import { useNavigate } from "react-router-dom";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // const [loading, setLoading] = useState(true);

  // const navigate = useNavigate();

  // const getAllUsers = async () => {
  //   const token = localStorage.getItem("token");

  //   if (!token) {
  //     setLoading(false);
  //     return;
  //   }

  //   try {
  //     console.log("🔵 Getting all users...");

  //     const response = await fetch(`${BASE_URL}/admin/users`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       setAllUsers(data.user);
  //     } else {
  //       console.log("⚠️ Token invalid, clearing...");
  //       localStorage.removeItem("token");
  //       setAllUsers(null);
  //     }
  //   } catch (error) {
  //     console.error("❌ Auth check failed:", error);
  //     localStorage.removeItem("token");
  //     setAllUsers(null);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const getSingleUser = () => {
    console.log("Single User");
  };

  return (
    <UserContext.Provider
      value={{
        getSingleUser,
        // loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
