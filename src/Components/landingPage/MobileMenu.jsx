import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/authContext";
import Axios from "axios";

class MobileMenu extends Component {
  static contextType = AuthContext;

  handleLogout = () => {
    localStorage.clear();
    this.context.logoutUser();
    delete Axios.defaults.headers.common["authorization"];
  };

  render() {
    let buttons;
    if (this.context.isAuthenticated) {
      buttons = (
        <React.Fragment>
          <Link to={`/dashboard/profile/${this.context.user.id}`}>Profile</Link>
          <Link to="/" onClick={this.handleLogout}>
            Log out
          </Link>
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
      <div className={this.props.mobileMenu} id="mobile-fixed">
        <p
          className="close-mobile-menu pointer"
          onClick={this.props.toggleMobileMenu}
        >
          X
        </p>
        <p className="txt-center">Menu</p>

        <Link to="/" className="active">
          Home
        </Link>
        <a href="#about-us" className="">
          About
        </a>
        <Link to="/all/centers" className="">
          Venues
        </Link>
        <a href="#" className="">
          Contact
        </a>
        {buttons}
      </div>
    );
  }
}
export default MobileMenu;
