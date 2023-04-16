import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  const { title, description, image, link, imageStyle } = project;
  return (
    <div className="card text-bg-dark">
      <Link to={link}>
        <img
          src={image}
          className="card-img-top nav-link project-image"
          alt="..."
          style={imageStyle}
        ></img>
      </Link>
      <div className="card-body">
        <Link to={link} className="link-light nav-link">
          <h5 className="card-title">{title}</h5>
        </Link>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}
