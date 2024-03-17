import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
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
    <>
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={loginHandler} />} />
        <Route 
          path="/dashboard" 
          element={isAuthenticated ? <Dashboard/> : <Navigate replace to="/login" />} 
        />
        {/* Redirect to login if not authenticated */}
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
