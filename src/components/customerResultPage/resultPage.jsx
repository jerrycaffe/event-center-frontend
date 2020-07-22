import React, { Component } from "react";
import "../../styles/customerResultPage.css";

import Header from "../LandingPageHearder";
import Services from "../Services";
import NewsLetter from "../newsLetter";
import Footer from "../Footer";

class resultPage extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="content-wrap">
          <div className="search-contents">
            <div className="page-indicator">
              <a href="#" className="home">
                Home
              </a>
              <i className="indicator-divider"></i>
              <a href="#" className="home">
                Search
              </a>
            </div>
            <form className="filter">
              <input type="text" placeholder="filter" />
              <i className="filter-icon"></i>
            </form>
            <div className="search-count">
              <h4>1 Result Found</h4>
            </div>
            <div className="center-result">
              <div className="center-image">
                image here
              </div>
              <div className="center-info">
                information of the center
              </div>
              <a href="#" className="center-details">
                More Details
              </a>
            </div>
          </div>
        </div>

        <NewsLetter />
        <Footer />
      </div>
    );
  }
}
export default resultPage;
