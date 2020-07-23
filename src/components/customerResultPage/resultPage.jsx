import React, { Component } from "react";
import "../../styles/customerResultPage.css";

import Header from "../LandingPageHearder";

import NewsLetter from "../newsLetter";
import Footer from "../Footer";
import CenterCard from "./CenterCard";
import SelectFilterForm from "./SelectFilterForm";

class resultPage extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="content-wrap">
          <div className="search-contents">
            <div className="search-wrapper">
              <div className="result-body">
                <div className="desktop-filter">
                  <div className="page-indicator">
                    <a href="#" className="home">
                      Home
                    </a>
                    <i className="indicator-divider"></i>
                    <a href="#" className="home">
                      Search
                    </a>
                  </div>
                  <SelectFilterForm/>
                </div>
                <div className="center-result">
                  <form className="form-filter">
                    <input type="text" placeholder="filter" />
                    <i className="filter-icon"></i>
                  </form>
                  <div>
                    <p className="search-count">1 Result Found</p>
                  </div>
                  <CenterCard/>
                </div>
              </div>
            </div>
          </div>
          <NewsLetter />
          <Footer />
        </div>
      </div>
    );
  }
}
export default resultPage;
