import TestimonialCard from "./TestimonialCard";
import { v4 as uuidv4 } from "uuid";

export default function TestimonialCards({ reviews, cardClasses }) {
  return (
    <div className="row justify-content-center m-0 row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-3">
        {reviews
          ? reviews.map((review, index) => {
              return <TestimonialCard {...review} classes={cardClasses} key={uuidv4()} />;
            })
          : null}
    </div>
  );
}
