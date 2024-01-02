export default function KeyValuePoint({ image, header, text, classes }) {
  const {imageClass} = classes
  return (
    <div className="col d-flex justify-content-start align-items-center flex-column text-center">
      <div className="px-c4 square-image-50">
        <img className={"img-fluid " + imageClass} src={image}></img>
      </div>
      <h3 className="fw-semibold">{header}</h3>
      <p>{text}</p>
    </div>
  );
}
