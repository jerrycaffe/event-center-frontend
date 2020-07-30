import React from "react";
import { Link } from "react-router-dom";
import CenterCard from "./../SearchResultPage/CenterCard";
import SelectFilterForm from "./../SearchResultPage/SearchFilter";
import Header from "../landingPage/Header";
import NewsLetter from "../landingPage/NewsLetter";
import Services from "../landingPage/Services";
import Footer from "../landingPage/Footer";
import allCenterBg from "../../images/viewAllCenters.png";
function AllCenters() {
  return (
    <div className="container">
      <Header />
      <div className="content-wrap">
        <div className="center-wrapper">
          <p>Our Top Venues</p>
          <div className="allCenterBg">
            <img src={allCenterBg} />
          </div>
          <div className="cardWrapper">
            <CenterCard />
            <CenterCard />
            <CenterCard />
          </div>
          <NewsLetter />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AllCenters;
