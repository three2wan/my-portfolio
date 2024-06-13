import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../app/App";
import Home from "../app/pages/Home";
import Skills from "../app/pages/Skill";
import Projects from "../app/pages/Project";
import Experiences from "../app/pages/Experience";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "skills", element: <Skills /> },
      { path: "projects", element: <Projects /> },
      { path: "experiences", element: <Experiences /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
