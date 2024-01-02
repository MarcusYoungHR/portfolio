import NavbarScrollCirclePopout from "../components/landing-page/NavBarScrollCirclePopout";
import "devicon/devicon.min.css";
import landingPageConfig from "../utils/landingPageConfig";
import "../styles/landing-page/landing-page.css";
import { Outlet } from "react-router";
import Footer from "../components/landing-page/Footer";

export default function Root() {
  const { navBar, footer } = landingPageConfig;
  return (
    <>
      <div className="container-fluid portfolio-bg p-0" id="portfolio">
        <NavbarScrollCirclePopout {...navBar} />
        <Outlet />
        <Footer {...footer}/>
      </div>
    </>
  );
}
