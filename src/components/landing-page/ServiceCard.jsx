export default function ServiceCard({
  header,
  description,
  image,
  link,
  linkText,
  containerClass,
  altText
}) {
  return (
    <div className={"col d-flex mb-3 justify-content-center " + containerClass}>
      <div className="card text-center text-bg-dark">
        <img src={image} className="card-img-top h-50 object-fit-cover" alt={altText || "image not found"} />
        <div className="card-body">
          <h5 className="card-title">{header}</h5>
          <p className="card-text">{description}</p>
          {link && (
            <a href={link} className="btn btn-primary">
              {linkText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
