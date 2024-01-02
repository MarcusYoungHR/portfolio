import { v4 as uuidv4 } from "uuid";

const renderSocialMedia = (socialMedia) => {
  return socialMedia.map((item) => {
    return (
      <li className="ms-3" key={uuidv4()}>
        <a className="link-body-emphasis text-light" href={item.link}>
          <i className={`bi bi-${item.name}`}></i>
        </a>
      </li>
    );
  });
};

const renderLinks = (links) => {
  return links.map((link) => {
    return (
      <li className="nav-item mb-2" key={uuidv4()}>
        <a href={link.link} className="nav-link p-0 text-footer">
          {link.name}
        </a>
      </li>
    );
  });
};

export default function Footer({
  company,
  copyrightDate,
  address,
  phone,
  socialMedia,
  email,
  callToAction,
  logo,
  servicesLinks,
  helpfulLinks,
}) {
  return (
    <div className="bg-dark text-light">
      <footer className="pb-1 pt-3 container">
        <div className="row">
          <div className="col-6 col-md-4 col-xl-3 mb-3">
            <h2 className="fw-bold text-banner mb-0">{callToAction}</h2>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <h4 className="mt-0 p-0 text-light">{phone}</h4>
              </li>
              <li className="nav-item mb-2">
                <div className="nav-link p-0 text-light">{address}</div>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-4 col-xl-3 mb-3 d-flex align-items-start justify-content-center">
            <img src={logo} className="logo"></img>
          </div>

          <div className="col-6 col-md-4 col-xl-3 mb-3">
            <h5>Services</h5>
            <ul className="nav flex-column">{renderLinks(servicesLinks)}</ul>
          </div>

          <div className="col-6 col-md-4 col-xl-3 mb-3">
            <h5>Helpful Links</h5>
            <ul className="nav flex-column">{renderLinks(helpfulLinks)}</ul>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2023 {company}, All rights reserved.</p>
          <ul className="list-unstyled d-flex">{renderSocialMedia(socialMedia)}</ul>
        </div>
      </footer>
    </div>
  );
}
