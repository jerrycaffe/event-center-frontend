import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import DatePicker from 'react-datepicker';

import Header from "../landingPage/Header";
import NewsLetter from "../landingPage/NewsLetter";
import Footer from "../landingPage/Footer";
import PageLoader from '../../pages/PageLoader';

const ViewSIngleCenter = props => {
  const [singleCenters, setCenter] = useState({});
 const [state, setState] = useState({
   fromTime: "00:00",
   toTime: "00:00",
   date: "2020-08-11",
   minDate: "2020-08-11"
 })
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const calling = async () => {
      try {
        const location = props.location.pathname;
        const url = `https://magnitude-event-manager.herokuapp.com/api${location}`;
        const results = await Axios.get(url);
        setCenter(results.data.center);
        setPageLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    calling();
  }, []);
  const handleDateTime = e => {
   
    setState({ ...state, [e.target.name]: e.target.value });
   
  };
  
  
  //  const [startDate, setStartDate] = useState(null);
  

  const isUnavailable = () => {
    
      return singleCenters.dates_unavailable.map(date=>{
     return date
      })
    
  
    // return day !== 0 && day !== 6;
  };
 if(pageLoading){
   return <PageLoader/>
 }

  
  return (
    <div className="container">
      <Header />
      <div className="content-wrap">
        <div className="center-wrapper">
          <div className="special-indicator pd-left-20 ">
            <Link to="/">Home</Link>
            <i className="indicator-divider"></i>
            <Link to="/all/centers">Venues</Link>
            <i className="indicator-divider"></i>
            <Link to="">{singleCenters.name}</Link>
          </div>
          <div className="single-center-container">
            <div className="center-one-card">
              <div className="center-image">
                <div className="booking">
                  <p className="sm-txt">BOOKING FEE</p>
                  <h3>N{singleCenters.price}</h3>
                </div>
                <img
                  className="center-img"
                  src={singleCenters.images}
                  alt="center search"
                />
              </div>
              <div className="center-info">
                <div className="center-address">
                  <div className="address-left">
                    <h3>
                      {singleCenters.name}, {singleCenters.location}{" "}
                    </h3>
                    <p>{singleCenters.description}</p>
                  </div>
                </div>
                <div className="capacity-rating">
                  <div className="rating-capacity">
                    <div className="m-display">
                      <i className="city-hall-icon"></i>
                      <p>
                        {singleCenters.capacity}
                        <br />
                        Capacity
                      </p>
                    </div>
                    <div className="ratings">
                      <div className="rating-right">
                        <p>1.0</p>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="title pd-top-10">Amenities</h4>
                <div className="facilities">{singleCenters.facilities}</div>
              </div>
            </div>
            <div className="book-center-container">
              <div className="book-center">
                <h4 className="title">Check a availability</h4>
                <form action="" className="booking-form">
                  <label htmlFor="date-time">Date & Time*</label>
                  <div className="lg-width">
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={state.date}
                      min={state.minDate}
                      // max="2021-12-31"
                      
                      onChange={handleDateTime}
                    />
                  </div>
                  <div className="md-width">
                  <input
                      type="time"
                      id="fromTime"
                      name="fromTime"
                      value={state.fromTime}
                      // min={fullDate}
                      // max="2021-12-31"
                      onChange={handleDateTime}
                    />
                
                <input
                      type="time"
                      id="toTime"
                      name="toTime"
                      value={state.toTime}
                      // min={fullDate}
                      // max="2021-12-31"
                      onChange={handleDateTime}
                    />
                
                  </div>
                  
                  <button type="submit">Book Now</button>
                </form>
              </div>
              <div className="map">
                {isUnavailable()}
                calling google map here
                </div>
            </div>
          </div>
        </div>
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
};
export default ViewSIngleCenter;
