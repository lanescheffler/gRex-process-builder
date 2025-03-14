import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./features/navigate/Login";
import Dashboard from "./features/dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginHandler = (status: boolean | ((prevState: boolean) => boolean)) => {
    setIsAuthenticated(status);
  };

  return (
    <Routes>
      {/* Login Page */}
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<Login onLogin={loginHandler} />} />

      {/* Protected Dashboard Route */}
      <Route
        path="/dashboard"
        element={isAuthenticated ? <Dashboard /> : <Navigate replace to="/login" />}
      />

      {/* Catch-all Route Redirecting to Login */}
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
