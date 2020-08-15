import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SweetAlert from "react-bootstrap-sweetalert";

import Header from "../landingPage/Header";
import NewsLetter from "../landingPage/NewsLetter";
import Footer from "../landingPage/Footer";
import PageLoader from "../../pages/PageLoader";

const ViewSIngleCenter = props => {
  const [singleCenters, setCenter] = useState({});
  const [state, setState] = useState({
    fromTime: "00:00",
    toTime: "00:00"
  });
  const [getDate, setDate] = useState(new Date());
  const [pageLoading, setPageLoading] = useState(true);
  const [getUnavailable, setUnavailable] = useState([]);
  const [getModalState, setModalState] = useState(false);

  useEffect(() => {
    const calling = async () => {
      try {
        const location = props.location.pathname;
        const url = `https://magnitude-event-manager.herokuapp.com/api${location}`;
        const results = await Axios.get(url);
        setCenter(results.data.center);
        setUnavailable(results.data.center.dates_unavailable);
        setPageLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    calling();
  }, []);
  const handleDate = date => {
    setDate(date);
  };
  const handleTime = event => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    const isUserAuth = window.localStorage.getItem("isAuthenticated");
    if (isUserAuth) {
      console.log("show modal you are correct");
    } else setModal(!getModalState);
  };
  const setModal = () => {
    return setModalState(!getModalState);
  };
  const onConfirm = () => {
    return;
  };
  const onCancel = () => {
    return;
  };
  if (pageLoading) {
    return <PageLoader />;
  }

  return (
    <React.Fragment>
      <SweetAlert
        warning
        show={getModalState}
        title="Login before booking!"
        onConfirm={setModal}
        onCancel={setModal}
      >
        You have to Login before you can book an event
      </SweetAlert>
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
                  <form onSubmit={handleSubmit} className="booking-form">
                    <label htmlFor="date-time">Date &amp; Time*</label>
                    <div className="lg-width">
                      <DatePicker
                        selected={getDate}
                        minDate={getDate}
                        onChange={handleDate}
                        excludeDates={getUnavailable.map(
                          date => new Date(date)
                        )}
                      >
                        <div
                          style={{
                            color: "red",
                            textAlign: "center",
                            fontSize: "15px"
                          }}
                        >
                          Mark out date are not available
                        </div>
                      </DatePicker>
                    </div>
                    <div className="md-width">
                      <input
                        type="time"
                        id="fromTime"
                        name="fromTime"
                        value={state.fromTime}
                        // min={fullDate}
                        // max="2021-12-31"
                        onChange={handleTime}
                      />

                      <input
                        type="time"
                        id="toTime"
                        name="toTime"
                        value={state.toTime}
                        // min={fullDate}
                        // max="2021-12-31"
                        onChange={handleTime}
                      />
                    </div>

                    <button type="submit" className="book-btn">
                      Book Now
                    </button>
                  </form>
                </div>
                <div className="map">calling google map here</div>
              </div>
            </div>
          </div>
          <NewsLetter />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};
export default ViewSIngleCenter;
