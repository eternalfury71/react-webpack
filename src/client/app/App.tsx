import React from "react";
import { Home } from "../components/pages/home";
import { LoginContainer } from "../components/pages/login/login-container";
import { Private } from "../components/pages/private";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "../features/auth";
import Layout from "./routes/Layout";
import { ProtectedRoute } from "./routes/protected-route";

export function App() {
  const router = createBrowserRouter([
    {
      element: (
        <Layout>
          <Outlet />
        </Layout>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <LoginContainer />,
        },
        {
          path: "/private",
          element: (
            <ProtectedRoute>
              <Private />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
