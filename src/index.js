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

import { action as destroyAction } from "./routes/destroy";
import Root from "./routes/root";
import FightWatch, {
  action as fightWatchAction,
  loader as fightWatchLoader,
} from "./routes/fight-watch";
import CoverLetter from "./routes/cover-letter";
import Productivity, {
  action as productivityAction,
  loader as productivityLoader,
} from "./routes/productivity";

import FightWatchContextProvider from "./store/context/fight-watch-context";
import ProductivityContextProvider from "./store/context/productivity-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

//make main.jsx the entry point in package.json
