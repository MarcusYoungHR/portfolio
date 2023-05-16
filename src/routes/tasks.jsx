import { Link, Form, useLoaderData, redirect, Outlet } from "react-router-dom";
import { useState, useContext } from "react";
import { addTask, loadTasks } from "../http/productivity";
import { ProductivityContext } from "../store/context/productivity-context";

export async function action() {}

export default function Tasks() {
  // const [tasks, setTasks] = useState([]);
  const { tasks, updateTasks } = useContext(ProductivityContext);

  console.log(tasks);

  return (
    <div>
      <h1>Tasks</h1>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Filter
      </button>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="Active"
            />
            <label className="form-check-label"htmlFor="inlineRadio1">
              Active Tasks
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="Today"
            />
            <label className="form-check-label"htmlFor="inlineRadio2">
              Today's Tasks
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="All"
            />
            <label className="form-check-label"htmlFor="inlineRadio3">
              All Tasks
            </label>
          </div>
        </div>
      </div>
      {tasks ? (
        tasks.map((task) => {
          return (
            <Link
              to={"/productivity/progress/" + task.id}
              className="btn btn-primary"
              key={Math.random()}
            >
              {task.name}
            </Link>
          );
        })
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}
