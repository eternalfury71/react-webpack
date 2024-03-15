import React, { ReactNode, createContext, useContext, useState } from "react";

type User = {
  name: string;
  isAuthenticated: boolean;
};
type AuthContextType = {
  user: User;
  logIn: (userName: string, password: string) => Promise<string>;
  logOut: () => void;
};
const AuthContext = createContext<AuthContextType | null>(null);
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Err");
  return context as AuthContextType;
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState({ name: "", isAuthenticated: false });
  const logIn = (userName: string, password: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (password === "123") {
        setUser({ name: userName, isAuthenticated: true });
        resolve("Authenticated");
      } else {
        reject("incorrect data");
      }
    });
  };

  const logOut = () => {
    setUser({ ...user, isAuthenticated: false });
  };
  return (
    <>
      <AuthContext.Provider
        value={{
          user,
          logIn,
          logOut,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}
