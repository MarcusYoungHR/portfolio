import ServiceCard from "./ServiceCard";
import { v4 as uuidv4 } from "uuid";

export default function ServicesCards({ cards }) {
  return (
    <div className="row m-0 row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
        {cards
          ? cards.map((item, index) => {
              return <ServiceCard {...item} key={uuidv4()} />;
            })
          : null}
    </div>
  );
}
