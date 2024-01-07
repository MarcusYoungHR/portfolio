import { Link } from "react-router-dom";

export default function ContactButton({classes, text}) {
  return (<Link to="/contact" className={classes}>{text}</Link>)
}