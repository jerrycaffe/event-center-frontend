import React from "react";
import {Link} from 'react-router-dom';
import Logo from "../images/LOGO.svg";

import mobileMenu from "../images/menubuttonofthreelines_79781 1.png";

const LandingPageHearder = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="/">
          <img src={Logo} alt="magnitude event center logo" />
        </a>
      </div>
      <div className="right-menu">
        <div className="desktop-nav m-display-none">
          <Link to="/" className="nav-btn active">
            Home
          </Link>
          <a href="#" className="nav-btn">
            About
          </a>
          <a href="#" className="nav-btn">
            Venues
          </a>
          <a href="#" className="nav-btn">
            Contact
          </a>
        </div>

        <Link to="/login" class="d-display m-display-none d-btn-pry">
          Log in
        </Link>
        <Link to="/sign-up" class="d-display m-display-none d-btn-sec">
          Sign up
        </Link>
        <img
          className="pointer d-display-none"
          src={mobileMenu}
          alt="menu icon for mobile"
          className="d-display-none"
        />
      </div>
    </div>
  );
};
export default LandingPageHearder;
