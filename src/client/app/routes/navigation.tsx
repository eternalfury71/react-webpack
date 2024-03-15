import React from "react";
import { Home } from "../../components/pages/home";
import { Private } from "../../components/pages/private";
import { LoginContainer } from "../../components/pages/login/login-container";

export const navigation = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
    isPrivate: false,
    onMenu: true,
  },
  {
    path: "/login",
    name: "Login",
    element: <LoginContainer />,
    isPrivate: false,
    onMenu: false,
  },
  {
    path: "/private",
    name: "Private",
    element: <Private />,
    isPrivate: true,
    onMenu: true,
  },
];
