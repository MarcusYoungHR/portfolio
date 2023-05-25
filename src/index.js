import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";

import "./index.css";
import "./styles/custom.scss";
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
import Progress, { action as ProgressAction } from "./routes/progress";
import Chart from "./routes/chart";
import WastedTime, { action as wastedTimeAction } from "./routes/wasted-time";
import Tasks, { action as tasksAction } from "./routes/tasks";

import FightWatchContextProvider from "./store/context/fight-watch-context";
import ProductivityContextProvider from "./store/context/productivity-context";

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
    element: (
      <ProductivityContextProvider>
        <Productivity />
      </ProductivityContextProvider>
    ),
    loader: productivityLoader,
    action: productivityAction,
    children: [
      {
        index: true,
        element: <Chart />,
      },

      {
        path: "tasks",
        element: <Tasks />,
        action: tasksAction,
        children: [
          {
            index: true,
            element: (
              <>
                <div className="col">
                  <h1 className="text-light">Select A Task</h1>
                </div>
              </>
            ),
          },
          {
            path: "progress/:taskId",
            element: <Progress />,
            action: ProgressAction,
          },
        ],
      },
      {
        path: "wasted-time",
        element: <WastedTime />,
        action: wastedTimeAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

//make main.jsx the entry point in package.json
