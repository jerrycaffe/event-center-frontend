import React from "react";
import {Link} from 'react-router-dom';

const LoginLinks = () => {
  return (
    <div>
      <p>
        New user? <Link to="/sign-up" className="links">Create an account</Link>
      </p>
      <p className="links">Forgot password?</p>
    </div>
  );
};

export default LoginLinks;
