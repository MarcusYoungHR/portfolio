import { useState, useEffect, useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductivityContext } from "../../store/context/productivity-context";
import { findCurrentProgress, getTodaysDate } from "../../utils/productivity";
import TaskUpdateButton from "./task-update-button";

const Timer = ({ isCurrent }) => {
  const { taskId } = useParams();
  const { progress, updateProgress } = useContext(ProductivityContext);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const startTimeRef = useRef(null);
  const [currentProgress, setCurrentProgress] = useState(null);

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
    updateRemaining(currentProgress.id, newRemaining);

    if (newRemaining <= 0) {
      setIsRunning(false);
      clearInterval(intervalId);
    }
  };

  useEffect(() => {
    if (!isCurrent) {
      const filteredProgress = progress.filter(
        (item) => item.taskId === Number(taskId)
      );
      for (let i = filteredProgress.length - 2; i >= 0; i--) {
        if (filteredProgress[i].percentage < 100) {
          setCurrentProgress(filteredProgress[i]);
          return
        }
      }
    }

    const today = getTodaysDate();
    const idNumber = Number(taskId);
    setCurrentProgress(findCurrentProgress(idNumber, today, progress));
  }, [taskId, progress, isCurrent]);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = performance.now() + currentProgress.remaining;
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
  }, [isRunning, currentProgress]);

  useEffect(() => {
    console.log(currentProgress);
  }, [currentProgress]);

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

  if (!currentProgress) {
    return null; // Or render some kind of placeholder or loading state
  }

  const { remaining, id } = currentProgress;

  return (
    <div className="row align-items-center">
      <div className="col-auto">
        <h1 className="text-light">{formatTime(remaining)}</h1>
      </div>
      <div className="col-auto pe-0">
        <button
          className="btn btn-success fs-3 py-0 rounded-start border-right-radius-none"
          onClick={handleStartStop}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
      </div>
      <div className="col-auto ps-0">
        <TaskUpdateButton
          currentProgress={currentProgress}
          styles={"border-left-radius-none"}
        />
      </div>
    </div>
  );
};

export default Timer;
