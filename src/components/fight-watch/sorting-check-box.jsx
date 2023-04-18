import { useContext } from "react";
import { FightWatchContext } from "../../store/context/fight-watch-context";

export default function SortingCheckBox({ sortingKey }) {
  const { sorting, changeSorting } = useContext(FightWatchContext);
  const handleChange = (e) => {
    if (e.target.checked) {
    } else {
      changeSorting(sortingKey, null);
    }
  };

  return (
    <input
      className="form-check-input sorting-checkbox"
      type="checkbox"
      checked={sorting && sorting[sortingKey] !== null}
      onChange={handleChange}
      disabled={sorting[sortingKey] === null}
    />
  );
};

