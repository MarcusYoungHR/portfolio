import { Link, Form, useLoaderData, redirect, Outlet } from "react-router-dom";
import { loadProgress, updateProgress } from "../http/task-modal";
import { useState, useEffect } from "react";
import Stopwatch from "../components/productivity/stop-watch";

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

export default function TaskModal() {
  const [remaining, setRemaining] = useState(0);

  const progress = useLoaderData();

  useEffect(() => {
    if (progress) {
      setRemaining(progress.remaining);
    }
  }, [progress]);

  return (
    <div>
      {progress ? progress.name : <div>loading...</div>}
      <Stopwatch elapsedTime={remaining} setElapsedTime={setRemaining} />
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
