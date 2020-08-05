import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/LOGO.svg";
import MobileMenu from "./MobileMenu";
import AuthContext from "../../Context/authContext"
import Axios from "axios";

class LandingPageHearder extends Component {
  state = {
    isMenuOpen: false,
  };
  toggleMobileMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };
  static contextType = AuthContext;

  handleLogout=()=>{
    localStorage.clear();
    this.context.logoutUser();
    delete Axios.defaults.headers.common["authorization"];
  }

  render() {
    let buttons;
    if (this.context.isAuthenticated) {
      buttons = (
        <Link to="/" className=" d-btn-pry" onClick={this.handleLogout}>
          Log out
        </Link>
      );
    } else {
      buttons = (
        <React.Fragment>
          <Link to="/login" className=" d-btn-pry">
            Log in
          </Link>
          <Link to="/sign-up" className="d-btn-sec">
            Sign up
          </Link>
        </React.Fragment>
      );
    }
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
              <Link to="/" className="nav-btn active">
                Home
              </Link>
              <a href="#about-us" className="nav-btn">
                About
              </a>
              <Link to="/all/centers" className="nav-btn">
                Venues
              </Link>
              <a href="#" className="nav-btn">
                Contact
              </a>
              {buttons}
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
