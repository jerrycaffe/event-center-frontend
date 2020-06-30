import React from "react";
import Logo from "../images/LOGO.svg";
import Filter from "../images/fa-solid_sliders-h.svg";
import Search from "../images/search.svg";
import whiteSearchIcon from "../images/noun_Search_3359351 1.svg";
import mobileMenu from "../images/menubuttonofthreelines_79781 1.png";

const LandingPageHearder = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="#">
          <img src={Logo} />
        </a>
      </div>
      <div className="right-menu">
        <div className="filter d-flex pointer">
          <img src={Filter} alt="filter page" />
          <span className="d-display m-display-none pointer">Filter</span>
        </div>
        <div className="search-bar d-flex">
          <input type="search" className="m-display-none d-display" />

          <div className="search-tool m-display-none pointer">
            <img src={Search} alt="search icon for mobile" />
          </div>
          <img
            className="d-display-none pointer"
            src={whiteSearchIcon}
            alt="search icon for desktop"
            className="d-display-none"
          />
        </div>

        <div className="desktop-nav m-display-none">
          <a href="#" className="nav-btn active">Home</a>
          <a href="#" className="nav-btn">About</a>
          <a href="#" className="nav-btn">Venues</a>
          <a href="#" className="nav-btn">Contact</a>
        </div>
        
        <a href="#" className="d-display m-display-none d-btn">
          Login
        </a>
        <img
          className="pointer d-display-none"
          src={mobileMenu}
          alt="menu icon for mobile" className="d-display-none" />
      </div>
    </div>
  );
};
export default LandingPageHearder;
