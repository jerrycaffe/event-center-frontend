import React, { Component } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Header from '../components/LandingPageHearder';
import Showcase from '../components/Showcase';
import AboutUs from '../components/aboutUs';
import hallImage from '../images/hallimage.png';
import Services from '../components/Services';
import NewsLetter from '../components/newsLetter';
import Footer from '../components/Footer';

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
