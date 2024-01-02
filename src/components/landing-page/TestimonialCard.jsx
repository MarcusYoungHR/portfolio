import "../../styles/landing-page/testimonial.css";

const renderStars = (count) => {
  let stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(
      <i key={i} className="bi bi-star-fill">
        {" "}
      </i>
    );
  }
  return stars;
};

export default function TestimonialCard({
  name,
  text,
  image,
  company,
  industry,
  link,
  linkText,
  altText,
  classes,
  stars,
}) {
  const { containerClass, cardClass } = classes;

  return (
    <div className={"col mb-3 justify-content-center" + containerClass}>
      <div className={"card text-center text-bg-dark h-100" + cardClass}>
        <div className="card-body">
          <h2 className="card-title mb-4 text-banner">{renderStars(stars)}</h2>
          <p className="card-text">{text}</p>
          {link && (
            <a href={link} className="btn btn-primary">
              {linkText}
            </a>
          )}
        </div>
        <div className="card-footer">
          <div className="fw-bold">{`${name} - ${company}`}</div>
          <div>{industry}</div>
        </div>
      </div>
    </div>
  );
}
