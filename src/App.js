import React from "react";
import Header from "../src/components/LandingPageHearder";
import Showcase from "../src/components/Showcase";
import Services from "../src/components/Services";
import Footer from "../src/components/Footer";
import "../src/styles/styles.css";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content-wrap">
        <Showcase />
        <Services />
        <Footer />
      </div>
    </div>
  );
}

export default App;
