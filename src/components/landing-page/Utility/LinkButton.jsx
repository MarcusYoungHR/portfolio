import { Link } from "react-router-dom";

export default function LinkButton({ classes, address, text }) {
  return (
    <Link className={"btn " + classes} to={address}>
      {text}
    </Link>
  );
}
