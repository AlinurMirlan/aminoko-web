import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const container = document.getElementById("root");
if (container == null) {
  throw new Error(
    "No root element found. Please ensure you have a div with id 'root' in your index.html file."
  );
}

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
