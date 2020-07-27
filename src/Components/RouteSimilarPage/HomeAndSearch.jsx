import React from "react";
import {Route} from 'react-router-dom';
import Home from "../landingPage/Home";
import Header from '../landingPage/Header';
import Services from '../landingPage/Services'
import NewsLetter from '../landingPage/NewsLetter';
import Footer from '../landingPage/Footer';
import ResultPage from "../SearchResultPage/resultPage";
function HomeAndSearch() {
  return (
    <div className="container">
      <Header />
      <div className="content-wrap">
        <Route path="/" exact component={Home} />
        <Route path="/search" exact component={ResultPage}/>
       
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
}
export default HomeAndSearch;
