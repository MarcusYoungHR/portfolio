import { createContext, useState } from "react";

export const ProductivityContext = createContext({
  tasks: [],
  updateTasks: () => {},
  progress: [],
  updateProgress: () => {},
  wastedTime: [],
  updateWastedTime: () => {},
  selectedTaskId: null,
  updateSelectedTaskId: () => {},
  currentProgress: {},
  updateCurrentProgress: () => {},
})

export default function ProductivityContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [progress, setProgress] = useState([]);
  const [wastedTime, setWastedTime] = useState([]);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [currentProgress, setCurrentProgress] = useState({});

  function updateTasks(tasks) {
    setTasks(tasks);
  }

  function updateProgress(progress) {
    setProgress(progress);
  }

  function updateWastedTime(wastedTime) {
    setWastedTime(wastedTime);
  }

  function updateSelectedTaskId(selectedTaskId) {
    setSelectedTaskId(selectedTaskId);
  }

  function updateCurrentProgress(currentProgress) {
    setCurrentProgress(currentProgress);
  }

  const value = {
    tasks,
    updateTasks,
    progress,
    updateProgress,
    wastedTime,
    updateWastedTime,
    selectedTaskId,
    updateSelectedTaskId,
    currentProgress,
    updateCurrentProgress,
  };

  return (
    <ProductivityContext.Provider value={value}>
      {children}
    </ProductivityContext.Provider>
  );
}