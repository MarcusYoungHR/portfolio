import { Outlet, Link, useLocation } from "react-router-dom";
import Projects from "../components/projects";
import $ from 'jquery';
import { useEffect } from "react";

export default function Root() {

  useEffect(() => {
    $("#root").removeClass()
    $("#root").addClass('portfolio-bg')
  }, [])

  let location = useLocation();
  location = location.pathname;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="min-vh-100 d-flex flex-column">
      <nav className="navbar navbar-expand-lg text-bg-dark">
        <div className="container-fluid">
          <svg width="50" height="50">
            <polygon points="17.75,2.5 32.5,2.5 47.5,17.5 47.5,32.5 32.5,47.5 17.5,47.5 2.5,32.5 2.5,17.5" fill="rgb(33, 37, 41)" stroke="white" strokeWidth="3" />
            <text x="25" y="34" textAnchor="middle" fontSize="25" fill="white" fontWeight="600">MY</text>
          </svg>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse float-right" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to={"/"}>Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={"bio"}>Bio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={'skills'}>Skills</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={'resume'}>Resume</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={'contact'}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='container d-flex flex-column flex-grow-1'>
        <div className='row flex-grow-1'>
          <div className='col-md-6 grid-column justify-content-center'>
            <h1 className="text-center">Marcus Young<br></br>Full Stack Software Engineer</h1>
            <div className='octagon mx-auto align-self-center'></div>
          </div>
          {location === '/' ?
            <div className='col-md-6 grid-column justify-content-center'>
              <h1 className="text-center">Projects</h1>
              <div className="h-max-content align-self-center py-5">
                <Projects />
              </div>
            </div> :
            <div className='col-md-6 grid-column justify-content-center'>
              <h1 className="text-center">{capitalizeFirstLetter(location.slice(1))}</h1>
              <div className="h-max-content align-self-center py-5">
                <Outlet />
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
}