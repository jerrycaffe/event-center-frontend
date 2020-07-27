import React from "react";
import SignupForm from "./SignupForm";
import LoginHeader from "./login/LoginHeader";
import Footer from "./landingPage/Footer";

const Signup = () => {
  return (
    <React.Fragment >
      <div className="signin-up-body">
      <LoginHeader />
      <SignupForm />
      <Footer />
      </div>
    </React.Fragment>
  );
};

export default Signup;
