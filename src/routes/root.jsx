import { Outlet, Link, useLocation } from "react-router-dom";
import $ from 'jquery';
import { useEffect } from "react";
import Bio from "./bio";

export default function Root() {

  //use the useLocation hook to get the pathname of the current page
  let location = useLocation();
  location = location.pathname;
  let defaultComponent;
  if (location === '/') {
    defaultComponent = <Bio />
  } else {
    defaultComponent = <Outlet />
  }

  if (location === '/contact') {
    <h1 className="text-center column-header">Contact</h1>
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  //call jQuery from within a useEffect hook to get the height of the nav element after the component mounts
  useEffect(() => {
    const navHeight = $('nav').height();
    //add a style to the element with class content-column to set the height of the column to the height of the window minus the height of the nav element
    $('.content-column').css('height', window.innerHeight - navHeight - 20);
  }, []);

  return (
    <div>
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
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 align-items-center marcus-column'>
            <h1 className="text-center column-header">Marcus Young<br></br>Full Stack Software Engineer</h1>
            <div className='octagon mx-auto'></div>
          </div>
          <div className='col-md-6 d-flex align-items-center content-column'>
            <h1 className="text-center column-header">{capitalizeFirstLetter(location.slice(1))}</h1>
            {defaultComponent}
          </div>
        </div>
      </div>
    </div>
  );
}