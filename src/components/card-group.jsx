import ProjectCard from "./project-card";

export default function CardGroup(arr) {
  return (
    <div className="card-group">
      {arr.data.map((project, i) => {
        return (
          <ProjectCard
            title={project.title}
            body={project.description}
            picture={project.image}
            link={project.link}
            key = {`card-${i}`}
          />
        )
      })}
    </div>
  )
}