import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../../images/LOGO.svg";

const LoginHeader = () => {
  return (
    <header className="login-header">
      <img src={LOGO} alt="magnitude event center logo" />
      <h5>
        <Link to="/">Back</Link>
      </h5>
    </header>
  );
};

export default LoginHeader;
