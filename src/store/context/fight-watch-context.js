import { createContext, useState } from "react";

export const FightWatchContext = createContext({
  sorting: {},
  changeSorting: () => {},
  loading: true,
  flipLoading: () => {},
});

function FightWatchContextProvider({ children }) {
  const [sorting, setSorting] = useState({
    name: 'asc',
    fight_date: 'asc'
  });

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
    flipLoading
  }

  return  (
    <FightWatchContext.Provider value={value}>
      {children}
    </FightWatchContext.Provider>
  )

}

export default FightWatchContextProvider;
