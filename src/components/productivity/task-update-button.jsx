import { Form } from "react-router-dom";

export default function ProgressUpdateButton({ currentProgress, styles }) {
  return (
    <>
      <Form method="put">
        <button type="submit" className={"btn btn-success py-0 fs-3 " + styles}>
          Update
        </button>
        <input
          type="hidden"
          name="remaining"
          value={currentProgress.remaining}
        />
        <input type="hidden" name="id" value={currentProgress.id} />
      </Form>
    </>
  );
}
