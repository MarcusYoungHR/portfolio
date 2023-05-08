import React, { useEffect, useRef, useState } from 'react';

const Stopwatch = ({ elapsedTime, setElapsedTime }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const startTimeRef = useRef(null);

  const updateElapsedTime = () => {
    const currentTime = performance.now();
    const newElapsedTime = Math.max(startTimeRef.current - currentTime, 0);
    setElapsedTime(newElapsedTime);

    if (newElapsedTime <= 0) {
      setIsRunning(false);
      clearInterval(intervalId);
    }
  };

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = performance.now() + elapsedTime;
      const id = setInterval(() => {
        requestAnimationFrame(updateElapsedTime);
      }, 1000);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const formatTime = (time) => {
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(time / 60000) % 60;
    const hours = Math.floor(time / 3600000);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setElapsedTime(0);
  };

  return (
    <div>
      <h1>{formatTime(elapsedTime)}</h1>
      <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
