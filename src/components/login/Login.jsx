import React from "react";
import LoginForm from "./LoginForm";
import LoginHeader from "./LoginHeader";
import Footer from "../Footer"

const Login = () => {
  return (
    <React.Fragment>
       <div className="signin-up-body">
        <LoginHeader/>
      <LoginForm /> 
      <Footer/>
      </div>
    </React.Fragment>
  );
};

export default Login;
