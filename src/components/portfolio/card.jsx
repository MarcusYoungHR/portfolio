import { Link } from "react-router-dom";

export default function Card({ data }) {
  const { title, description, image, link, imageStyle } = data;
  return (
    <div className="card text-bg-dark mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <Link to={link}>
            <img src={image} className="img-fluid rounded-start opacity-hover" alt="..." />
          </Link>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <Link className="link-light nav-link" to={link}>
              <h4 className="card-title opacity-hover">{title}</h4>
            </Link>
            <p className="card-text fs-5">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
