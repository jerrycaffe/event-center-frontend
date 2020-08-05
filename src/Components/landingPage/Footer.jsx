import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/authContext";

const Footer = () => {
  const context = useContext(AuthContext);
  console.log(context.user,"user");
  console.log(context.admin,"admin");
  let adminLogin='';
  if (!context.isAuthenticated) {
    adminLogin = (
      <p>
          <Link to="/admin_sign-in">Admin Login</Link>
      </p>
    );
  }
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
          {adminLogin}
        </div>
      </div>
      <p className="footer-copy">&copy; Magnitude. 2020</p>
    </footer>
  );
};

export default Footer;
