import { Link, useLoaderData, redirect, Outlet } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import SpinnerOverlay from "../components/spinner-overlay";
import { addTask, loadProductivityData } from "../http/productivity";
import GoalModal from "../components/productivity/goal-modal";
import { ProductivityContext } from "../store/context/productivity-context";
import '../styles/productivity.css'
import $ from "jquery";

export async function action({ request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const task = await addTask(updates);

  return redirect(`/productivity`);
}

export async function loader() {
  const productivityData = await loadProductivityData();
  return productivityData.data;
}

export default function Productivity() {
  const [type, setType] = useState(null);
  const { updateTasks, updateProgress, updateWastedTime } = useContext(ProductivityContext);

  const productivityData = useLoaderData();

  useEffect(() => {
    if (productivityData) {
      updateTasks(productivityData.tasks);
      updateProgress(productivityData.progress);
      updateWastedTime(productivityData.wastedTime);
    }
  }, [productivityData]);

  useEffect(() => {
    $('#root').addClass('productivity-bg')

    return () => {
      $('#root').removeClass('productivity-bg')
    }
  }, [])

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div className="min-vh-100">
      <nav
        className="navbar navbar-expand-lg position-sticky top-0 bg-primary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <div className="row w-100">
            <div className="col-12">
              <Link className="navbar-brand productivity-nav-link" to="/">
                Home
              </Link>
              <Link className="navbar-brand productivity-nav-link" to="/productivity/chart">
                Chart
              </Link>
              <Link className="navbar-brand productivity-nav-link" to="/productivity/wasted-time">
                Wasted Time
              </Link>
              <Link className="navbar-brand productivity-nav-link" to="/productivity">
                Tasks
              </Link>
              <button
                type="button"
                className="btn btn-success float-end fw-semibold"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="container-fluid pb-3">
        <GoalModal
          type={type}
          setType={setType}
          handleTypeChange={handleTypeChange}
        />
        <div className="row">
          <div className="col">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
