import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import classNames from "classnames";

const ScrollToTop = ({variant, containerId}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const portfolioElement = document.getElementById(containerId);
    const toggleVisibility = () => {
      if (portfolioElement.scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

      portfolioElement.addEventListener("scroll", toggleVisibility);
    

    return () =>
      portfolioElement.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const portfolioElement = document.getElementById(containerId);
    portfolioElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return isVisible ? (
    <Button
      variant={variant}
      onClick={scrollToTop}
      style={{ position: "fixed", bottom: "2%", right: "2%" }}
      className={classNames({
        "fade-in": isVisible,
        "fade-out": !isVisible,
        "rounded-circle": true,
        "fs-1": true,
      })}
    >
      <i className="bi bi-chevron-up"></i>
    </Button>
  ) : null;
};

export default ScrollToTop;
