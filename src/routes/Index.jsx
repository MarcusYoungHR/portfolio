import Banner from "../components/landing-page/Banner";
import Services from "../components/landing-page/Services";
import Testimonials from "../components/landing-page/Testimonials";
import landingPageConfig from "../utils/landingPageConfig";
import UniqueValue from "../components/landing-page/UniqueValue";
import FAQ from "../components/landing-page/FAQ";
import Portfolio from "../components/landing-page/Portfolio";

export default function Index() {
  const { banner, services, testimonials, uniqueValue, faq, portfolio } =
    landingPageConfig;
  return (
    <>
      <Banner {...banner} />
      <UniqueValue {...uniqueValue} />
      <Services {...services} />
      <Portfolio {...portfolio} />
      <Testimonials {...testimonials} />
      <FAQ {...faq} />
    </>
  );
}
