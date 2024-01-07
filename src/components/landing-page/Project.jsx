import { Link } from "react-router-dom";

export default function Project({ text, image, link, header, index, length }) {
  let imageIsRounded = "";

  index === 0
    ? (imageIsRounded = "rounded-5rem-top-left")
    : index === length - 1
    ? (imageIsRounded = "rounded-5rem-bottom-left")
    : (imageIsRounded = "");

  return (
    <div className="row">
      <div
        className={
          "col-3 portfolio-tile bg-dark overflow-hidden p-0 position-relative " +
          imageIsRounded
        }
      >
        <a className="link" href={link}>
          <img
            className={"img-fluid h-100 object-fit-cover hover-fade"}
            src={image}
          />
        </a>
        <a
          href={link}
          className="text-light text-decoration-none position-absolute top-50 start-50 translate-middle fs-3 fw-semibold portfolio-tile-text text-nowrap"
        >
          {header}
        </a>
      </div>
      <div className="col-9 ps-4 pt-0 pb-3">
        <a href={link} className="text-dark text-decoration-none">

        <h1 className="fw-bold">{header}</h1>
        </a>
        <div>{text}</div>
      </div>
    </div>
  );
}
