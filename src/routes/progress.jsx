import { Form, useParams } from "react-router-dom";
import { updateProgress } from "../http/productivity";
import { useContext } from "react";
import Timer from "../components/productivity/timer";
import Iterative from "../components/productivity/iterative";
import { ProductivityContext } from "../store/context/productivity-context";
import { findCurrentProgress, getTodaysDate } from "../utils/productivity";

export async function action({ request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const progress = await updateProgress(updates);
  return null;
}

export default function Progress() {
  const { taskId } = useParams();
  const { progress } = useContext(ProductivityContext);
  const today = getTodaysDate()
  const idNumber = Number(taskId);

  const currentProgress = findCurrentProgress(idNumber, today, progress);

  if (!currentProgress) {
    return <div>No progress found</div>;
  }

  return (
    <>
      <div>{currentProgress.name}</div>

      {currentProgress.measurement === "time" ? <Timer /> : <Iterative />}

      <Form method="put">
        <input
          type="hidden"
          name="remaining"
          value={currentProgress.remaining}
        />
        <input type="hidden" name="id" value={currentProgress.id} />
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </Form>
    </>
  );
}
