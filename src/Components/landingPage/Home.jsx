import React, { Component } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Showcase from "./Showcase";
import AboutUs from "./About";
import hallImage from "../../images/hallimage.png";
import Services from "./Services";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Showcase />
        <div className="page-contents">
          <AboutUs />
          <div className="page-contents-img">
            <img src={hallImage} alt="magnititude hall" />
          </div>
        </div>
        <Services />
      </React.Fragment>
    );
  }
}
export default Home;
