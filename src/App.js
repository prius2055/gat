import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import { UserProvider } from "./Context/userContext";

import Homepage from "./Pages/Homepage";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProtectedRoutes from "./components/ProtectedRoutes";
import AdminDashboard from "./Pages/AdminDashboard";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <div className="App">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
            </Routes>
          </div>
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
