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
import Productivity, {
  action as productivityAction,
  loader as productivityLoader,
} from "./routes/productivity";
import TaskModal, {
  loader as taskModalLoader,
  action as taskModalAction,
} from "./routes/task-modal";
import Chart, {loader as progressLoader} from "./routes/chart";

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
  },
  {
    path: "/productivity",
    element: <Productivity />,
    loader: productivityLoader,
    action: productivityAction,
    children: [
      {
        path: "task-modal/:id",
        element: <TaskModal />,
        loader: taskModalLoader,
        action: taskModalAction,
      },
      {
        path: "chart",
        element: <Chart />,
        loader: progressLoader,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);

//make main.jsx the entry point in package.json
