import TextInput from "../landing-page/Utility/TextInput";
import TextArea from "../landing-page/Utility/TextArea";

export default function ContactField({ label, size, type, isRequired }) {
  return (
    <div className={"col-" + size}>
      {type === "text" ? (
        <TextInput label={label} isRequired={isRequired} />
      ) : type === "textarea" ? (
        <TextArea label={label} isRequired={isRequired} />
      ) : null}
    </div>
  );
}
