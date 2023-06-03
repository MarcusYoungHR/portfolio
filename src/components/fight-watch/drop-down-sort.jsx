import { useContext } from "react";
import { FightWatchContext } from "../../store/context/fight-watch-context";
import SortingCheckBox from "./sorting-check-box";

export default function DropDownSort() {
  const { sorting, changeSorting } = useContext(FightWatchContext);

  const isActive = (key, value) => {
    if (sorting[key] === value) {
      return "active-text disabled";
    } else {
      return "";
    }
  };

  const handleClick = (key, value) => {
    changeSorting(key, value);
  };

  return (
    <div className="dropdown fight-watch-dropdown">
      <button
        className="btn btn-danger dropdown-toggle fight-watch-button clickable-elem fs-5"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Sort
      </button>
      <ul
        className="dropdown-menu dropdown-menu-dark"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <li>
          <div className="dropdown-item fight-watch-dropdown-item">
            <SortingCheckBox sortingKey="fight_date" />
            Fight Date{" "}
            <i
              className={`bi bi-chevron-down clickable-elem ${isActive(
                "fight_date",
                "desc"
              )}`}
              onClick={() => {
                handleClick("fight_date", "desc");
              }}
            ></i>
            <i
              className={`bi bi-chevron-up clickable-elem ${isActive(
                "fight_date",
                "asc"
              )}`}
              onClick={() => {
                handleClick("fight_date", "asc");
              }}
            ></i>
          </div>
        </li>
        <li>
          <div className="dropdown-item fight-watch-dropdown-item">
            <SortingCheckBox sortingKey="name" />
            Name{" "}
            <i
              className={`bi bi-chevron-down clickable-elem ${isActive(
                "name",
                "desc"
              )}`}
              onClick={() => {
                handleClick("name", "desc");
              }}
            ></i>
            <i
              className={`bi bi-chevron-up clickable-elem ${isActive(
                "name",
                "asc"
              )}`}
              onClick={() => {
                handleClick("name", "asc");
              }}
            ></i>
          </div>
        </li>
      </ul>
    </div>
  );
}
