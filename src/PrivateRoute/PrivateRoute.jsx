// src/components/PrivateRoute.jsx
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const location = useLocation();

  // Authentication logic: localStorage থেকে token চেক করছি
  const token = localStorage.getItem("accessToken");
  const isAuthenticated = token !== null && token !== "";

  if (!isAuthenticated) {
    // লগইন না থাকলে home বা login পেজে redirect করবে এবং যেখানে ছিলো সেই path স্মরণ করবে
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}
