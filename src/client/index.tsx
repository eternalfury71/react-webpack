import React from "react";
import { createRoot } from "react-dom/client";
import "./app/assets/styles/style.css";
import { App } from "./app/App";

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error("Cannot find root element with id root");
}
const root = createRoot(rootEl);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
