import NavLinkScroll from "./NavLinkScroll";
import "../../styles/landing-page/navbar.css";
import { Link } from "react-router-dom";

export default function NavbarScrollCirclePopout({
  containerId,
  links,
  logo,
  classes,
}) {
  const { logoClass } = classes;
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top bg-dark navbar-container"
      data-bs-theme="dark"
    >
      <div className="container-fluid position-relative">
        <Link className="navbar-brand" to={"/"}>
            <img
              className={"logo position-absolute top-0" + logoClass}
              src={logo}
            ></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {links.map((link, index) => {
              return (
                <li className="nav-item">
                  <NavLinkScroll link={link} containerId={containerId}>
                    <span>{link}</span>
                  </NavLinkScroll>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
