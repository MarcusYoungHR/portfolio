import LottieAnimation from "./Utility/LottieAnimation";
import { useEffect, useState } from "react";
import checklist from "../../utils/lottie-animations/checklist.json";

export default function Process({ index, header, text, lottie, classes }) {
  const {lottieClass} = classes
  const [animationData, setAnimationData] = useState(false);

  useEffect(() => {
    const loadAnimationData = async () => {
      try {
        const module = await import(`../../utils/lottie-animations/${lottie}.json`);
        setAnimationData(module);
      } catch (error) {
        console.error("Error loading component", error);
      }
    };

    loadAnimationData();
  }, [lottie]);


  return (
    <div className="col d-flex flex-column align-items-center">
      {/* {index} */}
      <div className={"width-10rem mb-4 " + lottieClass}>
        {animationData && <LottieAnimation animationData={animationData} />}
      </div>
      <h3 className="fw-semibold text-center">{header}</h3>
      <div className="fs-5 text-center">

      {text}
      </div>
    </div>
  );
}
