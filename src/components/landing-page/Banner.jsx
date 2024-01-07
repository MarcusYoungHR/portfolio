import "../../styles/landing-page/banner.css";
import { v4 as uuidv4 } from "uuid";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";

export default function Banner({
  header,
  highlight,
  missionStatement,
  buttonText,
  backgroundImage,
  styles,
  classes,
}) {
  const { containerStyle } = styles;
  const { missionStatementClass } = classes;
  return (
    <Element name="Banner">
      <div
        className="row min-vh-100 banner-container m-0 text-light mb-4"
        style={containerStyle || {}}
      >
        <div className="col obfuscate-image-03 d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="fs-c5-5 fw-bold my-5">
            {header.map((line, index) => {
              return (
                <span key={uuidv4()}>
                  {line}
                  {index < header.length - 1 && <br />}
                </span>
              );
            })}
            <span className="highlight">{highlight}</span>
          </h1>
          <p
            className={
              "desktop-half-width mx-auto mb-5 fs-5 " + missionStatementClass
            }
          >
            {missionStatement}
          </p>
          <Link className="btn btn-dark fs-5 fw-bold" to={"/contact"}>{buttonText}</Link>
          {/* <LinkButton address={"/contact"} text={"Get your free quote today"}></LinkButton> */}
        </div>
      </div>
    </Element>
  );
}
