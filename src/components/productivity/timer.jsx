import { useState, useEffect, useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductivityContext } from "../../store/context/productivity-context";
import { findCurrentProgress, getTodaysDate } from "../../utils/productivity";

const Timer = () => {
  const { taskId } = useParams();
  const { progress, updateProgress } = useContext(ProductivityContext);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [alarmAudio] = useState(
    new Audio(`${process.env.PUBLIC_URL}/sounds/alarm.wav`)
  ); // Update here
  const startTimeRef = useRef(null);

  const today = getTodaysDate();
  const idNumber = Number(taskId);

  const currentProgress = findCurrentProgress(idNumber, today, progress);
  const { remaining, id } = currentProgress;

  const updateRemaining = (id, remaining) => {
    updateProgress((prevProgress) =>
      prevProgress.map((item) =>
        item.id === id ? { ...item, remaining } : item
      )
    );
  };

  const handleUpdate = () => {
    const currentTime = performance.now();
    const newRemaining = Math.max(startTimeRef.current - currentTime, 0);
    updateRemaining(id, newRemaining);

    if (newRemaining <= 0) {
      setIsRunning(false);
      clearInterval(intervalId);
      alarmAudio.play();
    }
  };

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = performance.now() + remaining;
      const id = setInterval(() => {
        requestAnimationFrame(handleUpdate);
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

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div>
      <h1>{formatTime(remaining)}</h1>
      <button onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button>
    </div>
  );
};

export default Timer;
