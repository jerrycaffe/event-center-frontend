import React from "react";
import { Link } from "react-router-dom";

import Header from "../landingPage/Header";
import NewsLetter from "../landingPage/NewsLetter";
import Footer from "../landingPage/Footer";
import centerImg from "../../images/center-search.png";

const ViewSIngleCenter = () => {
  return (
    <div className="container">
      <Header />
      <div className="content-wrap">
        <div className="center-wrapper">
          <div className="special-indicator pd-left-20 ">
            <Link to="/">Home</Link>
            <i className="indicator-divider"></i>
            <Link to="/all/centers">Venues</Link>
            <i className="indicator-divider"></i>
            <Link to="">L'Oreal Event</Link>
          </div>
          <div className="single-center-container">
            <div className="center-one-card">
              <div className="center-image">
                <div className="booking">
                  <p className="sm-txt">BOOKING FEE</p>
                  <h3>N100,000.00</h3>
                </div>
                <img
                  className="center-img"
                  src={centerImg}
                  alt="center search"
                />
              </div>
              <div className="center-info">
                <div className="center-address">
                  <div className="address-left">
                    <h3>L’Oreal Event Center</h3>
                    <p>No 2 pami kinku street lagos</p>
                  </div>
                </div>
                <div className="capacity-rating">
                  <div className="rating-capacity">
                    <div className="m-display">
                      <i className="city-hall-icon"></i>
                      <p>
                        5000000
                        <br />
                        Capacity
                      </p>
                    </div>
                    <div className="ratings">
                      <div className="rating-right">
                        <p>1.0</p>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="title pd-top-10">Amenities</h4>
                <div className="facilities">
                  <div className="facilities-icons">
                    <div className="top-icons">
                      <i className="police-icon"></i>Security
                      <i className="wireless-icon mg-left"></i>Wireless
                      <i className="air-condition-icon mg-left"></i>Air
                      Conditional
                    </div>
                    <div className="bottom-icons">
                      <i className="parking-icon"></i>Parking Space
                      <i className="generator-icon mg-left"></i>Generator
                      <i className="toilet-icon mg-left"></i>Toilet
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="book-center-container">
              <div className="book-center">
                <h4 className="title">Check a availability</h4>
                <form action="" className="booking-form">
                  <label htmlFor="date-time">Date & Time*</label>
                  <div className="lg-width">
                    <select name="date" id="">
                      <option value="Saturdate">Saturday Nove 20</option>
                    </select>
                  </div>
                  <div className="md-width">
                    <select name="from-time" id="from-time">
                      <option value="from">From 10am</option>
                    </select>
                    <select name="to-time" id="to-time">
                      <option value="12">To 12pm</option>
                    </select>
                  </div>
                  <button type="submit">Book Now</button>
                </form>
              </div>
              <div className="map">calling google map here</div>
            </div>
          </div>
        </div>
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
};
export default ViewSIngleCenter;
