import { Link } from "react-scroll";
import Process from "./Process"

export default function OurProcess({header, subHeader, processes, classes}) {
  const {processClasses} = classes
  return (
    <Link name="Process">
      <div className="container mb-7">
        <div className="row">
          <div className="col text-center">
            <h4 className="fw-semibold mb-0">{subHeader}</h4>
            <h1 className="fs-c4-5 fw-bold mb-5 mt-0">
            {header}

            </h1>
          </div>
        </div>
        <div className="row">
          {processes.map((process, index) => {
            return <Process {...process} index={index} classes={processClasses}/>
          })}
        </div>
      </div>
    </Link>
  )
}