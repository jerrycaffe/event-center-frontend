import React from "react";
import {Link} from 'react-router-dom';
const SignupLinks = () => {
  return (
    <div>
      <p>
        Already Registered? <Link to="/login" className="links">Log In</Link>
      </p>
      <p className="links">Forgot password?</p>
    </div>
  );
};

export default SignupLinks;
