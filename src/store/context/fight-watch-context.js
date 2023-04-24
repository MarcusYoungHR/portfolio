import { createContext, useState } from "react";

export const FightWatchContext = createContext({
  sorting: {},
  changeSorting: () => {},
  initialLoad: true,
  updateInitialLoad: () => {},
});

function FightWatchContextProvider({ children }) {
  const [sorting, setSorting] = useState({
    name: null,
    fight_date: "asc",
  });

  const [initialLoad, setInitialLoad] = useState(true);

  function updateInitialLoad(bool) {
    setInitialLoad(bool);
  }

  function changeSorting(key, value) {
    setSorting((prevSorting) => {
      return { ...prevSorting, [key]: value };
    });
  }

  const value = {
    sorting,
    changeSorting,
    initialLoad,
    updateInitialLoad
  };

  return (
    <FightWatchContext.Provider value={value}>
      {children}
    </FightWatchContext.Provider>
  );
}

export default FightWatchContextProvider;
