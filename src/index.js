import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import Contact from "./routes/contact";
import Skills from "./routes/skills";
import { action as destroyAction } from "./routes/destroy";
import Root from "./routes/root";
import FightWatch, {
  action as fightWatchAction,
  loader as fightWatchLoader,
} from "./routes/fight-watch";
import Bio from "./routes/bio";
import Resume from "./routes/resume";
import CoverLetter from "./routes/cover-letter";
import FightWatchContextProvider from "./store/context/fight-watch-context";

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
    ],
  },
  {
    path: "/fight-watch",
    element: (
      <FightWatchContextProvider>
        <FightWatch />
      </FightWatchContextProvider>
    ),
    loader: fightWatchLoader,
    action: fightWatchAction,
    children: [
      {
        path: "/fight-watch/destroy/:id",
        action: destroyAction,
      },
    ],
  },
  {
    path: "/cover-letter",
    element: <CoverLetter />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

//make main.jsx the entry point in package.json
