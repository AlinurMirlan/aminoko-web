import { createBrowserRouter } from "react-router-dom";
import { Authentication } from "./views/authentication/Authentication";
import { FormSignIn } from "./views/authentication/FormSignIn";
import { FormSignUp } from "./views/authentication/FormSignUp";
import { Home } from "./views/home/Home";
import { Repeat } from "./views/repeat/Repeat";
import { Index } from "./views/Index";
import { Browse } from "./views/browse/Browse";
import { Expand } from "./views/expand/Expand";
import { Settings } from "./views/settings/Settings";
import { Decks } from "./views/decks/Decks";
import { Templates } from "./views/templates/Templates";

export const routePaths = {
  none: "#",
  home: "/home",
  repeat: "/repeat",
  browse: "/browse",
  expand: "/expand",
  settings: "/settings",
  "auth-signin": "/auth/signin",
  "auth-signup": "/auth/signup",
  decks: "/decks",
  templates: "/templates",
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "repeat", element: <Repeat /> },
      { path: "browse", element: <Browse /> },
      { path: "expand", element: <Expand /> },
      { path: "settings", element: <Settings /> },
      { path: "decks", element: <Decks /> },
      { path: "templates", element: <Templates /> },
    ],
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
]);
