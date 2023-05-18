import React, { useEffect, useState, useContext } from "react";
import { ProductivityContext } from "../../store/context/productivity-context";
import { findCurrentWastedTime, getTodaysDate } from "../../utils/productivity";

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
    <div>
      <h1>{getTime(time)}</h1>
      <button onClick={toggleRunning}>{isRunning ? "Stop" : "Start"}</button>
    </div>
  );
};

export default Stopwatch;
