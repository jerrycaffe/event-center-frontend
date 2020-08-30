import React, { useContext } from "react";
import {Redirect} from "react-router-dom";

import AuthContext from "../../Context/authContext";

import Header from "../landingPage/Header";
import Showcase from "./Showcase";
import AboutUs from "./About";
import hallImage from "../../images/hallimage.png";
import Services from "./Services";
import NewsLetter from "../landingPage/NewsLetter";
import Footer from "../landingPage/Footer";

const Home = props => {
  const userLoggedIn = useContext(AuthContext);

  const redirectToBook = () => {
    const isAuthenticated = window.localStorage.getItem("isAuthenticated")
    const activeBooking = window.localStorage.getItem("activeBooking");
    console.log(isAuthenticated, activeBooking);
    
    if (isAuthenticated && activeBooking) {
      return <Redirect to={activeBooking} />
     
      
    }
    return <Redirect to="/" />
  };
  // const activeBooking = window.localStorage.setItem("activeBooking", bookingHistory)

  return (

    <React.Fragment>
      {redirectToBook()}
      <div className="container">
        <Header />
        <div className="content-wrap">
          <Showcase />
          <div className="page-contents">
            <AboutUs />

            <div className="page-contents-img">
              <img src={hallImage} alt="magnititude hall" />
            </div>
          </div>
          <Services />
          <NewsLetter />
          <Footer />
        </div>
      </div>
      </React.Fragment>
  );
};
export default Home;
