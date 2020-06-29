import React from "react";
import LOGO from "../Images/LOGO.svg";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <React.Fragment>
      <header className="login-header">
        <img src={LOGO} alt="LOGO" />
        <h5>Back</h5>
      </header>
      <LoginForm />
      <footer className="signIn-footer">
        <p>Contact us</p>
        <p>FAQ</p>
        <p>Privacy policy</p>
        <p>Term and Conditions</p>
        <p>All rights reserved. &copy; Booking. 2020</p>
      </footer>
    </React.Fragment>
  );
};

export default Login;
