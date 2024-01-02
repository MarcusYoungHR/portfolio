export default function TextArea({ handleInput, state, label, isRequired }) {
  return (
    <div className="mb-3">
      <label htmlFor={"input-" + label} className="form-label fw-semibold">
        {label} {isRequired ? " *" : ""}
      </label>
      <textarea
        type={label == "email" ? "email" : "text"}
        className="form-control"
        id={"input-" + label}
        aria-describedby="emailHelp"
        onChange={handleInput}
        required={isRequired}
        name={label.toLowerCase()}
      />
    </div>
  );
}
