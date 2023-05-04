import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./pages/Home";
import Programs from "./pages/Programs";
import Program from "./pages/Program";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/programs",
    element: <Programs />,
  },
  // {
  //   path: "/program/:programid/workout/:workoutid/exercises",
  //   element: <Program />,
  // },
  {
    path: "/program/:id",
    element: <Program />,
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
