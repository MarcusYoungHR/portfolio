import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import FightWatch from "./routes/fight-watch";
import 'bootstrap/dist/css/bootstrap.min.css';
import Bio from "./routes/bio";
import Resume from "./routes/resume";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Contact from './routes/contact'
import Skills from "./routes/skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/Bio",
        element: <Bio />,
      },
      {
        path: "/Resume",
        element: <Resume />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Skills",
        element: <Skills />,
      },
    ]
  },
  {
    path: "/fight-watch",
    element: <FightWatch />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

//make main.jsx the entry point in package.json

