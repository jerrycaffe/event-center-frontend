import React from "react";
import LoginHeader from "../../login/LoginHeader";
import Footer from "../../landingPage/Footer";
import AdminSignUpForm from "./AdminSignUpForm";


const Signup = () => {
  return (
    <React.Fragment >
      <div className="signin-up-body">
      <LoginHeader />
      <AdminSignUpForm />
      <Footer />
      </div>
    </React.Fragment>
  );
};

export default Signup;
