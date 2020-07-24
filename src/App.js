import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import "../src/styles/styles.css";
import "./App.css";

import Home from "./pages/Home";
import AboutUs from "../src/components/aboutUs";
import NewsLetter from "./components/newsLetter";
import Login from "./components/login/Login";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import AuthState from "./Context/authState" 
import Axios from "axios";

//save token in local storage, this will set the header authorization = localStorage.token
if(localStorage.token){
  Axios.defaults.headers.common["authorization"]= localStorage.token;
}

function App() {
  return (
    <AuthState>
    <div>
      <switch>
        <Route path="/" exact component={Home} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/login" component={Login} />
        <Redirect to='/'/>
      </switch>
    </div>
    </AuthState>
  );
}

export default App;
