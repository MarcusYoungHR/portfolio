import { Element } from "react-scroll";
import FAQItems from "./FAQItems";

export default function FAQ({ items }) {

  return (
    <Element name="FAQ">
      <div className="container">
        <div className="row mb-7">
          <div className="col text-center">
            <h1 className="fs-c4 mb-2 fw-bold">Frequently Asked Questions</h1>
            <FAQItems items={items} />
          </div>
        </div>
      </div>
    </Element>
  );
}
