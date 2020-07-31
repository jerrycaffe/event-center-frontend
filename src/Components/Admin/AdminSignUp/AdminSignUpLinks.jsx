import React from "react";
import {Link} from 'react-router-dom';

const AdminSignUpLinks = () => {
  return (
    <div>
      <p>
        Already Registered? <Link to="/Admin_sign-in" className="links">Log In</Link>
      </p>
      <p className="links">Forgot password?</p>
    </div>
  );
};

export default AdminSignUpLinks;
