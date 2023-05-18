import { createContext, useState } from "react";

export const ProductivityContext = createContext({
  tasks: [],
  updateTasks: () => {},
  progress: [],
  updateProgress: () => {},
  wastedTime: [],
  updateWastedTime: () => {},
})

export default function ProductivityContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [progress, setProgress] = useState([]);
  const [wastedTime, setWastedTime] = useState([]);

  function updateTasks(tasks) {
    setTasks(tasks);
  }

  function updateProgress(progress) {
    setProgress(progress);
  }

  function updateWastedTime(wastedTime) {
    setWastedTime(wastedTime);
  }

  const value = {
    tasks,
    updateTasks,
    progress,
    updateProgress,
    wastedTime,
    updateWastedTime,
  };

  return (
    <ProductivityContext.Provider value={value}>
      {children}
    </ProductivityContext.Provider>
  );
}