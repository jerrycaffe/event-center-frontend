import React from "react";
import { Link } from "react-router-dom";
import CenterCard from "./../SearchResultPage/CenterCard";
import SelectFilterForm from "./../SearchResultPage/SearchFilter";
import Header from "../landingPage/Header";
import NewsLetter from "../landingPage/NewsLetter";
import Services from "../landingPage/Services";
import Footer from "../landingPage/Footer";
import allCenterBg from "../../images/viewAllCenters.png";
import centerImg1 from "../../images/center-search.png";
import centerImg2 from "../../images/eventCenter2.png";
import centerImg3 from "../../images/eventCenter3.png";
function AllCenters() {
  return (
    <div className="container">
      <Header />
      <div className="content-wrap">
        <div className="center-wrapper">
          <div className="page-indicator pd-left-20">
            <a className="home" href="/">
              Home
            </a>
            <i class="indicator-divider"></i>
            <a href="#" className="home">
              Venues
            </a>
          </div>
          
          <div className="all-center-bg">
            <img src={allCenterBg} />
          </div>
          <h3 className="pd-left-20">Our Top Venues</h3>
          <div className="cardWrapper">
            <CenterCard centerImg={centerImg1} />
            <CenterCard centerImg={centerImg2} />
            <CenterCard centerImg={centerImg3} />
          </div>
          <NewsLetter />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AllCenters;
