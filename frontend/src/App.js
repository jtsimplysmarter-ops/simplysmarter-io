import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MissionSection from "./components/MissionSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

const LandingPage = () => {
  return (
    <div className="landing-container" data-testid="landing-page">
      {/* Subtle grain texture overlay */}
      <div className="grain-overlay" aria-hidden="true"></div>
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        <MissionSection />
        <ProjectsSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
