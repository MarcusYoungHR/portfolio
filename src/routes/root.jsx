import { Outlet, useLocation } from "react-router-dom";
import $ from "jquery";
import { useEffect, useRef, useState } from "react";
import Bio from "../components/portfolio/bio";
import Skills from "../components/portfolio/skills";
import Projects from "../components/portfolio/projects";
import { Link, Element } from "react-scroll";

export default function Root() {
  const navbarRef = useRef(null);

  useEffect(() => {
    $("#root").removeClass();
    $("#root").addClass("portfolio-bg");

    // Optional: To clean up the listeners upon unmounting 
    return () => {
      // Events.scrollEvent.remove('begin');
      // Events.scrollEvent.remove('end');
    };
  }, []);

  let location = useLocation();
  location = location.pathname;

  return (
    <div className="min-vh-100 d-flex flex-column">
      <nav
        className="navbar navbar-expand-lg text-bg-dark fixed-top"
        ref={navbarRef}
      >
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
          <div className="collapse navbar-collapse float-right" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link activeClass="active" to="bio" spy={true} smooth={true} offset={-70} duration={500} className="nav-link text-light">
                  Bio
                </Link>
              </li>
              <li className="nav-item">
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500} className="nav-link text-light">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={500} className="nav-link text-light">
                  Skills
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container d-flex flex-column flex-grow-1">
        <Element name="bio" className="element">
          <Bio />
        </Element>
        <Element name="projects" className="element">
          <Projects />
        </Element>
        <Element name="skills" className="element">
          <Skills />
        </Element>
      </div>
    </div>
  );
}