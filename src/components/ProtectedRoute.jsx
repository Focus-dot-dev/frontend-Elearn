import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  // Check if the user is logged in (e.g., by checking a token in localStorage)
  return !!localStorage.getItem("authToken"); // Replace with your authentication logic
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    // Redirect to login page if not logged in
    return <Navigate to="/login" replace />;
  }

  // Render the protected page if logged in
  return children;
};

export default ProtectedRoute;