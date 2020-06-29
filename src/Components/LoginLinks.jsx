import React from "react";

const LoginLinks = () => {
  return (
    <div>
      <p>
        New user? <span className="links">Create an account</span>
      </p>
      <p className="links">Forgot password?</p>
      <p>
        Make changes to a booking with your
        <span className="links"> confirmation number and PIN</span>
      </p>
    </div>
  );
};

export default LoginLinks;
