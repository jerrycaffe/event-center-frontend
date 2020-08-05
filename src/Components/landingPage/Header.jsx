import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/LOGO.svg";
import MobileMenu from "./MobileMenu";
import AuthContext from "../../Context/authContext";
import Axios from "axios";

class LandingPageHearder extends Component {
  state = {
    isMenuOpen: false,
  };
  toggleMobileMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };
  static contextType = AuthContext;

  handleLogout = () => {
    localStorage.clear();
    this.context.logoutUser();
    delete Axios.defaults.headers.common["authorization"];
  };

  render() {
    // console.log(this.context.user, "here");
    const name = this.context.user.lastname;
    const avatar_url =
      this.context.user.logo === undefined
        ? "https://res.cloudinary.com/gharoro/image/upload/v1596653567/gravatar.png"
        : this.context.user.logo;
    let buttons;
    if (this.context.isAuthenticated) {
      buttons = (
        <React.Fragment>
          <img className="user-avatar" src={avatar_url} alt="User Avatar"></img>
          <div className="dropdown">
            <button className="dropbtn">{name}</button>
            <div className="dropdown-content">
              <Link to={`/dashboard/profile/${this.context.user.id}`}>
                Profile
              </Link>
              <Link to="/" onClick={this.handleLogout}>
                Log out
              </Link>
            </div>
          </div>
        </React.Fragment>
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
