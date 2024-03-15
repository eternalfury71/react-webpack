import { useAuth } from "../../features/auth";
import React from "react";
// import { LoginContainer } from "../../components/pages/login/login-container";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  if (user.isAuthenticated === false) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
