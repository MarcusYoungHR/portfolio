import { Link, Form, useLoaderData, redirect, Outlet } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import SpinnerOverlay from "../components/spinner-overlay";
import { addTask, loadTasks } from "../http/productivity";
import GoalModal from "../components/productivity/goal-modal";
import { format } from "date-fns";
import { ProductivityContext } from "../store/context/productivity-context";

function getCurrentTime() {
  const now = new Date();
  const formattedTime = format(now, "hh:mm:ss a");
  return formattedTime;
}

export async function action({ request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const task = await addTask(updates);

  return redirect(`/productivity`);
}

export async function loader() {
  const tasks = await loadTasks();
  return tasks;
}

export default function Productivity() {
  const [type, setType] = useState(null);
  const { tasks, updateTasks } = useContext(ProductivityContext);

  const dataTasks = useLoaderData();

  useEffect(() => {
    if (dataTasks) {
      updateTasks(dataTasks.data);
    }
  }, [dataTasks]);

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div className="min-vh-100">
      <nav
        className="navbar navbar-expand-lg text-bg-dark position-sticky top-0 fight-watch-nav"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Link className="navbar-brand" to="/">
                Home
              </Link>
              <Link className="navbar-brand" to="/productivity/chart">
                Chart
              </Link>
              <Link className="navbar-brand" to="/productivity/wasted-time">
                Wasted Time
              </Link>
              <Link className="navbar-brand" to="/productivity">
                Tasks
              </Link>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <GoalModal
          type={type}
          setType={setType}
          handleTypeChange={handleTypeChange}
        />
        <div className="row">
          <div className="col-12"></div>
        </div>
        <div className="row">
          <div className="col-12">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
