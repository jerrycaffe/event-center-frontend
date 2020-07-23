import React, { Component } from "react";
import "../../styles/customerResultPage.css";

import Header from "../LandingPageHearder";
import centerSearch from "../../images/center-search.png";

import homeIcon from "../../images/home-icon.png";
import NewsLetter from "../newsLetter";
import Footer from "../Footer";

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
                  <form action="" className="select-filter">
                    <p className="filter-title">Filters</p>
                    <hr />
                    <p className="filter-category filter-pd">Name</p>
                    <div className="select-items">
                      <input type="checkbox" />
                      <label htmlFor="all">All</label>
                    </div>
                    <div className="select-items">
                      <input type="checkbox" />
                      <label htmlFor="mandn">M & N</label>
                    </div>
                    <div className="select-items">
                      <input type="checkbox" />
                      <label htmlFor="protea">Protea</label>
                    </div>
                    <div className="select-items">
                      <input type="checkbox" />
                      <label htmlFor="loreal">L'L’Oreal</label>
                    </div>
                    <hr />
                    <p className="filter-category  filter-pd">Capacity</p>
                    <div className="select-items">
                      <input type="checkbox" />
                      <label htmlFor="hundred">100 - 200 Capacity</label>
                    </div>
                    <div className="select-items">
                      <input type="checkbox" />
                      <label htmlFor="two-hundred">200 - 300 Capacity</label>
                    </div>
                    <div className="select-items">
                      <input type="checkbox" />
                      <label htmlFor="three-hundred">300 - 400 Capacity</label>
                    </div>
                    <div className="select-items">
                      <input type="checkbox" />
                      <label htmlFor="four-hundred">400 - 500 Capacity</label>
                    </div>
                    <hr />
                    <p className="filter-category filter-pd">Price</p>
                    <div className="select-items">
                      <input type="checkbox" />
                      <label htmlFor="first">N0 - N50,000</label>
                    </div>
                    <div className="select-items">
                      <input type="checkbox" />
                      <label htmlFor="second">N51,000 - N100,000 </label>
                    </div>
                    <div className="select-items">
                      <input type="checkbox" />
                      <label htmlFor="third">N101,000 - N200,000</label>
                    </div>
                    <div className="select-items">
                      <input type="checkbox" />
                      <label htmlFor="fourth">N201,000 - N300,000</label>
                    </div>
                    <div className="select-items">
                      <input type="checkbox" />
                      <label htmlFor="fifth">N301,000 - N400,000</label>
                    </div>
                    <hr />
                    <p className="filter-category filter-pd">Amenities</p>
                    <div className="select-items">
                      <input type="checkbox" />
                      <label htmlFor="security">Security</label>
                    </div>
                    <div className="select-items">
                      <input type="checkbox" />
                      <label htmlFor="parking">Parking</label>
                    </div>
                    <div className="select-items">
                      <input type="checkbox" />
                      <label htmlFor="projector">Projector</label>
                    </div>
                    <div className="select-items">
                      <input type="checkbox" />
                      <label htmlFor="wifi">Free Wifi</label>
                    </div>
                    <button type="submit">Apply</button>
                  </form>
                </div>
                <div className="center-result">
                  <form className="form-filter">
                    <input type="text" placeholder="filter" />
                    <i className="filter-icon"></i>
                  </form>
                  <div>
                    <p className="search-count">1 Result Found</p>
                  </div>
                  <div className="center-image">
                    <img
                      className="center-img"
                      src={centerSearch}
                      alt="center search"
                    />
                  </div>
                  <div className="center-info">
                    <div className="center-address">
                      <div className="address-left">
                        <p>L’Oreal Event Center</p>
                        <p>Ikeja, Lagos.</p>
                      </div>
                      <div className="address-right">
                        <img src={homeIcon} alt="" />

                        <p>
                          {" "}
                          500 guests
                          <br />
                          capacity
                        </p>
                      </div>
                    </div>
                    <div className="facilities">
                      <div className="facilities-icons">
                        <div className="top-icons">
                          <i className="police-icon"></i>
                          <i className="wireless-icon mg-left"></i>
                          <i className="air-condition-icon mg-left"></i>
                        </div>
                        <div className="bottom-icons">
                          <i className="parking-icon"></i>
                          <i className="generator-icon mg-left"></i>
                          <i className="toilet-icon mg-left"></i>
                        </div>
                      </div>
                      <div className="ratings">
                        <div className="rating-left">
                          <div className="star-icons"></div>
                          <p>200 Reviews</p>
                        </div>
                        <div className="rating-right">
                          <p>1.0</p>
                        </div>
                      </div>
                    </div>
                    <div className="more-details">
                      <a href="#" className="center-details-btn">
                        More Details
                      </a>
                    </div>
                  </div>
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
