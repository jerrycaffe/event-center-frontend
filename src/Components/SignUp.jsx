import React from "react";
import SignupForm from "./SignupForm";
import LoginHeader from "./login/LoginHeader";


const Signup = () => {
  return (
    <React.Fragment>
      <LoginHeader/>
      <SignupForm />
      </React.Fragment>
  );
};

export default Signup;
