import { Element } from "react-scroll";
import { v4 as uuidv4 } from "uuid";
import KeyValuePoints from "./KeyValuePoints";

export default function UniqueValue({
  header = "",
  subHeader = "",
  image = "",
  keyPoints,
  highlight = "",
  classes = "",
  keyPointClasses
}) {
  const { headerClass, textColClass, subHeaderClass } = classes;
  return (
    <Element name="Value">
      <div className="container mb-7">
        <div className="row mb-5">
          <div
            className={
              "col-sm-12 col-md-6 d-flex flex-column justify-content-between"
            }
          >
            <div className="row">
              <div className="col ">
                <h1 className={`fs-c5 fw-bold ${headerClass}`}>
                  {header.map((line, index) => {
                    return (
                      <span key={uuidv4()}>
                        {line}
                        {index < header.length - 1 && <br />}
                      </span>
                    );
                  })}
                  <span className="highlight fst-italic">{highlight}</span>
                </h1>
              </div>
            </div>
            <div className="row flex-grow-1">
              <div className="col flex-grow-1 d-flex">
                <h3 className={subHeaderClass}>{subHeader}</h3>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
            <div className="square-image">
              <img className="rounded-5 p" src={image}></img>
            </div>
          </div>
        </div>
        <KeyValuePoints keyPoints={keyPoints} keyPointClasses={keyPointClasses}/>
      </div>
    </Element>
  );
}
