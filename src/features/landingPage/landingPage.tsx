import React from "react";
import Hero from "./components/hero/hero";
import About from "./components/aboutus/about";
import Innovate from "./components/innovate/innovate";
import Services from "./components/services/services";
import Testimonials from "./components/testimonials/testimonials";
import ClientComposition from "./components/client-composition/client-composition";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div>
      <Hero />
      <About />
      <Innovate />
      <Services />
      <Testimonials />
      <ClientComposition />
    </div>
  );
};

export default LandingPage;
