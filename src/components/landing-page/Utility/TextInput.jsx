export default function TextInput({ handleInput, state, label, isRequired }) {
  return (
    <div className="mb-3">
      <label htmlFor={"input-" + label} className="form-label fw-semibold">
        {label} {isRequired ? " *" : ""}
      </label>
      <input
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
