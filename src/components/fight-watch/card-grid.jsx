import FighterCard from "./fighter-card";
import { useContext } from "react";
import { FightWatchContext } from "../../store/context/fight-watch-context";

export default function CardGrid({ fighters }) {
  const { sorting } = useContext(FightWatchContext);

  const sortedFighters = [...fighters.data]
    .sort((a, b) => {
      const firstLetterA = a.name[0].toUpperCase();
      const firstLetterB = b.name[0].toUpperCase();
      if (sorting.name === null) {
        return 0;
      } else if (sorting.name === "asc") {
        return firstLetterA < firstLetterB
          ? -1
          : firstLetterA > firstLetterB
          ? 1
          : 0;
      } else {
        return firstLetterA < firstLetterB
          ? 1
          : firstLetterA > firstLetterB
          ? -1
          : 0;
      }
    })
    .sort((a, b) => {
      if (sorting.fight_date === null) {
        return 0;
      } else if (sorting.fight_date === "asc") {
        return a.fight_date === "TBD"
          ? 1
          : b.fight_date === "TBD"
          ? -1
          : new Date(a.fight_date) < new Date(b.fight_date)
          ? -1
          : new Date(a.fight_date) > new Date(b.fight_date)
          ? 1
          : 0;
      } else {
        return a.fight_date === "TBD"
          ? -1
          : b.fight_date === "TBD"
          ? 1
          : new Date(a.fight_date) < new Date(b.fight_date)
          ? 1
          : new Date(a.fight_date) > new Date(b.fight_date)
          ? -1
          : 0;
      }
    });

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 row-cols-xxl-6 g-4 py-3 ">
      {sortedFighters.map((fighter) => {
        return (
          <FighterCard
            name={fighter.name}
            image={fighter.image}
            fight_date={fighter.fight_date}
            next_opponent={fighter.next_opponent}
            id={fighter.id}
            key={`fighter-${fighter.id}`}
            loading={fighter.loading}
          />
        );
      })}
    </div>
  );
}
