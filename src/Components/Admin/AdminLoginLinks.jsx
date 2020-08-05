import React from "react";
import {Link} from 'react-router-dom';

const AdminLoginLinks = () => {
  return (
    <div>
      <p>
        New user? <Link to="/admin_sign-up" className="links">Create an admin account</Link>
      </p>
      <p className="links">Forgot password?</p>
    </div>
  );
};

export default AdminLoginLinks;
