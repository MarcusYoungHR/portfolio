import Stopwatch from "./stop-watch";
import { useContext } from "react";
import { updateWastedTime } from "../../http/productivity";
import { ProductivityContext } from "../../store/context/productivity-context";
import { findCurrentWastedTime, getTodaysDate } from "../../utils/productivity";

export async function action({ request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const time = await updateWastedTime(updates);
  return null;
}

export default function WastedTime() {
  const { wastedTime } = useContext(ProductivityContext);

  const today = getTodaysDate();

  const currentWastedTime = findCurrentWastedTime(today, wastedTime);

  if (!currentWastedTime) {
    return <div>No wasted time found</div>;
  }

  return (
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col-auto">
            <h1 className="text-light">Wasted Time:</h1>
          </div>
          <div className="col-auto">
            <Stopwatch />
          </div>
        </div>

      </div>
    </div>
  );
}
