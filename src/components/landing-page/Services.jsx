import ServicesCards from "./ServicesCards";
import ServiceCarousel from "./ServiceCarousel";
import { Element } from "react-scroll";
import { splitStringInHalf } from "../../utils/functions";

export default function Services({
  header,
  cards,
  servicesDisplay,
  autoPlay,
  text,
}) {
  const serviceComponents = {
    cards: <ServicesCards cards={cards} />,
    carousel: <ServiceCarousel cards={cards} autoPlay={autoPlay} />,
  };

  const splitText = splitStringInHalf(text)

  return (
    <Element name="Services">
      <div className="container mb-7">
        <div className="row">
          <div className="col d-flex flex-column align-items-center mb-5">
            <h1 className="fs-c4 fw-bold pb-3 px-2 mb-4 text-center">{header}</h1>

            <p className="desktop-70-width text-center fs-5">{text}</p>
          </div>
        </div>
        {serviceComponents[servicesDisplay] || null}
      </div>
    </Element>
  );
}
