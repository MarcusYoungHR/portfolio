import { Link, Outlet } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { ProductivityContext } from "../../store/context/productivity-context";
import { getCurrentDay } from "../../utils/productivity";
import WastedTime from "./wasted-time";
import Progress from "./progress";

export default function Tasks() {
  const { tasks, updateSelectedTaskId } = useContext(ProductivityContext);
  const [filter, setFilter] = useState("Today");

  const today = getCurrentDay();

  const handleRadioChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="row min-vh-100 mb-3">
      <div className="col d-flex flex-column justify-content-evenly pt-5">
        <div className="row rounded-3 bg-primary px-5 align-items-center py-2 my-3">
          <Progress />
          <div className="col">
            <div className="float-end">
              <div className="row align-items-center">
                <div className="col text-light fs-5">
                  {filter === "Today" ? "Today's" : filter} tasks
                </div>
                <div className="col">
                  <div className="dropdown dropstart">
                    <button
                      className="btn btn-success dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-funnel-fill"></i>
                    </button>
                    <ul className="dropdown-menu">
                      <li
                        onClick={() => {
                          setFilter("Today");
                        }}
                      >
                        <div className="dropdown-item tasks-filter-item">Today</div>
                      </li>
                      <li
                        onClick={() => {
                          setFilter("Active");
                        }}
                      >
                        <div className="dropdown-item tasks-filter-item">
                          Active
                        </div>
                      </li>
                      <li
                        onClick={() => {
                          setFilter("All");
                        }}
                      >
                        <div className="dropdown-item tasks-filter-item">All</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 row-cols-xxl-6 bg-primary rounded-3 px-5 py-3 mb-3">
              {tasks ? (
                tasks
                  .filter((task) => {
                    if (filter === "Today") {
                      return (
                        task.recurrence.includes(today) && !task.isDisabled
                      );
                    } else if (filter === "Active") {
                      return !task.isDisabled;
                    } else {
                      return true;
                    }
                  })
                  .map((task, i) => {
                    return (
                      <div className="col my-2" key={`task-${i}`}>
                        <button
                          onClick={() => {
                            updateSelectedTaskId(task.id);
                          }}
                          className="btn btn-success text-light mx-auto fw-semibold w-100"
                        >
                          {task.isDisabled ? "(disabled) " : ""}
                          {task.name}
                        </button>
                      </div>
                    );
                  })
              ) : (
                <div>loading...</div>
              )}
            </div>
          </div>
        </div>
        <div className="row rounded-3 bg-primary px-5 mb-5 align-items-center py-2">
          <div className="col">
            <WastedTime />
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <span className="text-light fs-5 mx-3">Filter : </span>
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
              </div> */
}
