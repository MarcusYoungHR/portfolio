import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ServiceCarouselCard from "./ServiceCarouselCard";
import { v4 as uuidv4 } from "uuid";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function ServiceCarousel({ cards, autoPlay = false }) {
  return (
    <div className="row px-0">
      <div className="col">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={autoPlay}
          autoPlaySpeed={3000}
          itemclassName="d-flex"
        >
          {cards
            ? cards.map((item, index) => {
                return (
                  <ServiceCarouselCard
                    {...item}
                    key={uuidv4()}
                    containerclassName={"mx-2"}
                  />
                );
              })
            : null}
        </Carousel>
      </div>
    </div>
  );
}
