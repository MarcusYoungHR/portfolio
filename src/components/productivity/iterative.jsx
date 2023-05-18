import React, { useContext } from 'react';
import { ProductivityContext } from "../../store/context/productivity-context";
import { useParams } from "react-router-dom";
import { findCurrentProgress, getTodaysDate } from "../../utils/productivity";

function Iterative() {
  const { taskId } = useParams();
  const { progress, updateProgress } = useContext(ProductivityContext);
  const today = getTodaysDate()
  const idNumber = Number(taskId);

  const currentProgress = findCurrentProgress(idNumber, today, progress);
  const {remaining, id} = currentProgress;

  const handleUpdate = () => {
    subtractRemainingById(id);
  }

  const subtractRemainingById = (id) => {
    updateProgress(progress.map(item =>
      item.id === id
        ? {...item, remaining: item.remaining > 0 ? item.remaining - 1 : 0}
        : item
    ));
  };

  return (
    <div>
      <p>{remaining}</p>
      <button onClick={handleUpdate}>Subtract 1</button>
    </div>
  );
}

export default Iterative;
