import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import AuthContext from "../Context/authContext"
import Axios from 'axios';

class MobileMenu extends Component {
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
      <div className={this.props.mobileMenu} id="mobile-fixed">
          <p className="close-mobile-menu pointer" onClick={this.props.toggleMobileMenu}>X</p>
          <p className="txt-center">Menu</p>
        
          <Link to="/" className="active">
            Home
          </Link>
          <a href="#" className="">
            About
          </a>
          <a href="#" className="">
            Venues
          </a>
          <a href="#" className="">
            Contact
          </a>
          {buttons}
        </div>
    )
  }
}
export default MobileMenu;