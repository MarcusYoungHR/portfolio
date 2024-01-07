import Banner from "../components/landing-page/Banner";
import Services from "../components/landing-page/Services";
import Testimonials from "../components/landing-page/Testimonials";
import landingPageConfig from "../utils/landingPageConfig";
import UniqueValue from "../components/landing-page/UniqueValue";
import FAQ from "../components/landing-page/FAQ";
import Portfolio from "../components/landing-page/Portfolio";
import Statistics from "../components/landing-page/Statistics";
import Projects from "../components/landing-page/Projects";
import OurProcess from "../components/landing-page/OurProcess";

export default function Index() {
  const {
    banner,
    services,
    testimonials,
    uniqueValue,
    faq,
    portfolio,
    statistics,
    projects,
    ourProcess,
  } = landingPageConfig;
  return (
    <>
      <Banner {...banner} />
      <Statistics {...statistics} />
      <UniqueValue {...uniqueValue} />
      <Services {...services} />
      <Portfolio {...portfolio} />
      <OurProcess {...ourProcess} />
      {/* <Testimonials {...testimonials} /> */}
      <Projects {...projects} />
      <FAQ {...faq} />
    </>
  );
}
