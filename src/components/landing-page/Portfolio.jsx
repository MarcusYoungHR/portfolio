import { Element } from "react-scroll";
import PortfolioTiles from "./PortfolioTiles";

export default function Portfolio({ header, subHeader, tiles }) {
  return (
    <Element name="Portfolio">
      <div className="container mb-7">
        <div className="row mb-4">
          <div className="col text-center">
            <h1 className="fs-c4-5 fw-bold">{header}</h1>
            <h4 className="fw-semibold">{subHeader}</h4>
          </div>
        </div>
        <PortfolioTiles tiles={tiles} />
      </div>
    </Element>
  );
}
