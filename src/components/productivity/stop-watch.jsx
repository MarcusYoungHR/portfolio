import React, { useEffect, useState } from "react";

const Stopwatch = ({ elapsedTime, setElapsedTime }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      setStartTime(Date.now() - elapsedTime);
      intervalId = setInterval(() => {
        const now = Date.now();
        setElapsedTime(Math.floor((now - startTime)));
      }, 1000);
    }

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, [isRunning, startTime, setElapsedTime, elapsedTime]);

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
      <h1>{getTime(elapsedTime)}</h1>
      <button onClick={toggleRunning}>{isRunning ? "Stop" : "Start"}</button>
    </div>
  );
};

export default Stopwatch;
