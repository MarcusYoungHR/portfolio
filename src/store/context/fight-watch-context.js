import { createContext, useState } from "react";

export const FightWatchContext = createContext({
  sorting: {},
  changeSorting: () => {},
  loading: true,
  flipLoading: () => {},
  lastFighter: null,
  changeLastFighter: () => {},
});

function FightWatchContextProvider({ children }) {
  const [sorting, setSorting] = useState({
    name: null,
    fight_date: 'asc'
  });

  const [lastFighter, setLastFighter] = useState(null);

  function changeLastFighter(fighter) {
    setLastFighter(fighter);
  }

  const [loading, setLoading] = useState(true);

  function flipLoading() {
    setLoading((prevLoading) => {
      return !prevLoading;
    });
  }
  
  function changeSorting(key, value) {
    setSorting((prevSorting) => {
      return { ...prevSorting, [key]: value };
    });
  }

  const value = {
    sorting,
    changeSorting,
    loading,
    flipLoading,
    lastFighter,
    changeLastFighter,
  }

  return  (
    <FightWatchContext.Provider value={value}>
      {children}
    </FightWatchContext.Provider>
  )

}

export default FightWatchContextProvider;
