import React from "react";
import { Link, Element } from "react-scroll";

export default function TestScroll() {
  return (
    <div className="TestScroll">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link
          to="section1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Go to section 1
        </Link>
        <Link
          to="section2"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Go to section 2
        </Link>
      </div>

      <Element
        name="section1"
        className="element"
        style={{ height: "800px", background: "red" }}
      >
        <h1>Section 1</h1>
      </Element>

      <Element
        name="section2"
        className="element"
        style={{ height: "800px", background: "blue" }}
      >
        <h1>Section 2</h1>
      </Element>
    </div>
  );
}
