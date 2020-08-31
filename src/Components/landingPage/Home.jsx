import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

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

  return (
    <React.Fragment>
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
