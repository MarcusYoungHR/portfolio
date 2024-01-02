import { Element } from "react-scroll";
import PortfolioTiles from "./PortfolioTiles";

export default function Portfolio({ header, subHeader, tiles }) {
  return (
    <Element name="PastWork">
      <div className="container mb-7">
        <div className="row mb-4">
          <div className="col text-center">
            <h1 className="fs-c4 fw-bold">{header}</h1>
            <h3 className="fw-semibold">{subHeader}</h3>
          </div>
        </div>
        <PortfolioTiles tiles={tiles} />
      </div>
    </Element>
  );
}
