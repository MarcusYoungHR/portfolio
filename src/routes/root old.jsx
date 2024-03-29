import Bio from "../components/portfolio/bio";
import Skills from "../components/portfolio/skills";
import Projects from "../components/portfolio/projects";
import Banner from "../components/landing-page/Banner";
import { Link, Element } from "react-scroll";
import "devicon/devicon.min.css";
import ScrollToTop from "../components/scroll-to-top";

//the only reason I'm keeping this file is because this is where I figured out how to get 
//scroll spy working with an embedded container

export default function Root() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <svg width="50" height="50">
            <polygon
              points="17.75,2.5 32.5,2.5 47.5,17.5 47.5,32.5 32.5,47.5 17.5,47.5 2.5,32.5 2.5,17.5"
              fill="rgb(33, 37, 41)"
              stroke="white"
              strokeWidth="3"
            />
            <text
              x="25"
              y="34"
              textAnchor="middle"
              fontSize="25"
              fill="white"
              fontWeight="600"
            >
              MY
            </text>
          </svg>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="bio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link fs-5"
                  containerId="portfolio"
                >
                  <span>Bio</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link fs-5"
                  containerId="portfolio"
                >
                  <span>Projects</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link fs-5"
                  containerId="portfolio"
                >
                  <span>Skills</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="container-fluid portfolio-bg scrollbar-portfolio"
        id="portfolio"
      >
        <div className="row">
          <div className="col-12">
            <div className="container">
              <Element name="bio">
                {/* <Bio /> */}
                <Banner/>
              </Element>
              <Element name="projects">
                <Projects />
              </Element>
              <Element name="skills">
                <Skills />
              </Element>
            </div>
          </div>
          <div className="col">
            <ScrollToTop variant="dark" containerId="portfolio" />
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <li className="nav-item">
<Link
  to="bio"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
  className="navLink"
>
  <a>Bio</a>
</Link>
</li>
<li className="nav-item">
<Link
  to="projects"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
  className="navLink"
>
  <a>Project</a>
</Link>
</li>
<li className="nav-item">
<Link
  to="skills"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
  className="navLink"
>
  <a>Skills</a>
</Link>
</li> */
}
