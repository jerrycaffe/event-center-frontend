import React from "react";
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-cat">
        <div className="footer-col">
          <p>
            <a href="#">Contact us</a>
          </p>
          <p>
            <a href="#">FAQ</a>
          </p>
        </div>
        <div className="footer-col">
          <p>
            <a href="#">Privacy policy</a>
          </p>
          <p>
          
            <a href="#">Terms & Conditions</a>
          </p>
        </div>
        <div className="footer-col">
          <p>
            <a href="#">All rights reserved.</a>
          </p>
          <p>
            <a><Link to="/admin_sign-in">Admin Login</Link></a>
          </p>
        </div>
      </div>
      <p className="footer-copy">&copy; Magnitude. 2020</p>
    </footer>
  );
};

export default Footer;
