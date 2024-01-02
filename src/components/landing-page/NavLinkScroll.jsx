import { Link } from "react-scroll";

export default function NavLinkScroll({ link, containerId, children }) {
  return (
    <Link
      to={link}
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
      className="nav-link fs-5"
    >
      {children}
    </Link>
  );
}
