import React from "react";
import { BrowserRouter, Route, Redirect,Switch } from "react-router-dom";
import "../src/styles/styles.css";
import "./App.css";

import Home from "./components/landingPage/Home";
import ResultPage from "./components/SearchResultPage/resultPage"
import AboutUs from "./components/landingPage/About";
import NewsLetter from "./components/landingPage/NewsLetter";
import Login from "./components/login/Login";
import SignUp from "./components/SignUp";
import Footer from "./components/landingPage/Footer";
import AuthState from "./Context/authState" 
import Axios from "axios";
import Test from "./components/landingPage/Home";
import resultPage from "./components/SearchResultPage/resultPage";
import HomeAndSearch from "./components/RouteSimilarPage/HomeAndSearch";

//save token in local storage, this will set the header authorization = localStorage.token
if(localStorage.token){
  Axios.defaults.headers.common["authorization"]= localStorage.token;
}

function App() {
  return (
    <AuthState>
    <div>
      <Switch>
        {/* <Route path="/home" exact component={Test} /> */}
        <Route path="/sign-up" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={HomeAndSearch} />
        <Route path="/search" exact component={HomeAndSearch}/>
        {/* <Route path="/result" exact component={Home} /> */}
        
        <Redirect to='/'/>
      </Switch>
    </div>
    </AuthState>
  );
}

export default App;
