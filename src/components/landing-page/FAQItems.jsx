import FAQItem from "./FAQItem"
import {v4 as uuidv4} from "uuid"

export default function FAQItems({items}) {
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-lg-8 d-flex flex-column">
        {items.map((item, target) => {
          return (<FAQItem {...item} target={target} key={"faq" + uuidv4()}/>)
        })}
      </div>
    </div>
  )
}