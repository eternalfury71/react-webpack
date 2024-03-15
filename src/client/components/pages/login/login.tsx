import React, { FormEvent, useState } from "react";

import { Form } from "../../../shared/form";
type LoginProps = {
  onLogin: (userName: string, password: string) => void;
  errorMessage: string | null;
};
export function Login({ onLogin, errorMessage }: LoginProps) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(userName, password);
  };
  return (
    <>
      <Form handleSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            className="appearance-none shadow border rounded w-full py-2 px-3 text-gray-700 "
            placeholder="Enter username"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            autoFocus
          />
        </div>
        <div className="mb-6">
          <input
            className="appearance-none shadow border rounded w-full py-2 px-3 text-gray-700"
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log In
          </button>
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
        </div>
      </Form>
    </>
  );
}
