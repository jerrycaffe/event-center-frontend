import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';

// Other Needed component
import Loading from "../../pages/PageLoader";
import CenterCard from "./../SearchResultPage/CenterCard";
import SelectFilterForm from "./../SearchResultPage/SearchFilter";
import Header from "../landingPage/Header";
import NewsLetter from "../landingPage/NewsLetter";

import Footer from "../landingPage/Footer";
import allCenterBg from "../../images/viewAllCenters.png";


function AllCenters() {
  const [allCenters, setCenter] = useState([])
  const [pageLoading, setPageLoading] = useState(true) 
 useEffect( ()=>{
  const calling = async ()=>{

    try {
 
      const  url = "https://magnitude-event-manager.herokuapp.com/api/center/view_all_centers"
      const results = await Axios.get(`${url}`)
     setCenter([...results.data.centers])
     setPageLoading(false)
      
    } catch (error) {
      console.log(error);
      
    }
  }
  calling()

 }, [])
 
 if(pageLoading){
   return <Loading/>
 }
  return (
    
    <div className="container">
      <Header />
      <div className="content-wrap">
        <div className="center-wrapper">
          <div className="page-indicator pd-left-20">
            <a className="home" href="/">
              Home
            </a>
            <i className="indicator-divider"></i>
            <a href="#" className="home">
              Venues
            </a>
          </div>
          
          <div className="all-center-bg">
            <img src={allCenterBg} />
          </div>
          <h3 className="pd-left-20">Our Top Venues</h3>
          <div className="cardWrapper">
         {console.log(allCenters[0], "here")
         }
          {allCenters.map(center => {
                    return (
                      <CenterCard
                        key={center.id}
                        centerImg={center.images}
                        name={center.name}
                        located={center.location}
                        capacity={center.capacity}
                        price={center.price}
                      />
                    );
                  })}
            
           
          </div>
          <NewsLetter />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AllCenters;
