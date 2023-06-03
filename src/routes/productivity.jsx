import { Link, useLoaderData, redirect, useLocation} from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import SpinnerOverlay from "../components/spinner-overlay";
import {
  addTask,
  loadProductivityData,
  updateWastedTime,
  updateProgress,
} from "../http/productivity";
import TaskAddEdit from "../components/productivity/task-add-edit";
import Tasks from "../components/productivity/tasks";
import Chart from "../components/productivity/chart";
import { ProductivityContext } from "../store/context/productivity-context";
import "../styles/productivity.css";
import { Link as ScrollLink, Element } from "react-scroll";
import ScrollToTop from "../components/scroll-to-top";

export async function action({ params, request }) {
  const formData = await request.formData();
  const intent = formData.get("intent");
  const updates = Object.fromEntries(formData);

  if (intent === "update progress") {
    const progress = await updateProgress(updates);
    return redirect(`/productivity`);
  }

  if (intent === "wasted time") {
    const time = await updateWastedTime(updates);
    return redirect(`/productivity`);
  }

  const task = await addTask(updates);
  return redirect(`/productivity`);
}

export async function loader() {
  const productivityData = await loadProductivityData();
  return productivityData.data;
}

export default function Productivity() {
  const [type, setType] = useState(null);
  const [modalIsShowing, setModalIsShowing] = useState(false);
  const { updateTasks, updateProgress, updateWastedTime } =
    useContext(ProductivityContext);

  const productivityData = useLoaderData();

  useEffect(() => {
    if (productivityData) {
      updateTasks(productivityData.tasks);
      updateProgress(productivityData.progress);
      updateWastedTime(productivityData.wastedTime);
    }
  }, [productivityData]);


  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-light opacity-hover text-decoration-none fs-4 me-3"
                  containerId="portfolio"
                >
                  <span className="me-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <ScrollLink
                  to="tasks"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-light opacity-hover text-decoration-none fs-4 me-3 nav-link-productivity"
                  containerId="productivity-container"
                >
                  <span className="me-2">Tasks</span>
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  to="chart"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="text-light opacity-hover text-decoration-none fs-4 me-3 nav-link-productivity"
                  containerId="productivity-container"
                >
                  <span className="me-2">Chart</span>
                </ScrollLink>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-success float-end text-center"
                  onClick={() => setModalIsShowing(true)}
                >
                  <i className="bi bi-plus-lg fs-5"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="container-fluid productivity-bg scrollbar-productivity"
        id="productivity-container"
      >
        <div className="row">
          <div className="col-12">
            <div className="container">
              <Element name="tasks">
                <Tasks />
              </Element>
              <Element name="chart">
                <Chart />
              </Element>
            </div>
          </div>
          <div className="col">
            <ScrollToTop variant="primary" containerId="productivity-container"/>
          </div>
          <TaskAddEdit
            type={type}
            setType={setType}
            handleTypeChange={handleTypeChange}
            setModalIsShowing={setModalIsShowing}
            modalIsShowing={modalIsShowing}
          />
        </div>
      </div>
    </>
  );
}
