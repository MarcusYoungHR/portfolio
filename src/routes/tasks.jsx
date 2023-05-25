import { Link, Outlet } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { ProductivityContext } from "../store/context/productivity-context";
import { getCurrentDay } from "../utils/productivity";

export async function action() {}

export default function Tasks() {
  const { tasks, updateTasks } = useContext(ProductivityContext);
  const [filter, setFilter] = useState("today");

  const today = getCurrentDay();

  const handleRadioChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <div className="row mx-3 rounded-3 bg-primary px-5 my-4 align-items-center py-2">
        <Outlet />
        <div className="col">
          <div className="float-end">
            <span className="text-light fs-5 mx-3">Filter : </span>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="filterOptions"
                id="inlineRadio2"
                value="today"
                checked={filter === "today"}
                onChange={handleRadioChange}
              />
              <label
                className="form-check-label text-light"
                htmlFor="inlineRadio2"
              >
                Today
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="filterOptions"
                id="inlineRadio1"
                value="active"
                checked={filter === "active"}
                onChange={handleRadioChange}
              />
              <label
                className="form-check-label text-light"
                htmlFor="inlineRadio1"
              >
                Active
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="filterOptions"
                id="inlineRadio3"
                value="all"
                checked={filter === "all"}
                onChange={handleRadioChange}
              />
              <label
                className="form-check-label text-light"
                htmlFor="inlineRadio3"
              >
                All
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 row-cols-xxl-6 bg-primary rounded-3 mx-3 px-5 py-3">
        {tasks ? (
          tasks
            .filter((task) => {
              if (filter === "today") {
                return task.recurrence.includes(today);
              } else {
                return true;
              }
            })
            .map((task, i) => {
              return (
                <div className="col my-2" key={`task-${i}`}>
                  <Link
                    to={"/productivity/tasks/progress/" + task.id}
                    className="btn btn-success text-light mx-auto fw-semibold w-100"
                    key={Math.random()}
                  >
                    {task.name}
                  </Link>
                </div>
              );
            })
        ) : (
          <div>loading...</div>
        )}
      </div>
    </>
  );
}
