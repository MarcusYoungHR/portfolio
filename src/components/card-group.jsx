import ProjectCard from "./project-card";

export default function CardGroup(arr) {
  return (
    <div className="card-group">
      {arr.data.map((project, i) => {
        return (
          <ProjectCard project= {project}
            key = {`card-${i}`}
          />
        )
      })}
    </div>
  )
}