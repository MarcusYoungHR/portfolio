import { Form, useParams } from "react-router-dom";
import { updateProgress } from "../http/productivity";
import { useContext, useState, useEffect } from "react";
import Timer from "../components/productivity/timer";
import Iterative from "../components/productivity/iterative";
import { ProductivityContext } from "../store/context/productivity-context";
import { findCurrentProgress, getTodaysDate } from "../utils/productivity";
import TaskUpdateButton from "../components/productivity/task-update-button";

export async function action({ request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const progress = await updateProgress(updates);
  return null;
}

export default function Progress() {
  const { taskId } = useParams();
  const { progress } = useContext(ProductivityContext);
  const idNumber = Number(taskId);
  const [currentProgress, setCurrentProgress] = useState(null);
  const [isCurrent, setIsCurrent] = useState(true);
  const today = getTodaysDate();

  useEffect(() => {
    setCurrentProgress(findCurrentProgress(idNumber, today, progress));
  }, [idNumber, today, progress]);

  if (!currentProgress) {
    return (
      <div className="col-auto py-2">
        <h3 className="text-light">Not Scheduled for Today</h3>
      </div>
    );
  }

  const handleChange = (event) => {
    setIsCurrent(event.target.value === "current");
  };

  return (
    <>
      <div className="col-auto py-2">
        <h1 className="text-light">{currentProgress.name}:</h1>
      </div>
      <div className="col-auto py-2">
        {currentProgress.measurement === "time" ? <Timer isCurrent={isCurrent}/> : <Iterative isCurrent={isCurrent}/>}
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
