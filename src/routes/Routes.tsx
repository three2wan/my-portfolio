import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../app/App";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      //   { path: "", element: <Home /> },
      //   { path: "skills", element: <Skills /> },
      //   { path: "projects", element: <Projects /> },
      //   { path: "resume", element: <Resume /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
