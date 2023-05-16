import { Form } from "react-router-dom"

export default function GoalModal({type, setType, handleTypeChange}) {
  return (
    <div
    className="modal fade"
    id="exampleModal"
    tabIndex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            New Goal
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <Form method="post">
          <div className="modal-body">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Name
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="name"
                aria-label="name"
                name="name"
              ></input>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Description
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="description"
                aria-label="description"
                name="description"
              ></input>
            </div>
            <div
              className="btn-group mb-3"
              role="group"
              aria-label="Toggle buttons"
            >
              <input
                type="checkbox"
                className="btn-check"
                id="btn1"
                autoComplete="off"
                name="Sunday"
              ></input>
              <label className="btn btn-outline-primary" htmlFor="btn1">
                Sun
              </label>

              <input
                type="checkbox"
                className="btn-check"
                id="btn2"
                autoComplete="off"
                name="Monday"
              ></input>
              <label className="btn btn-outline-primary" htmlFor="btn2">
                Mon
              </label>

              <input
                type="checkbox"
                className="btn-check"
                id="btn3"
                autoComplete="off"
                name="Tuesday"
              ></input>
              <label className="btn btn-outline-primary" htmlFor="btn3">
                Tue
              </label>

              <input
                type="checkbox"
                className="btn-check"
                id="btn4"
                autoComplete="off"
                name="Wednesday"
              ></input>
              <label className="btn btn-outline-primary" htmlFor="btn4">
                Wed
              </label>

              <input
                type="checkbox"
                className="btn-check"
                id="btn5"
                autoComplete="off"
                name="Thursday"
              ></input>
              <label className="btn btn-outline-primary" htmlFor="btn5">
                Thu
              </label>

              <input
                type="checkbox"
                className="btn-check"
                id="btn6"
                autoComplete="off"
                name="Friday"
              ></input>
              <label className="btn btn-outline-primary" htmlFor="btn6">
                Fri
              </label>

              <input
                type="checkbox"
                className="btn-check"
                id="btn7"
                autoComplete="off"
                name="Saturday"
              ></input>
              <label className="btn btn-outline-primary" htmlFor="btn7">
                Sat
              </label>
            </div>
            <select
              className="form-select mb-3"
              aria-label="Default select example"
              name="measurement"
              onChange={handleTypeChange}
              defaultValue=""
            >
              <option value="" disabled>
                Select Measurement
              </option>
              <option value="time">Timer</option>
              <option value="iterative">Iterative</option>
              <option value="checkbox">Check box</option>
            </select>
            <div className="input-group">
              {type === "time" ? (
                <>
                  <span className="input-group-text">Goal</span>
                  <input
                    type="text"
                    aria-label="hours"
                    className="form-control"
                    name="hours"
                  />
                  <span className="input-group-text">:</span>
                  <input
                    type="text"
                    aria-label="minutes"
                    className="form-control"
                    name="minutes"
                  />
                </>
              ) : type === "iterative" ? (
                <>
                  <span className="input-group-text">Goal</span>
                  <input
                    type="text"
                    aria-label="hours"
                    className="form-control"
                    name="goal"
                  />
                </>
              ) : null}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Create Task
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
  )
}