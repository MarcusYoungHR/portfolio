import { Element } from "react-scroll";
import Project from "./Project";

export default function Projects({ header, subHeader, projects }) {
  return (
    <Element name="Projects">
      <div className="container mb-7">
        <div className="row mb-4">
          <div className="col text-center">
            <h1 className="fw-bold fs-c4-5 mb-0">{header}</h1>
            <h3 className="fw-semibold">{subHeader}</h3>
          </div>
        </div>
        {projects.map((project, index) => {
          return (
            <Project {...project} index={index} length={projects.length} />
          );
        })}
      </div>
    </Element>
  );
}
