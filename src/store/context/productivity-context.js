import { createContext, useState } from "react";

export const ProductivityContext = createContext({
  tasks: [],
  updateTasks: () => {},
})

export default function ProductivityContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  function updateTasks(tasks) {
    setTasks(tasks);
  }

  const value = {
    tasks,
    updateTasks,
  };

  return (
    <ProductivityContext.Provider value={value}>
      {children}
    </ProductivityContext.Provider>
  );
}