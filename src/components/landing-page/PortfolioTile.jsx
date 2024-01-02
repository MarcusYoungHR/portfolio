export default function PortfolioTile({ image, link, text }) {
  return (
    <div className="col-12 col-md-6 col-lg-3 p-0 portfolio-tile bg-dark">
      <div className="square-image">
        <a className="link" href={link} target={link !== "#" ? "_blank" : null}>
          <img className="hover-fade" src={image}></img>
        </a>
        <div className="text-light position-absolute top-50 start-50 translate-middle fs-3 fw-semibold portfolio-tile-text text-nowrap">{text}</div>
      </div>
    </div>
  );
}
