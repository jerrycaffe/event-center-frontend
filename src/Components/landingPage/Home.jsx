import React, { Component } from "react";

import Header from '../landingPage/Header';
import Showcase from "./Showcase";
import AboutUs from "./About";
import hallImage from "../../images/hallimage.png";
import Services from "./Services";
import NewsLetter from '../landingPage/NewsLetter';
import Footer from '../landingPage/Footer';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="content-wrap">
        <Showcase />
        <div className="page-contents">
          <AboutUs />
          
          <div className="page-contents-img">
            <img src={hallImage} alt="magnititude hall" />
          </div>
        </div>
        <Services />
        <NewsLetter />
        <Footer />
      </div>
      </div>
    );
  }
}
export default Home;
