import ContactField from "./ContactField";
import {v4 as uuidv4} from "uuid"

export default function ContactFields({ fields }) {
  return (
    <div className="row">
      <div className="col-12 col-md-6">
        <div className="row">

        {fields.map((field) => {
          return <ContactField {...field} key={"contact-" + uuidv4()}/>;
        })}
        </div>
      </div>
    </div>
  );
}
