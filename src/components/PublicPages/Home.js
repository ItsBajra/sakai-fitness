import React from "react";
import Hero from "./Hero";
import FloatingBox from "./FloatingBox";
import Services from "./Services";
import BMIcalculator from "./BMIcalculator";
import Aboutus from "./Aboutus";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
    return (
      <>
        <Hero />
        <FloatingBox />
        <Services />
        <BMIcalculator />
        <Aboutus />
        <Banner />
        <Contact />
        <Footer />
      </>
    );
  };

export default Home;
  