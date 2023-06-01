import { updateProgress } from "../../http/productivity";
import { useContext, useState, useEffect } from "react";
import Timer from "./timer";
import Iterative from "./iterative";
import { ProductivityContext } from "../../store/context/productivity-context";
import { findCurrentProgress, getTodaysDate } from "../../utils/productivity";

export async function action({ request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const progress = await updateProgress(updates);
  return null;
}

export default function Progress() {
  const { progress, selectedTaskId, currentProgress, updateCurrentProgress } =
    useContext(ProductivityContext);
  const [isCurrent, setIsCurrent] = useState(true);
  const today = getTodaysDate();

  useEffect(() => {
    if (selectedTaskId) {
      if (!isCurrent) {
        const filteredProgress = progress.filter(
          (item) => item.taskId === selectedTaskId
        );
        console.log("filteredProgress", filteredProgress);
        for (let i = filteredProgress.length - 2; i >= 0; i--) {
          if (
            filteredProgress[i].percentage < 100 &&
            filteredProgress[i].percentage !== null
          ) {
            updateCurrentProgress(filteredProgress[i]);
            return;
          }
        }
      }

      const today = getTodaysDate();
      updateCurrentProgress(
        findCurrentProgress(selectedTaskId, today, progress)
      );
    }
  }, [selectedTaskId, progress, isCurrent]);

  const handleChange = (event) => {
    setIsCurrent(event.target.value === "current");
  };

  if (!selectedTaskId) {
    return (
      <div className="col">
        <h1 className="text-light">Please Select A Task</h1>
      </div>
    );
  }

  if (Object.keys(currentProgress).length === 0) {
    return (
      <>
        <div className="col-auto py-2">
          <h3 className="text-light">Not Scheduled for Today</h3>
        </div>
        <div className="col-auto py-2">
          <input
            type="radio"
            className="btn-check"
            name="options"
            id="option1"
            autoComplete="off"
            value="previous"
            onChange={handleChange}
            checked={!isCurrent}
          />
          <label className="btn btn-success" htmlFor="option1">
            Previous
          </label>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="col-auto py-2">
        <h1 className="text-light">{currentProgress.name}:</h1>
      </div>
      <div className="col-auto py-2">
        {currentProgress.measurement === "time" ? (
          <Timer isCurrent={isCurrent} />
        ) : (
          <Iterative isCurrent={isCurrent} />
        )}
      </div>
      <div className="col-auto py-2">
        <input
          type="radio"
          className="btn-check"
          name="options"
          id="option1"
          autoComplete="off"
          value="previous"
          onChange={handleChange}
          checked={!isCurrent}
        />
        <label
          className="btn btn-success border-right-radius-none"
          htmlFor="option1"
        >
          Previous
        </label>
        <input
          type="radio"
          className="btn-check"
          name="options"
          id="option2"
          autoComplete="off"
          value="current"
          onChange={handleChange}
          checked={isCurrent}
        />
        <label
          className="btn btn-success border-left-radius-none"
          htmlFor="option2"
        >
          Current
        </label>
      </div>
    </>
  );
}
