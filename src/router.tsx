import { Navigate, createBrowserRouter } from "react-router-dom";
import { Authentication } from "./Authentication";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="auth" />,
  },
  {
    path: "auth",
    element: <Authentication />,
    children: [
      { index: true, element: <SignInForm /> },
      { path: "signin", element: <SignInForm /> },
      { path: "signup", element: <SignUpForm /> },
    ],
  },
]);
