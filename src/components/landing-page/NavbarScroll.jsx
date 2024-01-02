import NavLinkScroll from "./NavLinkScroll";
import "../../styles/landing-page/navbar.css"

export default function NavbarScroll({ containerId, links, logo, classes }) {
  const {logoClass} = classes 
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top bg-dark navbar-container opacity-75"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className={"logo " + logoClass} src={logo}></img>
        </a>
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
