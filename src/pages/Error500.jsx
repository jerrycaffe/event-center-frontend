import React from "react";
import erro500Img from "../images/500.jpg";

import Header from "../components/landingPage/Header";
import NewsLetter from "../components/landingPage/NewsLetter";
import Footer from "../components/landingPage/Footer";

const Error500 = () => {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <div className="content-wrap">
          <div className="network-error-body">
            <img src={erro500Img} alt="error 500" />
          </div>
          <NewsLetter />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Error500;
