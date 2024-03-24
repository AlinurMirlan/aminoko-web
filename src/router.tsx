import { Navigate, createBrowserRouter } from "react-router-dom";
import { Authentication } from "./views/authentication/Authentication";
import { FormSignIn } from "./views/authentication/FormSignIn";
import { FormSignUp } from "./views/authentication/FormSignUp";
import { Home } from "./views/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="auth" />,
  },
  {
    path: "auth",
    element: <Authentication />,
    children: [
      { index: true, element: <FormSignIn /> },
      { path: "signin", element: <FormSignIn /> },
      { path: "signup", element: <FormSignUp /> },
    ],
  },
  {
    path: "home",
    element: <Home />,
  },
]);
