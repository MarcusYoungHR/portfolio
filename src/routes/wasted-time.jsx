import Stopwatch from "../components/productivity/stop-watch";
import { useState, useEffect } from "react";
import { getWastedTime, updateWastedTime } from "../http/wasted-time";
import { Form, useLoaderData } from "react-router-dom";

export async function action({ request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const time = await updateWastedTime(updates);
  return null;
}

export async function loader() {
  const wastedTime = await getWastedTime();
  return wastedTime.data
}

export default function WastedTime() {
  const [elapsedTime, setElapsedTime] = useState(0);

  const wastedTime = useLoaderData();

  useEffect(() => {
    if (wastedTime) {
      setElapsedTime(wastedTime.time);
    }
  }, [wastedTime]);

  return (
    <>
    {}
      <Stopwatch elapsedTime={elapsedTime} setElapsedTime={setElapsedTime} />
      <Form method="post">
        <input type="hidden" name="time" value={elapsedTime} />
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </Form>
    </>
  );
}
