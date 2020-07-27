import React from "react";
import LoginForm from "./LoginForm";
import LoginHeader from "./LoginHeader";
import Footer from "../landingPage/Footer"

const Login = () => {
  return (
    <React.Fragment>
        <LoginHeader/>
      <LoginForm /> 
      <Footer/>
    </React.Fragment>
  );
};

export default Login;
