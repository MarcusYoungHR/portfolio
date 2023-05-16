import { Link, Form, useLoaderData, redirect, Outlet } from "react-router-dom";
import { loadProgress, updateProgress } from "../http/progress";
import { useState, useEffect } from "react";
import Timer from "../components/productivity/timer";
import Iterative from "../components/productivity/iterative";

export async function loader({ params }) {
  const progress = await loadProgress(params);
  return progress.data;
}

export async function action({ request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const progress = await updateProgress(updates);
  return null;
}

export default function Progress() {
  const [remaining, setRemaining] = useState(0);

  const progress = useLoaderData();

  useEffect(() => {
    if (progress) {
      console.log(progress)
      setRemaining(progress.remaining);
    }
  }, [progress]);

  return (
    <div>
      <div>{progress && progress.name}</div>
      {progress
        ? progress.measurement === "time"
          ? <Timer remaining={remaining} setRemaining={setRemaining} />
          : <Iterative remaining={remaining} setRemaining={setRemaining} />
        : null}
      
      <Form method="put">
        <input type="hidden" name="remaining" value={remaining} />
        <input type="hidden" name="id" value={progress.id} />
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </Form>
    </div>
  );
}
