import { Form } from "react-router-dom";
import contactFormConfig from "../utils/contactFormConfig";
import ContactFields from "../components/contact-form/ContactFields";

export async function action({request}) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  console.log(formData)
  return(null)
}

export default function Contact() {
  return (
    <Form method="post">
      <div className="container min-vh-100 padding-top-130px">
        <div className="row">
          <div className="col">
            <h1 className="fw-bold">We'd love to hear from you</h1>
          </div>
        </div>
        <ContactFields {...contactFormConfig} />{" "}
        <div className="row">
          <div className="col">
            <button className={"btn btn-outline-dark fw-semibold border border-3 border-dark"} type="submit">
              Send information
            </button>
          </div>
        </div>
      </div>
    </Form>
  );
}
