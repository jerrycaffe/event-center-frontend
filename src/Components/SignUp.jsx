import React from "react";
import SignupForm from "./SignupForm";
import LoginHeader from "./login/LoginHeader";
import Footer from "./Footer";

const Signup = () => {
  return (
    <React.Fragment>
      <LoginHeader />
      <SignupForm />
      <Footer />
    </React.Fragment>
  );
};

export default Signup;
