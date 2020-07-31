import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "../src/styles/styles.css";
import "./App.css";

import CustomerResultPage from './components/SearchResultPage/resultPage'
import Home from "./components/landingPage/Home";
import ResultPage from "./components/SearchResultPage/resultPage";
import AboutUs from "./components/landingPage/About";
import NewsLetter from "./components/landingPage/NewsLetter";
import Login from "./components/login/Login";
import SignUp from "./components/SignUp";
import Footer from "./components/landingPage/Footer";
import AuthState from "./Context/authState";
import Axios from "axios";
import Test from "./components/landingPage/Home";
import resultPage from "./components/SearchResultPage/resultPage";

import AllCenters from "./components/allCenters/AllCenters";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";
import AdminSignUp from "./components/Admin/AdminSignUp/AdminSignUp";

//save token in local storage, this will set the header authorization = localStorage.token
if (localStorage.token) {
  Axios.defaults.headers.common["authorization"] = localStorage.token;
}

function App() {
  return (
    <AuthState>
      <div>
        <Switch>
          <Route path="/sign-up" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route
            path="/search/:date?/:location?/:guests?/:event?"
            component={CustomerResultPage}
          />
          <Route path="/admin_sign-in" component={AdminLogin}/>
          <Route path="/admin_sign-up" component={AdminSignUp}/>
          <Route path="/admin_dashboard" component={AdminDashboard}/>

          <Route path="/all/centers" component={AllCenters} />
          <Route path="/" exact component={Home} />
          
          <Redirect to="/" />
        </Switch>
      </div>
    </AuthState>
  );
}

export default App;
