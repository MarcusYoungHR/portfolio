import CountUp from "react-countup";

function easeOutQuart(t, b, c, d) {
  return -c * ((t = t / d - 1) * t * t * t - 1) + b;
}

export default function Statistics({ stats, classes }) {
  const { prefixClass } = classes;

  return (
    <div className="container mb-4">
      <div className="row">
        {stats.map((stat, index) => {
          const { prefix, num, suffix, text } = stat;
          return (
            <div className="col text-center">
              <h1 className="fs-c5 fw-semibold m-0 position-relative d-inline-block">
                <span className={"position-absolute left-minus-4-5rem translate-middle" + prefixClass}>
                  {prefix}
                </span>
                <CountUp
                  end={num}
                  duration={5}
                  easingFn={easeOutQuart}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                ></CountUp>
                <span>{suffix}</span>
              </h1>
              <h5 className="fw-semibold">{text}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}
