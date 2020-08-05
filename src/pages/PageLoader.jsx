import React from "react";
import LoaderImg from "../images/PageLoader.gif";
import Header from "../components/landingPage/Header";
import NewsLetter from "../components/landingPage/NewsLetter";
import Footer from "../components/landingPage/Footer";

export default function PageLoader() {
  return (
    <div className="container">
      <Header />
      <div className="content-wrap">
        <div className="page-loader">
          <img src={LoaderImg} alt="Please wait page loading" />
        </div>
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
}
