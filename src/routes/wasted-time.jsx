import Stopwatch from "../components/productivity/stop-watch";
import { useContext } from "react";
import { updateWastedTime } from "../http/productivity";
import { Form} from "react-router-dom";
import { ProductivityContext } from "../store/context/productivity-context";
import { findCurrentWastedTime, getTodaysDate } from "../utils/productivity";

export async function action({ request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const time = await updateWastedTime(updates);
  return null;
}

export default function WastedTime() {
  const {wastedTime} = useContext(ProductivityContext);

  const today = getTodaysDate()

  const currentWastedTime = findCurrentWastedTime(today, wastedTime);

  if(!currentWastedTime) {
    return <div>No wasted time found</div>
  }

  return (
    <>
      <Stopwatch/>
      <Form method="post">
        <input type="hidden" name="time" value={currentWastedTime.time} />
        <input type="hidden" name="date" value={currentWastedTime.date} />
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </Form>
    </>
  );
}
