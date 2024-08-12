import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/PublicPages/Navbar";
import Authentication from "./components/PublicPages/Authentication";
import Home from "./components/PublicPages/Home";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Hero />
//       <FloatingBox />
//       <Services />
//       <BMIcalculator />
//       <Aboutus />
//       <Banner />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Authentication />} />
        </Routes>
      </>
    );
  }
}

export default App;
