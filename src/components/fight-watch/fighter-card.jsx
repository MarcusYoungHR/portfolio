import { Form } from "react-router-dom";
import { useContext } from "react";
import { FightWatchContext } from "../../store/context/fight-watch-context";

export default function FighterCard({
  name,
  image,
  fight_date,
  next_opponent,
  id,
}) {
  const { updateInitialLoad } = useContext(FightWatchContext);

  let outputDate = fight_date;
  if (outputDate !== "TBD") {
    const dateObj = new Date(outputDate);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    outputDate = dateObj.toLocaleDateString("en-US", options);
  }

  function clickHandler() {
    updateInitialLoad(true);
  }

  return (
    <div className="col ">
      <div className={`card text-bg-dark fighter-card h-100`} id={`fighter-${id}`}>
        <img
          src={image}
          className="card-img-top fighter-image p-1 rounded"
          alt="..."
        ></img>
        <div className="card-body py-1">
          <h5 className="card-title">{name}</h5>
          <div className="card-text">{`Fighting vs ${next_opponent}`}</div>
          <div className="card-text">{`On ${outputDate}`}</div>
        </div>
        <div className="w-100 px-1 py-1">
          <Form method="post" action={`/fight-watch/destroy/${id}`}>
            <button className="btn btn-outline-danger w-100" type="submit" onClick={clickHandler}>
              Remove
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}
