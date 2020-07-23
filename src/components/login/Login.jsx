import React from "react";
import LOGO from "../../images/LOGO.svg";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <React.Fragment>
      <header className="login-header">
        <img src={LOGO} alt="LOGO" />
        <h5>Back</h5>
      </header>
      <LoginForm /> 
    </React.Fragment>
  );
};

export default Login;
