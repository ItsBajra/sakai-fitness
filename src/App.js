import React from "react";
import Navbar from "./components/PublicPages/Navbar";
import Hero from "./components/PublicPages/Hero";
import FloatingBox from "./components/PublicPages/FloatingBox";
import Footer from "./components/PublicPages/Footer";
import Aboutus from "./components/PublicPages/Aboutus";
import BMIcalculator from "./components/PublicPages/BMIcalculator";
import Services from "./components/PublicPages/Services";
import Banner from "./components/PublicPages/Banner";
import Contact from "./components/PublicPages/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <FloatingBox />
      <Services />
      <BMIcalculator />
      <Aboutus />
      <Banner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
