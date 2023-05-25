import { Link, Form, useLoaderData, redirect, Outlet } from "react-router-dom";
import { useState, useContext } from "react";
import { addTask } from "../http/productivity";
import { ProductivityContext } from "../store/context/productivity-context";

export async function action() {}

export default function Tasks() {
  const { tasks, updateTasks } = useContext(ProductivityContext);

  return (
    <>
      <div className="row bg-primary rounded-4 my-4 mx-3 px-5 py-2">
        <div className="col-auto">
          <div className="row">
            <div className="col">
              <h1 className="text-light mb-3">Tasks</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                className="btn btn-success fw-semibold"
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
                    <label className="form-check-label" htmlFor="inlineRadio1">
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
                    <label className="form-check-label" htmlFor="inlineRadio2">
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
                    <label className="form-check-label" htmlFor="inlineRadio3">
                      All Tasks
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 row-cols-xxl-6 bg-primary rounded-4 mx-3 px-5 py-3">
        {tasks ? (
          tasks.map((task) => {
            return (
              <div className="col my-2">
                <Link
                  to={"/productivity/progress/" + task.id}
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
