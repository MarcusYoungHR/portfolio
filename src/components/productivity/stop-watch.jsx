import React, { useEffect, useState, useContext } from "react";
import { ProductivityContext } from "../../store/context/productivity-context";
import { findCurrentWastedTime, getTodaysDate } from "../../utils/productivity";
import { Form } from "react-router-dom";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const { wastedTime, updateWastedTime } = useContext(ProductivityContext);

  console.log("wastedTime", wastedTime);

  const today = getTodaysDate();

  const currentWastedTime = findCurrentWastedTime(today, wastedTime);

  const { time, id } = currentWastedTime;

  const handleUpdate = (newTime) => {
    // Find the index of the matching item
    const index = wastedTime.findIndex((item) => item.id === id);

    // If we found the item
    if (index !== -1) {
      // Create a new copy of wastedTime
      const updatedWastedTime = [...wastedTime];

      // Update the time of the matching item
      updatedWastedTime[index].time = newTime;

      // Call updateWastedTime with the updated array
      updateWastedTime(updatedWastedTime);
    }
  };

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      setStartTime(Date.now() - time);
      intervalId = setInterval(() => {
        const now = Date.now();
        handleUpdate(Math.floor(now - startTime));
      }, 1000);
    }

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, [isRunning, startTime, time]);

  const toggleRunning = () => {
    setIsRunning(!isRunning);
  };

  const getTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    return [h, m, s].map((v) => (v < 10 ? "0" + v : v)).join(":");
  };

  return (
    <div className="row align-items-center">
      <div className="col">
        <h1 className="text-light">{getTime(time)}</h1>
      </div>
      <div className="col-auto pe-0">
        <button className="btn btn-success border-right-radius-none" onClick={toggleRunning}>
          {isRunning ? "Stop" : "Start"}
        </button>
      </div>
      <div className="col-auto ps-0 ">
          <Form method="post">
            <input type="hidden" name="time" value={currentWastedTime.time} />
            <input type="hidden" name="date" value={currentWastedTime.date} />
            <button type="submit" name="intent" value="wasted time" className="btn btn-success border-left-radius-none">
              Update
            </button>
          </Form>
        </div>
    </div>
  );
};

export default Stopwatch;
