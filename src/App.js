import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import { UserProvider } from "./Context/userContext";

import Homepage from "./Pages/Homepage";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProtectedRoutes from "./components/ProtectedRoutes";
import AdminDashboard from "./Pages/AdminDashboard";
import Donate from "./Pages/Donate";

import "./App.css";
// import { Support } from "./components/Support";

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <UserProvider>
          <div className="App">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/admin" element={<AdminDashboard />} />
              {/* <Route path="/support" element={<Support />} /> */}
              <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
            </Routes>
          </div>
        </UserProvider>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
