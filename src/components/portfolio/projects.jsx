import projectData from "../../utils/project-data";
import Card from "./card";

export default function Projects() {
  return (
    <div className="row min-vh-100 mb-3">
      <div className="col">
        {projectData.map((project, i) => {
          return (
            <div className="row" key={`project-${i}`}>
              <div className="col">
                <Card data={project} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
