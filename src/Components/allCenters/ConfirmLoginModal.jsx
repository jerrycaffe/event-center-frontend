import React from "react";
import {withRouter, Link} from 'react-router-dom';

const ConfirmLoginModal = props => {
  const { isLoginModal, isLoginExit} = props;
 
  if (isLoginModal) {
    return (
      <div className="confirm-login-container" onClick={isLoginExit}>
        <div className="select-action">
          <p className="select-action-title">Log in or sign up</p>
          <p className="select-action-title">to continue booking</p>
          <Link to="/sign-up" className="signup-action pointer ">Sign Up</Link>
          <Link to="/login" className="signin-action pointer">Log In</Link>
        </div>
      </div>
    );
  }
  return null;
};

export default withRouter(ConfirmLoginModal);
