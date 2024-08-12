import React, { useEffect } from "react";
import Hero from "./Hero";
import FloatingBox from "./FloatingBox";
import Services from "./Services";
import BMIcalculator from "./BMIcalculator";
import Aboutus from "./Aboutus";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state?.scrollTo]);

  return (
    <>
      <Hero />
      <FloatingBox />
      <Services id="services" />
      <BMIcalculator id="bmi" />
      <Aboutus id="about" />
      <Banner />
      <Contact id="contact" />
      <Footer />
    </>
  );
};

export default Home;
