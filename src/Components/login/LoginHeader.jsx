import React from "react";
import LOGO from "../../images/LOGO.svg";

const LoginHeader = () => {
  return (
    <header className="login-header">
      <img src={LOGO} alt="LOGO" />
      <h5>Back</h5>
    </header>
  );
};

export default LoginHeader;
