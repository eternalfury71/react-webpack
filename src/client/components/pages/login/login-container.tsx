import { useNavigate } from "react-router";
import { useAuth } from "../../../features/auth";
import { Login } from "./login";
import React, { useState } from "react";

export function LoginContainer() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const { logIn } = useAuth();
  const handleLogin = async (userName: string, password: string) => {
    try {
      await logIn(userName, password);
      navigate("/private");
    } catch (error) {
      setErrorMessage(error);
    }
  };
  return <Login onLogin={handleLogin} errorMessage={errorMessage} />;
}
