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

function App() {
  return (
    <div>
      <switch>
        <Route path="/" exact component={Home} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/login" component={Login} />
        <Redirect to='/'/>
      </switch>
    </div>
  );
}

export default App;
