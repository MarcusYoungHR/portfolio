import React, { useContext } from "react";
import { ProductivityContext } from "../../store/context/productivity-context";
import { useParams } from "react-router-dom";
import { findCurrentProgress, getTodaysDate } from "../../utils/productivity";
import TaskUpdateButton from "./task-update-button";

function Iterative() {
  const { progress, updateProgress, selectedTaskId, currentProgress, updateCurrentProgress } = useContext(ProductivityContext);
  const today = getTodaysDate();

  const { remaining, id } = currentProgress;

  const handleUpdate = () => {
    subtractRemainingById(id);
  };

  const subtractRemainingById = (id) => {
    updateProgress(
      progress.map((item) =>
        item.id === id
          ? { ...item, remaining: item.remaining > 0 ? item.remaining - 1 : 0 }
          : item
      )
    );
  };

  return (
    <div className="row align-items-center">
      <div className="col-auto">
        <h1 className="text-light">{remaining}</h1>
      </div>
      <div className="col-auto pe-0">
        <button className="btn btn-success" onClick={handleUpdate}>
        <i className="bi bi-dash-lg fs-5"></i>
        </button>
      </div>
      <div className="col-auto">
        <TaskUpdateButton currentProgress={currentProgress} />
      </div>
    </div>
  );
}

export default Iterative;
