import { HashRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/authContext";
import { UserProvider } from "./Context/userContext";
import { PaymentProvider } from "./Context/paymentContext";

import Homepage from "./Pages/Homepage";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProtectedRoutes from "./components/ProtectedRoutes";
import AdminDashboard from "./Pages/AdminDashboard";
import Donate from "./Pages/Donate";
import VerifyPayment from "./Pages/PaymentVerification";
import ThankYou from "./Pages/ThankYou";

import "./App.css";
// import { Support } from "./components/Support";

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <UserProvider>
          <PaymentProvider>
            <div className="App">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/donate/verify" element={<VerifyPayment />} />
                <Route path="/donate/success" element={<ThankYou />} />
                <Route path="/admin" element={<AdminDashboard />} />
                {/* <Route path="/support" element={<Support />} /> */}
                <Route element={<ProtectedRoutes />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                </Route>
              </Routes>
            </div>
          </PaymentProvider>
        </UserProvider>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
