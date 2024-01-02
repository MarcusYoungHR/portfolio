import { useState } from "react";

export default function FAQItem({ target, question, answer }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <button
        className="btn btn-dark fs-5 fw-semibold text-start mt-3 d-flex justify-content-between"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={"#faq-" + target}
        aria-expanded="false"
        aria-controls={"faq-" + target}
        onClick={handleClick}
      >
        <div>{question}</div>
        {isExpanded ? (
          <i class="bi bi-x"></i>
        ) : (
          <i class="bi bi-chevron-expand"></i>
        )}
      </button>
      <div className="collapse mb-3" id={"faq-" + target}>
        <div className="card card-body">{answer}</div>
      </div>
    </>
  );
}
