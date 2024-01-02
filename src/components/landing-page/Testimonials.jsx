import { Element } from "react-scroll";
import TestimonialCards from "./TestminoialCards";

export default function Testimonials({header, reviews, cardClasses}) {
  return (
    <Element name="Testimonials">
      <div className="container mb-7">
        <div className="row">
          <div className="col">
            <h1 className="fs-c3-5 fw-bold text-center mb-5">{header}</h1>
          </div>
        </div>
        <TestimonialCards reviews={reviews} cardClasses={cardClasses}/>
      </div>
    </Element>
  );
}
