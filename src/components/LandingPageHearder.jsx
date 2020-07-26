import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/LOGO.svg";
import MobileMenu from "./MobileMenu";

class LandingPageHearder extends Component {
  state = {
    isMenuOpen: false
  };
  toggleMobileMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };
  render() {
    return (
      <React.Fragment>
        <MobileMenu
          toggleMobileMenu={this.toggleMobileMenu}
          mobileMenu={
            this.state.isMenuOpen
              ? "mobile-lists d-display-none"
              : "m-display-none"
          }
        />
        <div className="header">
          <div className="logo">
            <a href="/">
              <img src={Logo} alt="magnitude event center logo" />
            </a>
          </div>
          <div className="right-menu">
            <div className="m-display-none desktop-nav">
              <Link href="/" className="nav-btn active">
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

              <Link to="/login" className=" d-btn-pry">
                Log in
              </Link>
              <Link to="/sign-up" className="d-btn-sec">
                Sign up
              </Link>
            </div>
            <i
              className="mobile-menu d-display-none"
              onClick={this.toggleMobileMenu}
            ></i>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default LandingPageHearder;
