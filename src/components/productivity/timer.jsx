import { useState, useEffect, useRef } from 'react';

const Timer = ({ remaining, setRemaining }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [alarmAudio] = useState(new Audio(`${process.env.PUBLIC_URL}/sounds/alarm.wav`)); // Update here
  const startTimeRef = useRef(null);

  const updateRemaining = () => {
    const currentTime = performance.now();
    const newRemaining = Math.max(startTimeRef.current - currentTime, 0);
    setRemaining(newRemaining);

    if (newRemaining <= 0) {
      setIsRunning(false);
      clearInterval(intervalId);
      alarmAudio.play();
    }
  };

  useEffect(() => {
    alarmAudio.loop = true;

    if (remaining <= 0) {
      alarmAudio.play();
    } else {
      alarmAudio.pause();
      alarmAudio.currentTime = 0;
    }

    return () => {
      alarmAudio.pause();
      alarmAudio.currentTime = 0;
    };
  }, [remaining]);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = performance.now() + remaining;
      const id = setInterval(() => {
        requestAnimationFrame(updateRemaining);
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
    setRemaining(0);
  };

  const handlePlaySound = () => {
    alarmAudio.play();
  };

  return (
    <div>
      <h1>{formatTime(remaining)}</h1>
      <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;
