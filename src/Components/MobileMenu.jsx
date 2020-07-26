import React, { Component } from 'react'
import {Link} from 'react-router-dom';
class MobileMenu extends Component {
  render() {
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

          <Link to="/login">
            Log in
          </Link>
          <Link to="/sign-up">
            Sign up
          </Link>
        </div>
    )
  }
}
export default MobileMenu;