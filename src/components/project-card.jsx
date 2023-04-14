import { Link } from "react-router-dom"

export default function ProjectCard(props) {
  const { title, body, picture, link } = props
  return (
    <div className="card text-bg-dark" >
      <Link to={link} >
        <img src={picture} className="card-img-top nav-link project-image" alt="..."></img>
      </Link>
      <div className="card-body">
        <Link to={link}  className="link-light nav-link">
        <h5 className="card-title">{title}</h5>
        </Link>
        <p className="card-text">{body}</p>
        {/* <Link to={link} className="btn btn-primary">Go somewhere</Link> */}
      </div>
    </div>
  )
}