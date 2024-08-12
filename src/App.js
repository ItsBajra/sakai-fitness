import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/PublicPages/Navbar";
import Authentication from "./components/PublicPages/Authentication";
import Home from "./components/PublicPages/Home";
import WorkoutLog from "./components/PrivatePages/WorkoutLogger";
import WorkoutHistory from "./components/PrivatePages/WorkoutHistory";
import WorkoutPage from "./components/PrivatePages/WorkoutPage";
import ExerciseDetailPage from "./components/PrivatePages/ExerciseDetail";

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
          <Route path="/workoutlog" element={<WorkoutLog />} />
          <Route path="/history" element={<WorkoutHistory />} />
          <Route path="/workoutpage" element={<WorkoutPage />} />
          <Route path="/workoutpage/:bodypart" element={<ExerciseDetailPage />} />
        </Routes>
      </>
    );
  }
}

export default App;
