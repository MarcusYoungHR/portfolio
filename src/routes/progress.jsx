import { Form, useParams } from "react-router-dom";
import { updateProgress } from "../http/productivity";
import { useContext } from "react";
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
  const today = getTodaysDate();
  const idNumber = Number(taskId);

  const currentProgress = findCurrentProgress(idNumber, today, progress);

  if (!currentProgress) {
    return (
      <div className="col-auto py-2">
        <h3 className="text-light">Not Scheduled for Today</h3>
      </div>
    );
  }

  return (
    <>
      <div className="col-auto py-2">
        <h1 className="text-light">{currentProgress.name}:</h1>
      </div>
      <div className="col-auto py-2">
        {currentProgress.measurement === "time" ? <Timer /> : <Iterative />}
      </div>
    </>
  );
}
